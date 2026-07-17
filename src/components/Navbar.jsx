import logo from "../assets/logo.png"
import { useEffect, useState } from "react"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return (
        <>
            <div
                className={`sticky top-0 z-50 flex items-center justify-between px-4 transition-all duration-300 ${
                    isScrolled
                        ? "top-2 bg-black/40 py-1 mx-8 shadow-lg shadow-black/50 backdrop-blur-sm rounded-full "
                        : "bg-black py-0.5"
                    }`}
                    >

                <div className="flex items-center ">
                    <img 
                        src={logo}
                        alt="Logo" 
                        className="m-2 p-1 w-10 object-cover" 
                    />
                    <p 
                        className="text-white text-xl font-bold">
                        Cine<span className="text-[#FF0000]">Finder</span>
                    </p>
                </div>
                
                <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-6">
                    <p className="text-white">Home</p>
                    <p className="text-white">Favorites</p>
                </div>
                
                <div className="mr-2">
                    <p className="text-white">Icon</p>
                </div>

            </div>
        </>
    )
}