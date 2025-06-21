import { FaCircleCheck } from "react-icons/fa6";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { LuMapPinCheckInside } from "react-icons/lu";
import { BsPeopleFill } from "react-icons/bs";
import { IoBookSharp } from "react-icons/io5";

function Services() {
  return (
    <div className="services">
      <div className="services__container">
        <div className="services__header">
          <small className="border border-red-800 rounded-2xl bg-red-800 px-6 py-2">What We Offer</small>
          <h1 className="font-bold text-white">Our Services</h1>
          <p className="text-gray-400">
            Experience the authentic taste of Vietnam with our premium services
            tailored to enhance your dining journey.
          </p>
        </div>

        <div className="services__content">
          <div className="services__item">
            <div className="services__icon">
              <span>
                <LuMapPinCheckInside />
              </span>
            </div>
            <div className="services__description">
              <div className="services__description-header">
                <h3>Dine-In Experience</h3>
                <p>
                  Immerse yourself in our authentic Vietnamese atmosphere while
                  enjoying freshly made food. Our resturant features traditional
                  decor and comforable seating.
                </p>
              </div>
              <ul className="services__description-main">
                <li>
                  <span>
                    <FaCircleCheck />
                  </span>
                  Comforable seating for groups and couples
                </li>
                <li>
                  <span>
                    <FaCircleCheck />
                  </span>
                  Watch our chefs prepare your food
                </li>
                <li>
                  <span>
                    <FaCircleCheck />
                  </span>
                  Traditional Vietnamese decor and ambiance
                </li>
                <li>
                  <span>
                    <FaCircleCheck />
                  </span>
                  Full service with trained staff
                </li>
              </ul>
            </div>
          </div>

          <div className="services__item">
            <div className="services__icon">
              <span>
                <FaCartFlatbedSuitcase />
              </span>
              {/* <h3>icon</h3>{" "} */}
            </div>
            <div className="services__description">
              <div className="services__description-header">
                <h3>Takeout & Delivery</h3>
                <p>
                  Enjoy our delicious food in the comfort of your own home. We
                  offer quick takeout and delivery services with special
                  packaging to keep your food hot and fresh.
                </p>
              </div>
              <ul className="services__description-main">
                <li>
                  <span>
                    <FaCircleCheck />
                  </span>
                  Tastes hot and fresh upon arrival
                </li>
                <li>
                  <span>
                    <FaCircleCheck />
                  </span>
                  Easy online ordering system
                </li>
                <li>
                  <span>
                    <FaCircleCheck />
                  </span>
                  Fast and reliable delivery service
                </li>
                <li>
                  <span>
                    <FaCircleCheck />
                  </span>
                  Delivery within 10 miles radius
                </li>
              </ul>
            </div>
          </div>

          <div className="services__item">
            <div className="services__icon">
              <span>
                <BsPeopleFill />
              </span>
            </div>
            <div className="services__description">
              <div className="services__description-header">
                <h3>Catering Services</h3>
                <p>
                  Made your event special with our catering services. From small
                  gatherings to large corporate events, we offer customized pho
                  bars and vietnamese cuisine.
                </p>
              </div>
              <ul className="services__description-main">
                <li>
                  <span>
                    <FaCircleCheck />
                  </span>
                  Custom pho stations for events
                </li>
                <li>
                  <span>
                    <FaCircleCheck />
                  </span>
                  Professional staff to serve guests
                </li>
                <li>
                  <span>
                    <FaCircleCheck />
                  </span>
                  Menu customization options
                </li>
                <li>
                  <span>
                    <FaCircleCheck />
                  </span>
                  Equipment and setup included
                </li>
              </ul>
            </div>
          </div>

          <div className="services__item">
            <div className="services__icon">
              <span>
                <IoBookSharp />
              </span>
            </div>
            <div className="services__description">
              <div className="services__description-header">
                <h3>Pho Making Classes</h3>
                <p>
                  Learn the art of ramen making from our expert chefs. Our
                  classes cover everything from making noodles from scratch to
                  preparing the perfect broth.
                </p>
              </div>
              <ul className="services__description-main">
                <li>
                  <span>
                    <FaCircleCheck />
                  </span>
                  Hands-on experience {/* with professional equipment */}
                </li>
                <li>
                  <span>
                    <FaCircleCheck />
                  </span>
                  Small class sizes for personalized attention
                </li>
                <li>
                  <span>
                    <FaCircleCheck />
                  </span>
                  Take home recipes and techniques
                </li>
                <li>
                  <span>
                    <FaCircleCheck />
                  </span>
                  Includes meal and sake tasting
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__offers">
          <h1 className="services__offers-header">Special Offers</h1>

          <div className="services__offers-items">
            <div className="services__offers-item">
              <p>Student Discount</p>
              <h1>15% OFF</h1>
              <small>Valid student ID required. Available for dine-in only.</small>

              <button>
                Claim Offer
              </button>
            </div>
            <div className="services__offers-item">
              <p>Lunch Special</p>
              <h1>$9.99</h1>
              <small>Monday - Friday. 11AM - 2PM. Includes Pho and a drink.</small>

              <button>
                Claim Offer
              </button>
            </div>
            <div className="services__offers-item">
              <p>Happy Hour</p>
              <h1>2 for 1</h1>
              <small>Appetizers and drinks. Monday - Thursday. 4PM - 6PM.</small>

              <button>
                Claim Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
