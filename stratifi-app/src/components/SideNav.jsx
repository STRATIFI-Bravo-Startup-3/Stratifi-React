import { useState } from "react";
import { HiHome } from "react-icons/hi2";
import { HiSpeakerphone } from "react-icons/hi";
import { IoSettings, IoLogOut } from "react-icons/io5";
import { RiMessage3Fill } from "react-icons/ri";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const SideNav = ({ isOpen, onClick, hasSelected, type }) => {
  const [selected, setSelected] = useState(0);

  const handleClick = (index, component) => {
    setSelected(index);
    onClick(component);
    hasSelected();
  };

  return (
    <nav className="flex flex-col">
      <div
        className={`${
          isOpen
            ? ""
            : "invisible w-0 h-0 lg:w-auto lg:h-auto lg:visible -translate-x-full md:-translate-x-0"
        } md:flex md:flex-shrink-0 transition-transform duration-500 ease-in-out transform `}
      >
        <div className="px-2 py-6 h-screen w-[14rem] border-r-[0.08rem] bg-secondary border-gray-200 text-gray-700 flex flex-col justify-between">
          <div className="flex flex-col gap-5">
            <div className="text-white p-2"></div>
            <div
              onClick={() => handleClick(0, "Dashboard")}
              className={`${
                selected === 0
                  ? "border-[#8F3AA6] border-l-2"
                  : "hover:border-gray-300 "
              } flex items-center gap-2 text-white px-2 hover:border-l-2 transition ease-in-out delay-150`}
            >
              <div
                className={`${
                  selected === 0
                    ? " text-white bg-[#8F3AA6]"
                    : " hover:bg-gray-300 hover:text-gray-800"
                } flex items-center px-2 gap-2 rounded-lg w-[10rem] transition ease-in-out delay-150`}
              >
                <HiHome />
                <div className="cursor-pointer">Dashboard</div>
              </div>
            </div>

            <div
              onClick={() => handleClick(2, "Campaigns")}
              className={`${
                selected === 2
                  ? "border-[#8F3AA6] border-l-2"
                  : "hover:border-gray-300 "
              } flex items-center gap-2 text-white px-2 hover:border-l-2 transition ease-in-out delay-150`}
            >
              <div
                className={`${
                  selected === 2
                    ? " text-white bg-[#8F3AA6]"
                    : " hover:bg-gray-300 hover:text-gray-800"
                } flex items-center px-2 gap-2 rounded-lg w-[10rem] transition ease-in-out delay-150`}
              >
                <HiSpeakerphone />
                <div className="cursor-pointer">Campaigns</div>
              </div>
            </div>
            <div
              onClick={() => handleClick(3, "Messages")}
              className={`${
                selected === 3
                  ? "border-[#8F3AA6] border-l-2"
                  : "hover:border-gray-300 "
              } flex items-center gap-2 text-white px-2 hover:border-l-2 transition ease-in-out delay-150`}
            >
              <div
                className={`${
                  selected === 3
                    ? " text-white bg-[#8F3AA6]"
                    : " hover:bg-gray-300 hover:text-gray-800"
                } flex items-center px-2 gap-2 rounded-lg w-[10rem] transition ease-in-out delay-150`}
              >
                <RiMessage3Fill />
                <div className="cursor-pointer">Messages</div>
              </div>
            </div>

            {type === "brand" && (
              <div
                onClick={() => handleClick(5, "Subscriptions")}
                className={`${
                  selected === 5
                    ? "border-[#8F3AA6] border-l-2"
                    : "hover:border-gray-300 "
                } flex items-center gap-2 text-white px-2 hover:border-l-2 transition ease-in-out delay-150`}
              >
                <div
                  className={`${
                    selected === 5
                      ? " text-white bg-[#8F3AA6]"
                      : " hover:bg-gray-300 hover:text-gray-800"
                  } flex items-center px-2 gap-2 rounded-lg w-[10rem] transition ease-in-out delay-150`}
                >
                  <FaRegMoneyBillAlt />
                  <div className="cursor-pointer">Subscriptions</div>
                </div>
              </div>
            )}

            <div
              onClick={() => handleClick(6, "Settings")}
              className={`${
                selected === 6
                  ? "border-[#8F3AA6] border-l-2"
                  : "hover:border-gray-300 "
              } flex items-center gap-2 text-white px-2 hover:border-l-2 transition ease-in-out delay-150`}
            >
              <div
                className={`${
                  selected === 6
                    ? " text-white bg-[#8F3AA6]"
                    : " hover:bg-gray-300 hover:text-gray-800"
                } flex items-center px-2 gap-2 rounded-lg w-[10rem] transition ease-in-out delay-150`}
              >
                <IoSettings />
                <div className="cursor-pointer">Settings</div>
              </div>
            </div>

            <div
              onClick={() => handleClick(7, "Logout")}
              className={`${
                selected === 7
                  ? "border-[#8F3AA6] border-l-2"
                  : "hover:border-gray-300 "
              } flex items-center gap-2 text-white px-2 hover:border-l-2 transition ease-in-out delay-150`}
            >
              <div
                className={`${
                  selected === 7
                    ? " text-white bg-[#8F3AA6]"
                    : " hover:bg-gray-300 hover:text-gray-800"
                } flex items-center px-2 gap-2 rounded-lg w-[10rem] transition ease-in-out delay-150`}
              >
                <IoLogOut />
                <div className="cursor-pointer">Log Out</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
