import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

const NavBar = () => {

    const { items } = useSelector(state => state.cart);

    return (
        <nav className="sticky top-0 left-0 z-50 flex items-center justify-between w-full h-20 px-6 bg-white border sm:px-10">
            <h1 className="flex items-center divide-x">
                <span className="pr-1 text-2xl font-bold tracking-tighter text-green-900">Toyosi</span>
                <span className="flex flex-col items-center pl-1 text-sm font-medium text-green-600">
                    <span>Agric</span>
                    <span>Booster</span>
                </span>
            </h1>
            <div className="flex items-center space-x-3 font-sans text-sm font-semibold ">
                <Link to="/">Home</Link>
                <Link to="/">About Us</Link>
                <button className="relative">
                    <BsCartFill className="w-10 h-10 text-green-500" />
                    <span className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-sm font-semibold text-white">
                        <span>{items.length}</span>
                    </span>
                </button>
            </div>
        </nav>
    )
}

export default NavBar;