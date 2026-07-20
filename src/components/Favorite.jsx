import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoriteContext.jsx";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export default function Favorite() {
    const { favorites, toggleFavorite } = useFavorites();

    return (
        <section className="min-h-screen bg-black px-12 py-10 text-white">
            <h1 className="text-4xl font-bold">My Favorite Movies</h1>

            <hr className="my-6" />

            {favorites.length === 0 ? (
                <p className="text-zinc-400">
                Belum ada film favorit.
                </p>
                ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {favorites.map((movie) => (
                        <article
                        key={movie.id}
                        className="relative aspect-2/3 overflow-hidden rounded-xl bg-zinc-900"
                        >
                        <Link to={`/movie/${movie.id}`}>
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

                            <h2 className="p-3 font-bold">
                            {movie.title}
                            </h2>
                        </Link>

                        <button
                            type="button"
                            aria-label={`Hapus ${movie.title} dari favorit`}
                            onClick={() => toggleFavorite(movie)}
                            className="absolute right-3 top-3 rounded-full bg-black/60 p-2"
                        >
                            <Heart className="fill-red-400 text-red-400" />
                        </button>
                        </article>
                    ))}
                    </div>
                )}
        </section>
    );
}