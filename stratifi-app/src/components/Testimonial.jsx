import React from "react";

const Testimonial = () => {
  return (
    <section>
      {/* <!-- Container to heading and testm blocks --> */}
      <div className="max-w-6xl px-5 mx-auto mt-10 text-center">
        {/* <!-- Heading --> */}
        <h2 className="text-2xl lg:text-3xl font-bold text-center">
          Testimonials from our clients
        </h2>
        {/* <!-- Testimonials Container --> */}
        <div className="flex flex-col mt-10 md:flex-row md:space-x-6">
          {/* <!-- Testimonial 1 --> */}
          <div className="flex flex-col  mb-4  rounded-lg  p-4 space-y-20 md:mb-32 shadow-sm md:w-1/3 md:shadow-md ring-1 ring-slate-200">
            <p className="text-sm text-slate-600 font-semi-bold mb-10 pt-8">
              An absolute influencer marketing tool. Effective and trustworthy.
            </p>
            <div className="flex items-center ">
              <img src="" className="w-9  rounded-full mr-4" alt="" />
              <h5 className="text-md font-normal">Ovie Boco</h5>
            </div>
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div className="flex flex-col space-y-20  p-4 rounded-lg bg-veryLightGray mb-4 md:mb-32 shadow-sm md:w-1/3 md:shadow-md ring-1 ring-slate-200">
            <p className="text-sm pt-8 text-slate-600">
              Great service. I had an amazing experience using StratifI to get
              an influencer for my brand marketing campaign.An absolute
              influencer marketing tool. Effective and trustworthy.
            </p>
            <div className="flex items-center">
              <img src="" className="w-9  rounded-full mr-4" alt="" />
              <h5 className="text-md font-normal">Jamila Datti </h5>
            </div>
          </div>

          {/* <!-- Testimonial 3 --> */}
          <div className="flex flex-col  space-y-20  p-4 rounded-lg mb-4 md:mb-32  shadow-sm md:w-1/3 md:shadow-md ring-1 ring-slate-200">
            <p className="text-sm  mb-10 pt-8 text-slate-600">
              Simple and effective. no long hours searching for reliable
              influencers.
            </p>
            <div className="flex mb">
              <img src="" className="w-9  rounded-full mr-4" alt="" />
              <h5 className="text-md font-normal">Dayo Inaolaji</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
