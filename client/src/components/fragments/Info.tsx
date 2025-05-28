import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Info() {
  return (
    <div className="info">
      <div className="info__wrapper">
        <div className="info__contact">
          <h3>Visit Us</h3>
          <p>
            <FaMapMarkerAlt />
            Address
          </p>
          <small>5218 Hwy 70 W suite B</small>
          <small>Morehead City, NC 28557</small>
          <p>
            <MdAccessTimeFilled />
            Hours
          </p>
          <small>Monday - Sunday: 11:00 AM - 9:00 PM</small>
          <p>
            <FaPhoneAlt />
            Contact
          </p>
          <small>Phone: (252)-499-4096</small>
          <button className="bg-gradient-to-r from-[rgba(255,145,0,0.5)] to-[rgba(242,101,13,0.67)] text-black rounded">
            Get Direction
          </button>
        </div>
        <div className="info__subscription">
          <h3>Subscribe to Our Newsletter</h3>
          <small>
            Stay updated with new menu items, special offers, and exclusive
            events. Sign up for our newsletter!
          </small>
          <form action="">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Your name" />

            <label htmlFor="">Email</label>
            <input type="email" placeholder="Your email address" />
            <label htmlFor="" className="info__checkbox">
              <input type="checkbox" />I want to receive special offers and
              promotions
            </label>

            <button className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent">
              Subscription
            </button>
            <small>
              By subscribing you agree to our Privacy Policy and Terms of
              Service. We'll never share your infomation with third parties.
            </small>
          </form>
        </div>
        <div className="info__newsletter"></div>
      </div>
    </div>
  );
}

export default Info;
