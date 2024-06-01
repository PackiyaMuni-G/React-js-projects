
import './FoodItem.css'
import { assets } from '../../assets/assets'
import {  useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
const FoodItem = ({ id, name, description, price, image }) => {
    console.log('FoodItem ID in component:', id);
 const{cardItems,addToCard,removeFromCard}= useContext(StoreContext)
    // console.log('name' + name)
   
    return (
        <>
            <div className="food_item">
                <div className="food_item_img_container">
                    <img className='food_item_img'  src={image} alt="" />
                    {
                        !cardItems[id] ? <img className='add' onClick={()=>addToCard(id)} src={assets.add_icon_white} alt="" /> : 
                        <div className="food_item_counter">
                            <img onClick={()=>addToCard(id)} src={assets.add_icon_green} alt="" />
                            <p>{cardItems[id]}</p>
                            <img onClick={()=>removeFromCard(id)}  src={assets.remove_icon_red} alt="" />
                        </div>
                    }
                </div>
                <div className="food_item_info">
                    <div className="food_item_rating">
                        <p>{name}</p>
                        <img src={assets.rating_starts} alt="" />
                    </div>
                    <p className="food_item_description">
                        {description}
                    </p>
                    <p className="food_item_price">${price}</p>
                </div>
            </div>
        </>
    )
}

export default FoodItem