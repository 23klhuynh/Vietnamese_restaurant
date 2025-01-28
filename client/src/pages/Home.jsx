import React from "react";
import BusinessDetail from "../components/BusinessDetail";
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
    </>
  );
}

export default Home;
