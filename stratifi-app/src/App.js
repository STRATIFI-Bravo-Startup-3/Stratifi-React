import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FaqComp from "./components/Faq";

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
        <FaqComp />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
