import Intro from "../components/Intro";
import BusinessDetail from "../components/BusinessDetail";
import About from "../components/About";

function Home() {
  return (
    <>
      <header className="home-container" id="home">
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
