import React from 'react'

const PlaceOrder = () => {
  return (
    <form className='place-order text-white'>
      <div className="place-order-left text-white bg-gray-700">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='abc123@gmail.com' />
        <input type="text" placeholder='Street' />
        <div className="multi-feilds">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone'/>
      </div>

      <div className="place-order-right">

      </div>


    </form>
  )
}

export default PlaceOrder
