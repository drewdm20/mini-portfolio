import React, { useRef } from "react";
import Typewriter from "typewriter-effect";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import { KeyboardDoubleArrowUp } from "@mui/icons-material";
import "../styles/homePage.css";

const HomePage = () => {

    const myRef = useRef(null);
    const mainContainerRef = useRef(null)

    const scrollDown = () => myRef.current.scrollIntoView();

    const scrollUp = () => mainContainerRef.current.scrollIntoView();

  return (
    <section className="home-page">
      <div className="main-container" ref={mainContainerRef}>
        <div className="logo">
          <img
            src="/images/profile.jpg"
            alt="resume photo"
            className="resume-photo"
          />
        </div>
        <div className="intro-text">
          <p>Hi</p>
          <div className="typed-text">
            <span className="feature-text">
              <Typewriter
                options={{
                  strings: [
                    "I'm Drew McKop.",
                    "I'm a Junior Full-Stack Software Engineer.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
        </div>
        <div className="down-icon">
          <button className="scroll-down" onClick={scrollDown}><KeyboardDoubleArrowDown fontSize="large" /></button>
        </div>
        <div className="main-content" ref={myRef}>
          <div className="about-section">
          <h2 className="heading-about">About Me</h2>
          <p className="about-content">
            I'm a highly diligent, driven, resilient and passionate graduate and
            <br />
            Junior Full-Stack Software Engineer based in Johannesburg South
            Africa. <br />
            I have completed both my BSc IT and BSc IT (Hons) in software
            engineering degrees <br />
            and possess 9 months experience working as a junior full-stack
            software engineering intern <br />
            for a tech start-up in Belgium. <br />
            I have excellent problem-solving skills and am adept in several
            programming languages, frameworks and tools. <br />
            Some of my notable skills include Java, Python, ReactJS, HTML, CSS,
            JavaScript and MYSQL Server.
          </p>
          </div>
          <div className="why-section">
          <h2 className="heading-why">Why SovTech?</h2>
          <p className="why-content">
            I firmly believe that SovTech is continentally a leading trailblazer
            in software development and at the forefront <br /> of delivering world-class, innovative and
            tailor made technological solutions to numerous industries
            worldwide.{" "}
          </p>
          <p className="why-content">
            I have a profound passion for software development and technology
            <br />
            and I believe this coupled with my academic background, technical
            skills and interpersonal skills <br />
            will enable me to succeed in the role of a developer at SovTech.
            <br />
            In addition, SovTech embraces values that I feel are well-aligned
            with mine and that it is the best place to fulfil my career
            ambitions. <br />I would like to be apart of a leading organization
            that is results-driven, consistently strives to innovate and exceed
            expectations.
          </p>
          <div className="up-icon">
          <button className="scroll-up" onClick={scrollUp}><KeyboardDoubleArrowUp fontSize="large" /></button>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
