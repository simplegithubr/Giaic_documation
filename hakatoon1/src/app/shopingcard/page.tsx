

import React from 'react'
import Image from 'next/image'

export default function Cart() {
  return (
    <div className='md:w-[1200px] w-full md:h-[1200px] h-full mx-auto p-8 '>
        <div className='bg-[#F6F5FF] w-full'>
        <div className='md:w-[300px] w-full p-9  '>
            <h1 className='text-3xl font-bold text-[#101750]'>Shopping Curt</h1>
            <div className='flex space-x-3 mt-2'>
                
                <p className='text-sm'>Home </p>
                <p className='text-sm'>Pages</p>
                <p className='text-sm text-pink-600'>Shopping Curt</p>
            </div>
        </div>
        </div>
       <div className='md:w-[900px] w-full h-full md:h-800px] mt-9 p-9'>
        <ul className=' flex  justify-between '>
          <li className='text-xl text-[#1D3178] font-semibold'>Product</li>
          <li className='text-xl text-[#1D3178] font-semibold'>Price</li>
          <li className='text-xl text-[#1D3178] font-semibold'>Quantity</li>
          <li className='text-xl text-[#1D3178] font-semibold'>Total</li>
          <li className='text-xl text-[#1D3178] font-semibold'>Cart Totals</li>
        </ul>
        <div className='md:flex-row flex flex-col w-[1000px] '>
          <div>
        
          <div className='  flex   mt-9 space-x-3 md:w-[500px] w-full '>
            <Image src="/Rectangle 34.png" alt='' width={100} height={100} ></Image>
             <div >
              <h5 className='text-xs text-[#000000]'>Ut diam consequat</h5>
              <div className='flex'>
              <p className='text-[#A1A8C1] text-xs'>Color:</p>
              <p className='text-[#A1A8C1] text-xs'>Brown</p>
              </div>
              <div className='flex'>
                <p className='text-[#A1A8C1] text-xs'>Size:</p>
                <p className='text-[#A1A8C1] text-xs'>XL</p>
              </div>
              </div>
              <div className='md:flex-row flex flex-col  space-x-14 '>
              <p className='ml-[45%] mt-6 text-sx text-[#15245E]'>$32.00</p>
              <p className=' mt-6 blur-sm '>1</p>
              <p className=' mt-6 text-sx text-[#15245E]'>‎£219.00</p>
              </div>
            
          </div>

          < hr />
          <div className=' flex mt-9 space-x-3 md:w-[500px] w-full'>
            <Image src="/Rectangle 35.png" alt='' width={100} height={100} ></Image>
             <div >
              <h5 className='text-xs text-[#000000]'>Vel faucibus posuere</h5>
              <div className='flex'>
              <p className='text-[#A1A8C1] text-xs'>Color:</p>
              <p className='text-[#A1A8C1] text-xs'>Brown</p>
              </div>
              <div className='flex'>
                <p className='text-[#A1A8C1] text-xs'>Size:</p>
                <p className='text-[#A1A8C1] text-xs'>XL</p>
              </div>
              </div>
              <div className='md:flex-row flex flex-col  space-x-14 '>
              <p className='ml-[45%] mt-6 text-sx text-[#15245E]'>$32.00</p>
              <p className=' mt-6 blur-sm '>1</p>
              <p className=' mt-6 text-sx text-[#15245E]'>‎£219.00</p>
              </div>
            
          </div>

          < hr />
          <div className='flex mt-9 space-x-3 md:w-[500px] w-full'>
            <Image src="/Rectangle 36.png" alt='' width={100} height={100} ></Image>
             <div >
              <h5 className='text-xs text-[#000000]'>Ac vitae vestibulum</h5>
              <div className='flex'>
              <p className='text-[#A1A8C1] text-xs'>Color:</p>
              <p className='text-[#A1A8C1] text-xs'>Brown</p>
              </div>
              <div className='flex'>
                <p className='text-[#A1A8C1] text-xs'>Size:</p>
                <p className='text-[#A1A8C1] text-xs'>XL</p>
              </div>
              </div>
              <div className='md:flex-row flex flex-col  space-x-14 '>
              <p className='ml-[45%] mt-6 text-sx text-[#15245E]'>$32.00</p>
              <p className=' mt-6 blur-sm '>1</p>
              <p className=' mt-6 text-sx text-[#15245E]'>‎£219.00</p>
              </div>
            
          </div>

          < hr />
          <div className=' flex  mt-9 space-x-3 md:w-[500px] w-full'>
            <Image src="/Rectangle 37.png" alt='' width={100} height={100} ></Image>
             <div >
              <h5 className='text-xs text-[#000000]'>Elit massa diam</h5>
              <div className='flex'>
              <p className='text-[#A1A8C1] text-xs'>Color:</p>
              <p className='text-[#A1A8C1] text-xs'>Brown</p>
              </div>
              <div className='flex'>
                <p className='text-[#A1A8C1] text-xs'>Size:</p>
                <p className='text-[#A1A8C1] text-xs'>XL</p>
              </div>
              </div>
              <div className='md:flex-row flex flex-col   space-x-14 '>
              <p className='ml-[45%] mt-6 text-sx text-[#15245E]'>$32.00</p>
              <p className=' mt-6 blur-sm '>1</p>
              <p className=' mt-6 text-sx text-[#15245E]'>‎£219.00</p>
              </div>
            
          </div>

          < hr />
          <div className=' flex mt-9 space-x-3 md:w-[500px] w-full'>
            <Image src="/Rectangle 38.png" alt='' width={100} height={100} ></Image>
             <div >
              <h5 className='text-xs text-[#000000] '>Proin pharetra elementum</h5>
              <div className='flex'>
              <p className='text-[#A1A8C1] text-xs'>Color:</p>
              <p className='text-[#A1A8C1] text-xs'>Brown</p>
              </div>
              <div className='flex '>
                <p className='text-[#A1A8C1] text-xs'>Size:</p>
                <p className='text-[#A1A8C1] text-xs'>XL</p>
              </div>
              </div>
              <div className='md:flex-row flex flex-col  space-x-14  '>
              <p className='ml-[45%] mt-6 text-sx text-[#15245E]'>$32.00</p>
              <p className=' mt-6 blur-sm '>1</p>
              <p className=' mt-6 text-sx text-[#15245E]'>‎£219.00</p>
              </div>
            
          </div>

          < hr />

          </div>


       
       
        <div className='ml-[22%] mt-9 space-y-6 md:w-[300px] w-full md:h-[250px] h-full text-center  bg-[#F4F4FC]'>
          <div className='flex justify-between ml-5'>
            <h4 className='mt-5'>Subtotals:</h4>
            <p className='mt-5 mr-3 text-sx text-[#15245E]'>‎£219.00</p>
          </div>
          <hr />
          <div className='flex justify-between ml-5'>
            <h4>Totals:</h4>
            <p className='mr-3 text-sx text-[#15245E]'>‎£325.00</p>
          </div>
          <hr />
          <p className='text-xs'>Shipping & taxes calculated at checkout</p>
          <button className='bg-[#19D16f]  text-white p-1 px-6 mb-9'>Proceed To Checkout</button>
        </div>
       
       
        
        
        </div>
        <div className='flex flex-row justify-between mt-3'>
        <button className='bg-pink-500 text-white p-1 px-4 rounded'>Update Curt</button>
        <button className= ' bg-pink-500 text-white p-1 px-4 rounded mr-[45%]'>Clear Curt</button>
        </div>
        




       </div>
      
      
    </div>
  )
}

