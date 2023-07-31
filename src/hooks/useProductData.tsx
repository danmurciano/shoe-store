import { useState } from 'react';
import { Product } from '../interfaces/product';
import { products } from '../data/product_data';

const useProductData = () => {
  const [productData, setProductData] = useState<Product[]>(products);

  const findProductById = (productId: number): Product | undefined => {
    return productData.find(product => product.id === productId);
  };

  return { productData, findProductById };
};

export default useProductData;
