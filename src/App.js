import MainNavbar from "./components/mainNavbar/MainNavbar.js";
import MiniNavbar from "./components/MiniNavbar/MiniNavbar";
import "./App.css";
import HomePage from "./screens/homepage/Homepage.js";
import Footer from "./components/footer/footer.js";
import Comm from "./screens/comm/Comm.js";
import Products from "./screens/products/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mission from "./screens/mission/Mission.js";
import TarimGrubu from "./components/categoryone/TarimGrubu.js";

function App() {
  return (
    <Router>
      <div className="App">
        <MiniNavbar />
        <MainNavbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="Communication" element={<Comm />}></Route>
          <Route path="Products" element={<Products />}>
            <Route index={true} element={<Products />}></Route>
            <Route path="TarimGrubu" element={<TarimGrubu />}></Route>
          </Route>
          <Route path="Kurumsal" element={<Mission />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
