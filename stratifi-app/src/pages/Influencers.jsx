import React from "react";

const Influencers = () => {
  return (
    <section className="influencer">
      <div className=" px-20  mx-auto mt-10  container">
        {/* <!-- Heading --> */}
        <h2 className="text-4xl font-bold text-center ">Invitations</h2>
        {/* First container */}
        <div className="shadow-lg space-y-8 p-10 space-x-2 ">
          <h3 className="underline text-xl  font-semibold px-2 ">
            House of Thera prelaunch campaign
          </h3>

          <div className="flex flex-col gap-2 md:flex-row items-center  ">
            <p className="text-sm mr-4">by</p>
            <div className="w-16 h-16 bg-red-700 rounded-full mr-4"></div>
            <p className="text-sm">House of thera</p>
          </div>
          {/* First Button */}
          <div className="flex flex-col gap-2  md:flex-row ">
            <button className="bg-transparent hover:bg-orange-500 text-black  hover:text-black  px-6 pr-16 border-orange-300 hover:border-transparent rounded mr-4 text-sm border-4 font-medium ">
              Fashion
            </button>
            <button className="bg-transparent hover:bg-orange-500 text-black  hover:text-black  px-6 pr-16  border-orange-300 hover:border-transparent rounded mr-4 text-sm border-4 font-medium">
              Lifestyle
            </button>
          </div>
          {/* Second Button */}
          <div className="flex flex-col gap-2 md:justify-between md:flex-row mt-6 ">
            <button className="bg-transparent hover:bg-gray-500 text-gray hover:text-gray  px-6   border-gray-300 hover:border-transparent rounded mr-4 text-sm border-2 font-medium ">
              message
            </button>
            <button className="bg-orange-500 hover:bg-orange-700 text-black font-bold  px-14 rounded">
              view
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Influencers;
