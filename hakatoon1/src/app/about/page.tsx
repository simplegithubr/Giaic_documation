import React from 'react'
import Image from 'next/image'


export default function page() {
  return (
    <div className='md:w-[1200px] w-full md:h-[15 00px] h-full  mx-auto p-8  '>
        <div className='bg-[#F6F5FF] w-full'>
        <div className='md:w-[300px] w-full p-9  '>
            <h1 className='text-3xl font-bold'>About Us</h1>
            <div className='flex space-x-3 mt-2'>
                
                <p className='text-sm'>Home </p>
                <p className='text-sm'>Pages</p>
                <p className='text-sm text-pink-600'>About Us</p>
            </div>
        </div>
        </div>
        
        <div className='md:w-[1000px] w-full md:h-[500px] h-full mx-auto mt-9 p-4 '>
            <div className='md:flex-row flex flex-col gap-9 mt-9 '>
                <Image src="/about.png" alt='' width={500} height={300} className='border-l-8 border-blue-600'></Image>
                <div className=' space-y-11  mt-9'>
                <h1 className='text-3xl font-josfine sans text-[#151875] '>Know About Our Ecomerce
                Business, History</h1>
                <p className='text-base text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor
                     lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                    <button className='bg-pink-600 rounded text-white text-xs  p-2 px-3'>Contact us</button>
                    </div>
            </div>
        </div>

        <div className='max-w-[300px] w-full  mx-auto  p-4 '>
        <h1 className='text-3xl font-bold  mb-8 text-black' >Our Features</h1>
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

        <div className='md:h-[500px] md:w-[500px] h-full w-full mx-auto mt-9 '>
            <div className='flex flex-col justify-between space-x-5 items-center'>
            <h1 className='text-3xl font-bold mt-9 mb-8 text-black'>Our Client Say!</h1>
            <div className='flex space-x-3 mt-9 '>
                <Image src="/aboutimg (1).png" alt='' width={100} height={100}></Image>
                <Image src="/aboutimg (2).png" alt='' width={100} height={100}></Image>
                <Image src="/aboutimg (3).png" alt='' width={100} height={100}></Image>
            </div>
            <h5 className='mt-2 text-xl '>Selina Gomez
            </h5>
            <p className='mt-2 text-[#9096B2] text-xs'>Ceo At Webecy Digital</p>
            <p className='mt-2 text-base font-sans text-[#9096B2] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam
                 vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. 
                Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                <div className='flex space-x-3'>
                <p className='text-red-600 font-semibold text-xl'>_</p>
                <p className='text-red-600 font-semibold text-xl'>__</p>
                <p className='text-red-600 font-semibold text-xl'>_</p>
                </div>

        </div>
        </div>
        
      
    </div>
  )
}
