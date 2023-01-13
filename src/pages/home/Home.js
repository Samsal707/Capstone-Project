import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import Motto from '../../components/motto/Motto'
import Footer from '../../components/footer/Footer'




export default function Home() {
  return (
    <div>
      <Navbar />
       <Header/>
       <Motto />
       
        <div className="homeContainer">
        <Featured/>
        <Footer />
      </div>
    </div>
  
  )
}