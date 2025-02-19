
import { AiOutlineClose } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { IoIosRemove } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number; // Add a quantity field for each item
}

interface NavbarLinksProps {
  openCart: boolean;
  setOpenCart: (value: boolean) => void;
  cartItems: CartItem[];
  setCartItems: (cartItems: CartItem[]) => void;
}

function Cart({
  openCart,
  setOpenCart,
  cartItems,
  setCartItems,
}: NavbarLinksProps) {
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

  return (
    <main className={`cart ${openCart ? "open-cart" : "closing-cart"}`}>
      <section className="cart__header">
        <p>My Order</p>
        <AiOutlineClose
          className="cursor-pointer"
          onClick={() => setOpenCart(false)}
        />
      </section>
      <section className="cart__order">
        {cartItems.length > 0 ? (
          <ul className="cart__items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart__item">
                <div className="cart__info">
                  {item.name} - ${item.price.toFixed(2)}
                </div>
                <div className="cart__modify">
                  <IoMdAdd
                    onClick={() => incrementQuantity(item.id)}
                    className="cart__icon"
                  />
                  <p>{item.quantity}</p>
                  <IoIosRemove
                    onClick={() => decrementQuantity(item.id)}
                    className="cart__icon"
                  />
                </div>
              </li>
            ))}

          </ul>
        ) : (
          <>
            <FiShoppingBag className="cart__icon" />
            <h3>You don't have any item</h3>
            <button>START MY ORDER</button>
          </>
        )}
      </section>
    </main>
  );
}

export default Cart;
