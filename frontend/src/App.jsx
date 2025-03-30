import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Explore from './pages/Explore'
import Community from './pages/Community'
import Profile from './pages/Profile'
import Joined from './pages/Joined'
import Landing from './pages/Landing'
function App() {
  

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Landing></Landing>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/sessions/explore' element={<Explore></Explore>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/community' element={<Community></Community>}></Route>
            <Route path='/profile' element={<Profile></Profile>}></Route>
            <Route path='/sessions/joined' element={<Joined></Joined>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
