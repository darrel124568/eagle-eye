import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Loading from './components/Loading/Loading'
import {BirdProvider} from './context/birdContext'
import {FavoritesProvider} from './context/favoritesContext'
import {FeaturedBirdProvider} from './context/featuredBirdContext'
import {DetailedBirdProvider} from './context/detailedBirdContext'


export default function App() {
  const Home = lazy(() => import("./pages/Home/Home"));
  const Explorer = lazy(() => import("./pages/Explorer/Explorer"));
  const BirdDetails = lazy(() => import("./pages/BirdDetails/BirdDetails"));
  const About = lazy(() => import("./pages/About/About"));
  const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
  const Notes = lazy(() => import('./pages/notes/Notes'));
  const LocalRadar = lazy(() => import('./pages/LocalRadar/LocalRadar'));
  return (
    <BirdProvider>
    <FavoritesProvider>
    <FeaturedBirdProvider>
    <DetailedBirdProvider>
    <BrowserRouter>
    <Suspense fallback={<Loading/>}>
    <Routes>      
      <Route path='/' element={<Home/>}/>
      <Route path='/explore' element={<Explorer/>}/>
      <Route path='/bird/:sciName' element={<BirdDetails/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/notes' element={<Notes/>}/>
      <Route path='/local-radar' element={<LocalRadar/>}/>        
      <Route path='*' element={<h1 className="p-6 text-2xl font-bold text-red-600">404 - Page Not Found</h1>}/>
    </Routes>
    </Suspense>    
    </BrowserRouter>
    </DetailedBirdProvider>
    </FeaturedBirdProvider>
    </FavoritesProvider>
    </BirdProvider>
  )
}
