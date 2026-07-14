export default function Footer(){
    return (
        <>
            <footer className=" relative flex border-gray-50 border-t max-w-full h-13 px-4 items-center">
                <div className="flex items-center">
                    <img 
                        src="/logo.png" 
                        alt="Logo" 
                        className="m-2 p-1 w-10 object-cover" 
                    />
                    <p 
                        className="text-white text-xl font-bold">
                        Cine<span className="text-[#FF0000]">Finder</span>
                    </p>
                </div>
                <p className="absolute left-1/2 -translate-x-1/2 text-sm text-white">
                    &copy; 2024 CineFinder. All rights reserved. Data provide by OMDb.
                </p>
            </footer>
        </>
    )
}