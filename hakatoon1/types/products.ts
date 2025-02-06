
export interface Product {
  _id: string;
  _type: "product";
  name: string;
  description: string;
  stockLevel: number; 
  price: number;
  category: string;  
  discountPercentage?: number; 
  image?: {
    asset: {
      url: string;
    };
  };
  slug: {
    _type: "slug";
    current: string;
  };
}


