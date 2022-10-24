import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa";
import MailchimpSubscribeSmall from "./mailchimpSubscribeSmall";

// const Footer = () => {
//   const url =
//     "https://app.us13.list-manage.com/subscribe/post?u=311327338697ce69baa12d960&amp;id=3f88d6e974&amp;f_id=00c297e2f0";
//   return (
//     <div className="w-full mt-24 bg-[#702862] text-white py-8 px-4">
//       <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 boarded-b-2 border-white py-8">
//         <div>
//           <h6
//             className="font-bold uppercase pt-2 text-left  hover:text-slate-300  active:text-slate-400 duration-300
//           text-sm cursor-pointer leading-6"
//           >
//             Company
//           </h6>
//           <ul>
//             <li
//               className="py-1 text-left  hover:text-slate-300  active:text-slate-400 duration-300
//           text-sm cursor-pointer leading-6"
//             >
//               About Us
//             </li>
//             <li
//               className="py-1 text-left  hover:text-slate-300  active:text-slate-400 duration-300
//           text-sm cursor-pointer leading-6"
//             >
//               Our Services
//             </li>
//             <li
//               className="py-1 text-left  hover:text-slate-300  active:text-slate-400 duration-300
//           text-sm cursor-pointer leading-6"
//             >
//               FAQs
//             </li>
//             <li
//               className="py-1 text-left  hover:text-slate-300  active:text-slate-400 duration-300
//           text-sm cursor-pointer leading-6"
//             >
//               Contact Us
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h6
//             className="font-bold uppercase pt-2 text-left  hover:text-slate-300  active:text-slate-400 duration-300
//           text-sm cursor-pointer leading-6"
//           >
//             Products
//           </h6>
//         </div>

//         <div>
//           <h6
//             className="font-bold uppercase pt-2 text-left  hover:text-slate-300  active:text-slate-400 duration-300
//           text-sm cursor-pointer leading-6"
//           >
//             Help
//           </h6>
//           <ul>
//             <li
//               className="py-1 text-left  hover:text-slate-300  active:text-slate-400 duration-300
//           text-sm cursor-pointer leading-6"
//             >
//               Information
//             </li>
//             <li
//               className="py-1 text-left  hover:text-slate-300  active:text-slate-400  duration-300
//           text-sm cursor-pointer leading-6"
//             >
//               Privacy policy{" "}
//             </li>
//           </ul>
//         </div>

//         <div className="flex-col">
//           <p className="font-bold  text-left">
//             Sign up for monthly newsletters
//           </p>
//           <MailchimpSubscribeSmall url={url} />
//         </div>
//       </div>

//       <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-white">
//         <p className="py-4">© 2022 Stratifi. All rights reserved</p>

//         <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
//           <FaFacebook />
//           <FaGithub />
//           <FaInstagram />
//           <FaTiktok />
//           <FaTwitter />
//           <FaLinkedin />
//           <FaYoutube />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

class Footer extends Component {
  company = ["About us", "Our Services", "Contact us", "Pricing"];

  support = ["Information", "Privacy Policy", "FAQs", "Community"];

  icons = [
    <FaFacebook />,
    <FaInstagram />,
    <FaTiktok />,
    <FaTwitter />,
    <FaLinkedin />,
    <FaYoutube />,
  ];

  render() {
    const url =
      "https://app.us13.list-manage.com/subscribe/post?u=311327338697ce69baa12d960&amp;id=3f88d6e974&amp;f_id=00c297e2f0";
    return (
      <div className="md:flex grid-cols-1 justify-between mx-50 w-full bg-[#702862] text-white py-8 px-4  border-neutral-800 border-t-4">
        <div className="flex justify-between lg:w-8/12 w-full">
          <div className="w-6/12 lg:ml-[10rem] ml-[3rem]">
            <div className="ml-50 flex-col text-left">
              <h1 className="font-bold uppercase my-1">Company</h1>
              {this.company.map((item) => (
                <h2 className="my-1">
                  <Link
                    className="hover:text-slate-300 active:text-slate-400"
                    to="/"
                  >
                    {item}
                  </Link>
                </h2>
              ))}
            </div>
          </div>
          <div className="w-6/12">
            <div className="px-[2rem] flex-col text-left ">
              <h1 className="font-bold uppercase my-1">Support</h1>
              {this.support.map((item) => (
                <h2 className="my-1">
                  <Link
                    className="hover:text-slate-300 active:text-slate-400"
                    to="/"
                  >
                    {item}
                  </Link>
                </h2>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/12 ml-[3rem] mt-6">
          <div className="flex-col text-left">
            <h1 className="font-bold uppercase my-1">
              Subscribe to our Newsletter
            </h1>

            <div className="my-1">
              <MailchimpSubscribeSmall url={url} />
            </div>
            <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-white">
              <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
                {this.icons.map((icon) => (
                  <Link
                    className="hover:text-slate-300 active:text-slate-400"
                    to=""
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
