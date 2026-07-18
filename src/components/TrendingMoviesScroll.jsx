import { useState,useEffect } from "react";
import { Star, Heart } from 'lucide-react';
import { getTrendingMovies } from "../services/tmdbApi"
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { Link } from "react-router-dom";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export default function TrendingMovies(){
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [favoriteIds, setFavoriteIds] = useState([])

    useEffect(() => {
        async function loadMovies() {
            try {
                const result = await getTrendingMovies();
                setMovies(result);
            } catch(error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        loadMovies();
    }, []);

    if (loading) {
        return <Loading message="Memuat film..." />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    function toggleFavorite(movieId) {
        setFavoriteIds((currentIds) => {
            if (currentIds.includes(movieId)) {
            return currentIds.filter((id) => id !== movieId);
            }

            return [...currentIds, movieId];
        });
    }

    return (
        <section className="min-h-screen w-full bg-black py-6">

            <h2 className="mx-10 text-xl font-bold text-white">
                <span className="text-2xl font-bold text-[#950101]">| </span>
                Trending Movies
            </h2>

            <div
            className="mx-10 mt-6 flex gap-4
                overflow-x-auto overscroll-x-contain
                scroll-smooth snap-x snap-mandatory
                py-6
                scrollbar:none
                [&::-webkit-scrollbar]:hidden
            "
            >
                    {movies.map((movie) => {
                    const year = movie.release_date?.slice(0, 4) || "N/A";
                    const rating = Number(movie.vote_average || 0).toFixed(1);
                    const isFavorite = favoriteIds.includes(movie.id);

                    return (
                        <article
                            key={movie.id}
                            className="
                                relative aspect-2/3
                                w-52 shrink-0 snap-start
                                overflow-hidden rounded-xl
                                bg-zinc-900 shadow-lg
                                transition-all duration-300 ease-in-out
                                sm:w-56
                                hover:scale-105
                                hover:z-10"
                        >
                            <Link
                                to={`/movie/${movie.id}`}
                                aria-label={`Lihat detail ${movie.title}`}
                                className="block h-full w-full">
                                    
                                {movie.poster_path ? (
                                    <img
                                    src={`${IMAGE_URL}${movie.poster_path}`}
                                    alt={`Poster ${movie.title}`}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center text-zinc-400">
                                    Poster tidak tersedia
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/10 to-transparent" />
                            </Link>
                            
                            <button
                                type="button"
                                aria-label={
                                    isFavorite
                                        ? `Hapus ${movie.title} dari favorit`
                                        : `Tambahkan ${movie.title} ke favorit`}
                                aria-pressed={isFavorite}
                                onClick={() => toggleFavorite(movie.id)}
                                className="
                                    group absolute right-4 top-4 z-10 flex size-10 
                                    items-center justify-center rounded-full border
                                    border-white/20 bg-black/40 text-white shadow-lg 
                                    backdrop-blur-md transition hover:scale-110"
                            >
                                <Heart
                                size={20}
                                className={`transition-all group-hover:scale-110
                                    ${
                                        isFavorite 
                                            ? "fill-red-400" 
                                            : "fill-transparent text-white group-hover:text-red-400"
                                    }
                                `}/>
                            </button>

                            <h3 className="absolute bottom-12 left-4 right-4 z-10 line-clamp-2 text-left text-lg font-bold leading-tight text-white">
                                {movie.title}
                            </h3>

                            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 text-sm font-medium text-white/90">
                                <span>{year}</span>

                                <span className="text-white/50">•</span>

                                <span className="flex items-center gap-1">
                                <Star
                                    size={14}
                                    className="fill-yellow-400 text-yellow-400"
                                />
                                {rating}
                                </span>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}