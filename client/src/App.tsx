import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import NotFound from "./components/NotFound";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./fragments/UserContext";

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
