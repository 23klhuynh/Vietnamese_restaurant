import { useState, useEffect, useCallback } from "react";
import { Link as RouterLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import NavbarLinks from "../fragments/NavbarLinks";
import NavbarNavigation from "../fragments/NavbarNavigation";
import Sidebar from "../fragments/Sidebar";
/* import {handleNavigation, handleAllClicks} from  */
import Cart from "./Cart";
import Logo from "../assets/PhoVietLogo.png";
import { debounce } from "lodash";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number; // Add a quantity field for each item
}

interface NavbarProps {
  scroll: boolean;
  cartItems: CartItem[];  
  setCartItems: (cartItems: CartItem[]) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scroll, cartItems, setCartItems }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const navigate = useNavigate();


  const routeToTargetIdMap: { [key: string]: string } = {
    home: "/",
    contact: "/",
    menu: "/menu",
    about: "/",
  };

  const handleNavigation = (targetId: string) => {
    const path = routeToTargetIdMap[targetId];
    navigate(path, { state: { targetId } });
  };

  const handleAllClicks = (targetId: string) => {
    handleNavigation(targetId);
    setIsOpen(!isOpen);
  };

  const handleResizeNavbar = useCallback(
    debounce(() => {
      if (window.innerWidth > 800) {
        setIsOpen(false);
      }
    }, 200),
    []
  );

  useEffect(() => {
    handleResizeNavbar();
    window.addEventListener("resize", handleResizeNavbar);
    return () => {
      window.removeEventListener("resize", handleResizeNavbar);
    };
  }, []);

  useEffect(() => {
    const handleScrolling = () => {
      if (isOpen || openCart) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };
    handleScrolling();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, openCart]);

  return (
    <nav
      className={`navbar ${scroll ? "navbar--scrolled" : "navbar--default"} ${
        isOpen ? "navbar--clicked" : ""
      }`}
    >
      <div className="navbar__left cursor-pointer">
        <RouterLink className="navbar__left-img" to="/">
          <img src={Logo} alt="Pho icon" />
        </RouterLink>

        <NavbarNavigation onNavigate={handleNavigation} />
        <div className="navbar__mobile">
          {isOpen ? (
            <AiOutlineClose
              className="navbar__mobile-icon"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <RxHamburgerMenu
              className="navbar__mobile-icon"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>
      <Sidebar open={isOpen} onNavigate={handleAllClicks} />
      {!isOpen && (
        <>
          <NavbarLinks openCart={openCart} setOpenCart={setOpenCart} />
          {openCart && <Cart openCart={openCart} setOpenCart={setOpenCart} cartItems={cartItems} setCartItems={setCartItems}/>}
        </>
      )}
      
    </nav>
  );
};

export default Navbar;
