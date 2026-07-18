import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import city from "../assets/city.png"

export default function Searchbar(){
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleSearch(event) {
        event.preventDefault();

        const trimmedQuery = query.trim();

        if (trimmedQuery === "") return;

        navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    }

    return (
        <section className="relative h-125 overflow-hidden">
        
            <img 
                src={city}
                alt="bgcity" 
                className="h-full w-full object-cover opacity-85"
            />

            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/80 to-black">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="w-full max-w-4xl">
                        <h1 className="text-5xl font-bold text-white">
                            Discover Your Next Favorite Movie
                        </h1>

                        <p className="mx-auto mt-3 max-w-2xl text-lg text-[#FF0000]">
                            Dive into a universe of cinematic masterpieces. Explore genres, find hidden gems, and track what you love.
                        </p>

                        <form
                            onClick={handleSearch}
                            className="
                                flex mx-auto mt-8 max-w-2xl overflow-hidden rounded-full
                                border border-[#3D0000] bg-black/70 shadow-lg justify-between
                                items-center transition-all duration-300 focus-within:border-red-500
                                focus-within:shadow-xl focus-within:shadow-red-700/40">
                            <Search 
                                size={22} 
                                color="white" 
                                strokeWidth={2.5} 
                                className="ml-5 shrink-0 text-gray-400" />
                            <input 
                            type="text"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Search for movies..."
                            className="w-full bg-transparent px-4 py-3 text-white outline-none"
                            />
                            <button
                                type="submit"
                                className="
                                bg-[#FF0000] text-base m-0.5 px-4.5 py-2 
                                font-semibold text-white rounded-full hover:bg-[#950101]"
                            >
                                SEARCH
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}