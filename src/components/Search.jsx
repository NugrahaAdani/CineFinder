
import { useEffect, useCallback, useState, useRef } from "react";
import { getSearchMovies } from "../services/tmdbApi";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { Search, X, Star, Heart } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useFavorites } from "../context/FavoriteContext.jsx";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export default function SearchBody(){
    const { toggleFavorite, isFavorite } = useFavorites();
    const [searchParams, setSearchParams] = useSearchParams();

    const [initialQuery] = useState(() => {
        return searchParams.get("q")?.trim() ?? "";
    });

    const [query, setQuery] = useState(initialQuery);
    const [movies, setMovies] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(Boolean(initialQuery));
    const [searchedQuery, setSearchedQuery] = useState(initialQuery)

    const inputRef = useRef(null);

    const performSearch = useCallback(async (searchQuery) => {
        try {
            setLoading(true);
            setError("");

            const result = await getSearchMovies(searchQuery);

            setMovies(result);
            setSearchedQuery(searchQuery);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    async function handleSearch(event){
        event.preventDefault()

        const trimmedQuery = query.trim()

        if(trimmedQuery === "") return;

        setSearchParams({
            q: trimmedQuery,
        });

        performSearch(trimmedQuery);
    }

    useEffect(() => {
        if (!initialQuery) return;

        let cancelled = false;

        async function restoreSearch() {
        try {
            const result = await getSearchMovies(initialQuery);

            if (!cancelled) {
            setMovies(result);
            }
        } catch (error) {
            if (!cancelled) {
            setError(error.message);
            }
        } finally {
            if (!cancelled) {
            setLoading(false);
            }
        }
        }

        restoreSearch();

        return () => {
        cancelled = true;
        };
    }, [initialQuery]);

    return(
        <main>
            <section className="min-h-screen w-full bg-black">
                <form
                    onSubmit={handleSearch}
                    onClick={() => inputRef.current?.focus()}
                    className="flex mx-auto mt-12 w-[calc(100%-8rem)] p-1 overflow-hidden rounded-xl  border border-[#3D0000]
                        bg-[#0F0E0E] shadow-lg justify-between items-center transition-all duration-300
                        focus-within:border-red-500 focus-within:shadow-xl focus-within:shadow-red-700/40 cursor-text">

                        <Search size={20} color="white" strokeWidth={2.5} className="ml-5 shrink-0 text-gray-400" />
                        
                        <input
                            ref={inputRef}
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            type="text"
                            placeholder="Search for movies..."
                            className="w-full cursor-text bg-transparent px-4 py-3 text-white outline-none"
                        />

                    {query !== "" && (
                        <button
                            type="button"
                            aria-label="Clear search"
                            className="mr-4 p-1.5 shrink-0 cursor-pointer text-gray-400 hover:text-white"
                            onClick={() => setQuery("")}
                        >
                            <X size={20} strokeWidth={2.5} />
                        </button>
                    )}
                </form>
                
                {searchedQuery && (
                    <div className="flex my-6 mx-18 justify-between">
                        <h2 className="text-white uppercase font-bold text-2xl px-2">
                            Showing result for 
                            <span className="text-[#FF0000]"> 
                                {" "}"{searchedQuery}"
                            </span> 
                        </h2>

                        {!loading && !error && (
                            <p className="text-white">
                                {movies.length} result found
                            </p>
                        )}
                    </div>
                    ) 
                }

                {loading && <Loading message="Mencari film..." />}

                {error && <ErrorMessage message={error} />}

                {!loading && !error && searchedQuery && movies.length === 0 && (
                <p className="mt-14 mx-12 text-center text-gray-400">
                    Film dengan kata kunci "{searchedQuery}" tidak ditemukan.
                </p>
                )}

                {!loading && !error && movies.length > 0 && (
                    <div className="mx-10 mt-6 grid grid-cols-1 gap-x-3 gap-y-4 justify-items-center sm:grid-cols-2 
                            md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {movies.map((movie) => {
                            const year = movie.release_date?.slice(0, 4) || "N/A";
                            const rating = Number(movie.vote_average || 0).toFixed(1);
                            const favorite = movie?.id ? isFavorite(movie.id) : false;

                            return(

                                <article
                                    key={movie.id}
                                    className="relative aspect-2/3 w-full max-w-58 overflow-hidden rounded-xl bg-zinc-900 shadow-lg transition-all duration-300 hover:scale-107"
                                    >
                                    <Link
                                        to={`/movie/${movie.id}`}
                                        aria-label={`Lihat detail ${movie.title}`}
                                        className="block h-full w-full"
                                    >

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
                                        aria-pressed={favorite}
                                        aria-label={
                                            favorite    
                                            ? `Hapus ${movie.title} dari favorite`
                                            : `Tambah ${movie.title} ke favorite`
                                        }
                                        onClick={() => toggleFavorite(movie)}
                                        className="group absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white shadow-lg backdrop-blur-md transition hover:scale-110 hover:text-red-400"
                                    >
                                        <Heart
                                            size={20}
                                            className={`transition-all group-hover:scale-110
                                                ${
                                                    favorite 
                                                        ? "fill-red-400 text-red-400" 
                                                        : "fill-transparent text-white group-hover:text-red-400"
                                                }
                                            `}
                                        />
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
                        }
                        )}
                    </div>
                )}

            </section>
        </main >
    )
}