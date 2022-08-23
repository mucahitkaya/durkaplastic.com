import MainNavbar from "./components/mainNavbar/MainNavbar.js";
import MiniNavbar from "./components/MiniNavbar/MiniNavbar";
import "./App.css";
import ImageSection from "./components/imageSection/ImageSection.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MiniNavbar />
        <MainNavbar />
        <ImageSection />
      </header>
    </div>
  );
}

export default App;
