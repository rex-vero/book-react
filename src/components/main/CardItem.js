import { useContext, useState } from "react";
import DataContext from "../../contexts/DataContext";
import { toast } from "react-toastify";

const CardItem = ({ item }) => {
    const [bookInput, setBookInput] = useState('');
    const { booked, setBooked } = useContext(DataContext);
    const handleInput = (e) => {
        setBookInput(e.target.value);
    };
    const handleShow = (e, item) => {
        e.preventDefault();
        const temp = [...booked];
        const index = temp.findIndex(book => book.id === item.id);

        if (temp[index].borrowers.length === 0) {
            toast.info(`no one has borrowed ${item.bookName} book`);
        } else {
            toast.info(`${temp[index].borrowers.join(', ')}`);
        }
    }
    const handleBook = (e, item, bookInput) => {
        e.preventDefault();
        const temp = [...booked]
        const index = temp.findIndex(book => book.id === item.id);
        if (item.available > 0 && bookInput.trim()) {
            if (!temp[index].borrowers.includes(bookInput)) {
                temp[index].available--;
                temp[index].borrowed++;
                temp[index].borrowers.push(bookInput);
                setBooked(temp);
            } else {
                toast.error(`${bookInput} can not borrow more`)

            }
        } else if (!bookInput.trim()) {
            toast.error('input is epmty >:(');
        } else {
            toast.error(`no more books of ${temp[index].bookName}`);
        }
    }
    const handledel = (e, item, bookInput) => {
        e.preventDefault();
        const temp = [...booked]
        const index = temp.findIndex(book => book.id === item.id);
        if (item.available < item.count && bookInput.trim()) {
            const rem = temp[index].borrowers.includes(bookInput.trim());
            if (rem) {
                temp[index].available++;
                temp[index].borrowed--;
                const remove = temp[index].borrowers.filter(item => item !== bookInput.trim());
                temp[index].borrowers = remove;
                setBooked(temp);
            } else {
                toast.dark(`${bookInput.trim()} is not difined as borrower`);
            }
        } else if (!bookInput.trim()) {
            toast.error('input is epmty >:(');
        } else {
            toast.error('no more books to send');
        }
    }
    const handleRemove = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8000/books/${item.id}`, { method: 'DELETE' }).then(res => {
            if (res.ok) {
                const newList = booked.filter(book => book.id !== item.id);
                setBooked(newList);
            }
        })
    }
    return (
        <div key={item.id} className="col-lg-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{item.bookName}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">count: {item.count}</p>
                    <p className="card-text">available: {item.available}</p>
                    <p className="card-text">borrowed: {item.borrowed}</p>
                    <p className="card-text">borrowes: {item.borrowers.join(', ')}</p>
                    <form className="d-flex align-items-center flex-column">
                        <input type="text" onChange={(e) => { handleInput(e) }} value={bookInput} />
                        <button className="btn my-1 btn-outline-success" onClick={(e) => { handleBook(e, item, bookInput); setBookInput('') }}>borrow</button>
                        <button className="btn my-1 btn-outline-info" onClick={(e) => { handleShow(e, item) }}>show</button>
                        <button className="btn my-1 btn-outline-warning" onClick={(e) => { handledel(e, item, bookInput); setBookInput('') }}>return</button>
                        <button className="btn my-1 btn-outline-danger" onClick={handleRemove}>delete book</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CardItem;