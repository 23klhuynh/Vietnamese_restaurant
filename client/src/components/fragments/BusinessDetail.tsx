import Photo from "../../assets/bg.jpg";
/* import { IoMdTime } from "react-icons/io";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; */

const BusinessDetail: React.FC = () => {
  /* const hours = [
    "Monday: 11:00 AM - 9:00 PM",
    "Tuesday: 11:00 AM - 9:00 PM",
    "Wednesday: 11:00 AM - 9:00 PM",
    "Thursday: 11:00 AM - 9:00 PM",
    "Friday: 11:00 AM - 9:00 PM",
    "Saturday: 11:00 AM - 9:00 PM",
    "Sunday: 11:00 AM - 9:00 PM"
  ]; */

  return (
    <div className="business-detail" id="contact">
      <div className="business-detail__image">
        <img src={Photo} alt="Pho dish" className="business-detail__link" />
      </div>
      <div className="business-detail__description">
        <div className="business-detail__main">
          <h1>
            The Art of{" "}
            <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
              Perfect
            </span>{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
              Pho
            </span>{" "}
          </h1>
          <div className="business-detail__content">
            <p>
              At Pho Viet, we believe that creating the perfect bowl of pho is
              both an art and a sicence. Our chefs have trained for years in
              Vietnam to perfect the techniques needed to create authentic
              soul-warming ramen.
            </p>
            <p>
              Our Broths are simmered for 12-18 hours to extract maximum flavor
              and richness. We make our noodles fresh daily using a traditional
              recipe, and our toppings are prepared with meticulous attention to
              details.
            </p>
          </div>
          <div className="business-detail__facts">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ut
            ratione et ea quo quos hic quae debitis odio expedita assumenda
            optio cum, omnis libero iste, excepturi velit quis dolore.
          </div>
        </div>
        {/* <div className="business-detail__heading business-detail__info border-b-2 border-black px-6 pt-6">
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
        </div> */}
      </div>
    </div>
  );
};

export default BusinessDetail;
