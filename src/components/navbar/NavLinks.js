import { Link } from "react-router-dom";

const NavLinks = ({ item }) => {
    return (
        <li className="nav-item">
            <Link className="nav-lin" to={item.href}>{item.link}</Link>
        </li>
    );
}
export default NavLinks;