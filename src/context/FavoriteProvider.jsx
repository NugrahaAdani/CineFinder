import {  useEffect, useState } from "react";
import { FavoriteContext } from "./FavoriteContext.jsx";

const STORAGE_KEY = "FavoriteMovies";

export function FavoriteProvider({ children }){
    const [favorites, setFavorites] = useState(() => {
        try {
            const savedFavorites = localStorage.getItem(STORAGE_KEY);

            if (!savedFavorites) {
            return [];
            }

            const parsedFavorites = JSON.parse(savedFavorites);

            return Array.isArray(parsedFavorites)
                ? parsedFavorites
                : [];
        } catch {
            return []
        }
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    }, [favorites]);

    function toggleFavorite(movie){
        setFavorites((currentFavorites) => {
            const alreadyFavorite = currentFavorites.some(
                (favorite) => favorite.id === movie.id
            );

            if(alreadyFavorite){
                return currentFavorites.filter(
                    (favorite) => favorite.id !== movie.id
                );
            }

            return [...currentFavorites, movie];
        });
    }

    function isFavorite(movieId){
        return favorites.some((movie) => movie.id === movieId)
    }

    return (
        <FavoriteContext.Provider
            value={{ favorites, toggleFavorite, isFavorite }}
        >
            {children}
        </FavoriteContext.Provider>
    );
}