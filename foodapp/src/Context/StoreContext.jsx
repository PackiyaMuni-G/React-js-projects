import { createContext, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cardItems, setItemCards] = useState({})

    const addToCard = (itemId) => {
        console.log('Adding to cart:', itemId);  // Log the item ID being added
        console.log('Current cart items before adding:', cardItems);  // Log the current state before update
        if (!cardItems[itemId]) {
            console.log('Item not found in cart, adding new item.');  // Additional debug info
            setItemCards((prev) => ({ ...prev, [itemId]: 1 }))
            console.log('add new idem' + itemId);
            console.log("after add cart item"+cardItems);
        }
        else {
            setItemCards((prev) => (

                { ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const removeFromCard = (itemId) => {
        setItemCards((prev) => (
            { ...prev, [itemId]: prev[itemId] - 1 }))
    }
    // useEffect(() => {
    //     console.log('Current cart items after update:', cardItems);
    //     // console.log(cardItems);
    // }, [cardItems])
    const getTotalCardAmout = () => {
        let totalAmount = 0
        for (const item in cardItems) {
            if (cardItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                if (itemInfo) {
                    totalAmount += itemInfo.price * cardItems[item];
                
                } else {
                    console.warn(`Item with ID ${item} not found in food_list`);
                }
               
            }
        }
        console.log('totalamount:'+totalAmount);
        return totalAmount
    }

    const contextValue = {
        food_list, cardItems, setItemCards, addToCard, removeFromCard, getTotalCardAmout
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider