import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { getMovieDetail } from "../services/tmdbApi";
import { Star, Heart } from "lucide-react";
import { useFavorites } from "../context/FavoriteContext.jsx";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const BACKDROP_URL = "https://image.tmdb.org/t/p/w1280"

export default function DetailMovie(){
    const { toggleFavorite, isFavorite } = useFavorites();
    const { id } = useParams();

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const year = movie.release_date?.slice(0, 4) || "N/A";
    const rating = Number(movie.vote_average || 0).toFixed(1);
    const favorite = movie?.id ? isFavorite(movie.id) : false;
    
    function formatRuntime(runtime) {
        if (!runtime) return "Durasi tidak tersedia";

        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;

        return `${hours} jam ${minutes} menit`;
    }

    useEffect(() => {
        let cancelled = false;

        async function loadMovieDetail(){
            try {
                setLoading(true);
                setError("");

                const result = await getMovieDetail(id);

                if(!cancelled){
                    setMovie(result);
                }
            } catch (error) {
                if(!cancelled){
                    setError(error.message);
                }
            } finally {
                if(!cancelled){
                    setLoading(false);
                }
            }
        }

        loadMovieDetail();

        return () => {
            cancelled = true;
        };
    }, [id]);

    return(
        <section className="min-h-screen overflow-hidden bg-black">
            {loading && <Loading message="Memuat detail film..." />}

            {error && <ErrorMessage message={error} />}

            {!loading && !error && movie && (
                <div className="relative min-h-screen overflow-hidden bg-black text-white">
                    <div className="relative h-105 w-full overflow-hidden">
                        {(movie.backdrop_path || movie.poster_path) && (
                        <img
                            src={
                            movie.backdrop_path
                                ? `${BACKDROP_URL}${movie.backdrop_path}`
                                : `${IMAGE_URL}${movie.poster_path}`
                            }
                            alt={`Latar ${movie.title}`}
                            className="h-full w-full object-cover object-center opacity-80"
                        />
                        )}

                        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black" />
                        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/30" />
                    </div>

                    <div className="
                        relative z-10 mx-auto -mt-90
                        flex max-w-5xl flex-col items-center gap-8
                        px-6 pb-16
                        sm:flex-row sm:items-start">
                            
                        {movie.poster_path && (
                            <img 
                            src={`${IMAGE_URL}${movie.poster_path}`} 
                            alt={`Poster ${movie.poster_path}`} 
                            className="
                                w-48 shrink-0 rounded-xl object-cover
                                shadow-md shadow-red-500 ring-1
                                ring-white/20 sm:w-64"
                            />
                        )}

                        <div className="flex flex-col mt-12 text-center sm:text-left">
                            <h1 className="text-3xl font-bold sm:text-5xl">
                                {movie.title}
                            </h1>

                            <div className="flex items-center gap-2 mt-2">
                                <h2 className="text-sm font-semibold ml-1">
                                    {year}
                                </h2>

                                <span className="text-white/50">•</span>

                                <h2 className="text-sm font-semibold">
                                    {formatRuntime(movie.runtime)}
                                </h2>

                                <span className="text-white/50">•</span>

                                <div className="flex flex-wrap gap-1.5">
                                    {movie.genres?.map((genre) => (
                                        <span
                                        key={genre.id}
                                        className="
                                            inline-flex items-center gap-1
                                            rounded-lg border border-white/15
                                            bg-linear-to-r from-zinc-800/90 to-zinc-900/90
                                            px-3.5 py-1 mt-2
                                            text-xs font-medium tracking-wide text-zinc-200
                                            shadow-[0_0_12px_rgba(255,255,255,0.05)]
                                            backdrop-blur-md
                                        "
                                        >
                                        {genre.name}
                                        </span>
                                    ))}
                                </div>

                            </div>
                            
                            <div className="flex gap-2">
                                <div className="flex text-white text-sm font-semibold rounded-lg p-2 w-fit mt-1 ml-1 items-center bg-[#3D0000]/65">
                                    <Star size={18} className="mr-1 text-[#FF0000]"/>
                                    <span className="font-bold">{rating}</span>
                                </div>

                                <button 
                                    type="button"
                                    aria-pressed={favorite}
                                    aria-label={
                                        favorite    
                                        ? `Hapus ${movie.title} dari favorite`
                                        : `Tambah ${movie.title} ke favorite`
                                    }
                                    onClick={() => toggleFavorite(movie)}
                                    className="
                                    group flex text-white bg-black/60 text-sm font-semibold 
                                    rounded-lg px-4 py-1 mt-1 w-fit items-center transition-all 
                                    hover:scale-105 cursor-pointer">
                                    
                                    <Heart
                                        size={18} 
                                        className={`transition-all group-hover:scale-110
                                            ${
                                                favorite 
                                                    ? "fill-red-400 text-red-400" 
                                                    : "fill-transparent text-white group-hover:text-red-400"
                                            }
                                        `}/>
                                    <span className="ml-1 text-xs font-bold">
                                        {favorite ? "Remove from favorite" : "Add to favorite"}
                                    </span>
                                </button>

                            </div>

                                <div className="flex flex-col shadow-sm shadow-red-300 py-3 px-2 mt-2 bg-black/50 rounded-xl h-fit min-w-3xl ">
                                    <h2 className="py-2 ml-3 font-bold text-3xl">
                                        Synopsis
                                    </h2>
                                    <p className="ml-3 mr-1 my-2">
                                        {movie.overview}
                                    </p>
                                </div>

                        </div>
                    </div>

                </div>
            )}        
        </section>
    )
}            
            
