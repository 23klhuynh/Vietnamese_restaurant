import Intro from "../components/Intro";
import BusinessDetail from "../components/BusinessDetail";
import About from "../components/About";
import HomeImage from "../assets/bg.jpg"

function Home() {
  return (
    <>
      <header className="home-container" id="home">
        <img className="home-bg" src={HomeImage} alt="home background image" loading="lazy"/>
        <Intro/>
      </header>
      <main>
        <section className="business-detail-section">
          <BusinessDetail />
        </section>
        <section className="about-section">
          <About />
        </section>
      </main>
    </>
  );
}

export default Home;
