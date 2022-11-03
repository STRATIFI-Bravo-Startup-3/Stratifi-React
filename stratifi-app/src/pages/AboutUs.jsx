import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import About from "../components/About";
import about1 from "../images/about1.png";
import about3 from "../images/about3.png";
import about4 from "../images/about4.png";
import about5 from "../images/about5.png";

const AboutUs = () => {
  return (
    <div>
      <NavBar />

      <div className="py-16 border-t-2 border-slate-200">
        <section className="px-20 grid grid-cols-1 items-center lg:gap-4 lg:flex lg:justify-items-center p-8 gap-8 animate__animated animate__fadeInLeft">
          <div className=" w-[15rem] lg:ml-48 mx-auto bg-[#FF8F50] rounded-full ">
            <img className="" src={about1} alt="" />
          </div>
          <div className="mx-auto lg:w-2/5 w-full flex flex-col gap-6">
            <h1 className="mx-auto lg:mx-0 text-xl font-bold">Our Services</h1>
            <span className="text-slate-600 lg:w-4/5 w-full text-center lg:text-left">
              We are an influencer marketplace. We connect brands with
              influencers from various niches to meet your marketing needs
            </span>
          </div>
        </section>
        <section className="px-20 grid grid-cols-1 items-center lg:gap-4 lg:flex lg:flex-row-reverse lg:justify-items-center p-8 gap-8 animate__animated animate__fadeInRight">
          <div className=" w-[15rem] lg:mr-48 mx-auto bg-[#FF8F50] rounded-full">
            <img className="" src={about3} alt="" />
          </div>
          <div className="mx-auto lg:ml-48 lg:w-2/5 w-full flex flex-col gap-6">
            <h1 className="mx-auto lg:mx-0 text-xl font-bold">Our Mission</h1>
            <span className="text-slate-600 lg:w-4/5 w-full text-center lg:text-left">
              Our mission is to increaxe accessibility and delivery between
              brands and influencers
            </span>
          </div>
        </section>

        <section className="px-20 grid grid-cols-1 items-center lg:gap-4 lg:flex lg:justify-items-center p-8 gap-8 animate__animated animate__fadeInLeft">
          <div className="w-[15rem] lg:ml-48 mx-auto bg-[#FF8F50] rounded-full ">
            <img className="" src={about4} alt="" />
          </div>
          <div className="mx-auto lg:ml-48 lg:w-2/5 w-full flex flex-col gap-6">
            <h1 className="mx-auto lg:mx-0 text-xl font-bold">Our Vision</h1>
            <span className="text-slate-600 lg:w-4/5 w-full text-center lg:text-left">
              It is our aim to improve the world idea of connecting brands and
              businesses with consumers due to the rise in conscientious
              consumers
            </span>
          </div>
        </section>

        <section className="px-20 grid grid-cols-1 items-center lg:gap-4 lg:flex lg:flex-row-reverse lg:justify-items-center p-8 gap-8 animate__animated animate__fadeInRight">
          <div className=" w-[15rem] lg:mr-48 mx-auto bg-[#FF8F50] rounded-full">
            <img className="" src={about5} alt="" />
          </div>
          <div className="mx-auto lg:ml-48 lg:w-2/5 w-full flex flex-col gap-6">
            <h1 className="mx-auto lg:mx-0 text-xl font-bold">Our Goals</h1>
            <span className="text-slate-600  w-full text-center lg:text-left ">
              <h1 className="text-left font-semibold">It's our goal to:</h1>
              <ul className="list-disc ml-[1rem] text-left lg:ml-5 w-full flex flex-col gap-3 lg:gap-0">
                <li className="">
                  increase brand recognition and strengthen brand image
                </li>
                <li>increase social engagement and interaction</li>
                <li>
                  improve sales based on customer insight, strategic
                  collaborations and caimpaigns.
                </li>
              </ul>
            </span>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
