type MenuProps = {
    isSidebarOpen?: boolean;
}

function Navbar (props: MenuProps) {

    const {isSidebarOpen} = props;

    const commonClasses = "gap-6 text-white w-full justify-end items-center mr-8"
    const sidebarClasses = "flex flex-col"
    const headerClasses = "hidden md:flex "
    const classes = `${commonClasses} ${isSidebarOpen ? sidebarClasses : headerClasses}`

    const user = null;

    return (
        <nav className = {classes}>
            <a className=" hover:text-black" href="">Home</a>
            {user && <a className=" hover:text-black" href="">My books</a>}
            {!user && <a className=" hover:text-black" href="">Register</a>}
            {!user && <a className=" hover:text-black" href="">Log in</a>}
            {user && <a className=" hover:text-black" href="">Profile</a>}
            {user && <a className=" hover:text-black" href="">Add book</a>}
        </nav> 
    )
}

export default Navbar