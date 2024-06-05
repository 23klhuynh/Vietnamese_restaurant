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
            to="noodle"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
          >
            Noodles
          </ScrollLink>
        </li>
        <li className="menu__search-item">
          <ScrollLink
            to="rice"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
          >
            Rice
          </ScrollLink>
        </li>
        <li className="menu__search-item">
          <ScrollLink
            to="swandwich"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
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
            duration={500}
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
            duration={500}
          >
            Beverages
          </ScrollLink>
        </li>
      </ul>

      <div className="menu-categories">
        <MenuItemSection title="Appetizers" category="appetizer" />
        <MenuItemSection title="Main Course" category="main" />
        <MenuItemSection title="Noodles" category="noodle" />
        <MenuItemSection title="Rice" category="rice" />
        <MenuItemSection title="Sandwiches" category="sandwich" />
        <MenuItemSection title="Vetetarian" category="vetetarian" />
        <MenuItemSection title="Beverages" category="beverage" />
      </div>
    </div>
  );
}

export default Menu;
