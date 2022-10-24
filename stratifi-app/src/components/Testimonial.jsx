import React from "react";
import logo3 from "../images/logo3.svg";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="justify-center items-center text-center py-4 px-3 container mx-auto">
        <img src={logo3} alt="" className="w-1/2 block mx-auto" />
        <h2 className="font-semibold">
          View testimonials from some of our clients
        </h2>
      </div>
    </section>
  );
};

export default Testimonial;
