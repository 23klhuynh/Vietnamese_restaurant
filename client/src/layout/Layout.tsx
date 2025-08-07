import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom/dist";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/fragments/Footer";
import useScroll from "../hooks/useScroll";
import SmoothScroll from "../hooks/SmoothScroll";

/* NEED WORK */

type CartItem = {
  id: number;
  price: number;
  name: string;
  quantity: number;
};
/* need to use useeffect to insert the item id to the db */
function Layout() {
  const scroll = useScroll();
  SmoothScroll();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  const addToCart = (item: CartItem) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex === -1) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      const updatedCartItems = cartItems.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    }
  };

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

  useEffect(() => {
    const handleTotalPrice = () => {
      const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
      setTotal(totalPrice);
    };

    handleTotalPrice();
  }, [cartItems]);

  return (
    <>
      <Navbar
        scroll={scroll}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Outlet
        context={{
          addToCart,
          cartItems,
          total,
          setCartItems,
          incrementQuantity,
          decrementQuantity,
          handleTotalPrice,
        }}
      />

      <Footer />
    </>
  );
}

export default Layout;
