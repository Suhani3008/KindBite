import React,{useContext} from 'react'
import {StoreContext} from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)


  return (
    <div className='food-display  pl-[130px] text-white' id='food-display '>
      
      <h2 className=' text-2xl my-7  text-red-600 font-medium'>Top dishes near you</h2>

      <div className="food-display-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 font-light ">

        {food_list.map((item,index)=>{

          if(category==="All" || category===item.category){
              return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          }
          
        })}

      </div>
    </div>
  )
}

export default FoodDisplay
