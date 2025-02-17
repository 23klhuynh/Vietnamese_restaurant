
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
/* import { flatMap } from "lodash"; */

interface NavbarLinksProps {
  openCart: boolean;
  setOpenCart: (value: boolean) => void;
}

function NavbarLinks({ openCart ,setOpenCart }: NavbarLinksProps) {
  const { user } = useAuth();
  const [resize, setResize] = useState<boolean>(window.innerWidth > 1000);

  useEffect(() => {
    const handleResize = () => {
      setResize(window.innerWidth > 1000);
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar__contact-container">
      {resize &&
        (user ? (
          <button className="navbar__contact cursor-pointer">
            <Link to="/login" className="navbar__facebook-link">
              Sign Out
            </Link>
          </button>
        ) : (
          <button className="navbar__contact cursor-pointer">
            <Link to="/login" className="navbar__facebook-link">
              Sign In
            </Link>
          </button>
        ))}
      <button
        className="navbar__contact cursor-auto"
        onClick={() => setOpenCart(!openCart)}
      >
        Order Now
      </button>
    </div>
  );
}

export default NavbarLinks;
