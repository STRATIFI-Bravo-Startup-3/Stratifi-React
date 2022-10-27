import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FaqComp from "./components/Faq";
import Testimonial from "./components/Testimonial";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
