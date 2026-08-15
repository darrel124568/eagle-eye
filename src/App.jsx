import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import BirdDetails from './pages/BirdDetails/BirdDetails'
import Explorer from './pages/Explorer/Explorer'
import Favourites from './pages/Favorites/Favorites'
import LocalRadar from './pages/LocalRadar/LocalRadar'
import {BirdProvider} from './context/birdContext'
import {FavoritesProvider} from './context/favoritesContext'
import {FeaturedBirdProvider} from './context/featuredBirdContext'
import {DetailedBirdProvider} from './context/detailedBirdContext'


export default function App() {
  return (
    <BirdProvider>
    <FavoritesProvider>
    <FeaturedBirdProvider>
    <DetailedBirdProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/explore' element={<Explorer/>}/>
      <Route path='/bird/:sciName' element={<BirdDetails/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/favorites' element={<Favourites/>}/>
      <Route path='/notes' element={<h1 className="p-6 text-2xl font-bold text-blue-600">Notes Page - Coming Soon!</h1>}/>
      <Route path='/local-radar' element={<LocalRadar/>}/>
      <Route path='*' element={<h1 className="p-6 text-2xl font-bold text-red-600">404 - Page Not Found</h1>}/>
    </Routes>
    </BrowserRouter>
    </DetailedBirdProvider>
    </FeaturedBirdProvider>
    </FavoritesProvider>
    </BirdProvider>
  )
}
