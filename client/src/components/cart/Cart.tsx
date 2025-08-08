import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { IoIosRemove } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

/* Need TO RECOVER THE AUTHENTICATION */

interface NavbarLinksProps {
  openCart: boolean;
  setOpenCart: (value: boolean) => void;
  cartItems: CartItem[];
  setCartItems: (cartItems: CartItem[]) => void;
}

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

function Cart({
  openCart,
  setOpenCart,
  cartItems,
  setCartItems,
}: NavbarLinksProps) {
  const navigate = useNavigate();

  const [total, setTotal] = useState<number>(0);

  /* const handleTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setTotal(totalPrice);
  }; */

  const incrementQuantity = (id: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decrementQuantity = (id: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  useEffect(() => {
    const handleTotalPrice = () => {
      const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
      setTotal(totalPrice);
    };

    handleTotalPrice();
  }, [cartItems]);

  return (
    <main className={`cart ${openCart ? "open-cart" : "closing-cart"}`}>
      <section className="cart__header">
        <p>My Order</p>
        <AiOutlineClose
          className="cursor-pointer"
          onClick={() => setOpenCart(false)}
        />
      </section>
      <section className="order">
        {/* {localStorage.getItem("access_token") ? ( */}
        <div className="cart__order">
          {cartItems.length > 0 ? (
            <ul className="cart__items">
              {cartItems.map((item) => (
                <li key={item.id} className="cart__item">
                  <div className="cart__info rounded-lg">
                    {item.name} - ${item.price.toFixed(2)}
                  </div>
                  <div className="cart__modify">
                    {item.quantity > 1 ? (
                      <IoIosRemove
                        className="cart-icon"
                        onClick={() => decrementQuantity(item.id)}
                      />
                    ) : (
                      <FaRegTrashAlt
                        className="cart-icon"
                        onClick={() =>
                          setCartItems(
                            cartItems.filter((food) => food.id !== item.id)
                          )
                        }
                      />
                    )}

                    <p>{item.quantity}</p>
                    <IoMdAdd
                      className="cart-icon"
                      onClick={() => incrementQuantity(item.id)}
                    />
                  </div>
                </li>
              ))}
              <div className="cart__footer">
                <p>TOTAL: ${total.toFixed(2)}</p>
                {/* <button
                  onClick={() => handleTotalPrice()}
                  className="cart__btn"
                >
                  DONE
                </button> */}
                <button
                  onClick={() => {
                    setOpenCart(false);
                    navigate("/order");
                  }}
                  className="cart__btn my-2"
                >
                  Checkout
                </button>
              </div>
            </ul>
          ) : (
            <div className="cart__order">
              <FiShoppingBag className="cart__icon" />
              <h3 className="text-lg">You don't have any item</h3>
              <button
                onClick={() => {
                  setOpenCart(false);
                  navigate("/menu");
                }}
                className="cart__btn"
              >
                START MY ORDER
              </button>
            </div>
          )}
        </div>
        {/* ) : (
          <div className="cart__order">
            <p>You need to login to access this </p>

            <Link to="/login" className="login-btn">
              Login
            </Link>
          </div>
        )} */}
      </section>
    </main>
  );
}

export default Cart;
