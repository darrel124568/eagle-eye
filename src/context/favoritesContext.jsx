import { createContext, useState } from 'react'

export const favoritesContext = createContext()

export function FavoritesProvider({children}) {
    const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
    });
    return (
    <favoritesContext.Provider value={{favorites, setFavorites}}>
        {children}
    </favoritesContext.Provider>
    )
}
