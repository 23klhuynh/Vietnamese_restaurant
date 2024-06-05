import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import useScroll from "./components/useScroll";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  const scroll = useScroll();
  SmoothScroll();
  return (
    <>
      <Navbar scroll={scroll} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
