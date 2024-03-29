import React, { Component } from "react";
import Link from "next/link";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa";

class Footer extends Component {
  company = [
    {
      id: 0,
      name: "Home",
      link: "/",
    },
    {
      id: 1,
      name: "About us",
      link: "/about",
    },
    {
      id: 2,
      name: "Contact",
      link: "/contact",
    },
    {
      id: 3,
      name: "Log In",
      link: "/login",
    },
    {
      id: 4,
      name: "Sign Up",
      link: "register",
    },
    {
      id: 5,
      name: "Blog",
      link: "/blog/home",
    },
  ];

  support = [
    {
      id: 0,
      name: "Information",
      link: "/subscribe",
    },
    {
      id: 1,
      name: "Privacy Policy",
      link: "/info",
    },
    {
      id: 2,
      name: "FAQs",
      link: "/info",
    },
    {
      id: 3,
      name: "Community",
      link: "/info",
    },
  ];

  render() {
    const url =
      "https://app.us13.list-manage.com/subscribe/post?u=311327338697ce69baa12d960&amp;id=3f88d6e974&amp;f_id=00c297e2f0";
    return (
      <div className="md:flex grid-cols-1 justify-between mx-50 w-full bg-[#AD6EC0] text-white py-8 px-4 lg:gap-[5rem] bg-primary">
        <div className="w-full lg:w-4/12 lg:pl-[8rem]">
          <div className="flex flex-col text-left items-center">
            <h1 className="font-bold uppercase my-1">
              Subscribe to our Newsletter
            </h1>

            <div className="my-1">
              {/* <MailchimpSubscribeSmall url={url} /> */}
            </div>
            <div className="flex flex-col px-2 py-4 mx-auto justify-between text-center text-white">
              <div className="flex gap-5 pt-4 text-2xl">
                <Link
                  className="hover:text-slate-300 active:text-slate-400"
                  href="https://www.linkedin.com/company/stratifing/"
                  target="blank"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  className="hover:text-slate-300 active:text-slate-400"
                  href="https://www.facebook.com/profile.php?id=100086511409939"
                  target="blank"
                >
                  <FaFacebook />
                </Link>
                <Link
                  className="hover:text-slate-300 active:text-slate-400"
                  href="https://www.instagram.com/stratifii_"
                  target="blank"
                >
                  <FaInstagram />
                </Link>
                <Link
                  className="hover:text-slate-300 active:text-slate-400"
                  href="https://www.tiktok.com/@stratifi?_t=8WSCyCGgdsb&_r=1"
                  target="blank"
                >
                  <FaTiktok />
                </Link>
                <Link
                  className="hover:text-slate-300 active:text-slate-400"
                  href="https://www.twitter.com/stratifi_"
                  target="blank"
                >
                  <FaTwitter />
                </Link>
                <a
                  disabled
                  className="hover:text-slate-300 active:text-slate-400"
                  href="#"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:w-8/12 w-full p-4 md:p-0">
          <div className="flex flex-col items-center w-6/12 ">
            <div className="flex flex-col text-left">
              <h1 className="font-bold uppercase my-1">Quick Links</h1>
              {this.company.map((item) => (
                <h2 key={item.id} className="my-1">
                  <Link
                    className="hover:text-slate-300 active:text-slate-400"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                </h2>
              ))}
            </div>
          </div>
          <div className="w-6/12">
            <div className="px-[2rem] flex-col text-left ">
              <h1 className="font-bold uppercase my-1">Support</h1>
              {this.support.map((item) => (
                <h2 key={item.id} className="my-1">
                  <Link
                    className="hover:text-slate-300 active:text-slate-400"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
