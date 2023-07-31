import { useMemo } from 'react';
import { CartItem } from '../contexts/cartContext';
import { Product } from '../interfaces/product';

const useCartCalculator = (cartItems: CartItem[], products: Product[]): {
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
} => {
  const calculateCart = (): {
    subtotal: number;
    tax: number;
    shipping: number;
    discount: number;
    total: number;
  } => {
    const cart: {
      subtotal: number;
      tax: number;
      shipping: number;
      discount: number;
      total: number;
    } = cartItems.reduce(
      (cartObject, item) => {
        const product = products.find((p) => p.id === item.productId);
        if (product) {
          const itemTotal = item.quantity * product.price;
          cartObject.subtotal += itemTotal;
        }
        return cartObject;
      },
      { subtotal: 0, tax: 0, shipping: 20, discount: -6, total: 0 }
    );

    cart.tax = cart.subtotal * 0.095;
    cart.total = cart.subtotal + cart.tax + cart.shipping + cart.discount;
    return cart;
  };

  return useMemo(() => calculateCart(), [cartItems, products]);
};

export default useCartCalculator;
