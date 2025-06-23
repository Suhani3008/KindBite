import React from 'react'
import { useState,useContext} from 'react'
import './Navbar.css'
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=search" />

import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import coin from '../../assets/coin.png'

const Navbar = ({setShowLogin}) => {

    const[menu,setMenu] = useState('home')
    const {getTotalCartAmount} = useContext(StoreContext)

    

  return (
    <ul> 

      <div className="navbar bg-gray-950 text-[#EA7C69] flex justify-between  hover:cursor-pointer">

        <Link to='/'><img src="src/assets/Logo_IMG.png" alt="" className='logo w-[140px] h-[40px] mt-2.5'/></Link>

        <ul className="navbar-menu flex gap-[45px] text-red-500  text-l font-medium mt-5.5 ">

            <Link to='/'>
            <li  
               className={`pb-0.5 ${menu === 'home' ? 'border-b-2 border-gray-600' : ''}`}
               onClick={() => setMenu('home')}>
               Home
            </li>
            </Link>
            <li 
                className={`pb-0.5 ${menu === 'menu' ? 'border-b-2 border-gray-600' : ''}`}
                onClick={() => setMenu('menu')}>
                Menu
            </li>

            <li  
                className={`pb-0.5 ${menu === 'Contact' ? 'border-b-2 border-gray-600' : ''}`}
                onClick={() => setMenu('Contact')}>
                Contact us
            </li>
            
            <Link to='/donate'>
                <li  
                    className={`pb-0.5 ${menu === 'Donate' ? 'border-b-2 border-gray-600' : ''} `}
                    onClick={() => setMenu('Donate')}>
                    Donate
                </li>
            </Link>

        </ul>

        <div className="navbar-right flex justify-center gap-4 ml-7">

         

            {/*  Search-icon */ }
           {/* <img src="src/assets/search.png"className=' mt-4 pt-4 invert w-[70px] h-[30px] ' alt="" /> */}

          <div className="relative">
            <img className="w-6 h-6 mt-3.5 cursor-pointer" src={coin}alt="Coin"/>   
          </div>




            <div className="navbar-search-icon relative w-[30px] h-[30px] ">

              <Link to='/Cart' > <img className='pt-3.5 invert' src="src/assets/shopping_cart.png" alt="" /></Link>

                <div className={getTotalCartAmount() === 0 ? "" : "dot absolute top-3 right-2 w-[5px] h-[5px] bg-red-600 rounded-full"}></div>


            </div>

            <button onClick={()=>setShowLogin(true)} className='px-4 py-1 m-2.5 bg-red-700 text-white rounded-4xl hover:cursor-pointer hover:py-2'>Sign in</button>

        </div>


      </div>

      <div className=" bg-neutral-700 h-[1px]"></div>

      </ul>


  )
}

export default Navbar
               