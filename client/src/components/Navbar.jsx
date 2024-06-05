import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import FacebookLink from "../fragments/FacebookLink";
import NavbarNavigation from "../fragments/NavbarNavigation";
import Sidebar from "../fragments/Sidebar";

function Navbar({ scroll }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const routeToTargetIdMap = {
    home: "/",
    contact: "/",
    menu: "/menu",
    about: "/",
  };

  const handleNavigation = (targetId) => {
    const path = routeToTargetIdMap[targetId];
    navigate(path, { state: { targetId } });
  };

  const handleAllClicks = (targetId) => {
    handleNavigation(targetId);
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className={`navbar ${scroll ? "navbar--scrolled" : "navbar--default"} ${
        isOpen ? "navbar--clicked" : ""
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

      <NavbarNavigation props={handleNavigation} />

      <Sidebar open={isOpen} props={handleAllClicks} />

      <FacebookLink />
    </nav>
  );
}

export default Navbar;
