import MainNavbar from "./components/mainNavbar/MainNavbar.js";
import MiniNavbar from "./components/miniNavbar/MiniNavbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MiniNavbar />
          <MainNavbar />
        </a>
      </header>
    </div>
  );
}

export default App;
