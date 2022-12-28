import { Link } from "react-router-dom";


export const ProductCard = ({_id, name, description}) => {
    return(
        <Link to={`/product/${_id}`}>
        <article className="w-80 h-72 shadow-xl rounded-xl">
            <div className="w-full h-[60%] overflow-hidden rounded-t-xl">
                <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="px-4 py-2">
                <p className="font-bold capitalize">{name}</p>
                <p>
                    {description}
                </p>
            </div>
        </article>
        </Link>
    )
}