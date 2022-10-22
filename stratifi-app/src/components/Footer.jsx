import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-[#702862] text-white py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 boarded-b-2 border-white py-8">
        <div>
          <h6 className="font-bold uppercase pt-2 text-left">Company</h6>
          <ul>
            <li className="py-1 text-left">About Us</li>
            <li className="py-1 text-left">Our Services</li>
            <li className="py-1 text-left">FAQs</li>
            <li className="py-1 text-left ">Contact Us</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2 text-left">Products</h6>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2 text-left">Help</h6>
          <ul>
            <li className="py-1 text-left">Information</li>
            <li className="py-1 text-left ">Privacy policy </li>
          </ul>
        </div>

        <div className="cols-span-2 pt-8 md:pt-2">
          <p className="font-bold  ">Sign up for monthly newsletters</p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Email Address"
            />
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-white">
        <p className="py-4">© 2022 Stratifi. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaGithub />
          <FaInstagram />
          <FaTiktok />
          <FaTwitter />
          <FaLinkedin />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
