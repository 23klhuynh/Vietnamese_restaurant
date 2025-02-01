import Photo from "../assets/picture1.jpg";
import { IoMdTime } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const BusinessDetail: React.FC = () => {
  return (
    <div className="business-detail" id="contact">
      <div className="business-detail__image">
        <img src={Photo} alt="pho image" className="business-detail__link" />
      </div>

      <div className="business-detail__description">
        <div className="business-detail__heading business-detail__info border-b-2 border-black pl-6 pr-6 pt-6">
          <h1 className="">
            ABOUT
          </h1>
          <h2 className="">
            our restaurant
          </h2>
        </div>
        <div className="business-detail__hours business-detail__info ">
          <h2 className="flex items-center gap-2 ">
            <IoMdTime /> Hours
          </h2>
          <p>Monday - 11am-9pm</p>
          <p>Tuesday - 11am-9pm</p>
          <p>Wednesday - 11am-9pm</p>
          <p>Thursday - 11am-9pm</p>
          <p>Friday - 11am-9pm</p>
          <p>Saturday - 11am-9pm</p>
          <p>Sunday - 11am-9pm</p>
          <h2 className="flex items-center gap-2 ">
            <FaPhoneAlt /> PHONE
          </h2>
          <p>123-456-7890</p>
          <h2 className="flex items-center gap-2 ">
            <FaMapMarkerAlt /> Location
          </h2>
          <p>1906 your mom drive</p>
        </div>
      </div>
    </div>
  );
}

export default BusinessDetail;
