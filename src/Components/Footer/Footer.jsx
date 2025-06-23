import React from 'react'
import './Footer.css'

const Footer = () => {
  return (

    <div className='footer bg-neutral-950 p-[60px] pt-55 gap-5  ' id="footer">
            <div className=" bg-neutral-700 h-[1px]"></div>

      <div className="footer-content flex justify-between mt-8 mb-6.5 text-white">

        <div className="footer-content-left ">
            <img className='w-[120px] ' src="src/assets/Logo_final.png" alt="" />
            <p className='text-white mt-3.5'>Lorem ipsum, dolor sit amet consectetur .</p>
            <div className='flex gap-5 mt-3 '>
                <img className='w-[30px]' src="src/assets/facebook.svg" alt="" />
                <img className='w-[30px]' src="src/assets/twitter.svg" alt="" />
                <img className='w-[30px]' src="src/assets/instagram.svg" alt="" />
            </div>
        </div>

        <div className="footer-content-center">

            <h2 className='font-bold  text-gray-400 '>COMPANY</h2>
            <ul className='font-light p-1.5'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div className="footer-content-right ">
            <h2 className='font-bold text-gray-400'>Get In Touch</h2>
            <ul className='font-light p-1.5'>
                <li>+91- 1100110011</li>
                <li>Contact@gmail.com</li>
            </ul>
        </div>

      </div>
      <div className=" bg-neutral-900 h-[1px]"></div>

      <p className='footer-copyright text-gray-300 ml-130 py-2.5 mt-2.5'> Copyright 2025 &copy; KindBite.com - All Right Reserved.</p>

    </div>
  )
}

export default Footer
