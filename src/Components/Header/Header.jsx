// import React from 'react'

// const images = [
//     "public/HeaderFood.avif",
//     "public/foodDonate.png"
// ]


// const Header = () => {

  
//   return (
//     <div className="header h-[37vw] m-[30px] bg-cover bg-center bg-no-repeat relative rounded-md border-1 border-gray-950"
//       style={{ backgroundImage: "url('public/foodMain.avif')" }}>

//         <div className="header-contents absolute flex flex-col gap-[1.5vw] w-[60%] top-[30%] left-[3vw] fadeIn">

//             <h2 className='text-6xl font-bold text-red-700'> Order Your favourite food here </h2>
//             <p className="mt-4 text-xl text-white" >
//                 Satisfy your cravings with delicious food delivered fast to your doorstep!
//             </p>
//         </div>
//         <button className="absolute bottom-[3vw] left-[3vw] bg-red-700 text-white px-5 py-4 text-lg rounded-full hover:bg-red-800">
//         View Menu
//       </button>
      
//     </div>
//   )
// }

// export default Header

import React from 'react';
import Slider from "react-slick";
import './Header.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons

import { Link } from 'react-router-dom';

const images = [
    "public/foodDonate.png",
    "public/HeaderFood.avif"
  ];

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Auto time 2 seconds
    prevArrow: <CustomPrevArrow />, // Custom Previous Arrow
    nextArrow: <CustomNextArrow />, // Custom Next Arrow
  };

  return (
    <Slider {...settings} className="rounded-md overflow-hidden border border-gray-950 mx-[10vw] my-5 rounded-5xl">
      {images.map((image, index) => (
        <div key={index} className="relative h-[37vw] bg-cover bg-center">
          <div
            className="h-full bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute flex flex-col gap-[1.5vw] w-[60%] top-[30%] left-[3vw] fadeIn">
              <h2 className="text-6xl font-bold text-red-700">
                {index === 0 ? 'Donate Leftover Food to Help Others' : 'Order Your Favourite Food Here'}
              </h2>
              <p className="mt-4 text-xl text-white">
                {index === 0
                  ? 'Be a part of the change by donating leftover food to those in need!'
                  : 'Satisfy your cravings with delicious food delivered fast to your doorstep!'}
              </p>
            </div>

            <button className="absolute bottom-[3vw] left-[3vw] bg-red-700 text-white px-4 py-2 text-md rounded-full hover:bg-red-800">
  {index === 0 ? (
    <Link to="/donate" className="text-white">
      Donate Now
    </Link>
  ) : (
    'View Menu'
  )}
</button>
            
          </div>
        </div>
      ))}
    </Slider>
  );
};

// Custom Previous Arrow
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev`} // Add slick-prev class
      style={{ ...style }}
      onClick={onClick}
    >
      {/* You can replace this with an icon */}
      <FaArrowLeft />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-next`} // Add slick-next class
      style={{ ...style }}
      onClick={onClick}
    >
      {/* You can replace this with an icon */}
      <FaArrowRight />
    </div>
  );
};


export default Header;

