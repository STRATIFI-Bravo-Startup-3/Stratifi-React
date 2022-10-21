import React from "react";
// import "../App.css";

var ask = document.getElementsByClassName("ask");
var i;

for (i = 0; i < ask.length; i++) {
  ask[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function Faq() {
  return (
    <section className="faq">
      <div className="faqimg"></div>

      <ul className="questions">
        <li className="ask">
          <button>What is Stratifi</button>
        </li>
        <div className="panel">
          <p>
            Stratifi is an online marketplace for businesses and start-up’s to
            connect with influencers in various niche. It is a website made for
            the sole purpose of connecting brands to online influencers. <br />
            We serve as the middle-man between brands and influencers.
            <br /> We ensure that brands are matched to the best of influencers
            in their niche while also ensuring that influencers get paid for the
            content they promote. <br /> All our influencer are vetted to ensure
            maximum delivery and professionalism.
          </p>
        </div>
        <li className="ask">
          <button>What service does Stratifi offer</button>
        </li>
        <div className="panel">
          <p>
            An online platform for influencer to connect with brands directly{" "}
            <br />
            As an influencer we solve the problem of brands not paying for the
            content you promote in the guise of not having enough visibility,
            sales, or ROI. <br /> Connection between brands and social media
            influencers.
          </p>
        </div>
        <li className="ask">
          <button>Is Stratifi free</button>
        </li>
        <div className="panel">
          <p>
            Signing up as a brand or influencer is completely free, but we do
            charge a commission for every transaction done on stratify
          </p>
        </div>
        <li className="ask">
          <button>Is Stratifi trustworthy</button>
        </li>
        <div className="panel">
          <p>
            At stratify your safety is important to us. Brands and influencers
            must pass our quality assurance checks and must be vetted to ensure
            the safety of each user.
          </p>
        </div>
        <li className="ask">
          <button>Why should I use Straifi</button>
        </li>
        <div className="panel">
          <p>
            We do the hard work so that you can enjoy a seamless interaction to
            meet you brand goals.
          </p>
        </div>
      </ul>
    </section>
  );
}
export default Faq;
