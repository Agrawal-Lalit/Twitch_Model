import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './Header'
import Video from './Video';
import Home from './Home'

const App=()=> {
  return (
    <BrowserRouter>
    <Header/>
    <div className="ui active tab">
    <Routes>
    <Route path="/"        element={<Home/>}/>
    <Route path="/video" element={<Video/>}/>
    </Routes>
    </div>
        
    </BrowserRouter>
  )
}

export default App