import NewIcon from "../../assets/NewIcon.png";
function Footer() {
  return (
    <div className="footer-container text-center footer bg-gray-800 text-white py-4  ">
      <div className="footer__top grid grid-cols-4 place-items-center max-w-[1000px] mx-auto p-9 text-start gap-5">
        <div className="flex flex-col gap-2 h-[100%]">
          <h3 className="flex items-center justify-start gap-3 bg-gradient-to-r from-orange-300 to-orange-600 bg-clip-text text-transparent mb-5">
            {" "}
            <img src={NewIcon} alt="" className="w-[50px] invert " />
            Phở Việt
          </h3>
          <small className="max-w-[300px]">
            Serving authentic Vietnamese pho with love and passion. Our resturant brings the taste of Vietnam to your neighborhood with carefully crafted bowls of noodle perfection.
          </small>
          {/* <p>twiter, facebook, snapchat</p> */}
        </div>

        <div className="flex flex-col gap-2 h-[100%]">
          <p className=" text-orange-400 my-2">MENU</p>
          <small>Pho Bowls</small>
          <small>Side Dishes</small>
          <small>Beverage</small>
          <small>Deserts</small>
        </div>

        <div className="flex flex-col gap-2 h-[100%]">
          <p className=" text-orange-400 my-2">CONTACT</p>
          <small>Reservations</small>
          <small>Catering</small>
          <small>Delivering</small>
          <small>Contact Us</small>
        </div>

        <div className="flex flex-col gap-2 h-[100%] ">
          <p className=" text-orange-400 my-2">VISIT US</p>
          <small>5218 Hwy 70 W suite B</small>
          <small>Morehead City</small>
          <small>NC 28557</small>
          <small className="my-1">
            <span className="text-orange-300">Phone</span>: (252)-499-4096
          </small>
          <span className="grid">
            <small className="text-orange-300">Hours</small>
            <small>Mon-Sun: 11AM - 9PM</small>
          </span>
        </div>
      </div>
      <div className="border-t pt-3 border-gray-600">
        <p>
          &copy; {new Date().getFullYear()} Pho Viet Restaurant. All rights
          reserved.
        </p>
        <p>
          <a href="" className="hover:underline mr-2">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="" className="hover:underline ml-2">
            Terms of Services
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
