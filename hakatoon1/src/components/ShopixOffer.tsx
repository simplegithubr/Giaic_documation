

import React from 'react'
import Image from 'next/image'

 function ShopixOffer() {
  return (
 <div className='max-w-[1200px] w-full  md:h-[400px] h-[1200px] mx-auto text-center px-4'>
    <div className='max-w-[700px] w-full  mx-auto  '>
        <h1 className='text-3xl font-bold  mb-8 text-[#1A0B5B] ' >What Shopex Offer!</h1>
    </div>
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-9" >
        
            <div className='bg-gray-100 max-w-[250px] w-full mx-auto p-6 flex justify-center items-center flex-col'>
                <Image src="/deliver.png" alt='' width={100}  height={100}></Image>
                <p className='mt-2 text-2xl text-[#1A0B5B]  '>24/7 Support</p>
            <p className='text-sm mt-2 text-gray-500 hover:text-[#1A0B5B]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
            </div>
            <div className='bg-gray-100 max-w-[250px] w-full mx-auto p-6 flex justify-center items-center flex-col'>
                <Image src="/cashback.png" alt='' width={100}  height={100}></Image>
                <p className='mt-3 text-2xl text-[#1A0B5B]  '>24/7 Support</p>
            <p className='text-sm mt-2 text-gray-500 hover:text-[#1A0B5B]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
            </div>
            <div className='bg-gray-100 max-w-[250px] w-full mx-auto p-6 flex justify-center items-center flex-col'>
                <Image src="/premium.png" alt='' width={100}  height={100}></Image>
                <p className='mt-3 text-2xl text-[#1A0B5B]  '>24/7 Support</p>
            <p className='text-sm mt-2 text-gray-500 hover:text-[#1A0B5B]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
            </div>
            <div className='bg-gray-100 max-w-[250px] w-full mx-auto p-6 flex justify-center items-center flex-col'>
                <Image src="/24-hours-support.png" alt='' width={100}  height={100}></Image>
                <p className='mt-3 text-2xl text-[#1A0B5B]  '>24/7 Support</p>
            <p className='text-sm mt-2 text-gray-500 hover:text-[#1A0B5B]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
            </div>


        </div>
    
 </div>
  )
}
export default ShopixOffer

