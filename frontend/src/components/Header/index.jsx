import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { authService } from "@/services/auth.service";

export const Header = () => {

    return(
        <header className="w-full h-16">
            <nav className="container w-full h-full flex items-center justify-between">
                <Link to="/" className="text-black/50 text-xl">
                    <b className="text-yellow-500">Shop</b><b>y</b>
                </Link>

                <div className="flex items-center gap-4">
                    <div className="text-2xl text-gray-400">
                        <FaShoppingCart/>
                    </div>
                    <Link
                        to="/login"
                        className="btn bg-yellow-500 text-white rounded-lg w-32"
                    >
                        Login
                    </Link>
                </div>
            </nav>
        </header>
    )
}