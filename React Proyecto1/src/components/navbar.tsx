type MenuProps = {
    isSidebarOpen?: boolean;
}

function Navbar (props: MenuProps) {

    const {isSidebarOpen} = props;

    const commonClasses = "gap-6 text-white w-full justify-end items-center mr-8"
    const sidebarClasses = "flex flex-col"
    const headerClasses = "hidden md:flex "
    const classess = `${commonClasses} ${isSidebarOpen ? sidebarClasses : headerClasses}`

    return (
        <nav className = {classess}>
            <a className=" hover:text-black" href="">Home</a>
            <a className=" hover:text-black" href="">Libros</a>
            <a className=" hover:text-black" href="">Log in</a>
        </nav> 
    )
}

export default Navbar