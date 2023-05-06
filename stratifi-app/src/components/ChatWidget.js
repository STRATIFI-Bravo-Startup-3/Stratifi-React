import { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BsSend } from "react-icons/bs";
import SearchSm from "./common/SearchSm";

const ChatWidget = () => {
  const [chatOpen, setChatOpen] = useState(true);
  const [chat, setChat] = useState("");

  const handleClick = (index, chat) => {
    setChat(index);
    setChatOpen(false);
  };

  const handleToggle = () => {
    setChatOpen(!chatOpen);
  };

  function handleInput(event) {
    const textarea = event.target;
    textarea.rows = Math.ceil(textarea.value.length / textarea.cols);
  }

  return (
    <div className=" w-full  overflow-x-hidden p-2 lg:p-8">
      <div className="text-white md:my-8 p-2 lg:px-4 bg-[#AD6EC0] z-20 sticky top-0 flex items-center gap-2 border-b border-slate-300 sm:border-none rounded">
        <IoChevronBackOutline
          className="lg:hidden"
          onClick={() => handleToggle()}
        />
        <div className="">Messages</div>
      </div>
      <div className="relative flex">
        <div
          className={`${
            chatOpen ? "w-full sm:w-auto" : ""
          } absolute sm:relative bg-gray-500 z-20  rounded-l`}
        >
          <div
            className={`${
              chatOpen
                ? ""
                : "invisible w-0 h-0 md:w-auto  lg:visible -translate-x-full lg:-translate-x-0"
            }  lg:w-auto min-h-screen bg-orange md:min-h-[36rem] flex flex-col justify-between transition-transform duration-500 ease-in-out transform `}
          >
            <div>
              <div className="p-4 flex flex-col gap-4 text-sm ">
                <SearchSm label="Search..." />
                <div className="flex flex-col">
                  <div
                    onClick={() => handleClick(0, "")}
                    className={`${
                      chat === 0 ? "text-black bg-slate-100" : "text-white"
                    } ring-gray-100 flex items-center p-2 gap-4 border-b cursor-pointer`}
                  >
                    <CgProfile />
                    Fitness Center
                  </div>

                  <div
                    onClick={() => handleClick(1, "Campaigns")}
                    className={`${
                      chat === 1 ? "text-black bg-slate-100" : "text-white"
                    } ring-gray-100 flex items-center p-2 gap-4 border-b cursor-pointer`}
                  >
                    <CgProfile />
                    Fitness Center
                  </div>
                  <div
                    onClick={() => handleClick(2, "Campaigns")}
                    className={`${
                      chat === 2 ? "text-black bg-slate-100" : "text-white"
                    } ring-gray-100 flex items-center p-2 gap-4 border-b cursor-pointer`}
                  >
                    <CgProfile />
                    Fitness Center
                  </div>
                  <div
                    onClick={() => handleClick(3, "user")}
                    className={`${
                      chat === 3 ? "text-black bg-slate-100" : "text-white"
                    } ring-gray-100 flex items-center p-2 gap-4 border-b cursor-pointer`}
                  >
                    <CgProfile />
                    Fitness Center
                  </div>
                </div>
              </div>
              {/* <div className="p-4 flex items-center">B</div> */}
            </div>
          </div>
        </div>

        <div className="bg-slate-100 w-full flex flex-col justify-between max-h-screen md:max-h-[36rem] rounded-r overflow-y-scroll relative">
          <div className="bg-gray-500 z-10 sticky top-0">
            <div className="bg-orange h-12 flex items-center text-sm justify-between p-4 text-gray-200 z-10 sticky top-0">
              <h1>Fitness Center</h1>

              <label
                htmlFor="file-upload"
                className="bg-blue-500  active:bg-blue-600 p-2 rounded cursor-pointer"
              >
                + Upload
              </label>
              {/* <input id="file-upload" type="file" className="display-none" /> */}
            </div>
          </div>

          <div className="overflow-y-scroll shadow-inner">
            <div className="my-auto flex flex-col items-start gap-4 p-2 text-gray-500 h-[36rem]">
              <CgProfile className="h-8 w-8" />
              <h1 className="font-bold text-3xl">Fitness Center</h1>
              <span>
                This is the beginning of your Direct Messaging with Fitness
                Center
              </span>
            </div>
            <div className="my-auto flex flex-col items-start gap-4 p-2 text-gray-500 h-[36rem]">
              <CgProfile className="h-8 w-8" />
              <h1 className="font-bold text-3xl">Fitness Center</h1>
              <span>
                This is the beginning of your Direct Messaging with Fitness
                Center
              </span>
            </div>
            <div className="my-auto flex flex-col items-start gap-4 p-2 text-gray-500 h-[36rem]">
              <CgProfile className="h-8 w-8" />
              <h1 className="font-bold text-3xl">Fitness Center</h1>
              <span>
                This is the beginning of your Direct Messaging with Fitness
                Center
              </span>
            </div>
            <div className="my-auto flex flex-col items-start gap-4 p-2 text-gray-500 h-[36rem]">
              <CgProfile className="h-8 w-8" />
              <h1 className="font-bold text-3xl">Fitness Center</h1>
              <span>
                This is the beginning of your Direct Messaging with Fitness
                Center
              </span>
            </div>
          </div>

          <div className=" flex justify-between items-end gap-2 p-2 py-2 z-10 sticky bottom-0 bg-slate-200">
            <textarea
              rows="1"
              cols="100"
              onInput={handleInput}
              type="text"
              placeholder="Message Fitness Center"
              className="p-2 max-h-[10rem] w-full rounded focus:outline-none whitespace-normal"
            />

            <button className=" rounded bg-blue-500 p-2 text-white flex justify-center items-center active:bg-blue-600">
              <BsSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
