import React, { useState } from 'react';
import './CartPage.css'
import { Container } from 'react-bootstrap';
import QuantitySelector from "../components/QuantitySelector";
import { useCart, CartItem } from '../contexts/cartContext';
import useProductData from '../hooks/useProductData';
import useCartCalculator from '../hooks/useCartCalculator';


const CartPage: React.FC = () => {
    const { state: { cartItems }, dispatch } = useCart();
    const { productData, findProductById } = useProductData();

    const cart = useCartCalculator(cartItems, productData);

    const handleRemoveFromCart = (item: CartItem) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item.productId });
    }

    const handleQuantityChange = (newQuantity: number, productId: number) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity: newQuantity } });
    };

    
    return (
        <Container fluid className="page-main">
            {cartItems.length ? (
              <>
                <div className="row">
                    <div className="col">
                        <h2> Your Bag </h2>
                        <div className="cart-items">
                            {cartItems.map(item => {
                                const product = findProductById(item.productId);

                                if (product) {
                                    return (
                                        <div key={item.productId} className="cart-item">
                                            <img src={`/images/desktop/${product.thumbnail}`} alt='product'/>
                                                <div className="col">
                                                    <h4> {product.brand} </h4>
                                                    <p> {product.style} </p>
                                                    <div className="item-bottom">
                                                        <QuantitySelector
                                                            quantity={item.quantity}
                                                            onQuantityChange={(newQuantity) => handleQuantityChange(newQuantity, item.productId)}
                                                        />
                                                        <button className="remove-button" onClick={() => handleRemoveFromCart(item)}> Remove </button>
                                                    </div>
                                                </div>
                                            <h5> {`$${product.price}`} </h5>
                                        </div>
                                    );
                                }
                                return null; // Product not found in the list
                            })}
                        </div>
                    </div>

                    <div className="col">
                        <div className="cart-summary">
                            <div className="summary-top">
                                <h2> Summary </h2>
                                <h4> Subtotal <span> {`$${cart.subtotal.toFixed(2)}`} </span> </h4>
                                <h4> Shipping and Delivery <span> {`$${cart.shipping.toFixed(2)}`} </span> </h4>
                                <h4> Tax <span> {`$${cart.tax.toFixed(2)}`} </span> </h4>
                                <h4> Discount <span className="discount"> {`$${cart.discount.toFixed(2)}`} </span> </h4>                            
                            </div>       
                            <div className="summary-bottom">
                                <h3> Total <span> {`$${cart.total.toFixed(2)}`} </span> </h3>
                                <button className="black-btn checkout-btn">
                                    Checkout
                                    <img src="icons/arrow-right.svg" alt=''/>
                                </button>
                            </div>
                        </div>    
                    </div>
                </div>
              </>
            ) : (
                <h2> Your bag is empty </h2>
            )}   
        </Container>   
      );
}


export default CartPage;