import { useContext } from "react";
import DataContext from "../../contexts/DataContext";

const AddCard = () => {
    const { setBooked } = useContext(DataContext);
    const handleAdd = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const newItem = {
            id: crypto.randomUUID(),
            bookName: data.get('bookName'),
            count: data.get('count'),
            description: data.get('description'),
            borrowers: [],
            available: data.get('count'),
            borrowed: 0
        }
        fetch('http://localhost:8000/books', { method: 'POST', body: JSON.stringify(newItem) }).then(res => {
            if (res.ok) {
                setBooked(prv => [...prv, newItem]);
            }
        })
    }
    return (
        <form className="col-6" onSubmit={handleAdd}>
            <div className="mb-3">
                <label htmlFor="bookName" className="form-label">book name:</label>
                <input type="text" className="form-control" id="bookName" name="bookName" />
            </div>
            <div className="mb-3">
                <label htmlFor="count" className="form-label">count:</label>
                <input type="number" className="form-control" id="count" name="count" />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="description">description:</label>
                <input type="text" className="form-control" id="description" name="description" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default AddCard;