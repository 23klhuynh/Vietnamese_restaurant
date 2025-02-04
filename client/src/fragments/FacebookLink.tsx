import { FaFacebook } from "react-icons/fa";

function FacebookLink() {
  return (
    <div className="navbar__contact-container">
      <a
        className="navbar__contact"
        href="https://www.facebook.com/profile.php?id=61559370593017"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className="navbar__facebook-icon text-blue-600 text-3xl md:text-3xl lg:text-3xl xl:text-3xl" />
        {/* <span className="navbar__facebook-link">FACEBOOK</span> */}
      </a>
      {/* NEED WORK ON THIS */}
      <a
        className="navbar__contact"
        href="https://www.facebook.com/profile.php?id=61559370593017"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="navbar__facebook-link">Sign In</span>
        {/* <FaFacebook className="navbar__facebook-icon text-blue-600 text-xl md:text-2xl lg:text-3xl xl:text-4xl" /> */}
      </a>
      
    </div>
  );
}

export default FacebookLink;
