import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills__maxWidth">
        <h2 className="skills__title">My skills</h2>
        <div className="skills__content">
          <div className="skills__columnLeft">
            <div className="skills__columnLeftText">
              My creative skills &amp; experiences.
            </div>
            <p>
              In my working journey I have worked on many technology like PHP
              MYSQL JavaScript jQuery, As you know I am a good learner so side
              by side I also learn some front end technology Like reactjs NodeJs
              express and mongodb, I also complete some Udemy courses and get
              certificate of NodeJs and ReactJs.
            </p>
            <a href="#skills">Read more</a>
          </div>
          <div className="skills__columnRight">
            <div className="skills__bars">
              <div className="skills__info">
                <span>PHP</span>
                <span>80%</span>
              </div>
              <div className="skills__line skills__linePhp"></div>
            </div>
            <div className="skills__bars">
              <div className="skills__info">
                <span>MySQL</span>
                <span>70%</span>
              </div>
              <div className="skills__line skills__lineMysql"></div>
            </div>
            <div className="skills__bars">
              <div className="skills__info">
                <span>JavaScript</span>
                <span>80%</span>
              </div>
              <div className="skills__line skills__lineJs"></div>
            </div>
            <div className="skills__bars">
              <div className="skills__info">
                <span>ReactJs</span>
                <span>50%</span>
              </div>
              <div className="skills__line skills__lineReact"></div>
            </div>
            <div className="skills__bars">
              <div className="skills__info">
                <span>NodeJs</span>
                <span>50%</span>
              </div>
              <div className="skills__line skills__lineNode"></div>
            </div>
            <div className="skills__bars">
              <div className="skills__info">
                <span>MongoDb</span>
                <span>50%</span>
              </div>
              <div className="skills__line skills__lineMongo"></div>
            </div>

            <div className="skills__bars">
              <div className="skills__info">
                <span>HTML</span>
                <span>60%</span>
              </div>
              <div className="skills__line skills__lineHtml"></div>
            </div>
            <div className="skills__bars">
              <div className="skills__info">
                <span>CSS</span>
                <span>50%</span>
              </div>
              <div className="skills__line skills__lineCss"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
