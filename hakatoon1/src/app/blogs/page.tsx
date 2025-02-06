
import Sectionimg from '@/components/Sectionimg'
import React from 'react'
import Image from 'next/image'


export default function page() {
  return (
    <div className='md:w-[1200px] w-full md:h-[2200px] h-full mx-auto p-8 '>
        <div className='bg-[#F6F5FF] w-full'>
        <div className='md:w-[300px] w-full  p-9  '>
            <h1 className='text-3xl font-bold'>Blog Page</h1>
            <div className='flex space-x-3 mt-2'>
                
                <p className='text-sm'>Home </p>
                <p className='text-sm'>Pages</p>
                <p className='text-sm text-pink-600'>Blog Page</p>
            </div>
        </div>
        </div>
       <div className='md:w-[800px] w-full md:h-[1700px] h-full space-y-7 mx-auto p-9 mt-9'>
        <div>
            <Image src="/blogss (1).png" alt='' width={700} height={650}></Image>
            <div className='flex mt-2 space-x-3 p-3 '>
                <p className='text-sm text-[#151875] bg-pink-200'>Surf Auxion</p>
                <p  className='text-sm text-[#151875] bg-orange-200'>Aug 09 2020</p>
            </div>
            <h2 className='text-2xl text-[#151875] font-semibold p-2'>Mauris at orci non vulputate diam tincidunt nec.</h2>
            <p className='text-xs text-[#8A8F8B]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis
                 quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, 
                porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                <p className='mt-2 text-[#151875] font-semibold '>Read More </p>
        </div>

        <div>
            <Image src="/blogss (2).png" alt='' width={700} height={650}></Image>
            <div className='flex mt-2 space-x-3 p-3 '>
                <p className='text-sm text-[#151875] bg-pink-200'>Surf Auxion</p>
                <p  className='text-sm text-[#151875] bg-orange-200'>Aug 09 2020</p>
            </div>
            <h2 className='text-2xl text-[#151875] font-semibold p-2'>Aenean vitae in aliquam ultrices lectus. Etiam.</h2>
            <p className='text-xs text-[#8A8F8B]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis
                 quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, 
                porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                <p className='mt-2 text-[#151875] font-semibold '>Read More </p>
        </div>
        <div>
            <Image src="/blogss (3).png" alt='' width={700} height={650}></Image>
            <div className='flex mt-2 space-x-3 p-3 '>
                <p className='text-sm text-[#151875] bg-pink-200'>Surf Auxion</p>
                <p  className='text-sm text-[#151875] bg-orange-200'>Aug 09 2020</p>
            </div>
            <h2 className='text-2xl text-[#151875] font-semibold p-2'>Sit nam congue feugiat nisl, mauris amet nisi. </h2>
            <p className='text-xs text-[#8A8F8B]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis
                 quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, 
                porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
                <p className='mt-2 text-[#151875] font-semibold '>Read More </p>
        </div>




       </div>
       
        <Sectionimg/>
      
    </div>
  )
}
