import Photo from "../../assets/picture1.jpg"
import { IoMdTime } from "react-icons/io";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const BusinessDetail: React.FC = () => {
  const hours = [
    "Monday: 11:00 AM - 9:00 PM",
    "Tuesday: 11:00 AM - 9:00 PM",
    "Wednesday: 11:00 AM - 9:00 PM",
    "Thursday: 11:00 AM - 9:00 PM",
    "Friday: 11:00 AM - 9:00 PM",
    "Saturday: 11:00 AM - 9:00 PM",
    "Sunday: 11:00 AM - 9:00 PM"
  ];

  return (
    <div className="business-detail" id="contact">
      <div className="business-detail__image">
        <img src={Photo} alt="Pho dish" className="business-detail__link" />
      </div>
      <div className="business-detail__description">
        <div className="business-detail__heading business-detail__info border-b-2 border-black px-6 pt-6">
          <h1>ABOUT</h1>
          <h2>our restaurant</h2>
        </div>
        <div className="business-detail__hours business-detail__info ">
          <h2 className="flex items-center gap-2 ">
            <IoMdTime /> Hours
          </h2>
          {hours.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
          <h2 className="flex items-center gap-2 ">
            <FaPhoneAlt /> PHONE
          </h2>
          <p>(252)-499-4096</p>
          <h2 className="flex items-center gap-2 ">
            <FaMapMarkerAlt /> Location
          </h2>
          <p>5218 Hwy 70 W suite B</p>
          <h3>Morehead City, NC 28557</h3>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetail;
