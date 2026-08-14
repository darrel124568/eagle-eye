import { useState, useEffect} from 'react';


export default function useBirds(endpoint) {
    const base_url = `https://ornithophile.vercel.app`
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
     if(!endpoint) return;
     fetch(`${base_url}${endpoint}`)
     .then(r => {
        if(!r.ok) {
            throw new Error("error")
        }
        return r.json()
     })
     .then(data => {
        console.log(data)
        setData(data)})
     .catch((err)=>{
        setError(err)
     })
     .finally(()=>{
        setLoading(false)
     })

    }, [endpoint])
     
    return {data, loading, error}
}

