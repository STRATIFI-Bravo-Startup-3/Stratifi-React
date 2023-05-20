import { useState } from "react";
import Alpha from "@/components/pricing/alpha";
import Bravo from "@/components/pricing/bravo";
import Charlie from "@/components/pricing/charlie";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import Layout from "./layout";

const Pricing = () => {
  const [active, setActive] = useState("monthly");

  return (
    <Layout>
      <div className="flex flex-col gap-8 px-4 items-center text-gray-700 my-auto py-24 justify-center md:h-screen bg-pink-gradient animate__animated animate__flipInX">
        <div className="flex gap-2 items-center">
          <h1 className="font-semibold text-xl">Plans & Pricing</h1>
          <BsFillInfoCircleFill
            data-tooltip-id="my-tooltip"
            data-tooltip-content="You won't be charged until you have started an Influencing campaign"
            className="cursor-pointer"
          />
          <Tooltip id="my-tooltip" />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <span>
            Whether your budget is large or small, we're here to help you scale.
          </span>
          <div className="flex border w-[8.8rem] border-gray-300 rounded-lg self-end  text-sm bg-white">
            <span
              onClick={() => setActive("monthly")}
              className={`${
                active === "monthly" ? "bg-[#AD6EC0] text-white" : ""
              } px-2 rounded-lg cursor-pointer transition duration-700 ease-in-out`}
            >
              Monthly
            </span>
            <span
              onClick={() => setActive("yearly")}
              className={`${
                active === "yearly" ? "bg-[#AD6EC0] text-white" : ""
              } px-4 rounded-lg cursor-pointer transition duration-700 ease-in-out`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="border rounded-lg flex flex-col md:flex-row p-8 gap-8 bg-secondary text-white">
          {/* Alpha */}
          <Alpha
            price={active === "monthly" ? "100" : "1200"}
            duration={active === "monthly" ? "month" : "year"}
          />
          {/* Bravo */}
          <Bravo
            price={active === "monthly" ? "300" : "3600"}
            duration={active === "monthly" ? "month" : "year"}
          />
          {/* Charlie */}
          <Charlie
            price={active === "monthly" ? "500" : "6000"}
            duration={active === "monthly" ? "month" : "year"}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
