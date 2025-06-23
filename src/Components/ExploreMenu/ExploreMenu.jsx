import React from 'react'
import { menu_list } from '../../assets/assets'
import './ExploreMenu.css'

const ExploreMenu = ({category,setCategory}) => {
  return (

    <div className='explore-menu text-white font-bold flex flex-col gap-[20px] m-[80px] px-[50px]' id='explore-menu'>

        <h1 className='text-3xl text-red-600 ' >Explore our menu</h1>

        <p className='text-lg font-light'>Explore a variety of dishes crafted to satisfy your cravings. From starters to desserts, our menu has it all</p>

        <div className='explore-menu-list flex justify-between align-center gap-[30px] overflow-x-scroll'>
            {menu_list.map((item,index)=>{
                return (
                   <div
                    onClick={() => setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))}
                    key={index}
                    className="explore-menu-list-item"
                    >
                    <img
                        className={`w-[90px] h-[90px] rounded-[50px] hover:cursor-pointer ${
                        category === item.menu_name ? "active" : ""
                        }`}
                        src={item.menu_image}
                        alt=""
                    />
                    <p className="m-1 hover:cursor-pointer">{item.menu_name}</p>
                    </div>

                )
            })}
        </div>

        <div className=" bg-neutral-700 h-[1px]"></div>

    </div>

    
  )
}

export default ExploreMenu
