import React from "react";
import "./Home.css";
import Typed from "react-typed";

function Home() {
  return (
    <div className="home" id="home">
      <div className="home__maxWidth">
        <div className="home__content">
          <div className="home__text-1">Hello, my name is</div>
          <div className="home__text-2">Ajaj Ahmad</div>
          <div className="home__text-3">
            And I'm a{" "}
            <Typed
              strings={["Web Developer", "MERN Developer", "Freelancer"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            ></Typed>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
