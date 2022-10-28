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
import MailchimpSubscribe from "./mailchimpSubscribe";
import backgroundfooter from "../images/backgroundfooter.svg";

class Footer extends Component {
  company = ["About us", "Our Services", "Contact us", "Pricing"];

  support = ["Information", "Privacy Policy", "FAQs", "Community"];

  icons = [
    <FaLinkedin />,
    <FaInstagram />,
    <FaTwitter />,
    <FaTiktok />,
    <FaYoutube />,
    <FaFacebook />,
  ];

  links = [
    "https://www.linkedin.com/company/stratifing/",

    "https://www.instagram.com/stratifii_",

    "https://www.twitter.com/stratifi_",

    "https://www.tiktok.com/@stratifi?_t=8WSCyCGgdsb&_r=1",

    "https://www.facebook.com/profile.php?id=100086511409939",
  ];

  render() {
    const url =
      "https://app.us13.list-manage.com/subscribe/post?u=311327338697ce69baa12d960&amp;id=3f88d6e974&amp;f_id=00c297e2f0";
    console.log(this.links.map((link) => link));
    return (
      <div
        style={{ backgroundImage: `url(${backgroundfooter})` }}
        className="md:flex grid-cols-1 justify-between mx-50 w-full bg-[#AD6EC0] text-white py-8 px-4 "
      >
        <div className="flex justify-between lg:w-8/12 w-full">
          <div className="w-6/12 lg:ml-[10rem] ml-[3rem]">
            <div className="ml-50 flex-col text-left">
              <h1 className="font-bold uppercase my-1">Company</h1>
              {this.company.map((item) => (
                <h2 className="my-1">
                  <Link
                    key={item}
                    className="hover:text-slate-300 active:text-slate-400"
                    to={this.links.map((link) => link)}
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
                  <a
                    className="hover:text-slate-300 active:text-slate-400"
                    href={this.links.map((link) => link)}
                    target="blank"
                  >
                    {icon}
                  </a>
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
