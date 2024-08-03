import Logo from "./Logo"
import Navbar from "./navbar"

function Header () {

    return (
        <header className="flex justify-between flex-nowrap bg-custom-bg text-white w-full h-23">
            <Logo/>
            <Navbar></Navbar>
        </header>
    )
}


export default Header