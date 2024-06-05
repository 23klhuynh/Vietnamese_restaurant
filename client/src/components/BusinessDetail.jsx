import React from "react";
import Photo from "../assets/picture1.jpg";
import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

function BusinessDetail() {
  return (
    <div className="business-detail" id="contact">
      <div className="business-detail__image">
        <img src={Photo} alt="pho image" className="business-detail__link" />
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
            <FaMapMarkerAlt /> Location
          </h1>
          <p>1906 your mom drive</p>
        </div>
        <button className="business-detail__btn business-detail__info bg-red-700 border-black-700 border-b-2">
          <Link to="/about"> ABOUT US</Link>
        </button>
      </div>
    </div>
  );
}

export default BusinessDetail;
