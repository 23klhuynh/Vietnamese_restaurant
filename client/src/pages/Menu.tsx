import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import MenuImage from "../assets/bg.jpg";
import MenuItemCards from "../components/menu/MenuItemCards";
import MenuItemsNav from "../components/menu/MenuItemsNav";

/* done but need check */
/* new */
interface MenuItem {
  id: string, 
  name: string,
  description: string,
  price: string
}

type MenuByCategory  = {
  [category: string]: MenuItem[];
}


function Menu() {
  /* const [menuItems, setMenuItems] = useState<{ [key: string]: any[] } | null>(null); */

const [menuItems, setMenuItems] = useState<MenuByCategory | null>(null);

  useEffect(() => {
    const fetchAllMenuItem = async () => {
      try {
        const response = await axios.get(
          /* "https://vietnamese-restaurant-backend.onrender.com/menu/all_menu" */
          "http://localhost:8080/api/v1/menu-items"
        );
        /* setMenuItems(response.data.data); */
        setMenuItems(response.data);
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
      <MenuItemsNav />

      <MenuItemCards menuItems={menuItems} />
    </div>
  );
}

export default Menu;
