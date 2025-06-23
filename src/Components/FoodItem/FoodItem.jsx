import React, { useContext } from 'react'
import { useState } from 'react';
import Add from '../../assets/Add.svg';
import Remove from '../../assets/Remove.svg';
import { StoreContext } from '../../context/StoreContext';



const FoodItem = ({id,name,price,description,image}) => {

  const[itemCount,setItemCount] = useState(0);
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);



  return ( 
    <div className='food-item '>
        <div className="food-item-img-container ">
            <img className='food-item-img w-[200px] h-[200px] rounded-[10px]  ' src={image} alt={name} />

            {
               !cartItems[id] ? <img className='add w-6 m-2  text-white bg-gray-700   rounded-4xl' onClick={()=> addToCart(id)} src={Add}/>

               : <div className='food-item-counter flex py-1.5 gap-[70px]  '>

                <img className='bg-red-700 rounded-4xl' onClick={()=>removeFromCart(id)} src={Remove} alt="" />
                <p className='font-bold  '>{cartItems[id]}</p>
                <img className='bg-green-700 rounded-4xl' onClick={()=>addToCart(id) } src={Add} alt="" />

                 </div>
            } 

        </div>

        <div className="food-item-info p-1.5 ">
            <div className="food-item-name-rating">
                <p className='font-medium text-xl'>{name}</p>    
            </div>
            <p className='food-item-description text-xs'>{description}</p>
            <p className='food-item-price text-red-600 '>Rs : {price}</p>
        </div>
      
    </div>                
  )   
}

export default FoodItem;
