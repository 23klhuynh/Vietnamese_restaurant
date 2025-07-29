import { CiTimer } from "react-icons/ci";
/* need work */
function Order() {
  return (
    <main className="order bg-gray-800 text-gray-200">
      <section className="order__container">
        <div className="order__header">
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
                  <input type="text" placeholder="Jane Doe" required />
                </span>

                <div className="flex justify-between gap-3">
                  <span>
                    <label htmlFor="">Email Address</label>
                    <input type="email" placeholder="JaneDoe@gmail.com" />
                  </span>
                  <span>
                    <label htmlFor="">Phone Number</label>
                    <input type="tel" placeholder="123-456-7890" />
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

                <div className="flex">
                  <div className="border rounded-md p-2">
                    <input type="radio" name="" value=""  className="text-center"/> Delivery
                    <p className="flex justify-start items-center">
                      <CiTimer />
                      30-45 minutes
                    </p>
                    <p>Delivered to your address</p>
                  </div>
                </div>
                {/* neeed work right here */}
                <span>
                  <label htmlFor="">Delivery Address</label>
                  <input type="text" placeholder="948 king dr" required />
                </span>

                <div className="flex justify-between gap-3">
                  <span>
                    <label htmlFor="">City</label>
                    <input type="text" placeholder="Morehead City" />
                  </span>
                  <span>
                    <label htmlFor="">ZIP Code</label>
                    <input type="tel" placeholder="123-456-7890" />
                  </span>
                </div>
              </div>
              {/* /// */}
            </form>
          </div>

          <div className="order__summary">This is for summary section</div>
        </div>
      </section>
    </main>
  );
}

export default Order;
