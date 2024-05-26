import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "../components/MenuItem";

function Menu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/menu")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleMenuItem = (category) => {
    return data
      .filter((item) => item.category === category)
      .map((item) => (
        <MenuItem
          key={item._id}
          title={item.title}
          description={item.description}
          price={item.price}
        />
      ));
  };

  return (
    <div className="menu">
      <div className="menu-header bg-gray-500 w-full h-[350px]">
        {/* image or something */}
      </div>
      <div className="menu__search">
        <p className="menu__search-item">Appetizers</p>
        <p className="menu__search-item">Noodle</p>
        <p className="menu__search-item">Rice</p>
        <p className="menu__search-item">Boba drinks</p>
        <p className="menu__search-item">beer</p>
        <p className="menu__search-item">Appetizers</p>
        <p className="menu__search-item">Noodle</p>
        <p className="menu__search-item">Rice</p>
        <p className="menu__search-item"> Boba drinks</p>
        <p className="menu__search-item">beer</p>
        <p className="menu__search-item">Appetizers</p>
        <p className="menu__search-item">Noodle</p>
        <p className="menu__search-item">Rice</p>
        <p className="menu__search-item">Boba drinks</p>
        <p className="menu__search-item">beer</p>
      </div>
      <div className="menu__items">
        <section className="appetizer items">
          {handleMenuItem("appetizer")}
        </section>
      </div>
    </div>
  );
}

export default Menu;
