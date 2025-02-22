import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import MenuImage from "../assets/bg.jpg";
import MenuItemCards from "../components/MenuItemCards";
import MenuItemsNav from "../components/MenuItemsNav";

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
