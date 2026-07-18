import Navbar from "../components/Navbar";
import Searchbar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

export default function HomePage(){
    return (
        <main>
            <Navbar />
            <Searchbar />
            <MovieList />
            <Footer />
        </main>
    )
}