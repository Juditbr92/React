import {NavLink} from 'react-router-dom'

type MenuProps = {
    isSidebarOpen?: boolean;
}

function Navbar (props: MenuProps) {

    const {isSidebarOpen} = props;

    const commonClasses = "gap-6 text-white w-full justify-end items-center mr-8"
    const sidebarClasses = "flex flex-col"
    const headerClasses = "hidden md:flex "
    const classes = `${commonClasses} ${isSidebarOpen ? sidebarClasses : headerClasses}`

    // const user = {
    //     name: 'Judit'
    // };

    const user = null;

    return (
        <nav className = {classes}>
            <NavLink className=" hover:text-black" to="/">Home</NavLink>
            {user && <NavLink className=" hover:text-black" to="/books">My books</NavLink>}
            {!user && <NavLink className=" hover:text-black" to="/register">Register</NavLink>}
            {!user && <NavLink className=" hover:text-black" to="/login">Log in</NavLink>}
            {user && <NavLink className=" hover:text-black" to="/profile">Profile</NavLink>}
            {user && <NavLink className=" hover:text-black" to="/addBook">Add book</NavLink>}
            {user && <NavLink className=" hover:text-black" to="/editBook">Edit book</NavLink>}
        </nav> 
    )
}

export default Navbar