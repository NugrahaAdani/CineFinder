import { createContext, useContext } from "react";

export const FavoriteContext = createContext(null);

export function useFavorites(){
    const context = useContext(FavoriteContext);

    if(!context){
        throw new Error("useFavorites harus digunakan di dalam FavoriteProvider")
    }

    return context;
}