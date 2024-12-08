import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
