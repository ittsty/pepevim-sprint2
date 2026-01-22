import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
const CART_KEY = "cart";

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem(CART_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Failed to parse cart", err);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity, size ) => {

  const sizeData = product.sizes.find((s) => s.size === size);

  const cartItem = {
    _id: product._id,
    productName: product.productName,
    image: product.image,
    size,
    price: sizeData?.price ?? product.price,
    quantity: quantity,
  };


  setCart((prev) => {
    const exist = prev.find(
      (item) => item._id === cartItem._id && item.size === cartItem.size
    );

    if (exist) {
      return prev.map((item) =>
        item._id === cartItem._id && item.size === cartItem.size
          ? { ...item, quantity: item.quantity + cartItem.quantity }
          : item
      );
    }
      return [...prev,cartItem];
    });
  };

  const removeFromCart = (id,size) => {
    setCart((prev) => prev.filter((item) => !(item._id == id && item.size == size)));
  };

  const updateQuantity = (id, size,qty) => {
    if (qty <= 0) return removeFromCart(id,size);

    setCart((prev) =>
      prev.map((item) =>
        item._id === id && item.size === size ? { ...item, quantity: qty } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
