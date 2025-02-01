import { Outlet } from "react-router-dom/dist";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useScroll from "./useScroll";
import SmoothScroll from "./SmoothScroll";

function Layout() {
  const scroll = useScroll();
  SmoothScroll();
  return (
    <>
      <Navbar scroll={scroll} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
