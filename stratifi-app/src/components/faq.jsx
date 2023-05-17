import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";
import { useState } from "react";

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
      question: "Q: What is Stratifi?",
      answer: `SA: Stratifi is a platform that connects brands with 
      influencers, facilitating seamless collaboration and effective 
      influencer marketing campaigns. It streamlines the process of 
      finding, connecting, and managing influencers to help brands 
      achieve their marketing goals.
      
      `,
    },

    {
      id: 2,
      question: "Q: How does Stratifi work?",
      answer: `A: Stratifi uses advanced algorithms to match brands with 
      the most relevant influencers based on their target audience, brand
       values, and campaign goals. Brands can search for influencers, 
       communicate with them, manage campaigns, and track performance all
        within the platform.`,
    },

    {
      id: 3,
      question: "Q: What types of influencers can I find on Stratifi?",
      answer: `A: Stratifi offers a diverse range of influencers across various 
      industries and niches. You can find influencers in fashion, beauty, fitness, 
      lifestyle, tech, and many more categories. Our extensive network ensures 
      there is an influencer for every brand's unique requirements.`,
    },

    {
      id: 4,
      question: "Q: How can Stratifi help my brand?",
      answer: `At stratify your safety is important to us. Brands and influencers
      must pass our quality assurance checks and must be vetted to ensure the safety of each user.`,
    },

    {
      id: 5,
      question: "Q: Why should I use Stratifi",
      answer: `A: Stratifi can help your brand connect with influential 
      individuals who have a genuine connection with your target audience. 
      By collaborating with relevant influencers, you can increase brand 
      visibility, reach a wider audience, drive engagement, and ultimately grow your business.

      `,
    },
    {
      id: 6,
      question: "Q: Is Stratifi only for big brands?",
      answer: `A: No, Stratifi is designed to serve brands of all sizes. Whether you're a small 
      business or a large corporation, you can leverage the power of influencer marketing 
      through our platform. We cater to the specific needs and budgets of brands at different stages of growth.`,
    },
    {
      id: 7,
      question:
        "Q: How can I measure the success of my influencer campaigns on Stratifi?",
      answer: `A: Stratifi provides comprehensive analytics and performance metrics to help you 
      measure the impact of your influencer campaigns. You can track engagement rates, reach, 
      conversions, and ROI to evaluate the effectiveness of your collaborations and make data-driven decisions.`,
    },
    {
      id: 8,
      question: "Q: Is my information secure on Stratifi?",
      answer: `A: Yes, at Stratifi, we prioritize the security and confidentiality of your information. 
      We have robust security measures in place to protect your data and ensure a safe platform for all users.`,
    },
    {
      id: 9,
      question: "Q: How much does it cost to use Stratifi?",
      answer: `A: The cost of using Stratifi varies depending on your specific needs and the 
      scope of your influencer campaigns. We offer flexible pricing options tailored to 
      different budgets. Please contact our team to discuss pricing details and find a plan that suits your requirements.`,
    },
    {
      id: 10,
      question: "Q: How does wallet funding work on Stratifi?",
      answer: `A: Wallet funding on Stratifi provides brands with a convenient way 
      to manage their campaign budgets. When a brand adds funds to their wallet, 
      the money is securely held until a new influencing campaign starts and the 
      brand is successfully matched with an influencer. At that point, the campaign 
      costs are deducted from the brand's wallet balance.`,
    },
  ];

  return (
    <div className="lg:mx-[20rem] mx-[2rem] flex flex-col justify-center items-center bg-[#AD6EC0] py-6 rounded">
      <h1 className="text-xl font-bold text-slate-800">FAQS</h1>
      {data.map((item, i) => (
        <div
          key={i}
          className="w-full flex flex-col items-center px-[1rem]   lg:px-[4rem] py-2 "
        >
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
