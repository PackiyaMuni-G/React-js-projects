import React, { useContext, useEffect } from 'react'
import './Card.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Card = () => {
  const { food_list, cardItems, removeFromCard, getTotalCardAmout } = useContext(StoreContext)
  const Navigate=useNavigate();
  useEffect(() => {
    console.log("food_list:", food_list);
    console.log("cardItems:", cardItems);
}, [food_list, cardItems]);
  return (
    <div className="card">
      <div className="card-items">
        <div className="card-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cardItems[item._id] > 0) {
            return (
              <div className="div">
                <div className="card-items-title card-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cardItems[item._id]}</p>
                  <p>${item.price * cardItems[item._id]}</p>
                  <p onClick={() => removeFromCard(item._id)} className='cross'>✖</p>
                </div>
                <hr />
              </div>



            )
          }
          return null;
        })}
      </div>
      <div className="card-bottom">
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
              <p>{getTotalCardAmout()===0?0:2}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <b>Total</b>
              <b>${getTotalCardAmout()===0?0:getTotalCardAmout()+2}</b>
            </div>
          </div>
          <button onClick={()=>Navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
       
        <div className="card-promocode">
        <div>
          <p>If you have a promocode,Please Enter it here</p>
          <div className="card-promocode-input">
          <input type="text" placeholder='promocode' />
          <button>Submit</button>
        </div>
        </div>
       
      </div>
    </div>
      </div>
     
  


  )
}

export default Card