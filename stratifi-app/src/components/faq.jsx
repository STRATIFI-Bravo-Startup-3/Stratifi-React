import Faq from "react-faq-component";
import "../App.css";

const data = {
  rows: [
    {
      title: "What is Stratify",
      content: `Stratifi is an online marketplace for businesses and start-up’s
      to connect with influencers in various niche. It is a website
      made for the sole purpose of connecting brands to online
      influencers.
      We serve as the middle-man between brands and influencers.
      We ensure that brands are matched to the best of
      influencers in their niche while also ensuring that influencers
      get paid for the content they promote. <br /> All our influencer
      are vetted to ensure maximum delivery and professionalism.`,
    },
    {
      title: "What service does Stratifi offer",
      content: `An online platform for influencer to connect with brands directly. As an influencer we solve the problem of brands not paying for the
      content you promote in the guise of not having enough visibility,
      sales, or ROI. <br /> Connection between brands and social media
      influencers.`,
    },
    {
      title: "Is Stratifi free",
      content: `Signing up as a brand or influencer is completely free, but we do
      charge a commission for every transaction done on stratify.`,
    },
    {
      title: "Is Stratifi trustworthy",
      content: `At stratify your safety is important to us. Brands and influencers
      must pass our quality assurance checks and must be vetted to ensure the safety of each user.`,
    },
    {
      title: "Why should I use Straifi",
      content: ` We do the hard work so that you can enjoy a seamless interaction to meet you brand goals.`,
    },
  ],
};

const config = {
  animate: true,
  arrowIcon: "^",
  openOnload: 0,
  // expandIcon: "+",
  // collapseIcon: "-",
};

function FaqComp() {
  return (
    <div>
      <section className="faq">
        <div className="faqhead">
          <h1>FAQ</h1>
        </div>
        <div className="faqcontent">
          <Faq data={data} config={config} />
        </div>
      </section>
    </div>
  );
}

export default FaqComp;
