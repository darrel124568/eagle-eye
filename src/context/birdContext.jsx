import useBirds from '../hooks/useBirds'
import { createContext, useState } from 'react'

export const birdContext = createContext()

export function BirdProvider({children}) {
    const [endpoint, setEndpoint] = useState(null)
    const response = useBirds(endpoint)
    const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
    });
    return (
    <birdContext.Provider value={{...response, setEndpoint, favorites, setFavorites}}>
        {children}
    </birdContext.Provider>
    )
}
