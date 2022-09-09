import MainNavbar from "./components/mainNavbar/MainNavbar.js";
import MiniNavbar from "./components/MiniNavbar/MiniNavbar";
import "./App.css";
import HomePage from "./screens/homepage/Homepage.js";
import Footer from "./components/footer/footer.js";
import Comm from "./screens/comm/Comm.js";
import Products from "./screens/products/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mission from "./screens/mission/Mission.js";
import TarimGrubu from "./components/tarimgrubu/TarimGrubu.js";
import KimyaGrubu from "./components/kimyagrubu/KimyaGrubu.js";
import MutfakGrubu from "./components/mutfakgrubu/MutfakGrubu.js";
import TemizlikGrubu from "./components/temizlikgrubu/TemizlikGrubu.js";
import Product from "./components/product/Product.js";
import { useEffect, useState } from "react";

function App() {
  const [activeMenu, setActiveMenu] = useState(false);
  let widdi = window.innerWidth;
  useEffect(() => {
    if (widdi >= 480) {
      setActiveMenu(false);
      console.log("asdasd");
    }
  }, [widdi]);
  return (
    <Router>
      <div className="App">
        <MiniNavbar />
        <MainNavbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Communication" element={<Comm />}></Route>
          <Route path="/Kurumsal" element={<Mission />}></Route>
          <Route path="/Products" element={<Products />}>
            <Route index={true} element={<Products />}></Route>
          </Route>
          <Route path="/TarimGrubu" element={<TarimGrubu />}></Route>
          <Route path="/KimyaGrubu" element={<KimyaGrubu />}></Route>
          <Route path="/MutfakGrubu" element={<MutfakGrubu />}></Route>
          <Route path="/TemizlikGrubu" element={<TemizlikGrubu />}></Route>
          <Route path="/TarimGrubu/:id" element={<Product />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
