import React from "react";
import Typed from "react-typed";
import "./About.css";
import myImg from "./aijaj_ahmad.JPG"; // Tell webpack this JS file uses this image

function About() {
  return (
    <div className="about" id="about">
      <div className="about__maxWidth">
        <h2 className="about__title">About me</h2>
        <div className="about__content">
          <div className="about__columnLeft">
            <img src={myImg} alt="" />
          </div>
          <div className="about__columnRight">
            <div className="about__columnRightText">
              I'm Ajaj Ahmad and I'm a&nbsp;
              <Typed
                strings={["MERN Stack Developer", "Freelancer"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              ></Typed>
            </div>
            <p>
              When I graduated from AIET affiliated with UPTU in 2011 with a
              degree in computer science and engineering. I was confident in
              pursuing my career as a software developer. I have 7+ years of
              experience in software development designing, development, testing
              and maintenance of business applications. I involved in the
              requirement analysis, design, development and maintenance of
              developing applications using JavaScript, jQuery, ReactJs, PHP,
              MySQL, codeigniter framework. I have also basic knowledge of
              Nodejs and Expressjs. Presently working as a MTS at TG2 in
              “Greenapples tech systems Pvt. Ltd, Noida” from (September 2014 to
              till date). I am strong in developing test driven applications
              using JavaScript, ReactJs, HTML5, CSS3, PHP, MYSQL. i have good
              understanding of OOPS, Design Patterns and Test-driven Approach of
              software development. Eager to work in a challenging environment
              and always fosters self – development process through continuous
              learning effort. I am a good team member with a strong work ethic,
              committed to hard work.
            </p>

            <a
              href="./Ajaj_hmad_php_7_years_Resume_cp.docx"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
