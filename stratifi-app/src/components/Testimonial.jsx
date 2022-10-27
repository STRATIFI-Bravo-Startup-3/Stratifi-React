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
          <div class="flex flex-col    rounded-lg bg-veryLightGray p-4 space-y-20 mb-4 md:mb-32 shadow-sm md:w-1/3 md:shadow-md">
            <p class="text-sm ">
              “An absolute influencer marketing tool. Effective and
              trustworthy.”
            </p>
            <div className="flex items-center ">
              <img src={img6} class="w-9  rounded-full mr-4" alt="" />
              <h5 class="text-md font-normal">Ovie Boco</h5>
            </div>
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div class="flex flex-col space-y-20  p-4 rounded-lg bg-veryLightGray mb-4 md:mb-32   shadow-sm md:w-1/3 md:shadow-md">
            <p class="text-sm ">
              “Great service. I had an amazing experience using StratifI to get
              an influencer for my brand marketing campaign.An absolute
              influencer marketing tool. Effective and trustworthy.”
            </p>
            <div className="flex items-center">
              <img src={img5} class="w-9  rounded-full mr-4" alt="" />
              <h5 class="text-md font-normal">Jamila Datti </h5>
            </div>
          </div>

          {/* <!-- Testimonial 3 --> */}
          <div class="flex flex-col      rounded-lg mb-4 md:mb-32  shadow-sm md:w-1/3 md:shadow-md">
            <p class="text-sm  ">
              “Simple and effective. no long hours searching for reliable
              influencers.”
            </p>
            <div className="flex ">
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
