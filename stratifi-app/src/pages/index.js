import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Howitworks from "../components/Howitworks";
import Footer from "../components/Footer";
import About from "../components/About";
import Faq from "../components/faq";
import Layout from "./layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Howitworks />
      <Faq />
      <Testimonial />
    </Layout>
  );
};

export default Home;
