"use client";

import React, { useEffect, useState } from "react";
import { client } from '@/sanity/lib/client';
import { groq } from "next-sanity";
import { Product } from "../../../types/products";


async function getAllProducts() {
  return client.fetch(
    groq`*[_type == "product"] | order(_createdAt desc) {
      _id,
      name,
      price,
      description,
      discountPercentage, 
      Category,
      slug,
      image {
        asset -> {
          url
        }
      }
    }`
  );
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]); 

  useEffect(() => {
    async function fetchData() {
      const data = await getAllProducts(); 
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="md:h-[3200px] h-full">
      <div className='bg-[#F6F5FF] w-full p-4 py-4 mt-3'>
        <div className='md:w-[300px] w-full p-9'>
          <h1 className='text-3xl font-bold text-[#101750]'>Shopping Grid</h1>
          <div className='flex space-x-3 mt-2'>
            <p className='text-sm'>Home </p>
            <p className='text-sm'>Pages</p>
            <p className='text-sm text-pink-600'>Shopping Grid</p>
          </div>
        </div>
      </div>

      <h1 className="text-center p-4 text-2xl font-bold underline-offset-2">Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[800px] mx-auto">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded">
            <img
              src={product.image?.asset?.url}
              alt={product.name}
              className="w-[300px] h-68 object-cover rounded"
            />
            <h2 className="text-xs font-bold mt-2">{product.name}</h2>
            <p className="text-gray-600 mt-2">${product.price}</p>
            <p className="text-sm text-red-500">
              Discount: {product.discountPercentage ?? 0}%
            </p>
            <button className="bg-blue-500 p-2 text-sm mt-3 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-150 ease-out">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
