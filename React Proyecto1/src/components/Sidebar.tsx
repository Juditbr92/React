

function Sidebar () {
    return (
        <div className="bg-custom-bg w-auto h-auto flex flex-col md:hidden justify-start p-6 gap-3 text-white text-sm rounded">
            <a className=" hover:text-black" href="">Home</a>
            <a className=" hover:text-black" href="">Libros</a>
            <a className=" hover:text-black" href="">Log in</a>
        </div>
    )
}

export default Sidebar