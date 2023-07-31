import React from 'react';
import './QuantitySelector.css';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onQuantityChange }) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <div className="quantity-selector" data-testid="quantity-selector">
        <span
          onClick={handleDecrease}
          className={quantity > 1 ? "quantity-button" : "quantity-button inactive"}
          data-testid="minus-btn"
        >
          &#8722;
        </span>
        <span className="quantity"> {quantity} </span>
        <span onClick={handleIncrease} className="quantity-button plus" data-testid="plus-btn">
          +
        </span>
    </div>
  );
};

export default QuantitySelector;
