import React from "react";
import logo3 from "../images/logo3.svg";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
const Testimonial = () => {
  return (
    <section>
      {/* <!-- Container to heading and testm blocks --> */}
      <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* <!-- Heading --> */}
        <h2 class="text-4xl font-bold text-center">
          Testimonials from our clients
        </h2>
        {/* <!-- Testimonials Container --> */}
        <div class="flex flex-col mt-32 md:flex-row md:space-x-6">
          {/* <!-- Testimonial 1 --> */}
          <div class="flex flex-col  p-6 space-y-6 rounded-lg bg-veryLightGray mb-4 md:mb-32 shadow-sm md:w-1/3 md:shadow-md">
            <p class="text-sm ">
              “An absolute influencer marketing tool. Effective and
              trustworthy.”
            </p>
            <div className="flex flex-start">
              <img src={img5} class="w-9  rounded-full mr-4" alt="" />
              <h5 class="text-lg font-bold">Anisha Li</h5>
            </div>
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div class="flex flex-col  p-6 space-y-6 rounded-lg bg-veryLightGray mb-4 md:mb-32   shadow-sm md:w-1/3 md:shadow-md">
            <p class="text-sm ">
              “An absolute influencer marketing tool. Effective and
              trustworthy.”
            </p>
            <div className="flex flex-start">
              <img src={img5} class="w-9  rounded-full mr-4" alt="" />
              <h5 class="text-lg font-bold">Anisha Li</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
