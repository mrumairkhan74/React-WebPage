import React from 'react'
import Navbar from './pages/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './pages/Footer'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App 
