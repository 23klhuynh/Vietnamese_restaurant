import { useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import { CiTimer, CiLock } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosRemove } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";

/* WORK ON THE PART WHEN SUBMIT ORDER TO THE BACKEND */

/* 
WORK ON WHEN THE OPTION IS SELECTED AND WE MIGHT NEED 
TO MAKE A TABLE TO HOLD THE ADDRESS WITH THE ORDER_ID:
LOOK AT THE ORDER_ITEMS, THIS SHOULD BE SIMILAR
*Delivery table = order_id, address, city, state, zipcode
*/

/* "customerName": "John Doe",
	    "email": "asvbcou@gmail.com",
	    "phoneNumber": 1234567890,
	    "items": [
	        {
	            "menuItemId": 1,
	            "quantity": 2
	        },
	        {
	            "menuItemId": 3,
	            "quantity": 1
	        },
	        {
	            "menuItemId": 5,
	            "quantity": 3
	        }
	    ]
	} 
      
  localhost:8080/api/v1/orders

  */

/* NOTE: The payment using credit or debit card is not yet implemented. */

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type ContextType = {
  addToCart: () => void;
  cartItems: CartItem[];
  total: number;
  setCartItems: (items: any[]) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  handleTotalPrice: () => void;
};

type OrderItem = {
  menuItemId: number | null;
  quantity: number | null;
};

type Order = {
  customerName: string;
  email: string;
  phoneNumber: number;
  items: OrderItem[];
};

