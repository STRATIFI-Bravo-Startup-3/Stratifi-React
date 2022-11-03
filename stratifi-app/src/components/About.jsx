import about1 from "../images/about1.png";
import about2 from "../images/about2.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section className="px-20 grid grid-cols-1 items-center lg:gap-4 lg:flex lg:justify-items-center p-8 gap-8 animate__animated animate__zoomIn">
        <div className=" w-[15rem] lg:ml-48 mx-auto bg-[#FF8F50] rounded-full ">
          <img className="" src={about1} alt="" />
        </div>
        <div className="mx-auto lg:w-2/5 w-full flex flex-col gap-6">
          <h1 className="mx-auto lg:mx-0 text-xl font-bold">About us</h1>
          <span className="text-slate-600 lg:w-4/5 w-full text-center lg:text-left">
            We are an influencer marketplace. We connect brands with influencers
            from various niches to meet your marketing needs
          </span>
          <Link to="/about-us">
            <button className=" w-32 lg:mx-0 mx-auto my-1 text-white px-4 py-2 active:bg-[#FF8F50] hover:bg-[#FF7A30] bg-[#FF6610] ring-1 ring-[#FF7A30] shadow-sm shadow-slate-600 rounded">
              Learn more
            </button>
          </Link>
        </div>
      </section>
      <section className="px-20 grid grid-cols-1 items-center lg:gap-4 lg:flex lg:flex-row-reverse lg:justify-items-center p-8 gap-8">
        <div className=" w-[15rem] lg:mr-48 mx-auto bg-[#FF8F50] rounded-full">
          <img className="" src={about2} alt="" />
        </div>
        <div className="mx-auto lg:ml-48 lg:w-2/5 w-full flex flex-col gap-6">
          <h1 className="mx-auto lg:mx-0 text-xl font-bold">
            What is influencer marketing?
          </h1>
          <span className="text-slate-600 lg:w-4/5 w-full text-center lg:text-left">
            Influencer marketing is simply collaborating with reputable online
            influencers to improve brand recognition and sales. when you utilize
            influencer marketing, you are relying on influencers to share their
            opinions about your products and services with their audience to
            boost your brand exposure and grow your sales.
          </span>
          <Link to="/about-us">
            <button className=" w-32 lg:mx-0 mx-auto my-1 text-white px-4 py-2 active:bg-[#FF8F50] hover:bg-[#FF7A30] bg-[#FF6610] ring-1 ring-[#FF7A30] shadow-sm shadow-slate-600 rounded">
              Learn more
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
