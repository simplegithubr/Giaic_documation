import Image from "next/image"
import Link from "next/link"
function TreandingProject() {
  return (
    <div className='md:w-[1350px] w-full md:h-[550px] h-full bg-[#F1F0FF]  '>
      
            {/**img */}
           
               <div className='md:w-[1050px] w-full h-full md:h-[550px] flex flex-col md:flex-row items-center justify-center  mx-auto gap-[55px] p-9 ' >
               <div className='md:w-[300px] w-full h-full md:h-[350px] bg-[#F5E1FC] rounded-full '>
               
            <Image src="/sofaimg.png" alt="" width={600} height={400}></Image>
                
              </div>
              <div className='mt-7 md:w-[500px] w-full' >
  
              <h2 className=' text-3xl mt-3 text-[#1A0B5B]'>Unique Features Of leatest &
              Trending Poducts</h2>
              <p className='text-sm mt-3 text-[#ACABC3]'>All frames constructed with hardwood solids and laminates</p>
              <p className='text-sm mt-3 text-[#ACABC3]'>Reinforced with double wood dowels, glue, screw - nails corner 
              blocks and machine nails</p>
              <p className='text-sm mt-3 text-[#ACABC3]'>Arms, backs and seats are structurally reinforced</p>
              
              <div className='flex flex-col md:flex-row'>
                  <Link className=' bg-pink-500  text-white  p-2 px-4 mt-4 ml-3 mr-4 ' href="/" >Add To Cart</Link>
                  
                  
                  <p className='md:mt-7 mt-2 ml-5 text-[#1A0B5B]'></p> 
                  <p className='md:mt-7  ml-2 text-[#1A0B5B]'></p>
                  
                  </div>
                  </div>
             
  
          </div>
          

          
        
      
    </div>
  )
}
export default TreandingProject
