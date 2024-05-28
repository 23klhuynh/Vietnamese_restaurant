import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

function Navbar({ scroll }) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <nav
      className={`navbar ${scroll ? "navbar--scrolled" : "navbar--default"} ${
        click ? "navbar--clicked" : ""
      }`}
    >
      <div className="navbar__icon cursor-pointer">
        <RouterLink to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5433/5433249.png"
            alt="Pho icon"
            className="navbar__icon-img"
          />
        </RouterLink>
        <div className="navbar__mobile">
          {click ? (
            <AiOutlineClose
              className="navbar__mobile-icon"
              onClick={handleClick}
            />
          ) : (
            <RxHamburgerMenu
              className="navbar__mobile-icon"
              onClick={handleClick}
            />
          )}
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

      {click && (
        <ul className="navbar__sidebar">
          <li className="navbar__sidebar-item cursor-pointer">
            <RouterLink to="/" onClick={handleClick}>
              HOME
            </RouterLink>
          </li>
          <li className="navbar__sidebar-item cursor-pointer">
            <RouterLink to="/menu" onClick={handleClick}>
              MENU
            </RouterLink>
          </li>
          <li className="navbar__sidebar-item cursor-pointer">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={410}
              duration={500}
              onClick={handleClick}
            >
              CONTACT
            </ScrollLink>
          </li>
          <li className="navbar__sidebar-item cursor-pointer">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleClick}
            >
              ABOUT
            </ScrollLink>
          </li>
        </ul>
      )}
      <div className="navbar__contact">
        <FaFacebook className="navbar__facebook-icon text-blue-600 text-xl md:text-2xl lg:text-3xl xl:text-4xl" />
        <a
          href="https://www.facebook.com/"
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
