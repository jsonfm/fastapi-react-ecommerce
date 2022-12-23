import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { productsService } from "@/services/products.service";

export const ProductDetail = () => {
    const { id } = useParams();

    const { loading, data: product } = useQuery({
        queryKey: ["products-detail"],
        queryFn: async () => await productsService.getProduct(id),
    });


    if(loading){
        return <p>Loading</p>
    }
    if(!product){
        return <p>Fail</p>
    }

    const { name, description } = product;
    return(
        <section>
           <div className="container md:py-12">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80"
                        className="w-full h-full object-cover"
                    />  
                </div>
                <div className="w-full md:w-1/2 py-6 md:px-6">
                    <p className="text-xl font-bold capitalize">{name}</p>
                    <p>
                        {description}
                    </p>
                    
                </div>
            </div>
           </div>
        </section>
    )
}