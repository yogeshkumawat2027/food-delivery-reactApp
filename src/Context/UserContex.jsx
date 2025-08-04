import React, { createContext, useState } from 'react'
import { food_items } from '../food';

export const dataContext = createContext();

 function UserContex({children}) {
    let [input,setInput] = useState("");
    let [Catagory, setCatagory] = useState(food_items); 
    const [showCart,setshowCart] = useState(true);
    const [cartItems,setCartItems]= useState([]);
    let data = {
          input,
          setInput,
          Catagory,
          setCatagory,
          showCart,
          setshowCart,
          cartItems,
          setCartItems
    }
  return (
    <div>
        <dataContext.Provider value={data}>
           {children} 
        </dataContext.Provider>
    </div>
  )
}
export default UserContex;

