import Navbar from "./components/navbar/navbar"
import BackgroundElements from "./components/background/backgroundElements"

export default function PageLayout({children}) {
    return (
    <>  
        {/* Render Background */}
        <BackgroundElements/>

        <Navbar />
        {children}
    </>

    )

}   
