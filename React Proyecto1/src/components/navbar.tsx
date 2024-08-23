function Navbar () {

    return (
        <nav className = "hidden md:flex gap-4 text-white w-full justify-end items-center mr-8">
            <a className=" hover:text-black" href="">Home</a>
            <a className=" hover:text-black" href="">Libros</a>
            <a className=" hover:text-black" href="">Log in</a>
        </nav> 
    )
}

export default Navbar