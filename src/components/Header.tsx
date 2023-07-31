import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useCart } from '../contexts/cartContext';

const Header: React.FC = () => {
  const { state } = useCart();
  const totalItemsInCart = state.cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="header-div">
        <header className="header">
            <Link to="/">
              <img src="/icons/logo-dark.svg" alt="Brand Logo" className="brand-logo" />
            </Link>

            <Link to="/cart" className="view-cart-button">
                <button className="cart-button">
                    <img src="/icons/cart.svg"/>
                    View Cart
                    {totalItemsInCart > 0 && <div className="cart-item-count">{totalItemsInCart}</div>}
                </button>
            </Link>
        </header>
    </div>

  );
};

export default Header;
