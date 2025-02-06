
import Sectionimg from '@/components/Sectionimg'
import React from 'react'

export default function page() {
  return (
    <div className='md:w-[1200px] w-full md:h-[800px] h-full mx-auto p-8 '>
        <div className='bg-[#F6F5FF] w-full'>
        <div className='md:w-[300px] w-full p-9  '>
            <h1 className='text-3xl'>My Account</h1>
            <div className='flex space-x-3 mt-2'>
                
                <p className='text-sm'>Home </p>
                <p className='text-sm'>Pages</p>
                <p className='text-sm text-pink-600'>My Account</p>
            </div>
        </div>
        </div>
        <div className='md:w-[500px] w-full   mx-auto p-9 mt-9 bg-white shadow-md'>
            
            <h1 className='ml-[42%] text-2xl text-black font-bold'>Login</h1>
            <p className='ml-16 mt-2 text-sm font-normal text-[#9096B2]'> Please login using account detail bellow.</p>
           
            <form action="" className='flex flex-col gap-3 p-5'>
                <input type="text" placeholder='Email Address' className='p-2 border'/>
                <input type="text"  placeholder='Password' className='p-2 border'/>
                <p className='text-sm text-[#9096B2]'>Forgot your password?</p>
                <button className='bg-pink-600 text-white p-2'>Sign In</button>
                <p className='text-sm text-[#9096B2]'>Don’t have an Account?Create account</p>

            </form>

        </div>
        <Sectionimg/>
      
    </div>
  )
}
