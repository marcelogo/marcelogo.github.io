import React, { Component } from "react";
import Parallax from "react-rellax";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "../stylesheets/AboutMe.css";

class AboutMe extends Component {
  state = {
    next: false,
    scroll: 0,
  };

  handleClick = (event) => {
    const data = event.target.textContent.trim();
    this.setState({
      next: true,
    });
  };

  // isMobile = () => {
  //   const ua = navigator.userAgent;
  //   return /Android|Mobi/i.test(ua);
  // };
  render() {
    const { next, scroll } = this.state;

    // console.log(this.isMobile());
    return (
      <div className="projects-aboutme">
        <div className="project-wrapper-aboutme">
          <div className="project-container-aboutme">
            <Parallax speed={1}>
              <h1
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1300"
                className="heading-1"
              >
                About me
              </h1>
            </Parallax>
          </div>
          <div className="description-aboutme">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
            >
              <Parallax speed={1}>
                <h2>Hi, I'm Phillipe</h2>
              </Parallax>
              <p>
                a software engineer with experience in Ruby on Rails, React,
                Sinatra and Node Js. I have a background as a chef, lawyer and
                musician. For the past ten years I have lived and worked in
                cities around the world including New York, Berlin, Montreal,
                Melbourne and Brasilia.
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
            >
              <Parallax speed={1}>
                <p>
                  My passion to learn about different cultures has led me to
                  experience a huge range of different working environments,
                  collaborating with others in fast-paced settings using
                  multiple languages to communicate. I’m all about transforming
                  passion into value{" "}
                </p>
                <p>
                  {" "}
                  I leverage my mature work ethic and refined people skills to
                  help bring out the best in every team collaboration I am part
                  of.
                </p>
                <a
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-offset="100"
                  data-aos-duration="1100"
                  className="resume"
                  href={process.env.PUBLIC_URL + "/Resume_Phillipe_Alves.pdf"}
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
