import Photo from "../assets/picture1.jpg";
import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Element } from "react-scroll";

function BusinessDetail() {
  return (
    <Element name="contact">
      <div className="business-detail">
        <div className="business-detail__image">
          <img src={Photo} alt="" className="business-detail__link" />
        </div>

        <div className="business-detail__description">
          <div className="business-detail__heading business-detail__info border-b-2 border-black pl-6 pr-6 pt-6">
            <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-5xl">
              ABOUT
            </h1>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
              our restuarant
            </p>
          </div>
          <div className="business-detail__hours business-detail__info text-lg md:text-xl lg:text-2xl xl:text-2xl">
            <h1 className="text-red-700 flex items-center gap-2">
              <IoMdTime /> Hours
            </h1>
            <p>Monday - 11am-9pm</p>
            <p>Tusday - 11am-9pm</p>
            <p>Wednsday - 11am-9pm</p>
            <p>Thurday - 11am-9pm</p>
            <p>Friday - 11am-9pm</p>
            <p>Saturady - 11am-9pm</p>
            <p>Sunday - 11am-9pm</p>
          </div>
          <div className="business-detail__phone business-detail__info text-lg md:text-xl lg:text-2xl xl:text-2xl">
            <h1 className="text-red-700 flex items-center gap-2">
              <FaPhoneAlt /> PHONE
            </h1>
            <p>123-456-7890</p>
          </div>
          <div className="business-detail__location business-detail__info text-lg md:text-xl lg:text-2xl xl:text-2xl">
            <h1 className="text-red-700 flex items-center gap-2">
              {/* <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width="24"
                  height="24"
                >
                  <path
                    fill="currentColor"
                    d="M192 0C86 0 0 85.5 0 192c0 95.5 167.9 309.3 177.6 322.5c6.2 7.2 14.4 7.2 20.6 0C216.1 501.3 384 287.5 384 192C384 85.5 298 0 192 0zm0 272c-44.1 0-80-35.9-80-80s35.9-80 80-80s80 35.9 80 80s-35.9 80-80 80z"
                  />
                </svg>
              </span> */}
              <FaMapMarkerAlt /> Location
            </h1>
            <p>1906 your mom drive</p>
          </div>
          <button className="business-detail__btn business-detail__info bg-red-700 border-black-700 border-b-2">
            <Link to="/about"> ABOUT US</Link>
          </button>
        </div>
      </div>
    </Element>
  );
}

export default BusinessDetail;
