import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <NavBar />
      <div className="h-screen bg-[#AD6EC0] flex flex-col items-center border-b-2 border-gray-100 text-white px-6 gap-2">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-4xl lg:mt-[15rem] mt-[10rem]">404</h1>
          <h1 className="text-start font-bold text-xl">
            Oops! Something went wrong
          </h1>
          <span className="text-start  lg:w-[25rem] mt-3">
            Sorry, our website is still under construction. Return to Home.
          </span>

          <Link to="/">
            <button className="w-36 mt-3 text-white bg-[#FF8F50] hover:bg-[#FF7A30] active:bg-[#FF6610] ring-1 ring-[#FF7A30] shadow-sm shadow-slate-600 rounded">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
