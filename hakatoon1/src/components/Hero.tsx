import Image from 'next/image'
 import React from 'react';
import Link from 'next/link';



export default function Hero() {
  return (
    <div className="py-12  md:w-[1200px] max-h-[1300px] w-full h-full p-14 mt-9 ml-9 mx-auto  ">
      <div className='max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-center '>
        <Image src="/chair2.png" alt='' width={300} height={300} className='mb-[33%]'></Image>
        <div className='text-center lg:text-left md:w-1/2 space-y-4'>
        <h1 className='text-black text-4xl mb-9'>New Furniture Collection
        Trends in 2020</h1>
        <p className='text-sm text-pink-500 font-medium'>
        Best Furniture For Your Castle...
        </p>
        <h1 className='text-4xl font-bold text-gray-600 leading-tight'></h1>
        <p className='text-gray-600'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
                    est adipiscing in phasellus non in justo.
        </p>
        <br />
        <Link  href="/shopgrid" className='bg-pink-500 text-white px-6 p-2 rounded-md mt-3 hover:bg-yellow-300 cursor-pointer '>Shop Now</Link>
        

        </div>

        <div className='md:w-1/2 flex items-center justify-center relative mt-8 md:mt-0'>
        <Image src="/chair.png" alt="chair" width={500}  height={500} className=' mt-6'/>
        <div className='absolute top-4 right-4 bg-blue-500 text-white text-sm font-bold rounded-full md:w-16 md:h-16 flex items-center justify-center  '>
        50% <br /> off
        </div>

        </div>



      </div>
      
    </div>
  )
}
