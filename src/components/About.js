import React, { useState } from "react";
import { BiBookReader } from "react-icons/bi";
import {BiShoppingBag} from 'react-icons/bi'

const About = () => {
  const [tab, setTab] = useState("experience");
  return (
    <div id="about" className="about-info">
      <h1 className="about-text">
        <span className="color-text">Abo</span>ut Me
      </h1>
      <div className="about-me-container">
          <div className="about-image">
            <img
              src="/images/bilal.jpeg"
              alt=""
            />
          </div>
        <div className = "about-section">
          <div className="btn-container">
            <button
              className={`${
                tab === "experience" ? "active-tab" : "inactive-tab"
              }`}
              onClick={() => setTab("experience")}
            ><BiShoppingBag  className="about-icon" />About Me
            </button>

            <button
              className={`${
                tab === "education" ? "active-tab" : "inactive-tab"
              }`}
              onClick={() => setTab("education")}
            >
              <BiBookReader className="about-icon" />
              Education
            </button>
          </div>
          <div className="about-sub-data">
            {tab === "experience" ? (
              <div className="work-experiences">
                <div className="about-desc-info">
                    <p>Hey there, welcome to my world, where you will be able to see what I'm doing</p>
                    <p>To be a programmer is not a one day job, is about spending thousands of days and night with dedication, patient and most of them is to love what you are doing.</p>
                    <p>As a Software developer, my ambition is to link the gap between imagination design and coding, by making it interactive.</p>
                    <p>And besides that, when I'm away from my computer, I like reading books, travelling, solving algorithms problems, teaching people how to code.</p>
                    <p>I like building and creating Software and I love to learn new technologies in order to be better version of my self.</p>
                  </div>
                  <div className="resume-section">
                      <span className="resume">Resume :</span>
                      <a className="resume-link" href="/bilal-resume.pdf" target="_blank" rel="noreferrer">
                        View{" "}
                      </a>
                  </div>
              </div>
            ) : null}
            {tab === "education" ? (
              <div className="about-desc-info">
                <div>
                  <h3 clasName="edu-head">Scrimba</h3>
                  <p>Scrimba is an online interacting platform that allow you to stop the video and edit the code in order to know exactly how things working, www.scrimba.com</p>
                  <ul>
                    <li>The Frontend Developer Career path - 2020.</li>
                    <li>The React Bootcamp - 2020.</li>
                    <li>The Responsive Web Design Bootcamp - 2021.</li>
                    <li>The UI Design Bootcamp - 2021.</li>
                  </ul>
                </div>
                <div>
                  <h3 clasName="edu-head">Bachelor of Computer Application</h3>
                  <p> Currently studying Computer Application in Gitam University, Visakhapatnam, India.</p>
                  <p>My expectation graduation date is 2023.</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
