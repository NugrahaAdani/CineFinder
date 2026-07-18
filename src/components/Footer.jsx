import logo from "../assets/logo.png"

export default function Footer(){
    return (
        <footer className=" relative flex border-[#3D0000] border-t max-w-full h-18 px-4 mt-4 items-center">
            <div className="flex items-center">
                <img 
                    src={logo}
                    alt="Logo"
                    loading="lazy"
                    decoding="async" 
                    width="120"
                    height="40"
                    className="m-2 p-1 w-10 object-cover" 
                />
                <p 
                    className="text-white text-xl font-bold">
                    Cine<span className="text-[#FF0000]">Finder</span>
                </p>
            </div>
            <p className="absolute left-1/2 -translate-x-1/2 text-sm text-white">
                &copy; 2024 CineFinder. All rights reserved. Data provide by TMDb.
            </p>
        </footer>
    )
}