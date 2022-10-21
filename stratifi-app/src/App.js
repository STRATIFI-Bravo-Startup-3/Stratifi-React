import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Faq from "./components/faq";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Faq />
      </Router>
    </div>
  );
}

export default App;
