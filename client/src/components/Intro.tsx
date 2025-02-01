import {Link } from "react-router-dom"

function Intro() {
  return (
    <article className="welcome-section">
      <div className="welcome-section__container">
        <h1 className="welcome-section__title ">Welcome to Pho Viet</h1>
        <h3 className="welcome-section__description ">
          Experience our authentic Vietnamese dishes made with fresh ingredients
        </h3>
        <Link className="btn-menu" to="/menu">
          VIEW MENU
        </Link>
      </div>
    </article>
  );
}

export default Intro;
