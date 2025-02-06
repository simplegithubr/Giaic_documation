
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function DiscountItem() {
  return (
    <div className='max-w-[920px] w-full h-full md:h-[600px] mx-auto text-center px-4  '>
        <div className='mt-9 '>
          {/**header section */}
         <div className='md:w-[600px] w-full  mx-auto'>
          <h1 className='text-3xl font-bold  mb-8'>Discount Item</h1>
          </div>
          {/**links section */}
          <div className='md:w-[827px] w-full mx-auto mt-4 flex justify-center gap-6'>
          <Link className='text-[#FB244B] underline mr-9  ' href="" >Wood Chair</Link>
          <Link className='text-[#151875] mr-9' href="" >Plastic Chair</Link>
          <Link className='text-[#151875] mr-9' href="" >Sofa Colletion</Link>
        
         </div>


      </div>
      {/**contact section */}
      <div className='w-full mt-10'>
      <div className='flex flex-col md:flex-row items-center gap-8 '>
        {/**left-section */}
       <div className='md:w-1/2 w-full text-left '>
        <h1 className='text-2xl font-bold text-[#151875] mr-[25%]'>20% Discount Of All Products</h1>
        <h5 className='mr-[65%] mt-4 text-sm text-[#ACABC3]'>Eams Sofa Compact</h5>
        <p className='text-sm mt-4   text-[#ACABC3]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Eu eget  feugiat habitasse nec,  bibendum condimentum.</p> 
        {/**feature list */}
        <div className='mt-4 space-y-2' >
            <p className='text-sm   text-[#ACABC3]'>✔Material expose like metals</p>
            <p className='text-sm   text-[#ACABC3]'>✔Clear lines and geomatric figures</p>
       
            <p className='text-sm   text-[#ACABC3]'>✔ Simple neutral colours.</p>
            <p className='text-sm  text-[#ACABC3]' >✔Material expose like metals</p>
        </div>
        {/**button */}
        <button className="mt-6 px-6  py-2 bg-pink-500 text-white rounded hover:bg-pink-600">Shop Now</button>
       

       </div>
       {/**rigt section */}
       <div className=' md:w-1/2 w-full flex justify-center'>
       <div className='bg-pink-200 rounded-full p-4'>
       <Image src="/tortuga.png" alt='image' width={700} height={800} className='rounded-full' ></Image>
       </div>
       </div>

      </div>
      </div>
      
    </div>
  )
}
