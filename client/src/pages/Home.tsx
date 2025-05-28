import Intro from "../components/fragments/Intro";
import BusinessDetail from "../components/fragments/BusinessDetail";
import About from "../components/fragments/About";
import HomeImage from "../assets/bg.jpg";
import Info from "../components/fragments/Info";
import PopularItems from "../components/fragments/PopularItems";

function Home() {
  return (
    <>
      <header className="home-container" id="home">
        <img
          className="home-bg"
          src={HomeImage}
          alt="Home Background"
          loading="lazy"
        />
        <Intro />
      </header>
      <main>
        <PopularItems/>
        <BusinessDetail />
        <About />
        <Info/>
      </main>
    </>
  );
}

export default Home;
