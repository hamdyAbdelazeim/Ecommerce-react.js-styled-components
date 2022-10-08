import Product from './pages/Product'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Announcement from './components/Announcement'

const App = () => {
  return (
    <div>
      <Announcement/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/productList' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
