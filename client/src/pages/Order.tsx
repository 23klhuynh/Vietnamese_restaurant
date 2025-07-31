import { useState } from "react";
import { CiTimer } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

function Order() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <main className="order bg-gray-800 text-gray-200">
      <section className="order__container">
        <div className="order__header px-[20px]">
          <h1>Checkout</h1>
          <p>Complete your order in just a few steps</p>
        </div>

        <div className="order__main">
          <div className="order__checkout">
            <form className="order__contact-info " /* onSubmit={} */>
              <div className="order__contact-info__header bg-gray-600">
                <span>
                  <h3>Contact Information</h3>
                  <p>
                    We'll use this info to keep you updated about your order
                  </p>
                </span>

                <hr />

                <span>
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="text-black"
                    required
                  />
                </span>

                <div className="flex justify-between gap-3">
                  <span className="flex-1">
                    <label htmlFor="">Email Address</label>
                    <input
                      type="email"
                      placeholder="JaneDoe@gmail.com"
                      className="text-black"
                      required
                    />
                  </span>
                  <span className="flex-1">
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="123-456-7890"
                      className="text-black"
                      required
                    />
                  </span>
                </div>
              </div>
              {/* /// */}
              <div className="order__contact-info__header bg-gray-600">
                <span>
                  <h3>Order Options</h3>
                  <p>Choose how you want to enjoy your meal</p>
                </span>

                <hr />

                <div className="flex gap-6">
                  <div className="border rounded-md px-2 border-gray-400 flex-1">
                    <label className="flex justify-start items-center">
                      <input
                        className="mr-2"
                        type="radio"
                        name="option"
                        value="enable"
                        onChange={handleRadioChange}
                      />
                      Delivery
                    </label>
                    <div className="">
                      <p className="flex items-center gap-1">
                        <CiTimer />
                        30–45 minutes
                      </p>
                      <p>Delivered to your address</p>
                    </div>
                  </div>

                  <div className="border rounded-md px-2 border-gray-400 flex-1">
                    <label className="flex justify-start items-center">
                      <input
                        className="mr-2"
                        type="radio"
                        name="option"
                        value="disable"
                        onChange={handleRadioChange}
                      />
                      Pickup
                    </label>
                    <div className="">
                      <p className="flex items-center gap-1">
                        <CiTimer />
                        15–20 minutes
                      </p>
                      <p>Ready for pickup at resturant</p>
                    </div>
                  </div>

                  <div className="border rounded-md px-2 border-gray-400 flex-1">
                    <label className="flex justify-start items-center">
                      <input
                        className="mr-2"
                        type="radio"
                        name="option"
                        value="disable"
                        onChange={handleRadioChange}
                      />
                      Dine in
                    </label>
                    <div className="">
                      <p className="flex items-center gap-1">
                        <MdOutlineShoppingCart />
                        Served immediately
                      </p>
                      <p>Enjoy at the resturant</p>
                    </div>
                  </div>
                </div>

                {/* neeed work right here */}
                <span>
                  <label htmlFor="">Delivery Address</label>
                  <input
                    type="text"
                    placeholder="948 king dr"
                    disabled={selectedOption === "disable"}
                    className="text-black"
                    required
                  />
                </span>

                <div className="flex justify-between gap-3">
                  <span className="flex-1">
                    <label htmlFor="">City</label>
                    <input
                      type="text"
                      placeholder="Morehead City"
                      disabled={selectedOption === "disable"}
                      className="text-black"
                      required
                    />
                  </span>
                  <span className="flex-1">
                    <label htmlFor="">ZIP Code</label>
                    <input
                      type="tel"
                      placeholder="123-456-7890"
                      disabled={selectedOption === "disable"}
                      className="text-black"
                      required
                    />
                  </span>
                </div>
              </div>

              <div className="order__contact-info__header bg-gray-600">
                <span>
                  <h3>Payment Method</h3>
                  <p>All transactions are secure and encrypted</p>
                </span>

                <hr />

                <div className="grid">
                  <label className="flex justify-start items-center">
                    <input className="mr-2" type="radio" name="option" />
                    Credit/Debit Card
                  </label>
                  <label className="flex justify-start items-center">
                    <input className="mr-2" type="radio" name="option" />
                    Cash on Devlivery
                  </label>
                </div>

                <span>
                  <label htmlFor="">Card Number</label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="text-black"
                    required
                  />
                </span>

                <div className="flex justify-between gap-3">
                  <span className="flex-1">
                    <label htmlFor="">Expiration Date</label>
                    <input type="date" className="text-black" required />
                  </span>
                  <span className="flex-1">
                    <label htmlFor="">CVS</label>
                    <input
                      type="number"
                      placeholder="392"
                      className="text-black"
                      required
                    />
                  </span>
                </div>
              </div>

              <div className="order__contact-info__header bg-gray-600">
                <p>Additional Notes (Optional)</p>
                <textarea
                  name=""
                  id=""
                  className="h-[150px]"
                  placeholder="Special instructions for your order..."
                ></textarea>
              </div>

              {/* /// */}
            </form>
          </div>

          <div className="order__summary ">
            <div className="order__box bg-gray-600 flex flex-col gap-3">
              <h1>Order Summary</h1>

              <hr />

              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                  possimus aut. Tempore ullam mollitia magni officiis, unde
                  recusandae consectetur beatae error, expedita nisi voluptatum,
                  et nemo eveniet tempora? Culpa, quasi.
                </p>
                {/* use a component to filter out the item */}
              </div>
              <p>Total</p>
              <button className="bg-slate-400 h-[50px] rounded-md">Place Order - (total price)</button>
            </div>
            <div className="bg-gray-500 text-gray-400 text-center place-content-center w-full h-[50px] secure">
              <p>Secure Checkout</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Order;
