import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar({ scroll }) {
  return (
    <nav
      className={`navbar ${scroll ? "navbar--scrolled" : "navbar--default"}`}
    >
      <div className="navbar__icon cursor-pointer">
        <RouterLink to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5433/5433249.png"
            alt="Pho icon"
          />
        </RouterLink>
        <div className="mobile">
          <RxHamburgerMenu
            className="mobile__icon" /* onClick={handleMobileClick} */
          />
        </div>
      </div>
      <ul className="navbar__items">
        <li className="navbar__item cursor-pointer">
          <RouterLink to="/">HOME</RouterLink>
        </li>
        <li className="navbar__item">
          <RouterLink to="/menu">MENU</RouterLink>
        </li>
        <li className="navbar__item cursor-pointer">
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            CONTACT
          </ScrollLink>
        </li>
        <li className="navbar__item cursor-pointer">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            ABOUT
          </ScrollLink>
        </li>
      </ul>
      <div className="navbar__contact">
        <FaFacebook className="navbar__facebook-icon text-blue-600 text-xl md:text-2xl lg:text-3xl xl:text-4xl" />
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__facebook-link"
        >
          FACEBOOK
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
