import { HiCheckBadge } from "react-icons/hi2";
import ProfileCover from "./ProfileCover";
import { IoMailUnread, IoWallet } from "react-icons/io5";
import { HiSpeakerphone } from "react-icons/hi";
import { BsPersonCircle } from "react-icons/bs";

const Dashboard = ({ onClick }) => {
  const handleClick = (component) => {
    onClick(component);
  };
  return (
    <>
      <div className="p-2 lg:px-6 w-full">
        <ProfileCover />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-2 text-[#55006E] text-sm">
        <div className="w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[10rem] p-6 bg-[#F9E5FF] rounded-lg flex flex-col justify-between hover:shadow-md active:shadow-inner">
          <h1 className="text-4xl font-bold">+</h1>
          <h1 className="flex-end">Start a Campaign</h1>
        </div>
        <div
          onClick={() => handleClick("Messages")}
          className="w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[10rem] p-6 bg-[#F9E5FF] rounded-lg flex flex-col justify-between hover:shadow-md active:shadow-inner"
        >
          <div className="flex items-center gap-2">
            <IoMailUnread className="w-5 h-5" />
            <h1 className="font-bold">Messages</h1>
          </div>
          <h1 className="flex-end">23 Unread</h1>
        </div>
        <div
          onClick={() => handleClick("Campaigns")}
          className="w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[10rem] p-6 bg-[#F9E5FF] rounded-lg flex flex-col justify-between hover:shadow-md active:shadow-inner"
        >
          <div className="flex items-center gap-2">
            <HiSpeakerphone className="w-5 h-5" />
            <h1 className="font-bold">Campaigns</h1>
          </div>
          <h1 className="flex-end">6 Active</h1>
        </div>
        <div
          onClick={() => handleClick("Wallet")}
          className="w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[10rem] p-6 bg-[#F9E5FF] rounded-lg flex flex-col justify-between hover:shadow-md active:shadow-inner"
        >
          <div className="flex items-center gap-2">
            <IoWallet className="w-5 h-5" />
            <h1 className="font-bold">Wallet</h1>
          </div>
          <h1 className="flex-end">$ 1,250</h1>
        </div>
        <div
          onClick={() => handleClick("Profile")}
          className="w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[10rem] p-6 bg-[#F9E5FF] rounded-lg flex flex-col justify-between hover:shadow-md active:shadow-inner"
        >
          <div className="flex items-center gap-2">
            <BsPersonCircle className="w-5 h-5" />
            <h1 className="font-bold">Profile</h1>
          </div>
          <h1 className="flex-end">
            {" "}
            <div className="flex items-center gap-1">
              <HiCheckBadge className="text-base text-green-600 shadow-sm" />
              verified
            </div>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
