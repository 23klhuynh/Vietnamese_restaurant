import { Element } from "react-scroll";
import { IoMdAdd } from "react-icons/io";
import { useOutletContext } from "react-router-dom";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

type CartContextType = {
  addToCart: (item: { id: number; name: string; price: number }) => void;
};
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
}
interface MenuItemCardsProps {
  menuItems: {
    [category: string]: MenuItem[];
  } | null;
}
function MenuItemCards({ menuItems }: MenuItemCardsProps) {
  const { addToCart } = useOutletContext<CartContextType>();
  const [showMenuItems, setShowMenuItems] = useState<boolean>(false);

  const categoryOrder = [
    "Appetizers",
    "Sandwiches",
    "Noodles",
    "House Specials",
    "Vegetarian",
    "Beverages",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMenuItems(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="menu-item-container">
      {menuItems ? (
        showMenuItems ? (
          <div className="menu-cards">
            {categoryOrder.map((category) => (
              <div key={category} className="menu-category">
                <Element name={category}>
                  <h2 className="menu-header">{category}</h2>
                  <div className="menu-items">
                    {menuItems?.[category]?.map((item) => (
                      <div key={item.id} className="menu-item">
                        <div className="item-header">
                          <p className="text-lg">{item.name}</p>
                          <IoMdAdd
                            className="item-add"
                            onClick={() => {
                              addToCart({
                                id: item.id,
                                name: item.name,
                                price: item.price,
                              });
                              localStorage.getItem("access_token")
                                ? toast.success("Item added successfully!")
                                : toast.error(
                                    "Sign in to continue adding items!"
                                  );
                            }}
                          />
                        </div>
                        <h3 style={{ color: "rgba(0, 0, 0, 0.4)" }} className="text-sm">
                          {item.description}
                        </h3>
                        <h3 style={{ color: "rgba(0, 0, 0, 0.4)" }} className="text-sm">
                          ${item.price.toFixed(2)}
                        </h3>
                      </div>
                    ))}
                  </div>
                </Element>
              </div>
            ))}
          </div>
        ) : (
          <div className="loading-bar"></div>
        )
      ) : (
        <div className="loading-bar"></div>
      )}
    </section>
  );
}

export default MenuItemCards;
