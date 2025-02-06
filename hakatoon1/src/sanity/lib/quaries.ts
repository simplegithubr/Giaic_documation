 import { groq } from "next-sanity";
export const four = groq`*[_type == "product"][0..3] {
  _id,
  name,
  price,
  description,
  discountPercentage,  
  image {
    asset -> {
      _id,
      url
    }
  }
}`;


