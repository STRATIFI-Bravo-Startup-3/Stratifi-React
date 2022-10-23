import React, { useState } from "react";
import "../App.css";
import { HiChevronDown } from "react-icons/hi";

function Faq() {
  const [open, setOpen] = useState(false);
  const toggling = () => setOpen(!open);

  return (
    <section className="faq">
      <div className="faqimg" />

      <div>
        <div className="ask flex" onClick={toggling}>
          <HiChevronDown />
          <button>What is Stratifi</button>
        </div>
        {open && (
          <div className="panel">
            <p>
              Stratifi is an online marketplace for businesses and start-up’s to
              connect with influencers in various niche. It is a website made
              for the sole purpose of connecting brands to online influencers.
              <br />
              We serve as the middle-man between brands and influencers.
              <br /> We ensure that brands are matched to the best of
              influencers in their niche while also ensuring that influencers
              get paid for the content they promote. <br /> All our influencer
              are vetted to ensure maximum delivery and professionalism.
            </p>
          </div>
        )}
      </div>

      <div>
        <div className="ask flex" onClick={toggling}>
          <HiChevronDown />
          <button>What service does Stratifi offer</button>
        </div>
        {open && (
          <div className="panel">
            <p>
              An online platform for influencer to connect with brands directly
              <br />
              As an influencer we solve the problem of brands not paying for the
              content you promote in the guise of not having enough visibility,
              sales, or ROI. <br /> Connection between brands and social media
              influencers.
            </p>
          </div>
        )}
      </div>

      <div>
        <div className="ask flex" onClick={toggling}>
          <HiChevronDown />
          <button>Is Stratifi free</button>
        </div>
        {open && (
          <div className="panel">
            <p>
              Signing up as a brand or influencer is completely free, but we do
              charge a commission for every transaction done on stratify
            </p>
          </div>
        )}
      </div>

      <div>
        <div className="ask flex" onClick={toggling}>
          <HiChevronDown />
          <button>Is Stratifi trustworthy</button>
        </div>
        {open && (
          <div className="panel">
            <p>
              At stratify your safety is important to us. Brands and influencers
              must pass our quality assurance checks and must be vetted to
              ensure the safety of each user.
            </p>
          </div>
        )}
      </div>

      <div>
        <div className="ask flex" onClick={toggling}>
          <HiChevronDown />
          <button>Why should I use Straifi</button>
        </div>
        {open && (
          <div className="panel">
            <p>
              We do the hard work so that you can enjoy a seamless interaction
              to meet you brand goals.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
export default Faq;
