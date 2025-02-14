/* import { FaShoppingCart } from "react-icons/fa"; */
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface NavbarLinksProps{
  setOpenCart: (value:boolean) => void;
} 

function NavbarLinks({setOpenCart}: NavbarLinksProps) {
  const {user} = useAuth();

  return (
    <div className="navbar__contact-container">
      {user ? (<button className="navbar__contact cursor-pointer">
        <Link to="/login" className="navbar__facebook-link">
          Sign Out
        </Link>
      </button>):(
        <button className="navbar__contact cursor-pointer">
        <Link to="/login" className="navbar__facebook-link">
          Sign In
        </Link>
      </button>
      )}
      <button className="navbar__contact cursor-auto" onClick={()=> setOpenCart(true)}>
        {/* <FaShoppingCart /> */}
        Order Now
      </button>
    </div>
  );
}

export default NavbarLinks;
