import MainNavbar from "./components/mainNavbar/MainNavbar.js";
import MiniNavbar from "./components/MiniNavbar/MiniNavbar";
import "./App.css";
import HomePage from "./screens/homepage/Homepage.js";
import Footer from "./components/footer/footer.js";
import Comm from "./screens/comm/Comm.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <MiniNavbar />
        <MainNavbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="Communication" element={<Comm />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
