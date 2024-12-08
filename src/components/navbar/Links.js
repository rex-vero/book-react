import NavLinks from "./NavLinks";

const Links = () => {
    const links = [
        {
            id: 1,
            link: 'Books',
            href: '/'
        }, {
            id: 2,
            link: 'Add Book',
            href: '/add'
        }
    ]
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map(item => <NavLinks key={item.id} item={item} />)}
        </ul>
    );
}
export default Links;