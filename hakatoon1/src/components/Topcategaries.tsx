
import React from 'react'
import Image from 'next/image'

function Topcategaries() {
  return (
    <div className='md:w-[992px] w-full h-full md:h-[400px] mx-auto text-center mt-9'>
        <div>
            <h1 className='text-3xl font-bold  mb-8 text-[#1A0B5B] ' >Top Categories</h1>
            <div className='flex flex-col md:flex-row ml-9  '>
                <div className=' md:w-[290px] w-full h-full md:h-[400px]'>

                    <div className='bg-slate-200 rounded-full w-40 h-40 p-6'>
                   <Image src="/image 20.png" alt='' width={170} height={170}></Image>
                   <button className='text-sm ml-4 px-2 bg-green-400 text-white p-0 rounded '>View Status</button>
                   </div>
                  <div className='flex gap-2 mt-3 ml-6'>
                    <p className='text-[#1A0B5B]  text-sm'>Mini</p>
                    <p className='text-[#1A0B5B]  text-sm'>LCW</p>
                    <p className='text-[#1A0B5B]  text-sm'>Chair</p>
                    </div>
                   
                   <p className='mr-[42%] mt-2 text-[#1A0B5B]  text-sm'>$56.00</p>
                   
                </div>
                <div className=' md:w-[290px] w-full h-full md:h-[300px]'>

<div className='bg-slate-200 rounded-full w-40 h-40 p-6'>
<Image src="/image 1168.png" alt='' width={150} height={150}></Image>
</div>
<div className='flex gap-2 mt-3 ml-6'>
<p className='text-[#1A0B5B]  text-sm'>Mini</p>
<p className='text-[#1A0B5B]  text-sm'>LCW</p>
<p className='text-[#1A0B5B]  text-sm'>Chair</p>
</div>

<p className='mr-[42%] mt-2 text-[#1A0B5B]  text-sm'>$56.00</p>

</div>
<div className=' md:w-[290px] w-full h-full md:h-[300px]'>

                    <div className='bg-slate-200 rounded-full w-40 h-40 p-6'>
                   <Image src="/image 1171.png" alt='' width={150} height={150}></Image>
                   
                   </div>
                  <div className='flex gap-2 mt-3 ml-6'>
                    <p className='text-[#1A0B5B]  text-sm'>Mini</p>
                    <p className='text-[#1A0B5B]  text-sm'>LCW</p>
                    <p className='text-[#1A0B5B]  text-sm'>Chair</p>
                    </div>
                   
                   <p className='mr-[42%] mt-2 text-[#1A0B5B]  text-sm'>$56.00</p>
                   
                </div>
                <div className=' md:w-[290px] w-full h-full md:h-[300px]'>

<div className='bg-slate-200 rounded-full w-40 h-40 p-6'>
<Image src="/image 20.png" alt='' width={150} height={150}></Image>
</div>
<div className='flex gap-2 mt-3 ml-6'>
<p className='text-[#1A0B5B]  text-sm'>Mini</p>
<p className='text-[#1A0B5B]  text-sm'>LCW</p>
<p className='text-[#1A0B5B]  text-sm'>Chair</p>
</div>

<p className='mr-[42%] mt-2 text-[#1A0B5B]  text-sm'>$56.00</p>

</div>

               
            </div>
        </div>
      
    </div>
  )
}

export default Topcategaries
