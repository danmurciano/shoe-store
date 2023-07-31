import React, { useState } from 'react';
import './ProductPage.css';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ImageSlider from "../components/ImageSlider";
import QuantitySelector from "../components/QuantitySelector";
import { useCart } from '../contexts/cartContext';
import useProductData from '../hooks/useProductData';


const ProductPage: React.FC = () => {
    const { productId } = useParams();
    const { productData, findProductById } = useProductData();
    
    const product = findProductById(Number(productId));

    const [quantity, setQuantity] = useState(1);
    const { state: { cartItems }, dispatch } = useCart();

    const handleAddToCart = () => {
      if (product) {
        const cartItem = { productId: product.id, quantity: quantity };
        const existingItemIndex = cartItems.findIndex(
          (item) => item.productId === cartItem.productId
        );

        if (existingItemIndex !== -1) {
          // Item already exists in the cart, update quantity
          const updatedCartItems = [...cartItems];
          updatedCartItems[existingItemIndex].quantity += cartItem.quantity;
          dispatch({ type: 'UPDATE_QUANTITY', payload: updatedCartItems[existingItemIndex] });
        } else {
          // Item does not exist in the cart, add it
          dispatch({ type: 'ADD_TO_CART', payload: cartItem });
        }
      }
    };

    return (
        <Container fluid className="page-main">
            {product ? (
                <>
                    <div className="product-info row">
                        <div className="col-6">
                            <ImageSlider images={product.images.slice(0,3)} />
                        </div>
                        <div className="col-6">
                            <div className="info-card">
                                <div className="info-card-top">
                                    <h3> {product.brand} </h3>    
                                    <p> {product.style} </p>
                                    <h4> {`$${product.price}`} </h4>   
                                </div>       
                                <div className="info-card-bottom">
                                    <h5> Quantity </h5>
                                    <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
                                    <button className="black-btn add-btn" onClick={handleAddToCart}>
                                      Add to Cart
                                    </button>
                                </div>
                            </div>    
                        </div>
                    </div>
    
                    <div className="product-description row">
                        <div className="col-6">
                            <div className="description-header">
                                <h3> Description </h3>
                            </div>       
                            <div className="description-text">
                                <p> {product.description} </p>
                                <ul>
                                    {product.bullets.map(b => ( <li>{b}</li> ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-6">
                            <img src={`/images/desktop/${product.images[3]}`} alt='product'/>            
                        </div>             
                    </div>
                </>
            ) : (
                <h1> Product Not Found </h1>
            )}   
        </Container>   
      );
}

export default ProductPage;