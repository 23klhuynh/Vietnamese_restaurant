import { Link as ScrollLink } from "react-scroll";

function MenuItemsNav() {
  const categoryOrder = [
    "Appetizers",
    "Sandwiches",
    "Noodles",
    "House Specials",
    "Vegetarian",
    "Beverages",
  ];
  return (
    <ul className="menu__search">
      {categoryOrder.map((category, index) => (
        <li key={index} className="menu__search-item">
          <ScrollLink
            to={category}
            spy={true}
            smooth={true}
            offset={-120}
            duration={100}
          >
            {category}
          </ScrollLink>
        </li>
      ))}
    </ul>
  );
}

export default MenuItemsNav;
