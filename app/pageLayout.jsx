import Navbar from "./components/navbar/navbar"
import BackgroundElements from "./components/background/backgroundElements"
import Footer from "./components/footer/footer"

export default function PageLayout({children}) {

    return (
    <>  
        {/* Render Background */}
        <BackgroundElements/>

        <Navbar />
        {children}
        <Footer/>
    </>

    )

}   
