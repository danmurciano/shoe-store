import { render, fireEvent, RenderResult, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductPage from '../pages/ProductPage';
import { CartProvider } from '../contexts/cartContext';
import { products } from '../data/product_data';
import { Product } from '../interfaces/product';

describe('ProductPage', () => {
  let renderResult: RenderResult;
  let product: Product;

  beforeEach(() => {
    product = products[0];

    renderResult = render(
      <CartProvider>
        <MemoryRouter initialEntries={[`/products/${product.id}`]}>
          <Routes>
            <Route path="/products/:productId" element={<ProductPage />} />
          </Routes>
        </MemoryRouter>
      </CartProvider>
    );
  });

  afterEach(() => {
    localStorage.setItem('cart', '[]');
    renderResult.unmount(); 
  });

  const getAddToCartButton = (): HTMLElement => {
    return screen.getByRole('button', { name: /Add to Cart/i });
  };
  

  test('handleAddToCart updates cartItems for a new product', () => {
    const addToCartButton = screen.getByRole('button', { name: /Add to Cart/i });
    fireEvent.click(addToCartButton);
    const cartItemsInCart = JSON.parse(localStorage.getItem('cart') || '[]');
    expect(cartItemsInCart).toContainEqual({
      productId: product.id,
      quantity: 1,
    });
  });


  test('handleAddToCart updates cartItems quantity for an existing product', () => {
    const addToCartButton = screen.getByRole('button', { name: /Add to Cart/i });
    fireEvent.click(addToCartButton);
    fireEvent.click(addToCartButton);
    const cartItemsInCart = JSON.parse(localStorage.getItem('cart') || '[]');
    expect(cartItemsInCart).toContainEqual({
      productId: product.id,
      quantity: 2,
    });
  });


  test('changing quantity in QuantitySelector updates the quantity', () => {
    const addToCartButton = screen.getByRole('button', { name: /Add to Cart/i });
    const quantitySelector = screen.getByTestId('quantity-selector');
    const plusButton = screen.getByTestId('plus-btn');
    expect(quantitySelector).toHaveTextContent('1');

    fireEvent.click(plusButton);
    fireEvent.click(addToCartButton);
    const cartItemsInCart = JSON.parse(localStorage.getItem('cart') || '[]');
    expect(quantitySelector).toHaveTextContent('2');
    expect(cartItemsInCart).toContainEqual({
      productId: product.id,
      quantity: 2,
    });
  });
});
