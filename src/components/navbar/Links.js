import NavLinks from "./NavLinks";

const Links = () => {
    const links = [
        {
            id:1,
            link: 'Home'
        }, {
            id:2,
            link: 'Link'
        }, {
            id:3,
            link: 'About Us'
        }, {
            id:4,
            link: 'Cart'
        }
    ]
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map(item => <NavLinks key={item.id} mamad={item} />)}
        </ul>
    );
}
export default Links;