import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

function Intro() {
  return (
    <article className="welcome-section">
      <div className="welcome-section__container">
        <h1 className="welcome-section__title ">Welcome to Pho Viet</h1>
        <h3 className="welcome-section__description ">
          Experience our authentic Vietnamese dishes made with fresh ingredients
        </h3>
        <Link className="welcome-section__btn" to="/menu">
          VIEW MENU
        </Link>
        <a
          className="welcome-section__btn"
          href="https://www.facebook.com/profile.php?id=61559370593017"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="w-24 h-10 text-blue-600 text-3xl md:text-3xl lg:text-3xl xl:text-3xl " />
        </a>
      </div>
    </article>
  );
}

export default Intro;
