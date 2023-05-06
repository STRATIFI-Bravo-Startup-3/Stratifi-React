import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { BsSend } from "react-icons/bs";

const Wallet = () => {
  return (
    <div className="flex flex-col w-full max-w-[40rem] ">
      <div className="p-8 md:mt-16 text-center z-10 bg-white w-full">
        <h1 className="text-sm text-gray-600">Current Balance:</h1>
        <h1 className="font-bold text-3xl"> $1,250.00</h1>
      </div>
      <div className="flex justify-between p-8 text-sm">
        <button className="bg-blue-500 active:bg-blue-600 text-white p-2 rounded">
          + Add Money
        </button>
        <div className="flex bg-blue-500 active:bg-blue-600 text-white p-2 rounded items-center gap-2">
          <button className="">Send</button>
          <BsSend />
        </div>
      </div>
      <div className="flex flex-col text-sm w-full px-4 gap-8 md:px-8 ">
        <div className="border-b border-gray-300 text-gray-600">
          <h1>Recent Transactions</h1>
        </div>

        <div className="overflow-y-auto ">
          <div>
            <h1 className="font-bold text-gray-600">26 December</h1>
          </div>
          <div className="flex flex-col max-w-[40rem] overflow-y-scroll ">
            <div className="flex items-center justify-between border-b border-gray-300 py-4 px-2">
              <FiArrowDown className="w-5 h-5 text-gray-600" />
              <div className="flex flex-col w-[10rem]">
                <h1 className="font-bold text-lg">$120.65</h1>
                <span className="text-xs text-gray-600">
                  Lighthouse Campaign
                </span>
              </div>
              <div className="w-16">
                <h1 className="text-green-600 font-bold">Success</h1>
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-gray-300 py-4 px-2">
              <FiArrowUp className="w-5 h-5 text-gray-600" />
              <div className="flex flex-col w-[10rem]">
                <h1 className="font-bold text-lg">$120.65</h1>
                <span className="text-xs text-gray-600">
                  Lighthouse Campaign
                </span>
              </div>
              <div className="w-16">
                <h1 className="text-gray-500 font-bold">Pending</h1>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1 className="font-bold text-gray-600">20 December</h1>
          </div>
          <div className="flex flex-col max-w-[40rem]">
            <div className="flex items-center justify-between border-b border-gray-300 py-4 px-2">
              <FiArrowDown className="w-5 h-5 text-gray-600" />
              <div className="flex flex-col w-[10rem]">
                <h1 className="font-bold text-lg">$120.65</h1>
                <span className="text-xs text-gray-600">
                  Lighthouse Campaign
                </span>
              </div>
              <div className="w-16">
                <h1 className="text-green-600 font-bold">Success</h1>
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-gray-300 py-4 px-2">
              <FiArrowUp className="w-5 h-5 text-gray-600" />
              <div className="flex flex-col w-[10rem]">
                <h1 className="font-bold text-lg">$120.65</h1>
                <span className="text-xs text-gray-600">
                  Lighthouse Campaign
                </span>
              </div>
              <div className=" w-16">
                <h1 className="text-red-500 font-bold">Failed</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
