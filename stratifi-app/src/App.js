import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Hero />
      </Router>
    </div>
  );
}

export default App;
