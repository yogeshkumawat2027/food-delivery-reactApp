import React, { useContext, useState } from 'react';
import Nav from '../Components/Nav';
import { Categories } from '../Catogary';
import Card from '../Components/Card';
import Card2 from '../Components/Card2';
import { food_items } from '../food';
import { dataContext } from '../Context/UserContex';
import { ImCross } from "react-icons/im";

export default function Home() {
  const { Catagory, setCatagory,input,showCart,setshowCart } = useContext(dataContext);

 

  // ✅ Category filter function
  function filter(catagory) {
    if (catagory === 'All') {
      setCatagory(food_items);
    } else {
      const newItems = food_items.filter(
        (item) => item.food_category === catagory
      );
      setCatagory(newItems);
    }
  }

  return (
    <div className='bg-slate-200 min-h-screen w-full flex flex-col items-center'>

      {/* ✅ Always at top */}
      <div className='w-full'>
        <Nav />
      </div>
    
      {/* ✅ Category Section */}
      <div className='mt-5 flex flex-wrap justify-center gap-4 px-4'>
        { !input && Categories.map((item, index) => (
          <div
            key={index}
            onClick={() => filter(item.name)}
            className='bg-white w-[100px] h-[100px] flex flex-col items-center justify-center 
              p-4 rounded-3xl text-[14px] text-gray-600 shadow-xl
              hover:bg-gray-200 cursor-pointer transition-all'
          >
            <div>{item.icon}</div>
            <div>{item.name}</div>
          </div>
        ))}
        
      </div>

      {/* ✅ Cards Section */}
      <div className="mt-8 mb-10 flex flex-wrap justify-center gap-5 px-4">
        {Catagory.length === 0 ? (
          <p className="text-xl text-gray-600">No items found.</p>
        ) : (
          Catagory.map((item) => (
            <Card
              key={item.id}
              name={item.food_name}
              type={item.food_type}
              image={item.food_image}
              id={item.id}
              price={item.price}
            />
          ))
        )}
      </div>

      <div className={` w-[400px] h-[80%] bg-white fixed top-4 ${showCart ? '-right-[400px]' : 'right-0'} overflow-auto hide-scrollbar  transition-all duration-500 ease-in-out   rounded-2xl shadow-2xl`}>
        <header className='flex justify-between p-4 text-xl text-green-500'>
          <span>Order Items</span>
          <span onClick={()=>setshowCart(true)} className='cursor-pointer' ><ImCross /></span>
        </header>
        <Card2 />
      </div>
    </div>
  );
}
