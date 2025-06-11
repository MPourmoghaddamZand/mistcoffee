import React, {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { useContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = useCallback((product, count) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + count }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: count }];
      }
    });
  }, []);

  useEffect(() => {
    console.log("Cart changed:", cart);
    console.log("Total:", totalQuantity);
  }, [cart]);

  const removeProduct = useCallback((productId) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === productId);
      if (!exists) return prev;

      if (exists.quantity > 1) {
        return prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prev.filter((item) => item.id !== productId);
      }
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const totalQuantity = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity * item.price, 0),
    [cart]
  );

  const value = useMemo(
    () => ({
      cart,
      addProduct,
      removeProduct,
      clearCart,
      totalQuantity,
      totalPrice,
    }),
    [cart, addProduct, removeProduct, clearCart, totalQuantity, totalPrice]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
export default CartProvider;
