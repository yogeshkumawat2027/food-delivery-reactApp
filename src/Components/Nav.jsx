import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../Context/UserContex';
import { food_items } from '../food';

function Nav() {
  let {input,setInput,Catogary,setCatagory,setshowCart,cartItems} = useContext(dataContext);
  

  useEffect(()=>{
     let newList = food_items.filter((item)=>(item.food_name.includes(input) || item.food_name.toLowerCase().includes(input)))
     setCatagory(newList);
  },[input])
  
  return (
    <div className='w-full h-[100px]  flex justify-between items-center px-2 md:px-8 lg:px-8  top-0'>
     <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
         <MdFastfood className='w-[30px] h-[30px] text-green-500' />
     </div>
     <form action="" className='flex items-center gap-5 w-[60%] h-[60px] bg-white px-5 rounded-md shadow-xl' onSubmit={(e)=>e.preventDefault()}>
         <FaSearch  className=' text-green-500 text-[20px]'/>
        <input type="text" placeholder='search items'  className='w-[100%] outline-none text-[20px] h-[100%] text-gray-600' 
         onChange={(e)=>{setInput(e.target.value)}}/>
       
     </form>
     <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer' onClick={()=>setshowCart(false)}>

        <span className='absolute top-0 right-2 text-[16px] font-semibold text-green-500'>{cartItems.length}</span>
         <LuShoppingBag className='w-[30px] h-[30px] text-green-500'/>
     </div>
    </div>
  )
}

export default Nav;
