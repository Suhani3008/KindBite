// import React from 'react'
// import donate from '../../assets/donateHead.png';

// const Donate = () => {
//   return (
//     <div className='relative bg-gray-200'>
//         <div>
//             <img className='mt-2 ml-[90px] w-[90%] h-[540px]' src={donate} alt="" />
//         </div>

//         <div className="absolute top-[70px] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black">
//             <h1 className="text-5xl font-bold">Share More, Waste Less</h1>
//             <p className="mt-2 text-2xl text-red-600 font-bold">Be the change you want to see in the world.</p>
//         </div>

//     </div>
    
//   )
// }

// export default Donate


// import React, { useState } from 'react';
// import donate from '../../assets/donationImg.png';

// const Donate = () => {

//     const [peopleCount,setPeopleCount] = useState(0);
//     const [discount,setDiscount] = useState(0);
    

//     const handleDiscount = (e)=>{
//         const count = parseInt(e.target.vale) || 0;
//         setPeopleCount(count);
//         setDiscount(count*25);
//     }


//   return (
//     <div className="relative bg-gray-200 pb-8">
//       {/* Image Section */}
//       <div>
//         <img
//           className="mt-2 mx-auto w-[70%] max-h-[500px]  rounded-md"
//           src={donate}
//           alt="Donate"
//         />
//       </div>

//       {/* Text Overlay Section */}
      

//       {/* Donation Form Section */}
//       <div className="mt-8 mx-auto max-w-4xl p-6 bg-white shadow-md rounded-md">

//         <h2 className="text-2xl font-bold text-center text-red-600 mb-4">
//           Enter the following details to donate food
//         </h2>

//         <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Left Column */}
          
//           <div>
//             <label className="block font-medium text-gray-700">Food Name</label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 rounded-md p-2"
//               placeholder="e.g., Rice, Curry"
//             />
//           </div>
//           <div>
//             <label className="block font-medium text-gray-700">Mobile No.</label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 rounded-md p-2"
//               placeholder="+91-1010101010"
//             />
//           </div>
//           <div>
//             <label className="block font-medium text-gray-700">Description</label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 rounded-md p-2"
//               placeholder="e.g., Freshly cooked /Left over"
//             />
//           </div>

//           {/* Right Column */}
//           <div>
//             <label className="block font-medium text-gray-700">How many persons can it feed?</label>
//             <input
//               type="number"
//               className="w-full border border-gray-300 rounded-md p-2"
//               placeholder="e.g., 10"
//             />
//           </div>
//           <div>
//             <label className="block font-medium text-gray-700">Hygiene Level</label>
//             <select className="w-full border border-gray-300 rounded-md p-2">
//               <option>5 (Excellent)</option>
//               <option>4</option>
//               <option>3</option>
//               <option>2</option>
//               <option>1 (Poor)</option>
//             </select>
//           </div>
//           <div>
//             <label className="block font-medium text-gray-700">Food Type</label>
//             <select className="w-full border border-gray-300 rounded-md p-2">
//               <option>Beverage</option>
//               <option>Main Course</option>
//               <option>Snack</option>
//               <option>Dessert</option>
//             </select>
//           </div>

          
//           <div>
//             <label className="block font-medium text-gray-700">Expected Expiry (in days)</label>
//             <input
//               type="number"
//               className="w-full border border-gray-300 rounded-md p-2"
//               placeholder="e.g., 2"
//               value={expiryDays}
//               onChange={(e) => setExpiryDays(e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="block font-medium text-gray-700">Upload Food Image</label>
//             <input type="file" className="w-full border border-gray-300 rounded-md p-2" />
//           </div>

//           {/* Address Details */}
//           <div className="col-span-2">
//             <label className="block font-medium text-gray-700">Address</label>
//             <textarea
//               className="w-full border border-gray-300 rounded-md p-2"
//               rows="3"
//               placeholder="e.g., Full address with landmarks"
//             ></textarea>
//           </div>
//           <div>
//             <label className="block font-medium text-gray-700">City</label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 rounded-md p-2"
//               placeholder="Your city"
//             />
//           </div>
//           <div>
//             <label className="block font-medium text-gray-700">Area</label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 rounded-md p-2"
//               placeholder="Your Area"
//             />
//           </div>
//           <div>
//             <label className="block font-medium text-gray-700">State</label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 rounded-md p-2"
//               placeholder="Your State"
//             />
//           </div>


