import DetailMovie from "../components/DetailMovie";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TrendingMovies from "../components/TrendingMoviesScroll";

export default function MovieDetailPage(){
    return(
        <main>
            <Navbar />
            <DetailMovie/>
            <TrendingMovies />
            <Footer />
        </main>
    )
}