import { useContext } from "react";
import DataContext from "../../contexts/DataContext";

const SearchBar = () => {
    const { input, change, changeBg } = useContext(DataContext);
    return (
        <form className="d-flex" role="search">
            <input onChange={change} className="form-control me-2" placeholder="Search" aria-label="Search" />
            <button onClick={changeBg} className="btn-search" type="submit">Search</button>
            <p>{input}</p>
        </form>
    );
}
export default SearchBar;