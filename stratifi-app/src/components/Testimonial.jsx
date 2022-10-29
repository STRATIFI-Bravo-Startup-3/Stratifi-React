import React from "react";

import img5 from "../images/img5.png";
import img6 from "../images/img6.png";

import img8 from "../images/img8.png";
const Testimonial = () => {
  return (
    <section>
      {/* <!-- Container to heading and testm blocks --> */}
      <div class="max-w-6xl px-5 mx-auto mt-10 text-center">
        {/* <!-- Heading --> */}
        <h2 class="text-2xl lg:text-3xl font-bold text-center">
          Testimonials from our clients
        </h2>
        {/* <!-- Testimonials Container --> */}
        <div class="flex flex-col mt-10 md:flex-row md:space-x-6">
          {/* <!-- Testimonial 1 --> */}
          <div class="flex flex-col  mb-4  rounded-lg  p-4 space-y-20 md:mb-32 shadow-sm md:w-1/3 md:shadow-md ring-1 ring-slate-200">
            <p class="text-sm text-slate-600 font-semi-bold mb-10 pt-8">
              An absolute influencer marketing tool. Effective and trustworthy.
            </p>
            <div className="flex items-center ">
              <img src={img6} class="w-9  rounded-full mr-4" alt="" />
              <h5 class="text-md font-normal">Ovie Boco</h5>
            </div>
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div class="flex flex-col space-y-20  p-4 rounded-lg bg-veryLightGray mb-4 md:mb-32 shadow-sm md:w-1/3 md:shadow-md ring-1 ring-slate-200">
            <p class="text-sm pt-8 text-slate-600">
              Great service. I had an amazing experience using StratifI to get
              an influencer for my brand marketing campaign.An absolute
              influencer marketing tool. Effective and trustworthy.
            </p>
            <div className="flex items-center">
              <img src={img5} class="w-9  rounded-full mr-4" alt="" />
              <h5 class="text-md font-normal">Jamila Datti </h5>
            </div>
          </div>

          {/* <!-- Testimonial 3 --> */}
          <div class="flex flex-col  space-y-20  p-4 rounded-lg mb-4 md:mb-32  shadow-sm md:w-1/3 md:shadow-md ring-1 ring-slate-200">
            <p class="text-sm  mb-10 pt-8 text-slate-600">
              Simple and effective. no long hours searching for reliable
              influencers.
            </p>
            <div className="flex mb">
              <img src={img8} class="w-9  rounded-full mr-4" alt="" />
              <h5 class="text-md font-normal">Dayo Inaolaji</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
