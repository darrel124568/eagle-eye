import { useCallback, useEffect, useState } from 'react';


export default function useBirds(endpoint, base_url = 'https://ornithophile.vercel.app', options = {}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [retryCount, setRetryCount] = useState(0);

    const retry = useCallback(() => setRetryCount(count => count + 1), []);

    useEffect(()=>{
     if (!endpoint) {
        return;
     }

     const controller = new AbortController();
     setLoading(true);
     setError(null);

     fetch(`${base_url}${endpoint}`, { signal: controller.signal, ...options })
     .then(r => {
        if(!r.ok) {
            throw new Error("Unable to load birds. Please try again.")
        }
        return r.json()
     })
     .then(data => setData(data))
     .catch((err)=>{
        if (err.name !== 'AbortError') {
            setError(err)
        }
     })
     .finally(()=>{
        if (!controller.signal.aborted) {
            setLoading(false)
        }
     })

     return () => controller.abort();
    }, [endpoint, retryCount])
     
    return {data, loading, error, retry}
}
