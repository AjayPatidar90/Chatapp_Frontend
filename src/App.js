
import './App.css';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import React, { useState } from 'react'




function App() {
  const [userToken,setUserToken] = useState("")

  useEffect(()=>{
    let  token = localStorage.getItem("token")
     setUserToken(token)
      console.log(token,"token")
  },[])
 return (
  <div >
  
    <Routes>
    <Route path="" element={userToken?<Navigate to="/dashboard"/>:<Register/>} />
    <Route path="/login" element={userToken?<Navigate to="/dashboard"/>:<Login/>} />
    <Route path="/dashboard" element = {userToken?<Dashboard/>:<Navigate to = "/"/>}/>
   
   
    </Routes>
   
     
  
  </div>

 );
}

export default App;
