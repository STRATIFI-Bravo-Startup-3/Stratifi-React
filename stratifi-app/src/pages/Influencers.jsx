import React from "react";

const Influencers = () => {
  return (
    <section className="influencer">
      <div class=" px-20  mx-auto mt-10  container">
        {/* <!-- Heading --> */}
        <h2 class="text-4xl font-bold text-center ">Invitations</h2>
        {/* First container */}
        <div className="shadow-lg ">
          <h3 className="underline text-xl mt-8 font-semibold ">
            House of Thera prelaunch campaign
          </h3>

          <div className="flex items-center mt-4">
            <p className="text-sm mr-4s">by</p>
            <div className="shadow-sm bg-gray-200 mr-4">
              <img src="" alt="" className="" />
            </div>
            <p className="text-sm">House of thera</p>
          </div>
          {/* First Button */}
          <div className="flex ">
            <button class="bg-transparent hover:bg-orange-500 text-black  hover:text-black  px-6 pr-16 border-orange-300 hover:border-transparent rounded mr-4 text-sm border-4 font-medium ">
              Fashion
            </button>
            <button class="bg-transparent hover:bg-orange-500 text-black  hover:text-black  px-6 pr-16  border-orange-300 hover:border-transparent rounded mr-4 text-sm border-4 font-medium">
              Lifestyle
            </button>
          </div>
          {/* Second Button */}
          <div className="flex justify-between mt-6 p-6">
            <button class="bg-transparent hover:bg-gray-500 text-gray hover:text-gray  px-6 py- pr-16 border-gray-300 hover:border-transparent rounded mr-4 text-sm border-2 font-medium ">
              message
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded">
              view
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Influencers;
