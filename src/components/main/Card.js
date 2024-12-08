import { useContext, useEffect } from "react";
import CardItem from "./CardItem";
import DataContext from "../../contexts/DataContext";

const Card = () => {
    const { booked, setBooked } = useContext(DataContext);
    useEffect(() => {
        fetch('http://localhost:8000/books').then(res => res.json()).then(data => setBooked(data))
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                {booked.map(item => <CardItem key={item.id} item={item} />)}
                {booked.length === 0 && <span>no books</span>}
            </div>
        </div>
    );
}
export default Card;