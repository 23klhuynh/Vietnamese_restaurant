import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Layout from "./layout/Layout";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./auth/UserContext";

function App() {
  return (
    <UserProvider>
      <Toaster position="top-center" reverseOrder={true}/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
