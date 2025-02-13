/* import { FaShoppingCart } from "react-icons/fa"; */
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

function NavbarLinks({}) {
  const {user} = useAuth();

  return (
    <div className="navbar__contact-container">
      {user ? (<button className="navbar__contact">
        <Link to="/login" className="navbar__facebook-link">
          Sign Out
        </Link>
      </button>):(
        <button className="navbar__contact">
        <Link to="/login" className="navbar__facebook-link">
          Sign In
        </Link>
      </button>
      )}
      <button className="navbar__contact">
        {/* <FaShoppingCart /> */}
        Order Now
      </button>
    </div>
  );
}

export default NavbarLinks;
