import { useState } from "react";
import Search from "./common/Search";
import { IoChevronBackOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { BsSend } from "react-icons/bs";
import Image from "next/image";
import ProfileCover from "./brand/ProfileCover";
import SearchSm from "./common/SearcSm";
import ButtonSm from "./common/ButtonSm";

const ChatWidget = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState("Profile");
  const [selected, setSelected] = useState("");

  const handleClick = (index, chat) => {
    setSelected(index);
    // onClick(chat);
  };

  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  let componentToRender;
  switch (selectedComponent) {
    case "Profile":
      componentToRender = <div>Profile</div>;
      break;
    case "Campaigns":
      componentToRender = <div>Campaigns</div>;
      break;
    case "Messages":
      componentToRender = <div>Messages</div>;
      break;
    default:
      componentToRender = null;
  }

  return (
    // <div className="flex items-center w-full px-4">
    //   <div className="flex flex-col justify-between w-full md:w-1/5">
    //     <div className="flex flex-col">
    //       <Search />
    //     </div>
    //     <div>B</div>
    //   </div>
    //   <div className="w-4/5">B</div>
    // </div>

    <div className="relative w-full min-h-[36rem] overflow-x-hidden p-2 lg:p-8">
      <div className="text-white lg:hidden p-4 bg-[#AD6EC0] z-20 sticky top-0 flex items-center gap-2 border-b border-slate-300 sm:border-none">
        <IoChevronBackOutline onClick={() => handleToggle()} />
        <div className="">Messages</div>
      </div>
      <div className="flex">
        <div className="absolute lg:relative z-10 bg-gray-700 rounded-l">
          <div className="flex flex-col bg-orange rounded-l">
            <div
              className={`${
                isSidebarOpen
                  ? ""
                  : "invisible w-0 h-0 lg:w-auto  lg:visible -translate-x-full md:-translate-x-0"
              }  sm:w-auto min-h-[36rem] flex flex-col justify-between transition-transform duration-500 ease-in-out transform `}
            >
              <div className="p-4 flex flex-col gap-4 text-sm">
                <SearchSm />
                <div className="flex flex-col">
                  <div
                    onClick={() => handleClick(0, "Campaigns")}
                    className={`${
                      selected === 0 ? "text-black bg-slate-300" : "text-white"
                    } ring-gray-100 flex items-center p-2 gap-4 border-b cursor-pointer`}
                  >
                    <CgProfile />
                    Fitness Center
                  </div>

                  <div
                    onClick={() => handleClick(1, "Campaigns")}
                    className={`${
                      selected === 1 ? "text-black bg-slate-300" : "text-white"
                    } ring-gray-100 flex items-center p-2 gap-4 border-b cursor-pointer`}
                  >
                    <CgProfile />
                    Fitness Center
                  </div>
                  <div
                    onClick={() => handleClick(2, "Campaigns")}
                    className={`${
                      selected === 2 ? "text-black bg-slate-300" : "text-white"
                    } ring-gray-100 flex items-center p-2 gap-4 border-b cursor-pointer`}
                  >
                    <CgProfile />
                    Fitness Center
                  </div>
                  <div
                    onClick={() => handleClick(3, "user")}
                    className={`${
                      selected === 3 ? "text-black bg-slate-300" : "text-white"
                    } ring-gray-100 flex items-center p-2 gap-4 border-b cursor-pointer`}
                  >
                    <CgProfile />
                    Fitness Center
                  </div>
                </div>
              </div>
              <div className="p-4 flex items-center">B</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-300 w-full flex flex-col justify-between max-h-screen sm:max-h-[36rem] rounded-r overflow-y-scroll relative">
          <div className="bg-[#AD6EC0] h-12 flex items-center text-sm justify-between p-4 text-gray-200 z-10 sticky top-0">
            <h1>Fitness Center</h1>

            <label
              htmlFor="file-upload"
              className="bg-blue-500  active:bg-blue-800 p-2 rounded"
            >
              + Upload
            </label>
            {/* <input id="file-upload" type="file" className="display-none" /> */}
          </div>

          <div className="my-auto flex flex-col items-start gap-4 p-2 text-gray-500 h-[35rem]">
            <CgProfile className="h-8 w-8" />
            <h1 className="font-bold text-3xl">Fitness Center</h1>
            <span>
              This is the beginning of your Direct Messaging with Fitness Center
            </span>
          </div>
          <div className="my-auto flex flex-col items-start gap-4 p-2 text-gray-500 h-[35rem]">
            <CgProfile className="h-8 w-8" />
            <h1 className="font-bold text-3xl">Fitness Center</h1>
            <span>
              This is the beginning of your Direct Messaging with Fitness Center
            </span>
          </div>
          <div className="my-auto flex flex-col items-start gap-4 p-2 text-gray-500 h-[35rem]">
            <CgProfile className="h-8 w-8" />
            <h1 className="font-bold text-3xl">Fitness Center</h1>
            <span>
              This is the beginning of your Direct Messaging with Fitness Center
            </span>
          </div>
          <div className="my-auto flex flex-col items-start gap-4 p-2 text-gray-500 h-[35rem]">
            <CgProfile className="h-8 w-8" />
            <h1 className="font-bold text-3xl">Fitness Center</h1>
            <span>
              This is the beginning of your Direct Messaging with Fitness Center
            </span>
          </div>
          <div className="my-auto flex flex-col items-start gap-4 p-2 text-gray-500 h-[35rem]">
            <CgProfile className="h-8 w-8" />
            <h1 className="font-bold text-3xl">Fitness Center</h1>
            <span>
              This is the beginning of your Direct Messaging with Fitness Center
            </span>
          </div>
          <div className="my-auto flex flex-col items-start gap-4 p-2 text-gray-500 h-[35rem]">
            <CgProfile className="h-8 w-8" />
            <h1 className="font-bold text-3xl">Fitness Center</h1>
            <span>
              This is the beginning of your Direct Messaging with Fitness Center
            </span>
          </div>
          <div className="my-auto flex flex-col items-start gap-4 p-2 text-gray-500 h-[35rem]">
            <CgProfile className="h-8 w-8" />
            <h1 className="font-bold text-3xl">Fitness Center</h1>
            <span>
              This is the beginning of your Direct Messaging with Fitness Center
            </span>
          </div>

          <div className="flex justify-between items-center p-2 z-10 sticky bottom-0">
            <input
              type="text"
              placeholder="Message Fitness Center"
              className="p-2 w-full rounded-l focus:outline-none"
            />
            <button className="p-4 h-[2.5rem] rounded-r bg-blue-500 text-white flex justify-center items-center active:bg-blue-800">
              <BsSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
