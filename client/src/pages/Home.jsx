import React from "react";
import BusinessDetail from "../components/BusinessDetail";
import Footer from "../components/Footer";
import Main from "../components/Main";
import About from "../components/About"

function Home() {


  return (
    <>
      <header className="home-header">
        <Main/>
      </header>
      <main className="business-detail-section">
        <BusinessDetail />
        <About />
      </main>
      <footer className="footer bg-gray-800 text-white py-4 mt-4">
        <Footer />
      </footer>
    </>
  );
}

export default Home;
