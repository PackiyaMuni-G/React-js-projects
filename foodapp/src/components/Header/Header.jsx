import React from 'react'
import './Header.css'
import headerImg from '../../assets/header_img.png';

const Header = () => {
  return (
   <div style={{ backgroundImage: `url(${headerImg})` }}  className="header">
    <div className="header-contents">
    <h2>Order your Fav <span>Food</span> Here</h2>
    <p>Choose from a diverse menu</p>
    <button>View Menu</button>
   </div>
    </div>
  
  )
}

export default Header