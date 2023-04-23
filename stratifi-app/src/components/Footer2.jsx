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

class Footer2 extends Component {
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
      name: "Get started",
      link: "/get started",
    },
    {
      id: 3,
      name: "sign in",
      link: "/sign-in",
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

  customerService = [
    {
      id: 0,
      name: "Contact us",
      link: "",
    },
    {
      id: 1,
      name: "Testimonials",
      link: "",
    },
    {
      id: 2,
      name: "FAQs",
      link: "/info",
    },
    {
      id: 3,
      name: "Help",
      link: "/info",
    },
  ];
  aboutUs = [
    {
      id: 0,
      name: "About us",
      link: "/About",
    },
    {
      id: 1,
      name: "Our Partners",
      link: "",
    },
  ];
  whyStratifi = [
    {
      id: 0,
      name: "For Influencers",
      link: "",
    },
    {
      id: 1,
      name: "For brands",
      link: "",
    },
    {
      id: 2,
      name: "Testimonials",
      link: "",
    },
    {
      id: 3,
      name: "Find Influencer",
      link: "",
    },
    {
      id: 4,
      name: "Match Brands",
      link: "",
    },
  ];

  render() {
    const url =
      "https://app.us13.list-manage.com/subscribe/post?u=311327338697ce69baa12d960&amp;id=3f88d6e974&amp;f_id=00c297e2f0";
    return (
      <div className="md:flex grid-cols-4 justify-between mx-50 w-full bg-[#AD6EC0] text-white py-8 px-4 lg:gap-[5rem] bg-primary">
        <div className="w-full ">
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
        <div className="flex lg:w-full ">
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
              <h1 className="font-bold uppercase my-1">Customer Service</h1>
              {this.customerService.map((item) => (
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
        <div className="flex">
          {" "}
          <div className="">
            <div className="px-[2rem] flex-col text-left ">
              <h1 className="font-bold uppercase my-1">About </h1>
              {this.aboutUs.map((item) => (
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
          <div className="">
            <div className="px-[2rem] flex-col text-left ">
              <h1 className="font-bold uppercase my-1">Why Stratifi </h1>
              {this.whyStratifi.map((item) => (
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

export default Footer2;
