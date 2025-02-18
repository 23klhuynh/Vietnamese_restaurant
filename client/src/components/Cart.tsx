import { AiOutlineClose } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";

interface NavbarLinksProps {
  openCart: boolean;
  setOpenCart: (value: boolean) => void;
  cartItems: { id: number; name: string; price: number }[];
}

function Cart({ openCart, setOpenCart, cartItems }: NavbarLinksProps) {
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
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}
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

        {/* this is when there is no order otherwise we would only show the item */}
      </section>
    </main>
  );
}

export default Cart;
