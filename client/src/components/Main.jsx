import { Element } from "react-scroll";
import Intro from "./Intro";

function Main() {
  return (
    <Element name="main">
      <div className="home-container">
        <img
          src="https://assets.vogue.com/photos/5a3aac8f0193fe386b1e3898/master/w_2560%2Cc_limit/vietnamese-food-holding.jpg"
          alt="Vietnamese cuisine"
          className="home-container__image w-full h-full object-cover"
        />
        <Intro />
      </div>
    </Element>
  );
}

export default Main;
