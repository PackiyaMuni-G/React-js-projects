import React from 'react'
import { assets } from '../../assets/assets'

const Delivery = () => {
    return (
        <>
            <div className="delivery">
                <div className="delivery-msg">
                 
                </div>
                <div className="delivery-pic" style={{textAlign:'center'}}>
                    <img src={assets.parcel_icon} alt="" />
                    <h1>Order success...</h1>
                    
                </div>
            </div>



        </>
    )
}

export default Delivery