function Order() {
  type OrderOption = "delivery" | "pickup" | "dine-in";
  type PaymentMethod = "pay-at-store" | "card" /* | "cash-on-delivery" */;

  const [orderOption, setOrderOption] = useState<OrderOption>();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>();

  const {
    cartItems,
    total,
    setCartItems,
    incrementQuantity,
    decrementQuantity,
  } = useOutletContext<ContextType>();

  const [order, setOrder] = useState<Order>({
    customerName: "",
    email: "",
    phoneNumber: 0,
    items: [
      {
        menuItemId: null,
        quantity: null,
      },
    ],
  });

  const handleOrderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setOrder((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      /* if (!orderOption || !paymentMethod) {
        throw new Error("Please select an order option and payment method");
      }

      if (cartItems.length === 0) {
        throw new Error("Your cart is empty");
      }

      if (!order.customerName || !order.email || !order.phoneNumber) {
        throw new Error("Please fill in all required fields");
      } */

      const finalPhoneNumber = convertToPhoneNumber(order.phoneNumber);

      const orderItems = cartItems.map((item) => ({
        menuItemId: item.id,
        quantity: item.quantity,
      }));
      const response = await axios.post("http://localhost:8080/api/v1/orders", {
        customerName: order.customerName,
        email: order.email,
        phoneNumber: finalPhoneNumber,
        items: orderItems,
      });

      /* *************** IMPORTANT ************************* USE THE order_id: RESPONSE.data.id 
      Basically need to do another axios post method if the order option is for delivery
      */

      if (response.status === 200) {
        setOrder({
          customerName: "",
          email: "",
          phoneNumber: 0,
          items: [
            {
              menuItemId: null,
              quantity: null,
            },
          ],
        });
        setCartItems([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const convertToPhoneNumber = (phoneNumber: number) => {
    const convertToString = phoneNumber.toString();
    const removeDash = convertToString.split("-");

    if (removeDash.length > 1) {
      const result = removeDash.join("");
      return parseInt(result);
    } else {
      return phoneNumber;
    }
  };

  return (
    <main className="order__section bg-gray-800 text-gray-200 md:p-8">
      <section className="order__container max-w-6xl mx-auto">
        <div className="order__header mb-8 px-[15px]">
          <h1 className="text-2xl font-bold">Checkout</h1>
          <p className="text-gray-400">
            Complete your order in just a few steps
          </p>
        </div>

        <div className="order__main flex flex-col lg:flex-row gap-8">
          <div className="order__checkout flex-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Contact Information
                </h3>
                <p className="text-gray-400 mb-4">
                  We'll use this info to keep you updated about your order
                </p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block mb-1">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="customerName"
                      onChange={handleOrderChange}
                      value={order.customerName}
                      placeholder="Jane Doe"
                      className="w-full p-2 rounded text-black"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <label htmlFor="email" className="block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={order.email}
                        onChange={handleOrderChange}
                        placeholder="JaneDoe@gmail.com"
                        className="w-full p-2 rounded text-black"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="phone" className="block mb-1">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phoneNumber"
                        value={order.phoneNumber}
                        onChange={handleOrderChange}
                        placeholder="123-456-7890"
                        className="w-full p-2 rounded text-black"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Options */}
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Order Options</h3>
                <p className="text-gray-400 mb-4">
                  Choose how you want to enjoy your meal
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {[
                    {
                      value: "delivery",
                      title: "Delivery",
                      time: "30–45 minutes",
                      description: "Delivered to your address",
                      icon: <CiTimer />,
                    },
                    {
                      value: "pickup",
                      title: "Pickup",
                      time: "15–20 minutes",
                      description: "Ready for pickup at restaurant",
                      icon: <CiTimer />,
                    },
                    {
                      value: "dine-in",
                      title: "Dine in",
                      time: "Served immediately",
                      description: "Enjoy at the restaurant",
                      icon: <MdOutlineShoppingCart />,
                    },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`border rounded-md p-4 cursor-pointer transition-colors ${
                        orderOption === option.value
                          ? "border-blue-500 bg-gray-600"
                          : "border-gray-500 hover:bg-gray-600"
                      }`}
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="orderOption"
                          value={option.value}
                          checked={orderOption === option.value}
                          onChange={() =>
                            setOrderOption(option.value as OrderOption)
                          }
                          className="mr-2"
                        />
                        <span className="font-medium">{option.title}</span>
                      </div>
                      <div className="mt-2 text-sm">
                        <p className="flex items-center gap-1">
                          {option.icon}
                          {option.time}
                        </p>
                        <p className="text-gray-400">{option.description}</p>
                      </div>
                    </label>
                  ))}
                </div>

                {orderOption === "delivery" && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="address" className="block mb-1">
                        Delivery Address
                      </label>
                      <input
                        id="address"
                        type="text"
                        placeholder="948 king dr"
                        className="w-full p-2 rounded text-black"
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <label htmlFor="city" className="block mb-1">
                          City
                        </label>
                        <input
                          id="city"
                          type="text"
                          placeholder="Morehead City"
                          className="w-full p-2 rounded text-black"
                          required
                        />
                      </div>
                      <div className="flex-1">
                        <label htmlFor="zip" className="block mb-1">
                          ZIP Code
                        </label>
                        <input
                          id="zip"
                          type="text"
                          placeholder="12345"
                          className="w-full p-2 rounded text-black"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Payment Method */}
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
                <p className="text-gray-400 mb-4">
                  All transactions are secure and encrypted
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    { value: "pay-at-store", label: "Pay at store" },
                    /* { value: "card", label: "Credit/Debit Card" }, */
                    { value: "cash-on-delivery", label: "Cash on Delivery" },
                  ].map((method) => (
                    <label
                      key={method.value}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.value}
                        checked={paymentMethod === method.value}
                        onChange={() =>
                          setPaymentMethod(method.value as PaymentMethod)
                        }
                      />
                      <span>{method.label}</span>
                    </label>
                  ))}
                </div>

                {/* {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="cardNumber" className="block mb-1">
                        Card Number
                      </label>
                      <input
                        id="cardNumber"
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full p-2 rounded text-black"
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <label htmlFor="expiry" className="block mb-1">
                          Expiration Date
                        </label>
                        <input
                          id="expiry"
                          type="month"
                          className="w-full p-2 rounded text-black"
                          required
                        />
                      </div>
                      <div className="flex-1">
                        <label htmlFor="cvv" className="block mb-1">
                          CVV
                        </label>
                        <input
                          id="cvv"
                          type="text"
                          placeholder="123"
                          className="w-full p-2 rounded text-black"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )} */}
              </div>

              {/* Additional Notes */}
              {/* <div className="bg-gray-700 p-6 rounded-lg">
                <label htmlFor="notes" className="block mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  className="w-full p-2 rounded text-black h-32"
                  placeholder="Special instructions for your order..."
                ></textarea>
              </div> */}
            </form>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors mt-3"
            >
              Place Order
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96 mx-3">
            <div className="bg-gray-700 p-6 rounded-lg mb-4">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              {cartItems.length > 0 && (
                <ul className="cart__items">
                  {cartItems.map((item) => (
                    <li key={item.id} className="cart__item">
                      <div className="cart__info">
                        {item.name} - ${item.price.toFixed(2)}
                      </div>
                      <div className="cart__modify">
                        {item.quantity > 1 ? (
                          <IoIosRemove
                            className="cart-icon "
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
                  <div className="">
                    <p>TOTAL: ${total.toFixed(2)}</p>
                    {/* <button className=" my-2 border rounded-lg w-full py-2">Place order</button> */}
                  </div>
                </ul>
              )}
            </div>
            <div className="bg-gray-800 text-gray-400 p-4 rounded-lg flex items-center justify-center gap-2">
              <CiLock />
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Order;
