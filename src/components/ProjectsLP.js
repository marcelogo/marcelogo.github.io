import React, { Component } from "react";
import Parallax from "react-rellax";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "../stylesheets/ProjectsLP.css";

class ProjectsLP extends Component {
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
    return (
      <div className="projects-lp">
        <div className="project-lp-wrapper">
          <div className="project-lp-container">
            <Parallax horizontal={true}>
              <p>About</p>
            </Parallax>
            <Parallax speed={1}>
              <h1
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1300"
                className="heading-1"
              >
                Projects
              </h1>
            </Parallax>
          </div>
          <div className="projects-lp-description">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
            >
              <Parallax speed={1}>
                <h2>GA Projects</h2>
              </Parallax>
              <p>
                The projects displayed in this section are the result of studies
                realized during the immersive course on Software Engineering
                that I took part at General Assembly. Each project was produced
                between 1 and 3 days and represents what I have learned during
                that period. The main focus of the course was on the server-side
                and its relations with the client side.
              </p>
            </div>
            {/* <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
            >
              <Parallax speed={1}>
                <h2>Contents</h2>
              </Parallax>
              <p></p>
              <ol className="contents-list">
                <li>Tic Tac Toe </li>
                <li>Cube</li>
                <li>Movies</li>
                <li>Anu</li>
                <li>3D Drawing</li>
                <li>The Happy Path</li>
                <li>Culture Club</li>
              </ol>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsLP;
