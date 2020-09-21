import React, { Component } from "react";
import Parallax from "react-rellax";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "../stylesheets/Drawing.css";

class Drawing extends Component {
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

  render() {
    const { next, scroll } = this.state;
    const opts = {
      width: 1280,
      height: 720,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    return (
      <div className="projects-drawing">
        <div className="project-wrapper-drawing">
          <div className="project-container-drawing">
            <a
              className="github-icon-3D-drawing"
              href="https://github.com/PhillipeAlves/3D-Drawing"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="hvr-icon-push"
                icon={["fab", "github"]}
              />
              <p className="git-hub-description-3D-drawing">Github</p>
            </a>
            <a
              className="link-icon-drawing"
              href="http://sulky-veil.surge.sh/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-link"></i>
              <p className="link-description-drawing">Website</p>
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
                3D Drawing
              </h1>
            </Parallax>
          </div>
          <div className="project-description-drawing">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
            >
              <Parallax speed={1}>
                <h2>The idea</h2>
              </Parallax>
              <p>
                This app is the result of an experiment I did about the dynamic
                generation of content using JavaScript to “draw” onscreen, using
                the transform properties of CSS. Inspired by stars in the
                galaxy, users choose a colour and draw their own nebula.
              </p>
              <a
                data-aos="zoom-in-left"
                data-aos-easing="ease-out-cubic"
                data-aos-offset="100"
                data-aos-duration="1100"
                className="resume"
                href="http://sulky-veil.surge.sh/"
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

export default Drawing;
