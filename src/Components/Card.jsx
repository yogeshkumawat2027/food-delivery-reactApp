import React, { useContext } from 'react';
import { GiChickenOven } from "react-icons/gi";
import { LuVegan } from "react-icons/lu";
import { dataContext } from '../Context/UserContex';
import { toast } from 'react-toastify';

export default function Card({ name, image, id, type, price }) {
  const { setCartItems ,cartItems } = useContext(dataContext); 

 const addToCart = () => {
  const existingItemIndex = cartItems.findIndex(item => item.name === name);
  toast.success(`${name} added from cart!`);


  if (existingItemIndex !== -1) {
    const updatedCart = [...cartItems];
    updatedCart[existingItemIndex].count += 1;
    setCartItems(updatedCart);
  } else {
    setCartItems(prev => [...prev, { name, image, price, count: 1,id }]);
  }
};


  return (
    <div className="min-h-[400px] w-[300px] bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-4 border border-gray-200 hover:scale-[1.03] cursor-pointer">
      
      {/* Image */}
      <div className="w-full h-[65%] rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Title */}
      <div className="w-full text-center mt-3">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
      </div>

      {/* Price + Food Type */}
      <div className="w-full flex justify-between items-center mt-2 px-1">
        <p className="text-green-600 font-bold text-lg">₹{price}</p>

        <div className="flex items-center gap-1 text-sm font-semibold text-green-700">
          {type === 'veg' ? (
            <>
              <LuVegan className="text-green-600" />
              <span>Veg</span>
            </>
          ) : (
            <>
              <GiChickenOven className="text-green-600" />
              <span>Non-Veg</span>
            </>
          )}
        </div>
      </div>

      {/* Button */}
      <button
        onClick={addToCart}
        className="mt-3 bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md transition-all cursor-pointer"
      >
        Add to Dish
      </button>
    </div>
  );
}
