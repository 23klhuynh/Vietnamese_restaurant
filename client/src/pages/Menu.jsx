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
      <div className="menu-header w-full h-[350px]">
        <img src="https://assets.vogue.com/photos/5a3aac8f0193fe386b1e3898/master/w_2560%2Cc_limit/vietnamese-food-holding.jpg" alt="" className="w-full h-[350px] object-cover"/>
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

      <div className="main">
        <section className="content text-lg md:text-xl lg:text-2xl xl:text-3xl">
          <div className="content__title">
            <h1>Appetizer</h1>
          </div>
          <div className="items">{handleMenuItem("appetizer")}</div>
        </section>
        <section className="content text-lg md:text-xl lg:text-2xl xl:text-3xl">
          <div className="content__title">
            <h1>Dinner</h1>
          </div>
          <div className="items">{handleMenuItem("dinner")}</div>
        </section>
      </div>
    </div>
  );
}

export default Menu;
