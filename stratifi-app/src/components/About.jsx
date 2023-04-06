import Image from "next/image";

const About = () => {
  return (
    <div className="text-slate-600">
      <section className="md:px-20 max-w-[80rem] grid grid-cols-1 items-center lg:gap-4 lg:flex lg:justify-items-center p-8 gap-8 animate__animated animate__zoomIn ">
        <div className="w-[15rem] lg:ml-48 mx-auto bg-[#FF8F50] ring-1 ring-gray-200 rounded-full shadow-xl flex flex-col items-center">
          <Image
            className=""
            src="/images/about1.svg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="mx-auto lg:w-2/5 w-full flex flex-col items-center gap-6 ring-1 ring-gray-200 shadow-lg p-5 rounded-lg">
          <h1 className="mx-auto lg:mx-0 text-xl font-bold text-center lg:text-start">
            About us
          </h1>
          <span className="text-slate-600 lg:w-4/5 w-full text-center lg:text-left">
            We are an influencer marketplace. We connect brands with influencers
            from various niches to meet your marketing needs
          </span>
          <a href="/about" className="lg:mx-0 mx-auto">
            <button className="w-32 my-1 text-white px-4 py-2 active:bg-[#FF8F50] hover:bg-[#FF7A30] bg-[#FF6610] ring-1 ring-[#FF7A30] shadow-sm shadow-slate-600 rounded">
              Learn more
            </button>
          </a>
        </div>
      </section>
      <section className="md:px-20 max-w-[80rem] grid grid-cols-1 items-center lg:flex lg:flex-row-reverse lg:justify-center p-8 gap-8">
        <div className=" w-[15rem] mx-auto bg-[#FF8F50] p-4 ring-1 ring-gray-200 rounded-full shadow-xl flex flex-col justify-center">
          <Image
            className=""
            src="/images/about2.svg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="mx-auto lg:w-2/5 w-full flex flex-col items-center gap-6 ring-1 ring-gray-200 shadow-lg p-5 rounded-lg">
          <h1 className="mx-auto text-center lg:text-start lg:mx-0 text-xl font-bold">
            What is influencer marketing?
          </h1>
          <span className="lg:w-4/5 w-full text-center lg:text-left">
            Influencer marketing is simply collaborating with reputable online
            influencers to improve brand recognition and sales. when you utilize
            influencer marketing, you are relying on influencers to share their
            opinions about your products and services with their audience to
            boost your brand exposure and grow your sales.
          </span>
          <a href="/about" className="lg:mx-0 mx-auto">
            <button className="w-32 my-1 text-white px-4 py-2 active:bg-[#FF8F50] hover:bg-[#FF7A30] bg-[#FF6610] ring-1 ring-[#FF7A30] shadow-sm shadow-slate-600 rounded">
              Learn more
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
