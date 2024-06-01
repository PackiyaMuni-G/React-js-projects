import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
export const Navbar = ({ setShowLogin }) => {
    console.log({ setShowLogin });
    const [menu, setMenu] = useState('home')
    const { getTotalCardAmout } = useContext(StoreContext)

    return (
        <div className="navbar">
            <Link to='/'><img src="/yummy.png" alt="logo" className='logo' /></Link>

            <ul className="navbar-menu">
                <li onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>home</li>
                <li onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>menu</li>
                <li onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>mobile-app</li>
                <li onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>contact-us</li>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to='/card'><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCardAmout() === 0 ? "" : 'dot'}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign in</button>



            </div>

        </div>
    )
}
