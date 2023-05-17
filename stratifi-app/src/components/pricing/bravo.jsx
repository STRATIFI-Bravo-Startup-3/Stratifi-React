import { BsFillInfoCircleFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { Tooltip } from "react-tooltip";

const Bravo = ({ price, duration }) => {
  return (
    <div className="rounded-lg p-4 flex flex-col group gap-8 transition duration-500 ease-in-out hover:scale-110 hover:text-white hover:bg-blue-800 active:scale-110 active:text-white active:bg-blue-800">
      <div className="flex items-end">
        <h1 className="font-bold text-4xl">${price}</h1>
        <span>/{duration}</span>
      </div>
      <div className="flex items-center gap-2">
        <h1>Bravo Budget</h1>
        <BsFillInfoCircleFill
          data-tooltip-id="my-tooltip"
          data-tooltip-content="You get 4-6 posts each from 3 influencers for the month"
          className="cursor-pointer"
        />
        <Tooltip id="my-tooltip" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <TiTick className="bg-gray-200 rounded-full text-[#AD6EC0]" />
          <span>3 Influencers</span>
        </div>
        <div className="flex items-center gap-2">
          <TiTick className="bg-gray-200 rounded-full text-[#AD6EC0]" />
          <span>4 - 6 posts</span>
        </div>
        <div className="flex items-center gap-2">
          <TiTick className="bg-gray-200 rounded-full text-[#AD6EC0]" />
          <span>Influencer Liason</span>
        </div>
        <div className="flex items-center gap-2">
          <TiTick className="bg-gray-200 rounded-full text-[#AD6EC0]" />
          <span>10% commission</span>
        </div>
      </div>
      <button className="py-2 px-4 bg-gray-400 group-hover:bg-[#AD6EC0] rounded-2xl">
        Fund Wallet
      </button>
    </div>
  );
};

export default Bravo;
