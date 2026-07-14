import { Search } from "lucide-react";

export default function Searchbar(){
    return (
        <>
            <div className="relative h-125 overflow-hidden">
            
                <img 
                    src="/city.png" 
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

                            <div className="flex mx-auto mt-8 max-w-2xl overflow-hidden rounded-full  border border-[#3D0000] bg-black/70 shadow-lg justify-between items-center transition-all duration-300 focus-within:border-red-500 focus-within:shadow-xl focus-within:shadow-red-700/40">
                                <Search size={22} color="white" strokeWidth={2.5} className="ml-5 shrink-0 text-gray-400" />
                                <input 
                                type="text"
                                placeholder="Search for movie, actors, or genres..."
                                className="w-full px-4 py-3 text-white outline-none"
                                />
                                <button
                                    type="button"
                                    className="bg-[#FF0000] text-base m-0.5 px-4.5 py-2 font-semibold text-white rounded-full hover:bg-[#950101]"
                                >
                                    SEARCH
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}