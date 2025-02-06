
import FeaturedProducts from "@/components/FeaturedProduts"
import Hero from "@/components/Hero"
import LatestProducts from "@/components/LatestProduct"
import ShopixOffer from "@/components/ShopixOffer"
import TreandingProject from "@/components/TreandingProject"
import TreandingProject2 from "@/components/TreandingProject2"
import DiscountItem from "@/components/DiscountItem"
import Newslater from '@/components/Newslater'

import React from 'react'
import Topcategaries from "@/components/Topcategaries"
import LatestBlog from "@/components/LatestBlog"
import Sectionimg from "@/components/Sectionimg"

function page() {
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
      <LatestProducts/>
      <ShopixOffer/>
      <TreandingProject/>
      <TreandingProject2/>
      <DiscountItem/>
      <Topcategaries/>
      <Newslater/>
      <Sectionimg/>
      <LatestBlog/>
      
    </div>
  )
}

export default page
