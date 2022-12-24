import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";


export const Header = () => {
    return(
        <header className="w-full h-16">
            <nav className="container w-full h-full flex items-center justify-between">
                <Link to="/" className="text-black/50 text-xl">
                    Shopi
                </Link>
                <div className="text-2xl text-gray-400">
                    <FaShoppingCart/>
                </div>
            </nav>
        </header>
    )
}