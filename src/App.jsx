import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'
import Login from './Components/LoginPopUp/Login'
import Donate from './pages/Donate/Donate'

function App() {

  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin ? <Login setShowLogin={setShowLogin}/> : <></>}
      <div className="app bg-neutral-950 ">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<PlaceOrder/>} />
          <Route path='/donate' element={<Donate/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
