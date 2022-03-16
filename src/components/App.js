import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './Header'
import Video from './Video';
import Home from './Home'
import history from '../history';

const App=()=> {
  return (
    <BrowserRouter history={history}>
    <Header/>
    <div className="ui active tab">
    <Routes>
    <Route path="/"      element={<Home/>}/>
    <Route path="/video/:id" element={<Video/>}/> //now Video component will have id property in props/match/params
    </Routes>
    </div>
        
    </BrowserRouter>
  )
}

export default App