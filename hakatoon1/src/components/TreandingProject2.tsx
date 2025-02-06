
import React from 'react'
import Image from 'next/image'

 function TreandingProject2() {
  return (
    <div className='md:w-[992px] w-full h-full md:h-[350px] mx-auto text-center mt-9 '>
    <div className='md:w-[600px] w-full f-full md:h-42px] mx-auto  '>
        <h1 className='text-3xl font-bold  mb-8 text-[#1A0B5B] ' >Trending Products</h1>
    
    </div>
    <div className="md:w-[1000px] md:grid md:grid-cols-4 flex-col gap-6">
  {/**product 1 */}
  <div className="flex flex-col items-center">
    <div className="bg-gray-300 w-[200px] h-[200px] p-6 flex justify-center items-center">
      <Image src="/cheress1 (1).png" alt="Product Image" width={150} height={150}  />
    </div>
    <div className="mt-3 text-center">
      <p>Cantilever chair</p>
      <div className="flex gap-5 justify-center mt-1">
        <p className="text-sm text-[#151875]">$26.00 </p>
        <p className="text-[#ACABC3]">$42.00</p>
      </div>
    </div>
  </div>

  {/* Product 2 */}
  <div className="flex flex-col items-center">
    <div className="bg-gray-300 w-[200px] h-[200px] p-6 flex justify-center items-center">
      <Image src="/cheress1 (4).png" alt="Product Image" width={150} height={150}  />
    </div>
    <div className="mt-3 text-center">
      <p>Cantilever chair</p>
      <div className="flex gap-5 justify-center mt-1">
        <p className="text-sm text-[#151875]">$26.00 </p>
        <p className="text-[#ACABC3]">$42.00</p>
      </div>
    </div>
  </div>

  {/* Product 3 */}
  <div className="flex flex-col items-center">
    <div className="bg-gray-300 w-[200px]   h-[200px] p-6 flex justify-center items-center">
      <Image src="/cheress1 (2).png" alt="Product Image" width={150} height={150}  />
    </div>
    <div className="mt-3 text-center">
      <p>Cantilever chair</p>
      <div className="flex gap-5 justify-center mt-1">
        <p className="text-sm text-[#151875]">$26.00 </p>
        <p className="text-[#ACABC3]">$42.00</p>
      </div>
    </div>
  </div>
  {/* Product 4 */}
  <div className="flex flex-col items-center">
    <div className="bg-gray-300 w-[200px] h-[200px] p-6 flex justify-center items-center">
      <Image src="/cheress1 (3).png"   alt="Product Image" width={150} height={150}  />
    </div>
    <div className="mt-3 text-center">
      <p>Cantilever chair</p>
      <div className="flex gap-5   justify-center mt-1">
        <p className="text-sm text-[#151875]">$26.00 </p>
        <p className="text-[#ACABC3]"  >$42.00</p>
      </div>
    </div>
  </div>
</div>


  
    
 </div>
  )
}
export default TreandingProject2