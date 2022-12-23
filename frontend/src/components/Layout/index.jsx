import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


export const Layout = ({ children }) => {
    return(
        <>
        <Header/>
        <main className="overflow-hidden">
            {children}
        </main>
        {/* <Footer/> */}
        </>
    )
}