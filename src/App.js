import MainNavbar from "./components/mainNavbar/MainNavbar.js";
import MiniNavbar from "./components/MiniNavbar/MiniNavbar";
import "./App.css";
import HomePage from "./screens/homepage/Homepage.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MiniNavbar />
        <MainNavbar />
        <HomePage />
      </header>
    </div>
  );
}

export default App;
