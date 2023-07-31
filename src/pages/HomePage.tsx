import React from 'react';
import './HomePage.css'
import { Container } from 'react-bootstrap';
import ProductList from '../components/ProductList';
import { products } from "../data/product_data.js";

const HomePage: React.FC = () => {
  return (
    <Container fluid className="page-main">
        <div className="hero-div">
            <div className="row">
                <div className="col-6">
                    <h2> 25% OFF </h2>
                    <h1> Summer Sale </h1>
                    <p> Discover our summer styles with discount </p>
                    <button className="black-btn hero-btn">
                      Shop Now
                      <img src="/icons/arrow-right.svg" alt=''/>
                    </button>
                </div>
                <div className="col-6">
                    <img src="/images/desktop/hero.png" className="hero-img" />
                </div>
            </div>
        </div>

        <div className="product-list">
          <h3> Explore our latest drops </h3>
          <ProductList products={products} />
        </div>
    </Container>
  );
}

export default HomePage;