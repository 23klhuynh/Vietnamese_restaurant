import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function FacebookLink() {
  return (
    <div className="navbar__contact-container">
      <a
        className="navbar__contact"
        href="https://www.facebook.com/profile.php?id=61559370593017"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className="navbar__facebook-icon text-blue-600 text-2xl md:text-2xl lg:text-3xl xl:text-3xl" />
      </a>
      <button className="navbar__contact">
        <Link to="/login" className="navbar__facebook-link">Sign In</Link>
      </button>
    </div>
  );
}

export default FacebookLink;
