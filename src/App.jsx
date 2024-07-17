import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router,Route,Routes, Outlet } from 'react-router-dom'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import PrivateRoute from './utils/privateRoutes'
import { AuthProvider } from './utils/AuthContext'

function App() {
  
  return (
    
    <Router>
      <AuthProvider>
      <Header/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
        <Route element={<PrivateRoute/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        </Route>
        
      </Routes>
      </AuthProvider>
    </Router>
    
  )
}

export default App
