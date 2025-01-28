import React from "react";
import { Link as ScrollLink } from "react-scroll";
import MenuItemSection from "../components/MenuItemSection";

function Menu() {
  return (
    <div className="menu" id="menu">
      <div className="menu-header w-full h-[350px]">
        <img
          src="https://assets.vogue.com/photos/5a3aac8f0193fe386b1e3898/master/w_2560%2Cc_limit/vietnamese-food-holding.jpg"
          alt=""
          className="w-full h-[350px] object-cover"
        />
      </div>

      <ul className="menu__search">
        <li className="menu__search-item">
          <ScrollLink
            to="appetizer"
            spy={true}
            smooth={true}
            offset={-120}
            duration={100}
          >
            Appetizers
          </ScrollLink>
        </li>
        <li className="menu__search-item">
          <ScrollLink
            to="main"
            spy={true}
            smooth={true}
            offset={-120}
            duration={100}
          >
            Main Course
          </ScrollLink>
        </li>
        <li className="menu__search-item">
          <ScrollLink
            to="sandwich"
            spy={true}
            smooth={true}
            offset={-120}
            duration={100}
          >
            Sandwiches
          </ScrollLink>
        </li>
        <li className="menu__search-item">
          <ScrollLink
            to="vetetarian"
            spy={true}
            smooth={true}
            offset={-120}
            duration={100}
          >
            Vetetarian
          </ScrollLink>
        </li>
        <li className="menu__search-item">
          <ScrollLink
            to="beverage"
            spy={true}
            smooth={true}
            offset={-120}
            duration={100}
          >
            Beverages
          </ScrollLink>
        </li>
      </ul>

      {/* <div className="menu-categories">
        <MenuItemSection title="Appetizers" category="appetizer" />
        <MenuItemSection title="Main Course" category="main" />
        <MenuItemSection title="Sandwiches" category="sandwich" />
        <MenuItemSection title="Vegetarian" category="Vegetarian" />
        <MenuItemSection title="Beverages" category="beverage" />
      </div> */}

    </div>
  );
}

export default Menu;
