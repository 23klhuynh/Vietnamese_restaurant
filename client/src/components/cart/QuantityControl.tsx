import { useState } from "react";
import { useOutletContext } from "react-router-dom";

type CartItem = {
  id: number;
  price: number;
  name: string;
  quantity: number;
};

type ContextType = {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
};

export default function QuantityControl() {
  const [total, setTotal] = useState<number>(0);
  const { cartItems, setCartItems } = useOutletContext<ContextType>();

  const handleTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setTotal(totalPrice);
  };

  const incrementQuantity = (id: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decrementQuantity = (id: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  return {
    cartItems,
    total,
    setCartItems,
    incrementQuantity,
    decrementQuantity,
    handleTotalPrice,
  };
}
