import "./App.css";
import "animate.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UpdateProfile from "./pages/UpdateProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Influencers from "./pages/Influencers";
// import SubscribeContent from "./pages/SubscribeContent";
import Mailchimp from "./pages/SubscribeContent";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/influencers" element={<Influencers />} />
          <Route path="/get-content" element={<Mailchimp />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
