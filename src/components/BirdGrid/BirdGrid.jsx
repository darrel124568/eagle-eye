// import BirdCard from '../BirdCard/BirdCard'
import { useContext, useEffect } from 'react'
import { birdContext } from '../../context/birdContext'
import BirdCard from '../BirdCard/BirdCard'

export default function BirdGrid() {
  const {data, loading, error, setEndpoint} = useContext(birdContext)
  useEffect(()=>{
    setEndpoint('/api/birds/alpha/z')
  },[])
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading birds</div>
  if (!data || !data[0]) return <div>No birds found</div>
  
  return (
    data.map(bird => (
      <BirdCard bird={bird} key={bird.id}/>
    ))
  )
}
