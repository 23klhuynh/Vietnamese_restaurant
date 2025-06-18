import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../auth/UserContext";
import toast from "react-hot-toast";
/* import { CiShoppingCart } from "react-icons/ci"; */
/* import { flatMap } from "lodash"; */

interface NavbarLinksProps {
  openCart: boolean;
  setOpenCart: (value: boolean) => void;
}

function NavbarLinks({ openCart, setOpenCart }: NavbarLinksProps) {
  const { user, setUser } = useUser();
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
      {resize && (
        <>
          {user ? (
            <Link
              to="/"
              className="navbar__contact auth cursor-pointer"
              onClick={() => {
                localStorage.removeItem("access_token");
                setUser(false);
                toast.success("Logged out successfully!");
              }}
            >
              Sign Out
            </Link>
          ) : (
            <Link to="/login" className="navbar__contact auth cursor-pointer">
              Sign In
            </Link>
          )}

          <button
            className="navbar__contact special cursor-auto "
            onClick={() => setOpenCart(!openCart)}
          >
            Order Now
          </button>
        </>
      ) /* 
        need to be in the menu hamburger
      
      : (
        <button
          className="navbar__contact special cursor-auto"
          onClick={() => setOpenCart(!openCart)}
        >
          <CiShoppingCart className="text-4xl" />
        </button>
      ) */}
    </div>
  );
}

export default NavbarLinks;
