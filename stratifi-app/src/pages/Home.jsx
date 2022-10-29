import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import About from "../components/About";

const Home = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Accordion />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default Home;
