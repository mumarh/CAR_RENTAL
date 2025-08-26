import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Home from './components/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Carpage from './pages/Car'
import About from './pages/About'
import Contact from './pages/Contact'
import TermsConditions from './pages/TermsConditions'

const App = () => {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/car' element={<Carpage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/termsconditions' element={<TermsConditions/> } />
      </Routes>
    </Router>
  )
}

export default App