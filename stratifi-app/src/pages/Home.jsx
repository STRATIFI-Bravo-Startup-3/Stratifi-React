import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Faq from "../components/faq";

import Footer from "../components/Footer";
import Howitworks from "../components/Howitworks";

const Home = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Testimonial />
      <Howitworks/> 

      <Faq />
      {/* <Footer /> */}
    </main>
  );
};

export default Home;
