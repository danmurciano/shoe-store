import React from "react";
import './ProductList.css';
import { Product } from "../interfaces/product";

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="row ProductList">
      {products.map((product) => (
        <div key={product.id} className="col-3">
          <a href={`products/${product.id}`}>
              <img src={`images/desktop/${product.thumbnail}`} alt='product' />
          </a>
          <a href={`products/${product.id}`}>
              <h4> {product.brand} </h4>
          </a>      
          <p> {product.style} </p>
          <h5> {`$${product.price}`} </h5>
        </div>
      ))}
    </div>
  );
};

export default ProductList;