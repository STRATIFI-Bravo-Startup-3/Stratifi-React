import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";
import { useState } from "react";
import "../App.css";

const Faq = () => {
  const [open, setOpen] = useState(null);
  const contentClass =
    "accordion-content p-4  mx-auto w-full text-sm text-slate-800 bg-slate-200 ";
  const toggle = (i) => {
    if (open === i) {
      return setOpen(null);
    }
    setOpen(i);
  };

  const data = [
    {
      id: 1,
      question: "What is Stratify",
      answer: `Stratifi is an online marketplace for businesses and start-up’s
      to connect with influencers in various niche. It is a website
      made for the sole purpose of connecting brands to online
      influencers.
      We serve as the middle-man between brands and influencers.
      We ensure that brands are matched to the best of
      influencers in their niche while also ensuring that influencers
      get paid for the content they promote. All our influencer
      are vetted to ensure maximum delivery and professionalism.`,
    },

    {
      id: 2,
      question: "What service does Stratifi offer",
      answer: `An online platform for influencer to connect with brands directly. As an influencer we solve the problem of brands not paying for the
      content you promote in the guise of not having enough visibility,
      sales, or ROI. Connection between brands and social media
      influencers.`,
    },

    {
      id: 3,
      question: "Is Stratifi free",
      answer: `Signing up as a brand or influencer is completely free, but we do
      charge a commission for every transaction done on stratify.`,
    },

    {
      id: 4,
      question: "Is Stratifi trustworthy",
      answer: `At stratify your safety is important to us. Brands and influencers
      must pass our quality assurance checks and must be vetted to ensure the safety of each user.`,
    },

    {
      id: 5,
      question: "Why should I use Stratifi",
      answer: ` We do the hard work so that you can enjoy a seamless interaction to meet you brand goals. `,
    },
  ];

  return (
    <div className="lg:mx-[20rem] mx-[2rem] flex flex-col justify-center items-center bg-[#AD6EC0] py-6 rounded">
      <h1 className="text-xl font-bold text-slate-800">FAQS</h1>
      {data.map((item, i) => (
        <div className="w-full flex flex-col items-center px-[1rem]   lg:px-[4rem] py-2 ">
          <div
            onClick={() => toggle(i)}
            className="cursor-pointer transition p-4 flex justify-between text-slate-800 content-center w-full text-start font-bold py-3 bg-slate-200 rounded"
          >
            <h2>{item.question}</h2>
            <div className="transform transition-transform duration-500">
              {open == i ? <HiChevronDown /> : <HiChevronUp />}
            </div>
          </div>
          <div
            className={open == i ? contentClass : "hidden accordion-content"}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
