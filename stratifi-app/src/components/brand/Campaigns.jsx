import Image from "next/image";

const Campaigns = () => {
  return (
    <section className="flex flex-col w-80 overflow-x-scroll">
      <h1 className="font-bold text-gray-600 text-lg px-4">Campaigns</h1>
      <div className="bg-gray-200 rounded-lg flex items-center gap-4 justify-around py-8 overflow-x-scroll w-full">
        <div className="rounded flex flex-col items-center ring-1 w-[10rem] gap-4 text-sm bg-gray-100 p-2 ring-gray-300 shadow-sm">
          <h1 className="font-bold">MaraCampaign</h1>
          <div className="flex flex-col items-center">
            <Image alt="" src="/images/about1.svg" width={200} height={200} />
            <span className="text-xs">Started on 22-10-2023</span>
            <span className="text-xs">Ending on 22-10-2023</span>
          </div>
        </div>

        <div className="rounded flex flex-col items-center ring-1 w-[10rem] gap-4 text-sm bg-gray-100 p-2 ring-gray-300 shadow-sm">
          <h1 className="font-bold">MaraCampaign</h1>
          <div className="flex flex-col items-center">
            <Image alt="" src="/images/about1.svg" width={200} height={200} />
            <span className="text-xs">Started on 22-10-2023</span>
            <span className="text-xs">Ending on 22-10-2023</span>
          </div>
        </div>

        <div className="rounded flex flex-col items-center ring-1 w-[10rem] gap-4 text-sm bg-gray-100 p-2 ring-gray-300 shadow-sm">
          <h1 className="font-bold">MaraCampaign</h1>
          <div className="flex flex-col items-center">
            <Image alt="" src="/images/about1.svg" width={200} height={200} />
            <span className="text-xs">Started on 22-10-2023</span>
            <span className="text-xs">Ending on 22-10-2023</span>
          </div>
        </div>

        <div className="rounded flex flex-col items-center ring-1 w-[10rem] gap-4 text-sm bg-gray-100 p-2 ring-gray-300 shadow-sm">
          <h1 className="font-bold">MaraCampaign</h1>
          <div className="flex flex-col items-center">
            <Image alt="" src="/images/about1.svg" width={200} height={200} />
            <span className="text-xs">Started on 22-10-2023</span>
            <span className="text-xs">Ending on 22-10-2023</span>
          </div>
        </div>

        <div className="rounded flex flex-col items-center ring-1 w-[10rem] gap-4 text-sm bg-gray-100 p-2 ring-gray-300 shadow-sm">
          <h1 className="font-bold">MaraCampaign</h1>
          <div className="flex flex-col items-center">
            <Image alt="" src="/images/about1.svg" width={200} height={200} />
            <span className="text-xs">Started on 22-10-2023</span>
            <span className="text-xs">Ending on 22-10-2023</span>
          </div>
        </div>

        <div className="rounded flex flex-col items-center ring-1 w-[10rem] gap-4 text-sm bg-gray-100 p-2 ring-gray-300 shadow-sm">
          <h1 className="font-bold">MaraCampaign</h1>
          <div className="flex flex-col items-center">
            <Image alt="" src="/images/about1.svg" width={200} height={200} />
            <span className="text-xs">Started on 22-10-2023</span>
            <span className="text-xs">Ending on 22-10-2023</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
