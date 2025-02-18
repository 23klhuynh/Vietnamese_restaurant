import { useState } from "react";
import { Outlet } from "react-router-dom/dist";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useScroll from "./useScroll";
import SmoothScroll from "./SmoothScroll";

type CartItem = {
  id: number;
  price: number;
  name: string;
};
/* need to use useeffect to insert the item id to the db */
function Layout() {
  const scroll = useScroll();
  SmoothScroll();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <>
      <Navbar scroll={scroll} cartItems={cartItems} />
      <Outlet context={{ addToCart }} />
      <Footer />
    </>
  );
}

export default Layout;
