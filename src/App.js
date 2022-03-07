import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
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
    <Routes>
    <Route path="/"        element={<Comp1/>}/>
    <Route path="/another" element={<Comp2/>}/>
    </Routes>
        
    </BrowserRouter>
  )
}

export default App