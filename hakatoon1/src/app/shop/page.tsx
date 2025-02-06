
import Sectionimg from '@/components/Sectionimg'
import React from 'react'
import Image from 'next/image'
import { GoStarFill } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { LuSearchX } from "react-icons/lu";

export default function page() {
  return (
    <div className='md:w-[1200px] w-full md:h-[2400px] h-full mx-auto p-8 '>
        <div className='bg-[#F6F5FF] w-full'>
        <div className='md:w-[300px] w-full  p-9  '>
            <h1 className='text-3xl font-bold'>Shop List</h1>
            <div className='flex space-x-3 mt-2'>
                
                <p className='text-sm'>Home </p>
                <p className='text-sm'>Pages</p>
                <p className='text-sm text-pink-600'>Shop List</p>
            </div>
        </div>
        </div>
        <div className='  mt-8 p-16 '>
            <div className='md:flex-row flex flex-col justify-between items-center'>
            <div >
                <h1 className='text-base font-semibold text-[#151875]'>Ecommerce Acceories & Fashion item </h1>
                <p className='text-xs text-[#8A8FB9] mt-2'>About 9,620 results (0.62 seconds)</p>
            </div>
         <div>
            <label htmlFor="perpage" className=' text-[#3F509E]'>PerPage:</label>
            <input type="text" size={2} className='border border-gray-400  mr-3' />
            <label htmlFor="perpage" className=' text-[#3F509E]'>Sort By:</label>
            <input type="text" placeholder='Best Match' size={8} className='border border-gray-400 px-1 mr-3'/> 
            <label htmlFor="perpage" className=' text-[#3F509E]'>View:</label>
            <input type="text" size={10} className='border border-gray-400'/>
            </div>
           
            </div>



        </div>

        <div className='max-w-[700px]  md:h-[1800px] h-full  space-y-9'>
            {/**1 */}
            <div className='flex items-center ml-9 '>

                <Image src="/blgs1.png" alt='' width={350} height={300}></Image>
                <div className=' space-y-5 ml-9'>
                <h3 className='text-[#111C85] text-xl font-semibold'>Accumsan tincidunt</h3>
                <div className='flex space-x-8'>
                    <p className='text-xs text-[#111C85] '>$26.00</p>
                    <p className='text-xs text-[#FF2AAA]'>$52.00</p>
                    <div className='flex  '>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='gray' className='mt-1 '/>
                                    </div>
                   
                </div>
                <p className='text-xs text-[#9295AA]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing 
                    in phasellus non in justo.</p>
                    <div className='flex space-x-8'>
                    <FiShoppingCart />
                    <CiHeart />
                    <LuSearchX />
                    </div>
                    </div>
            </div>
                {/**2 */}
            <div className='flex items-center ml-9 '>

                <Image src="/blgs.png" alt='' width={350} height={300}></Image>
                <div className=' space-y-5 ml-9'>
                <h3 className='text-[#111C85] text-xl font-semibold'>In nulla</h3>
                <div className='flex space-x-8'>
                    <p className='text-xs text-[#111C85] '>$26.00</p>
                    <p className='text-xs text-[#FF2AAA]'>$52.00</p>
                    <div className='flex  '>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='gray' className='mt-1 '/>
                                    </div>
                   
                </div>
                <p className='text-xs text-[#9295AA]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing 
                    in phasellus non in justo.</p>
                    <div className='flex space-x-8'>
                    <FiShoppingCart />
                    <CiHeart />
                    <LuSearchX />
                    </div>
                    </div>
            </div>
            {/**3 */}

            <div className='flex items-center ml-9 '>

                <Image src="/blgs3.png" alt='' width={350} height={300}></Image>
                <div className=' space-y-5 ml-9'>
                <h3 className='text-[#111C85] text-xl font-semibold'>Vel sem</h3>
                <div className='flex space-x-8'>
                    <p className='text-xs text-[#111C85] '>$26.00</p>
                    <p className='text-xs text-[#FF2AAA]'>$52.00</p>
                    <div className='flex  '>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='gray' className='mt-1 '/>
                                    </div>
                   
                </div>
                <p className='text-xs text-[#9295AA]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing 
                    in phasellus non in justo.</p>
                    <div className='flex space-x-8'>
                    <FiShoppingCart />
                    <CiHeart />
                    <LuSearchX />
                    </div>
                    </div>
            </div>
        {/**4 */}


            <div className='flex items-center ml-9 '>

                <Image src="/blgs5.png" alt='' width={350} height={300}></Image>
                <div className=' space-y-5 ml-9'>
                <h3 className='text-[#111C85] text-xl font-semibold'>Porttitor cum</h3>
                <div className='flex space-x-8'>
                    <p className='text-xs text-[#111C85] '>$26.00</p>
                    <p className='text-xs text-[#FF2AAA]'>$52.00</p>
                    <div className='flex  '>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='gray' className='mt-1 '/>
                                    </div>
                   
                </div>
                <p className='text-xs text-[#9295AA]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing 
                    in phasellus non in justo.</p>
                    <div className='flex space-x-8'>
                    <FiShoppingCart />
                    <CiHeart />
                    <LuSearchX />
                    </div>
                    </div>
            </div>
            {/**5 */}

            <div className='flex items-center ml-9 '>

                <Image src="/blgs4.png" alt='' width={350} height={300}></Image>
                <div className=' space-y-5 ml-9'>
                <h3 className='text-[#111C85] text-xl font-semibold'>Nunc in</h3>
                <div className='flex space-x-8'>
                    <p className='text-xs text-[#111C85] '>$26.00</p>
                    <p className='text-xs text-[#FF2AAA]'>$52.00</p>
                    <div className='flex  '>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='gray' className='mt-1 '/>
                                    </div>
                   
                </div>
                <p className='text-xs text-[#9295AA]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing 
                    in phasellus non in justo.</p>
                    <div className='flex space-x-8'>
                    <FiShoppingCart />
                    <CiHeart />
                    <LuSearchX />
                    </div>
                    </div>
            </div>
          {/**6 */}
            <div className='flex items-center ml-9 '>

                <Image src="/blgs6.png" alt='' width={350} height={300}></Image>
                <div className=' space-y-5 ml-9'>
                <h3 className='text-[#111C85] text-xl font-semibold'>Vitae facilisis</h3>
                <div className='flex space-x-8'>
                    <p className='text-xs text-[#111C85] '>$26.00</p>
                    <p className='text-xs text-[#FF2AAA]'>$52.00</p>
                    <div className='flex  '>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='gray' className='mt-1 '/>
                                    </div>
                   
                </div>
                <p className='text-xs text-[#9295AA]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing 
                    in phasellus non in justo.</p>
                    <div className='flex space-x-8'>
                    <FiShoppingCart />
                    <CiHeart />
                    <LuSearchX />
                    </div>
                    </div>
            </div>

             {/**7 */}
            <div className='flex items-center ml-9 '>

                <Image src="/blgs7.png" alt='' width={350} height={300}></Image>
                <div className=' space-y-5 ml-9'>
                <h3 className='text-[#111C85] text-xl font-semibold'>Curabitur lectus</h3>
                <div className='flex space-x-8'>
                    <p className='text-xs text-[#111C85] '>$26.00</p>
                    <p className='text-xs text-[#FF2AAA]'>$52.00</p>
                    <div className='flex  '>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='yellow' className='mt-1 '/>
                                    <GoStarFill size={9} fill='gray' className='mt-1 '/>
                                    </div>
                   
                </div>
                <p className='text-xs text-[#9295AA]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing 
                    in phasellus non in justo.</p>
                    <div className='flex space-x-8'>
                    <FiShoppingCart />
                    <CiHeart />
                    <LuSearchX />
                    </div>
                    </div>
            </div>




        </div>
       
        <Sectionimg/>
      
    </div>
  )
}
