// import BirdCard from '../BirdCard/BirdCard'
import { useContext, useEffect } from 'react'
import { birdContext } from '../../context/birdContext'
import BirdCard from '../BirdCard/BirdCard'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

export default function BirdGrid() {
  const {data, loading, error, retry, setEndpoint} = useContext(birdContext)
  useEffect(()=>{
    setEndpoint('/api/birds/category/genus/Aquila ')
  },[])
  
  if (loading) return <div>Loading...</div>
  if (error) return <ErrorMessage message={error.message} onRetry={retry} />
  if (!data || !data[0]) return <div>No birds found</div>
  
  return (
    data.map(bird => (
      <BirdCard bird={bird} key={bird.id}/>
    ))
  )
}
