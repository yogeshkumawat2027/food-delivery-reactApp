import React, { useContext } from 'react';
import { dataContext } from '../Context/UserContex';
import { FaTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Card2() {
  const { cartItems ,setCartItems,setshowCart} = useContext(dataContext); 
  
 const deleteItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id); 
    setCartItems(updatedCart);
  };
 const countHandler = (id, type) => {
  const updatedCart = cartItems.map(item => {
    if (item.id === id) {
      if (type === '+') {
        //  toast.success(`${item.name} added to cart!`);
        return { ...item, count: item.count + 1 };
      } else if (type === '-' && item.count > 1) {
        // toast.success(`${item.name} removed from cart!`);
        return { ...item, count: item.count - 1 };
      }
    }
    return item;
  });
  setCartItems(updatedCart);
};
const Deliveryfees = 20;
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.count, 0);
 const total = Deliveryfees + subtotal;

  return (
    <div className='p-4'>
     
      {cartItems.length === 0 ? (
        <p className="text-gray-500  text-xl ">Cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className='flex items-center justify-around gap-4 mb-4 p-3 bg-white rounded shadow'>
            <img src={item.image} alt={item.name} className='w-20 h-20 object-cover rounded' />

            <div className='flex flex-col items-center'>
                <h3 className='text-lg font-semibold text-gray-800'>{item.name}</h3>
                <div className='text-xl w-[100px] flex gap-1 items-center border-2 border-emerald-400 rounded-2xl justify-around px-2'>
                    <FaPlus  className='text-[16px] cursor-pointer' onClick={()=>{countHandler(item.id,'+')}}/>
                    <span className=' px-3 bg-slate-200'>{item.count}</span>
                    <FaMinus className='text-[16px] cursor-pointer' onClick={()=>{countHandler(item.id,'-')}}/></div>
              </div>

            <div className='text-[20px] flex flex-col  items-center gap-2' >
                 <h3 className='text-lg font-semibold text-gray-800'>₹{item.price}</h3>
                 <span className='text-red-500 cursor-pointer' onClick={() => deleteItem(item.id)}><FaTrashAlt /></span>
            </div>
            
            {/* <div className='flex-1'>
              <h3 className='text-lg font-semibold text-gray-800'>{item.name}</h3>
              <p className='text-green-600 font-bold'>₹{item.price}</p>
            </div> */}
            
          </div>

        ))
        
      )}

       {cartItems[0] && <>
         <hr />
        <div className='mt-2 flex flex-col gap-2 '>
         <div className='flex justify-between px-2 text-[16px] text-slate-600'>
             <span>Subtotal</span> <span>₹{subtotal}/-</span>
         </div>
        <div className='flex justify-between px-2 text-[16px] text-slate-600'>
        <span >Delivery Fees</span>  <span>₹{Deliveryfees}/-</span>
         </div>
         <hr />
          <div className='flex justify-between px-2 text-[16px] text-slate-600'>
        <span >Total</span>  <span>₹{total}/-</span>
         </div>
        <button className= ' w-[200px] bg-green-500 text-white text-[20px] py-2 self-center rounded-2xl cursor-pointer' onClick={()=>{toast.success(`Order Placed!`);
              setshowCart(true);
            
            }}>Place Order</button>
      </div>
     </>
     }
      
    </div>
  );
}
