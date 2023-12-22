import React, { createContext, useContext, useState } from 'react';

type CartItem = {
  albumId: number;
  quantity: number;
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (albumId: number) => void;
  removeFromCart: (albumId: number) => void;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (albumId: number) => {
    if (cart.some((item) => item.albumId === albumId)) {
      setCart(
        cart.map((item) =>
          item.albumId === albumId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { albumId, quantity: 1 }]);
    }
  };
  const removeFromCart = (albumId: number) => {
    if (cart.some((item) => item.albumId === albumId)) {
      setCart(
        cart.map((item) =>
          item.albumId === albumId && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCart([...cart]);
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, currentItem) => {
      return total + currentItem.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getCartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }
  return context;
};
