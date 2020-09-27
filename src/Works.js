import React from "react";
import WorkCard from "./WorkCard";
import "./Works.css";
import huluImg from "./hulu-title.PNG"; // Tell webpack this JS file uses this image
import googleImg from "./google-clone.PNG";
import amznImg from "./amzn-clone.PNG";
import ticTokImg from "./ticTokClone.PNG";

const huluDesc =
  "Trying to create hulu like application with the help of cleaver programmer community, in this app i am using reactjs hooks, material icons axios to get data from third party API and flip-move for card animation.";

const googleDesc =
  "Trying to create Google clone application with the help of cleaver programmer community, In this app i am using reactjs context API and react hooks, material icons and also using Google search API to get results.";

const amznDesc =
  "Trying to create Amazon clone application with Live Stripe payment with the help of cleaver programmer community, In this app I am using reactjs context API and react hooks, Stripe payment,  material icons and also using firebase and fire store for user auth and store user data.";

const ticTokDesc =
  "Trying to create TicTok like application with the help of cleaver programmer community, In this app i am using react hooks this web app hosted on firebase";

function Works() {
  return (
    <div className="works" id="works">
      <div className="works__maxWidth">
        <h2 className="works__title">My Works</h2>
        <div className="works__content">
          <WorkCard
            title="Hulu Clone"
            imgUrl={huluImg}
            desc={huluDesc}
            targetUrl="https://hulu-43460.web.app"
          />
          <WorkCard
            title="Google Clone"
            imgUrl={googleImg}
            desc={googleDesc}
            targetUrl="https://clone-1760d.web.app"
          />
          <WorkCard
            title="Amazon Clone"
            imgUrl={amznImg}
            desc={amznDesc}
            targetUrl="https://clone-amzn.web.app/"
          />
          <WorkCard
            title="Tictok Clone"
            imgUrl={ticTokImg}
            desc={ticTokDesc}
            targetUrl="https://tictok-5607.web.app/"
          />
        </div>
      </div>
    </div>
  );
}

export default Works;
