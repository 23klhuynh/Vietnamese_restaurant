import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import FacebookLink from "../fragments/FacebookLink";
import NavbarNavigation from "../fragments/NavbarNavigation";
import Sidebar from "../fragments/Sidebar";
import Logo from "../assets/PhoVietLogo.png";

interface NavbarProps {
  scroll: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scroll }) => {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <nav
      className={`navbar ${scroll ? "navbar--scrolled" : "navbar--default"} ${
        isOpen ? "navbar--clicked" : ""
      }`}
    >
      <div className="navbar__icon cursor-pointer">
        <RouterLink to="/">
          <img
            src={Logo}
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

      <NavbarNavigation onNavigate={handleNavigation} />

      <Sidebar open={isOpen} onNavigate={handleAllClicks} />

      <FacebookLink />
    </nav>
  );
};

export default Navbar;
