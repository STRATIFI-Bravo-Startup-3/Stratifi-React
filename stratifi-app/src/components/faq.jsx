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
      get paid for the content they promote. All our influencer
      are vetted to ensure maximum delivery and professionalism.`,
    },
  ],
};
const dataone = {
  rows: [
    {
      title: "What service does Stratifi offer",
      content: `An online platform for influencer to connect with brands directly. As an influencer we solve the problem of brands not paying for the
      content you promote in the guise of not having enough visibility,
      sales, or ROI. Connection between brands and social media
      influencers.`,
    },
  ],
};
const datatwo = {
  rows: [
    {
      title: "Is Stratifi free",
      content: `Signing up as a brand or influencer is completely free, but we do
      charge a commission for every transaction done on stratify.`,
    },
  ],
};
const datathree = {
  rows: [
    {
      title: "Is Stratifi trustworthy",
      content: `At stratify your safety is important to us. Brands and influencers
      must pass our quality assurance checks and must be vetted to ensure the safety of each user.`,
    },
  ],
};
const datafour = {
  rows: [
    {
      title: "Why should I use Straifi",
      content: ` We do the hard work so that you can enjoy a seamless interaction to meet you brand goals.`,
    },
  ],
};

const config = {
  animate: true,
  arrowIcon: "v",
  openOnload: 0,
  // expandIcon: "+",
  // collapseIcon: "-",
};

const styles = {
  rowContentPaddingRight: "3em",
  rowContentPaddingLeft: "1em",
};

function FaqComp() {
  return (
    <div>
      {/* <section className="faq">
        <div className="faqhead">
          <h1>FAQs</h1>
        </div>

        <div className="mb-6 lg:px-9">
          <ul className="faqcontent ">
            <li>
              <div className="lg:px-12 px-3 faqli bg-white ">
                <Faq className="" data={data} config={config} styles={styles} />
              </div>
            </li>
            <li>
              <div className="lg:px-12 px-3 bg-white faqli">
                <Faq
                  className="one"
                  data={dataone}
                  config={config}
                  styles={styles}
                />
              </div>
            </li>
            <li>
              <div className="lg:px-12 px-3 faqli bg-white ">
                <Faq data={datatwo} config={config} styles={styles} />
              </div>
            </li>
            <li>
              <div className="lg:px-12 px-3 faqli bg-white">
                <Faq data={datathree} config={config} styles={styles} />
              </div>
            </li>
            <li>
              <div className="px-12 faqli bg-white">
                <Faq data={datafour} config={config} styles={styles} />
              </div>
            </li>
          </ul>
        </div>
      </section> */}
    </div>
  );
}

export default FaqComp;
