import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
          <Route index element={<Home />} /> 
          <Route path="menu" element={<Menu />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
