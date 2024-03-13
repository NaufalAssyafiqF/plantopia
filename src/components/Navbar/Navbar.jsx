import { CiSearch } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    return (
        <div className="absolute px-10 w-full pt-5 pb-2 flex justify-between items-center text-white z-30" id="navbar">
            <div className="flex items-center gap-x-3">
                <img src="/logo-plant.png" alt="" className="w-10" />
                <h1 className="text-xl font-medium">Plantopia</h1>
            </div>
            <div className="">
                <ul className="flex item-center gap-x-5 justify-center font-medium">
                    <li className="px-2 py-1 border-b-2 border-white border-opacity-0 hover:border-opacity-100 cursor-pointer transition-all duration-300 ">Home</li>
                    <li className="px-2 py-1 border-b-2 border-white border-opacity-0 hover:border-opacity-100 cursor-pointer transition-all duration-300 ">Plant type</li>
                    <li className="px-2 py-1 border-b-2 border-white border-opacity-0 hover:border-opacity-100 cursor-pointer transition-all duration-300 ">More</li>
                    <li className="px-2 py-1 border-b-2 border-white border-opacity-0 hover:border-opacity-100 cursor-pointer transition-all duration-300 ">Contact</li>
                </ul>
            </div>
            
            <div className="flex gap-x-5 ">
                <CiSearch className="text-xl" />
                <LuShoppingBag className="text-xl" />
                <GiHamburgerMenu className="text-xl" />
            </div>
        </div>
    )
}

export default Navbar