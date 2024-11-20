import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginYoutube from "../login";
import PrivateRoute from "../private";
import Dashboard from '../dashboard';

function Root2() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const LogIn = (token)=>{
      localStorage.setItem("Authtoken",token)
      setIsAuthenticated(true)
    }

    const LogOut = ()  =>{
      localStorage.removeItem("Authtoken")
      setIsAuthenticated(false)
    } 
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginYoutube onLogin={LogIn} />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard onLogout={LogOut} />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default Root2