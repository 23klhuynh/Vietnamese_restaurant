import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { Link as ScrollLink, Element } from "react-scroll";
/* import MenuItemSection from "../components/MenuItemSection"; */

function Menu() {
  const [menuItems, setMenuItems] = useState<{ [key: string]: any[] }>({});

  useEffect(() => {
    const fetchAllMenuItem = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/menu/all_menu");

        setMenuItems(response.data.data);
      } catch (error) {
        const axiosError = error as AxiosError<{ error: string }>;

        if (axiosError.response?.status === 400) {
          console.log("Missing fields!");
        } else if (axiosError.response?.status === 500) {
          console.log("Something went wrong!");
        } else {
          console.log("Unexpected error!");
        }
      }
    };

    fetchAllMenuItem();
  }, []);

  return (
    <div className="menu" id="menu">
      <div className="menu-img"></div>
      <ul className="menu__search">
        <li className="menu__search-item">
          <ScrollLink
            to="Appetizers"
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
            to="Noodles"
            spy={true}
            smooth={true}
            offset={-120}
            duration={100}
          >
            Noodles
          </ScrollLink>
        </li>
        <li className="menu__search-item">
          <ScrollLink
            to="Sandwich"
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
            to="Vetetarian"
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
            to="Beverage"
            spy={true}
            smooth={true}
            offset={-120}
            duration={100}
          >
            Beverages
          </ScrollLink>
        </li>
      </ul>

      <section className="menu-item-container">
        {Object.keys(menuItems).map((category) => (
          <div key={category} className="menu-category">
            <Element name={category}>
              <h2 className="menu-header">{category}</h2>
              <div className="menu-items">
                {menuItems[category].map((item) => (
                  <div key={item.id} className="menu-item">
                    <p>{item.name}</p>
                    <h3>{item.description}</h3>
                    <h3>${item.price}</h3>
                  </div>
                ))}
              </div>
            </Element>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Menu;
