import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <header className="w-full h-16">
            <nav className="container w-full h-full flex items-center">
                <Link to="/" className="text-black/50 text-xl">
                    Shopi
                </Link>
            </nav>
        </header>
    )
}