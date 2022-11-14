import "./App.css";
import "animate.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UpdateProfile from "./pages/UpdateProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Influencers from "./pages/Influencers";
import SubscribeContent from "./pages/SubscribeContent";
import Mailchimp from "./pages/SubscribeContent";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import EmailVerification from "./pages/EmailVerification";
import Error404 from "./pages/Error404";
import ChooseAccount from "./pages/ChooseAccount";
import BlogHome from "./blog/Blog";
import BrandInformation from "./pages/BrandInformation";
import InfluencerInformation from "./pages/InfluencerInformation";
import InfluencerInformation2 from "./pages/InfluencerInformation2";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/influencers" element={<Influencers />} />
          <Route path="/newsletter-subscribe" element={<SubscribeContent />} />
          <Route path="/get-content" element={<Mailchimp />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/choose-account" element={<ChooseAccount />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/blog/home" element={<BlogHome />} />
          <Route path="/register/brand" element={<BrandInformation />} />
          <Route
            path="/register/influencer"
            element={<InfluencerInformation />}
          />
          <Route
            path="/register/influencer/last-step"
            element={<InfluencerInformation2 />}
          />

          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
