import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import GoogleAuth from './GoogleAuth'

const Header=()=> {

   const [activeTab, setActiveTab]=useState(1);

  return (
    <div className="ui segment">
    <div   className="ui sticky" style={{width: '670px', height: '43px' ,left: '460px'}}>
      <div className="ui fluid three item tabular menu">
        <Link to="/"        className={`item ${activeTab===1 ? 'active':''}`} onClick={()=>setActiveTab(1)}>Home</Link>
        <Link to="/video" className={`item ${activeTab===2 ? 'active':''}`} onClick={()=>setActiveTab(2)}>Video</Link>
        <GoogleAuth/>
      </div>
    </div>
  </div>
  )
}

export default Header