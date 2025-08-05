import { Link } from "react-router-dom";
/* import { FaFacebook } from "react-icons/fa"; */

function Intro() {
  return (
    <article className="welcome-section">
      <div className="welcome-section__container">
        <p className="border rounded-xl w-fit mx-auto px-1 bg-orange-400 border-orange-400 text-gray-100">
          Authentic Vietnamese Cuisine
        </p>
        <h1 className="welcome-section__title">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
            Pho
          </span>{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
            Viet
          </span>
        </h1>
        {/* <h3 className="welcome-section__description ">
          Experience our authentic Vietnamese dishes made with fresh ingredients
        </h3> */}
        <h3 className="welcome-section__description ">
          Your one-stop destination for authentic, steaming bowls of pho
          perfection. Savor the rich broths, handmade noodles, and carefully
          craft toppings!
        </h3>
        <div className="welcome-section__nav">
          <Link className="welcome-section__btn" to="/menu">
            View Menu
          </Link>
          <Link className="welcome-section__btn special" to="/menu">
            Order Now
          </Link>
        </div>
        {/* <a
          className="welcome-section__btn"
          href="https://www.facebook.com/profile.php?id=61559370593017"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Facebook page"
        >
          <FaFacebook className=" text-blue-600 text-3xl" />
        </a> */}
      </div>
    </article>
  );
}

export default Intro;
