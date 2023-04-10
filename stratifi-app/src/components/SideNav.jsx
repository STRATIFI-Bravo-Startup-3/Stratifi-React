import { useState } from "react";
import { HiOutlineSpeakerWave, HiOutlineWallet } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";
import { BiLogOutCircle } from "react-icons/bi";

const SideNav = ({ isOpen, onClick }) => {
  const [selected, setSelected] = useState(1);

  const handleClick = (index, component) => {
    setSelected(index);
    onClick(component);
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
              onClick={() => handleClick(1, "Profile")}
              className={
                selected === 1
                  ? "flex items-center gap-2 border-l-2 border-white text-white px-2"
                  : "flex items-center gap-2 px-2  text-white"
              }
            >
              <div
                className={
                  selected === 1
                    ? "flex items-center px-2 gap-2 text-black bg-slate-300 rounded-lg w-[10rem]"
                    : "flex items-center px-2 gap-2 rounded-lg w-[10rem]"
                }
              >
                <CgProfile />
                <div className="cursor-pointer">My Profile</div>
              </div>
            </div>
            <div
              onClick={() => handleClick(2, "Campaigns")}
              className={
                selected === 2
                  ? "flex items-center gap-2 border-l-2 border-white text-white px-2"
                  : "flex items-center gap-2 px-2 text-white"
              }
            >
              <div
                className={
                  selected === 2
                    ? "flex items-center px-2 gap-2 text-black bg-slate-300 rounded-lg w-[10rem]"
                    : "flex items-center px-2 gap-2 rounded-lg w-[10rem]"
                }
              >
                <HiOutlineSpeakerWave />
                <div className="cursor-pointer">Campaigns</div>
              </div>
            </div>
            <div
              onClick={() => handleClick(3, "Messages")}
              className={
                selected === 3
                  ? "flex items-center gap-2 border-l-2 border-white text-white px-2"
                  : "flex items-center gap-2 px-2  text-white"
              }
            >
              <div
                className={
                  selected === 3
                    ? "flex items-center px-2 gap-2 text-black bg-slate-300 rounded-lg w-[10rem]"
                    : "flex items-center px-2 gap-2 rounded-lg w-[10rem]"
                }
              >
                <TiMessages />
                <div className="cursor-pointer">Messages</div>
              </div>
            </div>
            <div
              onClick={() => handleClick(4, "Wallet")}
              className={
                selected === 4
                  ? "flex items-center gap-2 border-l-2 border-white text-white px-2"
                  : "flex items-center gap-2 px-2  text-white"
              }
            >
              <div
                className={
                  selected === 4
                    ? "flex items-center px-2 gap-2 text-black bg-slate-300 rounded-lg w-[10rem]"
                    : "flex items-center px-2 gap-2 rounded-lg w-[10rem]"
                }
              >
                <HiOutlineWallet />
                <div className="cursor-pointer">Wallet</div>
              </div>
            </div>
            <div
              onClick={() => handleClick(5, "Settings")}
              className={
                selected === 5
                  ? "flex items-center gap-2 border-l-2 border-white text-white px-2"
                  : "flex items-center gap-2 px-2  text-white"
              }
            >
              <div
                className={
                  selected === 5
                    ? "flex items-center px-2 gap-2 text-black bg-slate-300 rounded-lg w-[10rem]"
                    : "flex items-center px-2 gap-2 rounded-lg w-[10rem]"
                }
              >
                <IoSettingsOutline />
                <div className="cursor-pointer">Settings</div>
              </div>
            </div>

            <div
              onClick={() => handleClick(6, "Help")}
              className={
                selected === 6
                  ? "flex items-center gap-2 border-l-2 border-white text-white px-2"
                  : "flex items-center gap-2 px-2  text-white"
              }
            >
              <div
                className={
                  selected === 6
                    ? "flex items-center px-2 gap-2 text-black bg-slate-300 rounded-lg w-[10rem]"
                    : "flex items-center px-2 gap-2 rounded-lg w-[10rem]"
                }
              >
                <FiHelpCircle />
                <div className="cursor-pointer">Help</div>
              </div>
            </div>

            <div
              onClick={() => handleClick(7, "Logout")}
              className={
                selected === 7
                  ? "flex items-center gap-2 border-l-2 border-white text-white px-2"
                  : "flex items-center gap-2 px-2  text-white"
              }
            >
              <div
                className={
                  selected === 7
                    ? "flex items-center px-2 gap-2 text-black bg-slate-300 rounded-lg w-[10rem]"
                    : "flex items-center px-2 gap-2 rounded-lg w-[10rem]"
                }
              >
                <BiLogOutCircle />
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
