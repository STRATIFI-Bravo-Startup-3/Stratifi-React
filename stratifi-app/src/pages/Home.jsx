import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Faq from "../components/faq";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Testimonial />

      <Faq />
      <Footer />
    </main>
  );
};

export default Home;
