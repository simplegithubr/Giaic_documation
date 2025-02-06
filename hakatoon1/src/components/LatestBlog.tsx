

 import Image from 'next/image'


import React from 'react'

export default function LatestBlog() {
  return (
    <div className='md:w-[1200px] w-full h-full md:h-[600px] mx-auto text-center'>
        <div className='max-w-[400px] w-full mx-auto'>
        <h1 className='text-3xl font-bold  mb-8 text-[#1A0B5B] '>Leatest Blog</h1>
        </div>
        <div className='flex flex-col space-x-4 md:flex-row'>
          <div className='max-w-[400px] w-full md:h-[430px] h-full shadow-lg  p-7'>
            <div className=' ml-7'>
        <Image src="/blogimg (1).png" alt='' width={300} height={250}></Image>
        </div>
              <div className='md:w-[400px] w-full mt-2'>
                <div className='flex justify-around'>
                <p className=' text-[#1A0B5B] text-xs ml-8'>SaberAli</p>
                <p className=' text-[#1A0B5B] text-xs mr-16'>21 August,2020</p>                
                </div> 
                       <div className='flex flex-col mr-9 justify-between '>  
                <h4 className='text-lg font-semibold mt-2  text-[#1A0B5B]'>Top esssential Trends in 2021</h4>
                <p className='text-xs mt-2 text-gray-500'>More off this less hello  samlande  lied much <br />
                over tightly circa   horse taped mightly</p>
                 <a href="" className='mt-2 font-semibold text-sm  text-[#1A0B5B] underline'>Read More</a>
                 </div> 
                 </div>
                
                 </div>
               <div className='max-w-[400px] w-full h-full  md:h-[430px] shadow-lg  p-7'>
            <div >
        <Image src="/blogimg (2).png" alt='' width={300} height={250}></Image>
        </div>
              <div className='md;w-[400px] w-full mt-2'>
                <div className='flex justify-around'>
                <p className=' text-[#1A0B5B] text-xs ml-8'>SaberAli</p>
                <p className=' text-[#1A0B5B] text-xs mr-16'>21 August,2020</p>                
                </div> 
                       <div className='flex flex-col mr-9 justify-between '>  
                <h4 className='text-lg mt-2 font-semibold  text-[#FB244B]'>Top esssential Trends in 2021</h4>
                <p className='text-xs mt-2 text-gray-500'>More off this less hello  samlande  lied much <br />
                over tightly circa   horse taped mightly</p>
                 <a href="" className='mt-2 font-semibold text-sm   text-[#FB244B] underline'>Read More</a>
                 </div> 
                 </div>
                
                 </div>
                 <div className='max-w-[400px] h-full md:h-[430px] shadow-lg  p-7'>
            <div className=' ml-7'>
        <Image src="/blogimg (3).png" alt='' width={300} height={250}></Image>
        </div>
              <div className='md:w-[400px] w-full mt-2'>
                <div className='flex justify-around'>
                <p className=' text-[#1A0B5B] text-xs ml-8'>SaberAli</p>
                <p className=' text-[#1A0B5B] text-xs mr-16'>21 August,2020</p>                
                </div> 
                       <div className='flex flex-col mr-9 justify-between '>  
                <h4 className='text-lg mt-2 font-semibold  text-[#1A0B5B]'>Top esssential Trends in 2021</h4>
                <p className='text-xs mt-2 text-gray-500'>More off this less hello  samlande  lied much <br />
                over tightly circa   horse taped mightly</p>
                 <a href="" className='mt-2 font-semibold text-sm  text-[#1A0B5B] underline'>Read More</a>
                 </div> 
                 </div>
                
                 </div>
      </div>
    </div>
  )
}
