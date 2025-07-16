import { useState } from "react";
import axios from "axios";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { LuMapPinCheckInside } from "react-icons/lu";
import { BsPeopleFill } from "react-icons/bs";
import { IoBookSharp } from "react-icons/io5";

function Services() {
  const [reservation, setReservation] = useState<boolean>(false);
  const [reservationForm, setReservationForm] = useState({
    customer_email: "",
    customer_name: "",
    number_of_people: "",
    reservation_date: "",
    reservation_time: "",
  });

  const handleReservation = () => {
    setReservation(!reservation);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* need work */
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/reservation",
        {
          customer_email: reservationForm.customer_email,
          customer_name: reservationForm.customer_name,
          number_of_people: reservationForm.number_of_people,
          reservation_date: reservationForm.reservation_date,
          reservation_time: reservationForm.reservation_time,
        }
      );

      if (response.status === 200) {
        setReservationForm({
          customer_email: "",
          customer_name: "",
          number_of_people: "",
          reservation_date: "",
          reservation_time: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "reservation_time") {
      toMilitaryTime(value);
    }

    if (name === "reservation_date") {
      value.replace("/", "-");
    }

    setReservationForm((prev) => ({ ...prev, [name]: value }));
  };

  /* need work on the time format */
  const toMilitaryTime = (standardTime: string): string => {
    const [time, modifier] = standardTime.trim().split(" ");

    let [hours, minutes] = time.split(":").map(Number);

    if (modifier.toLowerCase() === "pm" && hours !== 12) {
      hours += 12;
    }

    if (modifier.toLowerCase() === "am" && hours === 12) {
      hours = 0;
    }

    const hourStr = hours.toString().padStart(2, "0");
    const minuteStr = minutes.toString().padStart(2, "0");

    return `${hourStr}:${minuteStr}`;
  };

  return (
    <div className={`services ${reservation ? "rev" : ""}`}>
      <div className="services__container ">
        <div className="services__header">
          <small className="border border-red-800 rounded-2xl bg-red-800 px-6 py-2">
            What We Offer
          </small>
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
            <div className="services__offers-item first">
              <p>Student Discount</p>
              <h1 className="font-bold">15% OFF</h1>
              <small>
                Valid student ID required. Available for dine-in only.
              </small>

              <button>Claim Offer</button>
            </div>
            <div className="services__offers-item second">
              <p>Lunch Special</p>
              <h1 className="font-bold">$9.99</h1>
              <small>
                Monday - Friday. 11AM - 2PM. Includes Pho and a drink.
              </small>

              <button>Claim Offer</button>
            </div>
            <div className="services__offers-item third">
              <p>Happy Hour</p>
              <h1 className="font-bold">2 for 1</h1>
              <small>
                Appetizers and drinks. Monday - Thursday. 4PM - 6PM.
              </small>

              <button>Claim Offer</button>
            </div>
          </div>

          <div className="services__offers-footer bg-gray-700 border border-gray-700">
            <h1>Reserve Your Experience</h1>
            <p>
              whather it's a sepcial occasion or casual meal, we're here to
              provide you with an exceptional pho and Vietnamese cusine
              experience. Book your table now.
            </p>
            <button
              className="services__offers-footer-btn"
              onClick={handleReservation}
            >
              Make a Reservation
            </button>
          </div>
        </div>

        {reservation && (
          <div className="reservation">
            <form
              action=""
              className="p-4 flex flex-col gap-2"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-1">
                <label htmlFor="">Name:</label>
                <input
                  type="text"
                  name="customer_name"
                  placeholder="Jane Doe"
                  required
                  value={reservationForm.customer_name}
                  onChange={handleChange}
                  className="px-2 py-1 rounded-md"
                />
              </div>

              <div className="grid gap-1">
                <label htmlFor="">Email:</label>
                <input
                  type="email"
                  name="customer_email"
                  placeholder="testing@gmail.com"
                  required
                  value={reservationForm.customer_email}
                  onChange={handleChange}
                  className="px-2 py-1 rounded-md"
                />
              </div>

              <div className="grid gap-1">
                <label htmlFor="">Number of people:</label>
                <input
                  type="number"
                  name="number_of_people"
                  min="0"
                  step="1"
                  placeholder="2 (not decimal)"
                  required
                  value={reservationForm.number_of_people}
                  onChange={handleChange}
                  className="px-2 py-1 rounded-md"
                />
              </div>

              <div className="grid gap-1">
                <label htmlFor="">Date:</label>
                <input
                  type="date"
                  name="reservation_date"
                  required
                  value={reservationForm.reservation_date}
                  onChange={handleChange}
                  className="px-2 py-1 rounded-md"
                />
              </div>

              <div className="grid gap-1">
                <label htmlFor="">Time:</label>
                <input
                  type="time"
                  name="reservation_time"
                  required
                  value={reservationForm.reservation_time}
                  onChange={handleChange}
                  className="px-2 py-1 rounded-md"
                />
              </div>

              <button
                className=" w-full mt-auto rounded-lg py-1 bg-gray-600 text-white hover:bg-gray-700"
                type="submit"
              >
                Make Reservation
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
