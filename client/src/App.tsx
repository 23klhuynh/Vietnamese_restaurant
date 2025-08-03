import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Layout from "./layout/Layout";
import Order from "./pages/Order";
import Register from "./pages/Register";
import Offers from "./pages/Offers";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./auth/UserContext";

import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <UserProvider>
      <ScrollToTop/>
      <Toaster position="top-center" reverseOrder={true}/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="services" element={<Services/>}/>
          <Route path="order" element={<Order/>}/>
          <Route path="offers" element={<Offers/>}/>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
