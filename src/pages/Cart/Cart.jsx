import React, { useState ,useContext} from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <>
    <div className='cart'>
      <div className="cart-items">

        <div className="cart-items-title text-white font-bold text-2xl ">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
  
        <br/>
        <hr/>

        {
          food_list.map((item,index)=>{
            if(cartItems[item._id]>0){
              return (

                <div>

                <div className='cart-items-title cart-items-item text-white'>
                  <img className='w-[200px]' src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Rs. {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rs. {item.price*cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                </div>

                <div className=" bg-white h-[1px]"></div>

                </div>
              )
            }
          })
        }

        <div className='cart-bottom text-white'>

          <div className='cart-total w-7xl '>
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>Rs. {getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery fee</p>
                <p>Rs. {getTotalCartAmount()===0 ? 0 : 40}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>Rs. {getTotalCartAmount()===0?0:getTotalCartAmount()+40}</b>
              </div>
            </div>

            <button onClick={()=>navigate('/order')} >PROCEED TO CHECKOUT</button>
          </div>

          <div className='cart-promocode'>
            <div>
              <p className='text-white font-light'>If you have a promo code, Enter it here</p>
              <div className='cart-promocode-input'>
                <input type="text" placeholder='Enter your Promo Code' />
                <button>Submit</button>
              </div>
            </div>
          </div> 
        </div>
        

      </div> 
    </div>
  </>

  )
}

export default Cart
