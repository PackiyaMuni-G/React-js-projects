import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'
const FoodDisplay = ({ category }) => {
    console.log("categoty" + { category });
    const { food_list } = useContext(StoreContext)
    console.log("Food List:", food_list);
    return (

        <div className="food_display" id='food_display'>
            <h2>Top dishes near you</h2>
            <div className="food_display_list">


                {food_list.map((food, index) => {

                    if (category === "All" || category === food.category) {
                        return <FoodItem key={index} id={food._id} name={food.name} price={food.price} description={food.description} image={food.image} />
                    }
                 return null;
              
                }
                )}
            </div>

        </div>
    )
}

export default FoodDisplay