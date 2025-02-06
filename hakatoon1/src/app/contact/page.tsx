

import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div className='md:w-[1200px] w-full md:h-[1100px] h-full mx-auto p-8 '>
        <div className='bg-[#F6F5FF] w-full'>
        <div className='md:w-[300px] w-full p-9  '>
            <h1 className='text-3xl font-bold'>Contact Us</h1>
            <div className='flex space-x-3 mt-2'>
                
                <p className='text-sm'>Home </p>
                <p className='text-sm'>Pages</p>
                <p className='text-sm text-pink-600'>Contact Us</p>
            </div>
        </div>
        </div>
      <div className=' md:flex-row flex flex-col justify-between mt-9  md:w-[1100px] w-full mx-auto'>
         <div className='md:w-[800px] w-full mt-9'>
            <h1 className='text-3xl font-bold text-[#151875]'>Information About us</h1>
            <p className='text-sm  font-medium mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices
                 mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat
                 vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
         </div>
         <div className=' mt-9'>
            <h1 className='ml-[55%] font-bold text-2xl text-[#151875]'>Contact Way</h1>
            <div className='flex justify-end space-x-9 md:w-[700px] w-full mt-2'>
                <div>
               <p className='mt-3 text-sm font-normal text-[#8A8FB9]  '>Tel: 877-67-88-99 <br />
               E-Mail: shop@store.com</p>
               <p className='mt-7 text-sm font-normal text-[#8A8FB9]'>20 Margaret st, London <br />
               Great britain, 3NM98-LK</p>
               </div>
               <div>
                <p className='mt-3 text-sm font-normal text-[#8A8FB9]'> Support Forum <br />
                For over 24hr
                </p>
                <p className='mt-7 text-sm font-normal text-[#8A8FB9]'>Free standard shipping <br />
                on all orders.</p>
               </div>
            </div>
            </div>
      </div>
      <div className='md:flex-row flex flex-col justify-between md:w-[1000px] w-full mt-[12%] s md:h-[400px] h-full mx-auto '>
        
        <div className='mr-9 flex flex-col justify-between'>
          <h1 className='text-3xl font-sans text-[#151875] '>Get In Touch</h1>
          <p className='text-xs mt-2 text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat 
            vitae eget dolor los vitae lobortis quis bibendum quam.</p>
           <div className='flex mt-3'>
              <input type="text" placeholder='Your Name*' className='border border-gray-500 mr-5 px-9 text-xs p-2' />
              <input type="text" placeholder='Your E-mail' className='border border-gray-500  px-9 text-xs p-2'/> 
              </div>
           
            <input type="text" placeholder='Subject*'   className='border border-gray-500  mr-3 text-xs mt-5 p-2'/> <br />
           <input type="text" placeholder='Type Your Messege*'  className='border border-gray-500 py-9 mb-4  mr-3 text-xs p-2'/> <br />
           <button className='bg-pink-500 p-2 rounded text-white hover:bg-pink-400'>Send Mail</button>
        </div>
        <Image src="/Group 124.png" alt='' width={800} height={650} className='ml-18'></Image>
      </div>
     
      
    </div>
  )
}
