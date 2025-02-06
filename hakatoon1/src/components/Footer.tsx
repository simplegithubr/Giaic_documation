
import React from 'react'

function Footer() {
  return (
    <div className='max-w-[1350px] w-full  h-[300px]  mx-auto  bg-[#EEEFFB]'>
        <div className='flex flex-col md:flex-row   justify-center gap-9 p-7 items-center'>
            <div className='md:w-[300px] w-full  gap-3'>
              <h1 className='text-black text-2xl mt-6 ml-3'>Hekto</h1>
              <div className='flex    justify-between bg-white border rounded-md mt-6 mr-6 text-sm focus:outline-none p-2 w-[280px]  ' >
              <input type="text" placeholder='Enter Email Address'/>
              <button className='bg-pink-500 rounded text-white  p-2 px-3'>Sign Up</button>
              </div>
              <p className='mt-3 text-sm text-[#8A8FB9] ml-3'>Contact Info</p>
             <p className='text-sm text-[#8A8FB9] mt-3 ml-3'> 17 Princess Road, London, Greater London NW1 8JR, UK </p>
            </div>
            <div className='md:w-[200px] w-full '>
                <h1 className='text-black text-xl mt-9'>Catagories</h1>
                <ul className='mt-7 md:mt-6'>
                    <li className='mt-3 text-sm text-[#8A8FB9] ml-3'>Laptops & Computers</li>
                    <li className='mt-3 text-sm text-[#8A8FB9] ml-3'>Cameras & Photography</li>
                    <li className='mt-3 text-sm text-[#8A8FB9] ml-3'>Smart Phones & Tablets</li>
                    <li className='mt-3 text-sm text-[#8A8FB9] ml-3'>Video Games & Consoles</li>
                    <li className='mt-3 text-sm text-[#8A8FB9] ml-3'>Waterproof Headphones</li>
                </ul>

            </div>
            <div className='md:w-[200px] w-full '>
                <h1 className='text-black text-xl'>Customer Care</h1>
                <ul className='mt-6 '>
                    <li className='mt-3 text-sm text-[#8A8FB9] ml-3'>My Account</li>
                    <li className='mt-3 text-sm text-[#8A8FB9] ml-3'>Discount</li>
                    <li className='mt-3 text-sm text-[#8A8FB9] ml-3'>Returns</li>
                    <li className='mt-3 text-sm text-[#8A8FB9] ml-3'>Orders History</li>
                    <li className='mt-3 text-sm text-[#8A8FB9] ml-3'>Order Tracking</li>
                </ul>

            </div>
            <div className='md:w-[200px] w-full mr-9 '>
                <h1 className='text-black text-xl mt-4'>Pages</h1>
                <ul className='mt-6'>
                    <li  className='mt-3 text-sm text-[#8A8FB9] ml-3'>Blogs</li>
                    
                    <li className='mt-2 text-sm text-[#8A8FB9] ml-3'>Browse the Shop</li>
                    <li className='mt-3 text-sm text-[#8A8FB9] ml-3'>Category</li>
                    <li className='mt-3 text-sm text-[#8A8FB9] ml-3'>Pre-Built Pages</li>
                    <li className='mt-3 text-sm text-[#8A8FB9] ml-3'>Visual Composer Elements</li>
                    <li className='mt-3 text-sm text-[#8A8FB9] ml-3'>WooCommerce Pages</li>
                </ul>

            </div>
        </div>
      
    </div>
  )
}

export default Footer