//           <div className='col-span-2 text-center mt-4'>
//             <h3 className='text-lg font-semibold text-gray-700'>Discount Earned : Rs. {discount}</h3>
//             <p className='text-sm text-gray-500'>
//                 Rs.25 discount for each person the food can feed.
//             </p>
//           </div>




//           {/* Submit Button */}
//           <div className="col-span-2 text-center mt-4">
//             <button
//               type="submit"
//               className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700"
//             >
//               Submit Donation
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Donate;

import React, { useState,useContext } from 'react';
import donate from '../../assets/donationImg.png';
import { StoreContext } from '../../context/StoreContext';

const Donate = () => {

  const [peopleCount, setPeopleCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [expiryDays, setExpiryDays] = useState('');
  const [submitted, setSubmitted] = useState(false);

 

  const handleDiscount = (e) => {
    const count = parseInt(e.target.value) || 0;
    setPeopleCount(count);
    setDiscount(count * 15); // Calculate discount dynamically
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Show submission confirmation
    
  };

  return (
    <div className="relative bg-gray-200 pb-8">
      {/* Image Section */}
      <div className='bg-white'>
        <img
          className="mt-2 mx-auto w-[70%] max-h-[500px] rounded-md"
          src={donate}
          alt="Donate"
        />
      </div>

       <div className=" bg-neutral-700 h-[1px]"></div>

      {/* Donation Form Section */}

      <div className="mt-8 mx-auto max-w-4xl p-6 bg-gray-100 shadow-md rounded-md border-gray-400 border-1 ">

        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          Enter the following details to donate food
        </h2>

        {submitted ? (
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700">
              Thank you for your donation!
            </h3>
            <p className="text-md text-gray-500">
              You have earned <span className="text-red-600 font-bold">₹{discount}</span> in discounts.
            </p>
            
          </div>
        ) : (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4  " onSubmit={handleFormSubmit}>
            {/* Food Name */}
            <div >
              <label className="block font-medium text-gray-950">Food Name</label>
              <input
                type="text"
                name="foodName"
                className="w-full border border-gray-400 rounded-md p-2"
                placeholder="e.g., Rice, Curry"
                required
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block font-medium text-gray-950">Mobile No.</label>
              <input
                type="text"
                name="mobile"
                className="w-full border border-gray-400 rounded-md p-2"
                placeholder="+91-1010101010"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-medium text-gray-950">Description</label>
              <input
                type="text"
                name="description"
                className="w-full border border-gray-400 rounded-md p-2"
                placeholder="e.g., Freshly cooked / Leftover"
                required
              />
            </div>

            {/* People Count */}
            <div>
              <label className="block font-medium text-gray-950">How many persons can it feed?</label>
              <input
                type="number"
                name="peopleCount"
                className="w-full border border-gray-400 rounded-md p-2"
                placeholder="e.g., 10"
                value={peopleCount}
                onChange={handleDiscount}
                required
              />
            </div>

            {/* Hygiene Level */}
            <div>
              <label className="block font-medium text-gray-950">Hygiene Level</label>
              <select
                name="hygiene"
                className="w-full border border-gray-400 rounded-md p-2"
                required
              >
                <option value="">Select</option>
                <option>5 (Excellent)</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1 (Poor)</option>
              </select>
            </div>

            {/* Food Type */}
            <div>
              <label className="block font-medium text-gray-950">Food Type</label>
              <select
                name="foodType"
                className="w-full border border-gray-400 rounded-md p-2"
                required
              >
                <option value="">Select</option>
                <option>Beverage</option>
                <option>Main Course</option>
                <option>Snack</option>
                <option>Dessert</option>
              </select>
            </div>

            {/* Expiry Days */}
            <div>
              <label className="block font-medium text-gray-950">Expected Expiry (in days)</label>
              <input
                type="number"
                name="expiryDays"
                className="w-full border border-gray-400 rounded-md p-2"
                placeholder="e.g., 2"
                value={expiryDays}
                onChange={(e) => setExpiryDays(e.target.value)}
                required
              />
            </div>

            {/* Upload Food Image */}
            <div>
              <label className="block font-medium text-gray-950">Upload Food Image</label>
              <input type="file" name="foodImage" className="w-full border border-gray-400 rounded-md p-2" />
            </div>

            {/* Address */}
            <div className="col-span-2">
              <label className="block font-medium text-gray-950">Address</label>
              <textarea
                name="address"
                className="w-full border border-gray-400 rounded-md p-2"
                rows="3"
                placeholder="e.g., Full address with landmarks"
                required
              ></textarea>
            </div>

            {/* City, Area, and State */}
            <div>
              <label className="block font-medium text-gray-950">City</label>
              <input
                type="text"
                name="city"
                className="w-full border border-gray-400 rounded-md p-2"
                placeholder="Your city"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-950">Area</label>
              <input
                type="text"
                name="area"
                className="w-full border border-gray-400 rounded-md p-2"
                placeholder="Your area"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-950">State</label>
              <input
                type="text"
                name="state"
                className="w-full border border-gray-400 rounded-md p-2"
                placeholder="Your state"
                required
              />
            </div>

            {/* Discount Section */}
            <div className="col-span-2 text-center mt-4">
              <h3 className="text-lg font-semibold text-gray-950">
                Discount Earned: ₹{discount}
              </h3>
              <p className="text-sm text-gray-500">
                ₹15 discount for each person the food can feed.
              </p>
            </div>

            {/* Submit Button */}
            <div className="col-span-2 text-center mt-4">
              <button
                type="submit"
                className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700"
              >
                Submit Donation
              </button>
            </div>
          </form>
        )}
      </div>

       <div className=" bg-neutral-700 h-[1px] my-3"></div>
      <div className='mt-23 mb-39 '>
        
        <div className='text-6xl font-bold text-purple-950 ml-15 mr-[40%] gap-5 '>
            The global food crisis feels overwhelming, but your actions matter.
        </div>
        <div className='text-6xl font-bold text-pink-600 mr-15 ml-[50%]' >
            Every meal shared is a step toward a better world.
        </div>
        
      </div>

      <div className="flex flex-col md:flex-row items-start mb-49">
      {/* Left Section */}
      <div className="left md:w-1/2 px-6">
        <h2 className="text-4xl font-semibold text-purple-950 mb-4">The Problem</h2>
        <div className="text-xl text-purple-950 space-y-4">
          <p>Our habits of overconsumption have led to a massive food waste crisis.</p>
          <p>It's not just the leftovers we throw away but also the untouched food that could feed others.</p>
          <p>This waste impacts not only the hungry but also the planet.</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="right md:w-1/2 px-6 mt-8 md:mt-0">
        <ul className="space-y-6 text-purple-950">
          <li className="text-3xl font-semibold">
            1/3 of food produced globally is wasted, leaving millions hungry. <br />
            <a
              href="https://www.fao.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-blue-600 underline"
            >
              Source: FAO Website
            </a>
          </li>
          <li className="text-3xl font-semibold">
            Wasted food causes 8-10% of global greenhouse gas emissions. <br />
            <a
              href="https://www.unep.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-blue-600 underline"
            >
              Source: UNEP Website
            </a>
          </li>
          <li className="text-3xl font-semibold">
            25% of agricultural water is wasted on food that is never eaten. <br />
            <a
              href="https://www.nationalgeographic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-blue-600 underline"
            >
              Source: National Geographic
            </a>
          </li>
        </ul>
      </div>

      </div>

      <div className='flex items-center justify-center mb-72'>
        <div className='items-center '>
             <h2 className='text-2xl text-center font-bold text-purple-950 mb-1'>The Solution </h2>
             <div>
                <h2 className='text-6xl text-pink-600 font-bold mb-2 text-center'>Donate more, waste less.</h2>
                <p className='text-l font-bold text-purple-950'>
                     Together, let's turn surplus into support and create a world where everyone has enough to thrive
                </p>
             </div>


        </div>

       
      </div>



    </div>
  );
};

export default Donate;
