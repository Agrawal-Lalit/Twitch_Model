import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './Header'
const Comp1=()=>{
    return (<div>
        this is page one
    </div>);
}

const Comp2=()=>{
    return (<div>
        this is page two
    </div>);
}
const App=()=> {
  return (
    <BrowserRouter>
    <Header/>
    <div className="ui active tab">
    <Routes>
    <Route path="/"        element={<Comp1/>}/>
    <Route path="/another" element={<Comp2/>}/>
    </Routes>
    </div>
        
    </BrowserRouter>
  )
}

export default App