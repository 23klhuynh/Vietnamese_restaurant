import Intro from "../components/Intro";
import BusinessDetail from "../components/BusinessDetail";
import About from "../components/About";
import HomeImage from "../assets/bg.jpg";

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
        <BusinessDetail />
        <About />
      </main>
    </>
  );
}

export default Home;
