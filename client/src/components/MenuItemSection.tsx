import { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "../components/MenuItem";
import { Element } from "react-scroll";

interface MenuItemData {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
}

interface MenuItemSectionProps {
  title: string;
  category: string;
}

function MenuItemSection({ title, category }: MenuItemSectionProps) {
  const [data, setData] = useState<MenuItemData[]>([]);

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

  const handleMenuItem = (category: string) => {
    return data
      .filter((item) => item.category.toLowerCase() === category.toLowerCase())
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
    <Element name={category}>
      <section className="content text-lg md:text-xl lg:text-2xl xl:text-3xl">
        <div className="content__title">
          <h1>{title}</h1>
        </div>
        <div className="items">{handleMenuItem(category)}</div>
      </section>
    </Element>
  );
}

export default MenuItemSection;
