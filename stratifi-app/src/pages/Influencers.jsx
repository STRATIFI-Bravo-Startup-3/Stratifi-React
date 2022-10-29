import React from "react";

const Influencers = () => {
  return (
    <section className="influencer">
      <div class=" px-20 mx-auto mt-10  container">
        {/* <!-- Heading --> */}
        <h2 class="text-4xl font-bold text-center ">Invitations</h2>
        {/* First container */}
        <div className="shadow-md ">
          <h3 className="underline text-3xl mt-8">
            House of Thera prelaunch campaign
          </h3>

          <div className="flex items-center ">
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
        </div>
      </div>
    </section>
  );
};

export default Influencers;
