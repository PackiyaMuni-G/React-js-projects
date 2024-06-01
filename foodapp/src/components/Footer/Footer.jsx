import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src='yummy.png' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta soluta magni dolorum sunt ex! Architecto accusamus animi non omnis odio sequi laboriosam qui eaque magni? Possimus, beatae. Recusandae, beatae quo.</p>
                    <div className="footer-socialicons">
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-9345413643</li>
                        <li>contact@yummyyeti.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 yummyyeti.com-All Right Reserved.
            </p>
           
        </div>
    )
}

export default Footer