import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import useScroll from "./components/useScroll";
import SmoothScroll from "./components/SmoothScroll";
import NotFound from "./fragments/NotFound";
import Footer from "./components/Footer";

function App() {
  const scroll = useScroll();
  SmoothScroll();

  return (
    <>
      <Navbar scroll={scroll} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
