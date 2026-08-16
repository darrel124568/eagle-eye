import useBirds from '../hooks/useBirds'
import { createContext, useState } from 'react'

export const detailedBirdContext = createContext()

export function DetailedBirdProvider({children}) {
    const [endpoint, setDetailedEndpoint] = useState(null)
    const response = useBirds(endpoint)
    return (
    <detailedBirdContext.Provider value={{...response, setDetailedEndpoint}}>
        {children}
    </detailedBirdContext.Provider>
    )
}
