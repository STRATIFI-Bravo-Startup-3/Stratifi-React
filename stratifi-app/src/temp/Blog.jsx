import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import Hero from "../components/Hero";
import { Category } from "../components";

export default function Blog() {
  return (
    <>
      <NavBar />
      {/* <Hero /> */}
      <>
        <div className="py-[2rem] px-[2rem] md:px-[6rem]">
          <h2 className="text-2xl font-bold">Category</h2>
          <Category />
        </div>
      </>
      <Footer />
    </>
  );
}
