import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FaqComp from "./components/Faq";
import Testimonial from "./components/Testimonial"

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Hero />
        <FaqComp />
        <Testimonial />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
