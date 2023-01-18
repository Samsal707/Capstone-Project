import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Booking from "./pages/booking/Booking";
import Register from "./pages/register/Register"
import Admin from "./pages/admin/Admin"


function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/booking" element={<Booking/>}/>
            <Route path="/admin" element={<Admin/>}/>
          </Routes>
        </BrowserRouter>
  
  );
}

export default App;
