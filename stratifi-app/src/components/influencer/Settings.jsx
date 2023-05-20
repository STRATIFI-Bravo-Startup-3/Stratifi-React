import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import Button from "../common/Button";
import ButtonSm from "../common/ButtonSm";

const Settings = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center h-full w-full items-center gap-12 md:gap-16 text-sm md:text-base animate__animated animate__fadeIn">
      <div className="flex flex-col justify-center h-full px-4">
        <h1 className="font-bold text-2xl py-4">Account Settings</h1>
        <div className="flex flex-col gap-8 w-[20rem]">
          <div className="flex flex-col gap-4 border-b border-gray-300 pb-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email here"
                className="p-2 focus:outline-none bg-[#F9E5FF] rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email Address</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password here"
                className="p-2 focus:outline-none bg-[#F9E5FF] rounded-lg"
              />
            </div>
            <div className="self-end">
              <Button label="Change Email" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Old Password</label>
              <input
                id="old_password"
                type="password"
                placeholder="Enter your email here"
                className="p-2 focus:outline-none bg-[#F9E5FF] rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">New Password</label>
              <input
                id="new_password"
                type="password"
                placeholder="Enter your password here"
                className="p-2 focus:outline-none bg-[#F9E5FF] rounded-lg"
              />
            </div>
            <div className="self-end">
              <Button label="Change Password" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-8 px-4 py-8 border-t md:border-none border-gray-300 w-[20rem]">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold self-start">Connect Accounts</h1>
          <button className="flex justify-center items-center gap-2 p-2 ring-2 rounded ring-[#FF6610] hover:bg-gray-100 active:shadow-inner shadow-md shadow-gray-300">
            <FaTwitter className="text-blue-500" /> Connect Twitter
          </button>
          <button className="flex justify-center items-center gap-2 p-2 ring-2 rounded ring-[#FF6610] hover:bg-gray-100 active:shadow-inner shadow-md shadow-gray-300">
            <FaInstagram className="text-purple-800" /> Connect Instagram
          </button>
          <button className="flex justify-center items-center gap-2 p-2 ring-2 rounded ring-[#FF6610] hover:bg-gray-100 active:shadow-inner shadow-md shadow-gray-300">
            <FaFacebook className="text-blue-500" /> Connect Facebook
          </button>
        </div>
        <div className="flex flex-col gap-4 border-t border-gray-300 pt-8">
          <h1 className="font-bold self-start">Delete Account</h1>
          <h1>
            Once you delete your account, there is no going back, Please be
            certain.
          </h1>
          <button className="w-full flex justify-center items-center gap-2 p-2 bg-red-500 rounded hover:bg-red-600 active:bg-red-700 active:shadow-inner shadow-md shadow-gray-300">
            <IoWarningOutline className="" /> Delete your account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
