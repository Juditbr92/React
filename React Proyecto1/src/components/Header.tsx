import { useState } from "react";
import Logo from "./Logo"
import Navbar from "./navbar"
import Sidebar from "./Sidebar"
import { RxHamburgerMenu } from "react-icons/rx";

function Header () {

    const [isSidebarOpen, setSidebar] = useState(false)  

    const viewSidebar = () => {
        console.log("You have clicked here")
        setSidebar(!isSidebarOpen)
    }

    return (
        <div className="flex flex-nowrap bg-custom-bg justify-between">
            <Logo/>           
            <Navbar></Navbar>  
            <div className="flex justify-end">
                <button className='flex md:hidden p-4 text-2xl text-white self-center' onClick={viewSidebar}><RxHamburgerMenu/> </button>
                {isSidebarOpen && <Sidebar/>}
            </div>
        </div>
        
    )
}


export default Header