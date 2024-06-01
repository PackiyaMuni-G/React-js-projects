
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Card from './pages/Card/Card';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';

import Footer from './components/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Delivery from './components/Delivery/Delivery';

function App() {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
  
     <div className="App">
     <Navbar setShowLogin={setShowLogin}/>
   
     <Routes>
      <Route path='/' element={<Home/>}   />
      <Route path='/card' element={<Card/>}   />
      <Route path='/order' element={<PlaceOrder/>}   />
      <Route path='/delivery' element={<Delivery/>}   />
     </Routes>
        
    </div>
   <Footer/>
    </>
   
  );
}

export default App;
