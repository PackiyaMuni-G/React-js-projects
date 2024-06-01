import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'
const PlaceOrder = () => {
  
  const navigate=useNavigate()
  const{getTotalCardAmout}=useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='email address' />
        <input type="text" placeholder='street' />
        <div className="multi-fields">
          <input type="text" placeholder='city' />
          <input type="text" placeholder='state' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='zip code' />
          <input type="text" placeholder='country' />
        </div>
        <input type="text" placeholder='phone' />
      </div>
      <div className="place-order-right">
      <div className="card-total">
          <h2>Card Total</h2>
          <div className="div">
            
            <div className="card-total-details">
              <p>Subtotal</p>
              <p>${getTotalCardAmout()}</p>

            </div>
            <hr />
            <div className="card-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <b>Total</b>
              <b>${getTotalCardAmout()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/delivery')}>PROCEED TO PAYMENT</button>
        </div>
      </div>

    </form>

  )
}

export default PlaceOrder