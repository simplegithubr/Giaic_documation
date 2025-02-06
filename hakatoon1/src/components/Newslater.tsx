import Image from "next/image";
import React from 'react'

function Newslater() {
  return (
    <div className="h-[400px] ">
      <div className="relative w-full h-[350px]">
        <Image src="/rectangle.png" alt="bgimg" layout="fill" className="object-cover "></Image>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Get Latest Update By Subscribing<br /> Our Newsletter
          </h2>
          <button className="bg-pink-400 rounded-md px-6 p-2 text-white hover:bg-red-500 transition">Shop Now</button>
        </div>


      </div>
      


    </div>
  )
}

export default Newslater

