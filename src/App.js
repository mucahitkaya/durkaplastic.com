import MiniNavbar from "./components/MiniNavbar/MiniNavbar";
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
        </a>
      </header>
    </div>
  );
}

export default App;
