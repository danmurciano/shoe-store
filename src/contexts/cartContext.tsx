import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Define the shape of the cart item object
export interface CartItem {
  productId: number;
  quantity: number;
}

// Define the shape of the cart state
interface CartState {
  cartItems: CartItem[];
}

// Define the actions to update the cart
type CartAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: number; quantity: number } }; 

// Create the cart context
const CartContext = createContext<{ state: CartState; dispatch: React.Dispatch<CartAction> }>({
  state: { cartItems: [] },
  dispatch: () => null,
});

// Create the cart reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
      case 'ADD_TO_CART':
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
          };
      case 'REMOVE_FROM_CART':
          return {
            ...state,
            cartItems: state.cartItems.filter((item) => item.productId !== action.payload),
          };
      case 'UPDATE_QUANTITY':
          return {
              ...state,
              cartItems: state.cartItems.map((item) =>
              item.productId === action.payload.productId ? { ...item, quantity: action.payload.quantity } : item
              ),
          };  
      default:
        return state;
    }
  };

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FunctionComponent<CartProviderProps> = ({ children }) => {
  // Load cart items from local storage on component mount
  const savedCart = localStorage.getItem('cart');
  const initialCartState: CartState = {
    cartItems: savedCart ? JSON.parse(savedCart) : [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  // Save cart items to local storage whenever cartItems state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

// Custom hook to access the cart context
export const useCart = () => useContext(CartContext);
