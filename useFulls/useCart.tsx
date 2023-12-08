import React, { useState } from 'react';

// Define the type for an item in the cart
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  // Add other properties as needed
}

// Define the type for the cart state and functions
interface CartHook {
  cart: CartItem[];
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
}

// Define the initial state for the cart
const initialCartState: CartItem[] = [];

// Define the useCart hook with TypeScript typings
export const useCart = (): CartHook => {
  const [cart, setCart] = useState<CartItem[]>(initialCartState);
  const [isCartOpen, setCartOpen] = useState(false);

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return {
    cart,
    isCartOpen,
    openCart,
    closeCart,
    addToCart,
    removeFromCart,
    clearCart,
  };
};
