import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import BirdDetails from './pages/BirdDetails/BirdDetails'
import Explorer from './pages/Explorer/Explorer'
import Favourites from './pages/Favorites/Favorites'
import {BirdProvider} from './context/birdContext'


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <BirdProvider>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/explore' element={<Explorer/>}/>
      <Route path='/bird' element={<BirdDetails/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/favorites' element={<Favourites/>}/>
    </Routes>
    </BrowserRouter>
    </BirdProvider>
  )
}
