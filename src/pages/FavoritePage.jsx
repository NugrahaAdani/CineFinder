import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Favorite from "../components/Favorite";

export default function HomePage(){
    return (
        <main>
            <Navbar />
            <Favorite />
            <Footer />
        </main>
    )
}