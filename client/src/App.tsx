import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import { AuthProvider } from "./fragments/AuthContext";

function App() {
  return (
    <AuthProvider>{/* need work */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="menu" element={<Menu />} />
        </Route>

        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>

        {/* <Route path="*" element={<NotFound />} /> */}

      </Routes>
    </AuthProvider>
  );
}

export default App;
