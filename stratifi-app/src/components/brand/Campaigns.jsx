import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import ButtonSm from "../common/ButtonSm";

const Campaigns = () => {
  return (
    <section className="flex flex-col w-full overflow-x-scroll overflow-hidden gap-8 px-2 lg:px-6 overflow-y-scroll">
      <div className="p-4 text-sm w-full grid grid-cols-1 sm:flex items-center gap-4 sm:gap-8">
        {/* <button className="">
          <BsPlus />
          New Campaign
        </button> */}
        <ButtonSm label="+ New Campaign" />
        <div className="flex items-center rounded ring-1 ring-gray-300">
          <div className="pl-4 h-12 flex justify-center items-center">
            <CiSearch />
          </div>
          <div className="px-2 h-12 flex justify-center items-center w-[15rem]">
            <input
              className="px-2 h-full w-full outline-none"
              type="text"
              placeholder="Search Campaigns"
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-gray-600 text-lg p-4">
          Active Campaigns
        </h1>
        <div className="bg-gray-200 rounded-lg flex items-center gap-4 justify-between py-8 w-full overflow-x-scroll px-4">
          <div className="rounded flex flex-col items-center ring-1 w-[10rem] gap-4 text-sm bg-gray-100 p-2 ring-gray-300 shadow-sm">
            <h1 className="font-bold">MaraCampaign</h1>
            <div className="flex flex-col items-center">
              <Image alt="" src="/images/about1.svg" width={200} height={200} />
              <span className="text-xs">Concludes in 2W</span>
            </div>
          </div>

          <div className="rounded flex flex-col items-center ring-1 w-[10rem] gap-4 text-sm bg-gray-100 p-2 ring-gray-300 shadow-sm">
            <h1 className="font-bold">MaraCampaign</h1>
            <div className="flex flex-col items-center">
              <Image alt="" src="/images/about1.svg" width={200} height={200} />
              <span className="text-xs">Concludes in 2W</span>
            </div>
          </div>

          <div className="rounded flex flex-col items-center ring-1 w-[10rem] gap-4 text-sm bg-gray-100 p-2 ring-gray-300 shadow-sm">
            <h1 className="font-bold">MaraCampaign</h1>
            <div className="flex flex-col items-center">
              <Image alt="" src="/images/about1.svg" width={200} height={200} />
              <span className="text-xs">Concludes in 2W</span>
            </div>
          </div>

          <div className="rounded flex flex-col items-center ring-1 w-[10rem] gap-4 text-sm bg-gray-100 p-2 ring-gray-300 shadow-sm">
            <h1 className="font-bold">MaraCampaign</h1>
            <div className="flex flex-col items-center">
              <Image alt="" src="/images/about1.svg" width={200} height={200} />
              <span className="text-xs">Concludes in 2W</span>
            </div>
          </div>

          <div className="rounded flex flex-col items-center ring-1 w-[10rem] gap-4 text-sm bg-gray-100 p-2 ring-gray-300 shadow-sm">
            <h1 className="font-bold">MaraCampaign</h1>
            <div className="flex flex-col items-center">
              <Image alt="" src="/images/about1.svg" width={200} height={200} />
              <span className="text-xs">Concludes in 2W</span>
            </div>
          </div>

          <div className="rounded flex flex-col items-center ring-1 w-[10rem] gap-4 text-sm bg-gray-100 p-2 ring-gray-300 shadow-sm">
            <h1 className="font-bold">MaraCampaign</h1>
            <div className="flex flex-col items-center">
              <Image alt="" src="/images/about1.svg" width={200} height={200} />
              <span className="text-xs">Concludes in 2W</span>
            </div>
          </div>
        </div>
      </div>

      {/* Completed Campaigns */}
      <div>
        <h1 className="font-bold text-gray-600 text-lg p-4">
          Campaigns Completed
        </h1>
        <div className="bg-gray-200 rounded-lg flex items-center gap-4 justify-between py-8 w-full overflow-x-scroll px-4">
          <div className="rounded flex flex-col items-center ring-1 w-[10rem] gap-4 text-sm bg-gray-100 p-2 ring-gray-300 shadow-sm">
            <h1 className="font-bold">MaraCampaign</h1>
            <div className="flex flex-col items-center">
              <Image alt="" src="/images/about1.svg" width={200} height={200} />
              <span className="text-xs">Concludes in 2W</span>
            </div>
          </div>

          <div className="rounded flex flex-col items-center ring-1 w-[10rem] gap-4 text-sm bg-gray-100 p-2 ring-gray-300 shadow-sm">
            <h1 className="font-bold">MaraCampaign</h1>
            <div className="flex flex-col items-center">
              <Image alt="" src="/images/about1.svg" width={200} height={200} />
              <span className="text-xs">Concludes in 2W</span>
            </div>
          </div>

          <div className="rounded flex flex-col items-center ring-1 w-[10rem] gap-4 text-sm bg-gray-100 p-2 ring-gray-300 shadow-sm">
            <h1 className="font-bold">MaraCampaign</h1>
            <div className="flex flex-col items-center">
              <Image alt="" src="/images/about1.svg" width={200} height={200} />
              <span className="text-xs">Concludes in 2W</span>
            </div>
          </div>

          <div className="rounded flex flex-col items-center ring-1 w-[10rem] gap-4 text-sm bg-gray-100 p-2 ring-gray-300 shadow-sm">
            <h1 className="font-bold">MaraCampaign</h1>
            <div className="flex flex-col items-center">
              <Image alt="" src="/images/about1.svg" width={200} height={200} />
              <span className="text-xs">Concludes in 2W</span>
            </div>
          </div>

          <div className="rounded flex flex-col items-center ring-1 w-[10rem] gap-4 text-sm bg-gray-100 p-2 ring-gray-300 shadow-sm">
            <h1 className="font-bold">MaraCampaign</h1>
            <div className="flex flex-col items-center">
              <Image alt="" src="/images/about1.svg" width={200} height={200} />
              <span className="text-xs">Concludes in 2W</span>
            </div>
          </div>

          <div className="rounded flex flex-col items-center ring-1 w-[10rem] gap-4 text-sm bg-gray-100 p-2 ring-gray-300 shadow-sm">
            <h1 className="font-bold">MaraCampaign</h1>
            <div className="flex flex-col items-center">
              <Image alt="" src="/images/about1.svg" width={200} height={200} />
              <span className="text-xs">Concludes in 2W</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
