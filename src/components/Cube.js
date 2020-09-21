import React, { Component } from "react";
import Parallax from "react-rellax";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "../stylesheets/Cube.css";

class Cube extends Component {
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
      <div className="projects-cube">
        <div className="project-wrapper-cube">
          <div className="project-container-cube">
            <a
              className="github-icon-cube"
              href="https://github.com/PhillipeAlves/Cube/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="hvr-icon-push"
                icon={["fab", "github"]}
              />
              <p className="git-hub-description-cube">Github</p>
            </a>
            <a
              className="link-icon-cube"
              href="https://serene-sierra-78831.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-link"></i>
              <p className="link-description-cube">Website</p>
            </a>
            <Parallax horizontal={true}>
              <p>Project</p>
            </Parallax>
            <Parallax speed={1}>
              <h1
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1300"
                className="heading-1"
              >
                Cube
              </h1>
            </Parallax>
          </div>
          <div className="project-description-cube">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
            >
              <Parallax speed={1}>
                <h2>The idea</h2>
              </Parallax>
              <p>
                Trying to push the limitations of my knowledge I tried with this
                app to create a “flying cube” with the CSS property
                “translate3d”. It allows the user to input three different
                pictures that will be repeated to create a 3-dimensional cube
                that floats on the screen. The app was made using Sinatra in
                Ruby and Postgres to store user's input.
              </p>
              <a
                data-aos="zoom-in-left"
                data-aos-easing="ease-out-cubic"
                data-aos-offset="100"
                data-aos-duration="1100"
                className="resume"
                href="https://serene-sierra-78831.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Try me!
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cube;
