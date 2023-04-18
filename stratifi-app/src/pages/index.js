import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Howitworks from "../components/Howitworks";
import Footer from "../components/Footer";
import About from "../components/About";
import Faq from "../components/faq";

const Home = () => {
  return (
    <main className="">
      <NavBar />
      <Hero />
      <About />
      <Howitworks />
      <Faq />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default Home;
