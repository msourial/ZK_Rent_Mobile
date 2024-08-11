import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Listings from './pages/listings/Listings'
import Product from './pages/product/Product'
import Profile from './pages/profile/Profile'
import SocialFi from './pages/social/SocialFi'

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/socialfi" element={<SocialFi />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
