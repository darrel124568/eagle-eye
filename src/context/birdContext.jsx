import useBirds from '../hooks/useBirds'
import { createContext, useState } from 'react'

export const birdContext = createContext()

export function BirdProvider({children}) {
    const [endpoint, setEndpoint] = useState(null)
    const response = useBirds(endpoint)
    return (
    <birdContext.Provider value={{...response, setEndpoint}}>
        {children}
    </birdContext.Provider>
    )
}