import useBirds from '../hooks/useBirds'
import { createContext, useState } from 'react'

export const featuredBirdContext = createContext()

export function FeaturedBirdProvider({children}) {
    const [endpoint, setFeaturedEndpoint] = useState(null)
    const response = useBirds(endpoint)
    return (
    <featuredBirdContext.Provider value={{...response, setFeaturedEndpoint}}>
        {children}
    </featuredBirdContext.Provider>
    )
}
