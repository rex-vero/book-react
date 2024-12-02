import { useContext } from "react";
import CardItem from "./CardItem";
import DataContext from "../../contexts/DataContext";

const Card = () => {
    const { booked } = useContext(DataContext);
    return (
        <div className="container-fluid">
            <div className="row">
                {booked.map(item => <CardItem key={item.id} item={item} />)}
            </div>
        </div>
    );
}
export default Card;