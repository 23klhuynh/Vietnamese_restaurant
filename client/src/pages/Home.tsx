import Intro from "../components/fragments/Intro";
import BusinessDetail from "../components/fragments/BusinessDetail";
import About from "../components/fragments/About";
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
