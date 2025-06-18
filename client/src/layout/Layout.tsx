import { useState} from "react";
import { Outlet } from "react-router-dom/dist";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/fragments/Footer";
import useScroll from "../hooks/useScroll";
import SmoothScroll from "../hooks/SmoothScroll";


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

  const addToCart = (item: CartItem) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

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

  return (
    <>
      <Navbar scroll={scroll} cartItems={cartItems} setCartItems={setCartItems}/>
      <Outlet context={{ addToCart }} />
      <Footer />
    </>
  );
}

export default Layout;
