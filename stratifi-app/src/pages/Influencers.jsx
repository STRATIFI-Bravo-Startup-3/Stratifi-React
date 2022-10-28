import React from "react";

const Influencers = () => {
  return (
    <section className="influencer">
      <div class=" px-20 mx-auto mt-10  container">
        {/* <!-- Heading --> */}
        <h2 class="text-4xl font-bold text-center ">Invitations</h2>
        {/* First container */}
        <div className="shadow-md ">
          <h3 className="underline text-xxl">
            House of Thera prelaunch campaign
          </h3>

          <div className="flex items-center ">
            <p className="text-sm mr-3">by</p>
            <div className="shadow-sm bg-gray-200"></div>
            <p className="text-sm">House of thera</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Influencers;
