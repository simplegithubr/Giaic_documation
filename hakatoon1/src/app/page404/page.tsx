
import Sectionimg from '@/components/Sectionimg'
import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div className='md:w-[1200px] w-full md:h-[800px] h-full mx-auto p-8 '>
        <div className='bg-[#F6F5FF] w-full'>
        <div className='md:w-[300px] w-full p-9  '>
            <h1 className='text-3xl font-bold'>404 Not Found</h1>
            <div className='flex space-x-3 mt-2'>
                
                <p className='text-sm'>Home </p>
                <p className='text-sm'>Pages</p>
                <p className='text-sm text-pink-600'>404 Not Found</p>
            </div>
        </div>
        </div>
       <div className='md:w-[700px] w-full md:h-[500px] h-full mx-auto'>

        <Image src="/Group 123.png" alt='' width={600} height={500}></Image>
        <button className='bg-pink-600 rounded text-white text-xs ml-[33%] p-2 px-3'>Back To Home</button>
       </div>
        <Sectionimg/>
      
    </div>
  )
}


