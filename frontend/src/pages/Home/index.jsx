import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useQuery } from "@tanstack/react-query";
import { productsService } from "@/services/products.service";
import { ProductCard } from '@/components/Products/ProductCard';


export const Home = () => {
    const { loading, data: products } = useQuery({
        queryKey: ["products-home"],
        queryFn: productsService.getProducts,
    });

    return (
        <>
        {/* <section className="container">
            <Splide aria-label="My Favorite Images" className="h-[40vh] md:h-[60vh]">
                <SplideSlide
                    className="h-[40vh] md:h-[60vh] w-full border"
                >
                    <img  
                        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80" 
                        alt="Image 1"
                        className="h-full w-full object-cover"
                    />
                </SplideSlide>
                <SplideSlide
                    className="h-[40vh] md:h-[60vh] border"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                        alt="Image 2"
                        className="h-full w-full object-cover"
                    />
                </SplideSlide>
            </Splide>
        </section> */}
        <section className="container">
            <div className="flex flex-wrap gap-5 justify-center py-12">
            {products?.map(product =>(
                <ProductCard {...product} key={product.id}/>
            ))}
            </div>
        </section>
        {/* <section className="bg-black/90 min-h-[50vh]">
            <div className="container"></div>
        </section>
        <section className="min-h-[50vh]">
            <div className="container"></div>
        </section> */}
        </>
    )
}