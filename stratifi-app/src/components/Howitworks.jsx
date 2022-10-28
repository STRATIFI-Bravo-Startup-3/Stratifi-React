import React from "react";
import how1 from "../images/how1.png";
import how2 from "../images/how2.png";
import how3 from "../images/how3.png";
import backgroundfooter from "../images/backgroundfooter.svg";
import { Link } from "react-router-dom";

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

const Howitworks = () => {
  const items = ["Sign Up", "Choose a Niche", "Get Paired"];
  return (
    <section className=" items-center flex flex-col">
      <div className="flex flex-col items-center font-bold text-2xl lg:text-3xl py-12">
        <h1>How it Works</h1>
      </div>

      <div className="grid grid-cols-1 lg:flex gap-12 lg:gap-[15rem] text-white">
        {items.map((item) => (
          <div className="flex flex-col items-center gap-4 w-full mb-8 ">
            <img src={how1} alt="" className="w-[3rem] lg:w-[4rem]" />
            <div
              style={{ backgroundImage: `url(${backgroundfooter})` }}
              className="rounded-full bg-[#FF8F50] w-24 h-20 flex flex-col items-center shadow-sm shadow-slate-600"
            >
              <h1 className="my-auto text-center">{item}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col py-10">
        <Link to="/register">
          <button className="w-36 text-white bg-[#FF8F50] hover:bg-[#FF7A30] active:bg-[#FF6610] ring-1 ring-[#FF7A30] shadow-sm shadow-slate-600 rounded">
            Sign Up for Free
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Howitworks;
