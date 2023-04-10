import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-white">
      <NavBar />

      <div className="py-16 border-t-2 border-slate-200 text-gray-600 bg-gray-100">
        <section className="px-20 grid grid-cols-1 items-center lg:gap-8 lg:flex lg:justify-items-center p-8 gap-8 animate__animated animate__fadeInLeft">
          <div className=" w-[15rem] lg:ml-48 mx-auto bg-[#FF8F50] rounded-full ">
            <Image
              className=""
              src="/images/about7.svg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="mx-auto lg:w-2/5 w-full flex flex-col gap-6">
            <h1 className="mx-auto lg:mx-0 text-xl font-bold">About Us</h1>
            <span className="text-slate-600 lg:w-4/5 w-full text-center lg:text-left">
              Stratifi NG is an influencer marketing startup in Nigeria
              connecting credible influencers with reputable brands who are
              looking to break into new markets or expand their existing
              business. We are currently focused on Nano and Micro influencers
              and brands.
            </span>
          </div>
        </section>
        <section className="px-20 grid grid-cols-1 items-center lg:gap-4 lg:flex lg:flex-row-reverse lg:justify-items-center p-8 gap-8 animate__animated animate__fadeInRight">
          <div className=" w-[15rem] lg:mr-48 mx-auto bg-[#FF8F50] rounded-full">
            <Image
              className=""
              src="/images/about6.svg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="mx-auto lg:ml-48 lg:w-2/5 w-full flex flex-col gap-6">
            <h1 className="mx-auto lg:mx-0 text-xl font-bold">Our Vision</h1>
            <span className="text-slate-600 lg:w-4/5 w-full text-center lg:text-left">
              {`To connect brands looking to amplify their reach with indigenous
              influencers in their industry who are verified and can deliver on
              the brand's proposition.`}
            </span>
          </div>
        </section>

        <section className="px-20 grid grid-cols-1 items-center lg:gap-4 lg:flex  lg:justify-items-center p-8 gap-8 animate__animated animate__fadeInRight">
          <div className=" w-[15rem] lg:ml-48 mx-auto bg-[#FF8F50] rounded-full">
            <Image
              className=""
              src="/images/about4.svg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="mx-auto lg:ml-48 lg:w-2/5 w-full flex flex-col gap-6">
            <h1 className="mx-auto lg:mx-0 text-xl font-bold">Our Goals</h1>
            <span className="text-slate-600  w-full text-center lg:text-left ">
              <h1 className="text-left ">
                Our mission is to increase accessibility and delivery between
                brands and influencers by:
              </h1>
              <ul className="list-disc ml-[1rem] text-left lg:ml-5 w-full flex flex-col gap-3 lg:gap-0">
                <li className="">
                  increase brand recognition and strengthen brand image
                </li>
                <li>increase social engagement and interaction</li>
                <li>
                  improve sales based on customer insight, strategic
                  collaborations and caimpaigns.
                </li>
              </ul>
            </span>
          </div>
        </section>

        <section className="px-20 grid grid-cols-1 items-center lg:gap-4 lg:flex lg:flex-row-reverse lg:justify-items-center p-8 gap-8 animate__animated animate__fadeInLeft">
          <div className="w-[15rem] lg:mr-48 mx-auto bg-[#FF8F50] rounded-full ">
            <Image
              className=""
              src="/images/about5.svg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="mx-auto lg:ml-48 lg:w-2/5 w-full flex flex-col gap-6">
            <h1 className="mx-auto lg:mx-0 text-xl font-bold">Our Services</h1>
            <span className="text-slate-600 lg:w-4/5 w-full text-center lg:text-left">
              <ul className="list-disc ml-[1rem] text-left lg:ml-5 w-full flex flex-col gap-3 lg:gap-0">
                <li className="">
                  We offer influencer search and sourcing services to
                  brands/agencies.
                </li>
                <li>
                  We handle Influencer payments for both foreign and local
                  companies running influencer campaigns in Nigeria.
                </li>
                <li>
                  We provide an easier workflow from ideation to activation.
                </li>
                <li>
                  We thoroughly vet influencer(s) and brand for credibility.
                </li>
                <li>
                  We ensure all influencers get paid timely and adequately.
                </li>
              </ul>
            </span>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
