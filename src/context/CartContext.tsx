import React, { createContext, useState } from 'react';

type CartItem = {
  albumId: number;
  quantity: number;
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (albumId: number, quantity: number) => void;
  removeFromCart: (albumId: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (albumId: number, quantity: number) => {
    if (cart.some((item) => item.albumId === albumId)) {
      setCart(
        cart.map((item) =>
          item.albumId === albumId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { albumId, quantity }]);
    }
  };
  const removeFromCart = (albumId: number, quantity: number) => {
    if (cart.some((item) => item.albumId === albumId)) {
      setCart(
        cart.map((item) =>
          item.albumId === albumId && item.quantity > 0
            ? { ...item, quantity: item.quantity - quantity }
            : item
        )
      );
    } else {
      setCart([...cart]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
