import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { Link as ScrollLink, Element } from "react-scroll";
import MenuImage from "../assets/bg.jpg";
import { IoMdAdd } from "react-icons/io";
/* import MenuItemSection from "../components/MenuItemSection"; */

function Menu() {
  const [menuItems, setMenuItems] = useState<{ [key: string]: any[] }>({});

  const categoryOrder = [
    "Appetizers",
    "Sandwiches",
    "Noodles",
    "House Specials",
    "Vegetarian",
    "Beverages",
  ];

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
      <div className="menu-img-container">
        <img
          className="menu-img"
          src={MenuImage}
          alt="menu background image"
          loading="lazy"
        />
      </div>
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
            to="Sandwiches"
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
            to="House Specials"
            spy={true}
            smooth={true}
            offset={-120}
            duration={100}
          >
            House Specials
          </ScrollLink>
        </li>

        <li className="menu__search-item">
          <ScrollLink
            to="Vegetarian"
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
            to="Beverages"
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
        {categoryOrder.map((category) => (
          <div key={category} className="menu-category">
            <Element name={category}>
              <h2 className="menu-header">{category}</h2>
              <div className="menu-items">
                {menuItems[category]?.map((item) => (
                  <div key={item.id} className="menu-item">
                    <div className="item-header">
                      <p>{item.name}</p>
                      <IoMdAdd className="item-add"/>
                    </div>
                    <h3 style={{ color: "rgba(0, 0, 0, 0.4)" }}>
                      {item.description}
                    </h3>
                    <h3 style={{ color: "rgba(0, 0, 0, 0.4)" }}>
                      ${item.price.toFixed(2)}
                    </h3>
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
