import React, { createContext, useState } from 'react';

type CartItem = {
  albumId: number;
  quantity: number;
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (albumId: number, quantity: number) => void;
  removeFromCart: (albumId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (albumId: number, quantity: number) => {
    // TODO: implement add cart
  };

  const removeFromCart = (albumId: number) => {
    // TODO: implement remove from cart
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
