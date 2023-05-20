import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="text-slate-600 mt-16 py-1">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-[65rem] shadow p-12 mx-auto rounded-t-lg bg-gray-100">
        <div className="bg-[#FF8F50] rounded-full max-w-[12rem]">
          <Image
            className=""
            src="/images/about2.svg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col px-4 gap-4">
          <h1 className="font-bold text-black text-2xl">
            Streamlined Collaboration Process
          </h1>
          <span>
            Say goodbye to endless email threads and complicated negotiations.
            InfluenceConnect simplifies the collaboration process by providing a
            centralized hub for communication, campaign management, and
            performance tracking. Collaborate seamlessly with influencers,
            manage deliverables, and monitor campaign progress all in one place.
          </span>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-4 items-center justify-center max-w-[65rem] shadow p-12 mx-auto bg-gray-100">
        <div className="flex flex-col px-4 gap-4">
          <h1 className="font-bold text-black text-2xl">
            Smart Recommendations
          </h1>
          <span>
            Finding the perfect influencer match can be overwhelming. Our
            Intelligent Recommendation Engine takes the guesswork out of
            influencer selection. Our algorithms analyze your brand's goals,
            target audience, and campaign requirements to suggest the most
            relevant and effective influencers for your campaigns.
          </span>
        </div>
        <div className="bg-[#FF8F50] rounded-full max-w-[12rem]">
          <Image
            className=""
            src="/images/Ellipse25.svg"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-[65rem] shadow p-12 mx-auto rounded-b-lg bg-gray-100">
        <div className="bg-[#FF8F50] rounded-full max-w-[12rem]">
          <Image
            className=""
            src="/images/about1.svg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col px-4 gap-4">
          <h1 className="font-bold text-black text-2xl">
            Data-Driven Insights
          </h1>
          <span>
            Make informed decisions and measure the impact of your influencer
            campaigns with Stratifi's comprehensive analytics and performance
            metrics. Track key metrics such as engagement rates, reach,
            conversions, and ROI to gain valuable insights into your campaign's
            success and optimize your influencer marketing strategies.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
