import "./App.css";
<<<<<<< HEAD
import Home from "./pages/Home";
import Register from "./pages/Register";
=======
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FaqComp from "./components/Faq";
import Testimonial from "./components/Testimonial"
>>>>>>> 5537d497f91839314996122921143aa044a5a280

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
<<<<<<< HEAD
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />} />
        </Routes>
=======
        <NavBar />
        <Hero />
        <FaqComp />
        <Testimonial />
        <Footer />
>>>>>>> 5537d497f91839314996122921143aa044a5a280
      </Router>
    </div>
  );
}

export default App;
