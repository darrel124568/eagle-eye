import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import BirdDetails from './pages/BirdDetails/BirdDetails'
import Explorer from './pages/Explorer/Explorer'
import Favourites from './pages/Favorites/Favorites'
import {BirdProvider} from './context/birdContext'
import {FavoritesProvider} from './context/favoritesContext'


export default function App() {
  return (
    <BirdProvider>
    <FavoritesProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/explore' element={<Explorer/>}/>
      <Route path='/bird/:id' element={<BirdDetails/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/favorites' element={<Favourites/>}/>
    </Routes>
    </BrowserRouter>
    </FavoritesProvider>
    </BirdProvider>
  )
}
