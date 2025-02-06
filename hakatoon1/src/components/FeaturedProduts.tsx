
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { client } from "@/sanity/lib/client";
import {  four } from "@/sanity/lib/quaries";
import { Product } from "../../types/products";


function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchdata: Product[] = await client.fetch(four);
        setProducts(fetchdata);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 py-12 w-[1200px] mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 ">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md p-4 rounded-md flex flex-col items-center"
          >
            {product.image?.asset?.url && (
              <Image
                src={product.image.asset.url}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-md"
              />
            )}
            <h2 className="text-xs font-semibold mt-4">{product.name}</h2>
           
            <p className="text-lg font-bold text-green-500 mt-2">
              ${product.price}
            </p>
            <p className="text-sm text-red-500">
  Discount: {product.discountPercentage ?? 0}%
</p>
     
          
           </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;