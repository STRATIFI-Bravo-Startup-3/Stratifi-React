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
import MailchimpSubscribe from "./mailchimpSubscribe";

const Footer = () => {
  const url =
    "https://app.us13.list-manage.com/subscribe/post?u=311327338697ce69baa12d960&amp;id=3f88d6e974&amp;f_id=00c297e2f0";
  return (

    <div className="w-full mt-24 bg-[#702862] text-white py-8 px-4">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 boarded-b-2 border-white py-8">
        <div>
          <h6
            className="font-bold uppercase pt-2 text-left  hover:text-slate-300  active:text-slate-400 duration-300
          text-sm cursor-pointer leading-6"
          >
            Company
          </h6>
          <ul>
            <li
              className="py-1 text-left  hover:text-slate-300  active:text-slate-400 duration-300
          text-sm cursor-pointer leading-6"
            >
              About Us
            </li>
            <li
              className="py-1 text-left  hover:text-slate-300  active:text-slate-400 duration-300
          text-sm cursor-pointer leading-6"
            >
              Our Services
            </li>
            <li
              className="py-1 text-left  hover:text-slate-300  active:text-slate-400 duration-300
          text-sm cursor-pointer leading-6"
            >
              FAQs
            </li>
            <li
              className="py-1 text-left  hover:text-slate-300  active:text-slate-400 duration-300
          text-sm cursor-pointer leading-6"
            >
              Contact Us
            </li>

          </ul>
        </div>

        <div>

          <h6
            className="font-bold uppercase pt-2 text-left  hover:text-slate-300  active:text-slate-400 duration-300
          text-sm cursor-pointer leading-6"
          >
            Products
          </h6>
        </div>

        <div>
          <h6
            className="font-bold uppercase pt-2 text-left  hover:text-slate-300  active:text-slate-400 duration-300
          text-sm cursor-pointer leading-6"
          >
            Help
          </h6>
          <ul>
            <li
              className="py-1 text-left  hover:text-slate-300  active:text-slate-400 duration-300
          text-sm cursor-pointer leading-6"
            >
              Information
            </li>
            <li
              className="py-1 text-left  hover:text-slate-300  active:text-slate-400  duration-300
          text-sm cursor-pointer leading-6"
            >
              Privacy policy{" "}
            </li>
          </ul>
        </div>

        <div className="flex-col">
          <p className="font-bold  text-left">
            Sign up for monthly newsletters
          </p>
          <MailchimpSubscribe url={url} />

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
