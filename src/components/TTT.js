import React, { Component } from "react";
import Parallax from "react-rellax";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animateScroll as scroll } from "react-scroll";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../stylesheets/Movies.css";
import "../stylesheets/TTT.css";

library.add(faGithub);

class TTT extends Component {
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
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = (event) => {
    let scroll = window.pageYOffset;
    let width = scroll / 25;
    this.setState({
      scroll: width,
    });
  };
  scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
  };
  render() {
    const { next, scroll } = this.state;

    return (
      <div className="projects-ttt">
        <div className="project-wrapper-ttt">
          <img
            className="scroll-down"
            src={!this.isMobile() ? "ios-btn-filled.png" : ""}
            style={{ display: `${this.isMobile() ? "none" : "initial"}` }}
            onClick={() => this.scrollToBottom()}
            onMouseOver={(e) => (e.currentTarget.src = "ios-btn.png")}
            onMouseOut={(e) => (e.currentTarget.src = "ios-btn-filled.png")}
          />
          <div className="project-container-ttt">
            <a
              className="github-icon-ttt"
              href="https://github.com/PhillipeAlves/techtictactoe"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="hvr-icon-push"
                icon={["fab", "github"]}
              />
              <p className="git-hub-description-ttt">Github</p>
            </a>
            <a
              className="link-icon-ttt"
              href="http://flowery-gun.surge.sh/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-link"></i>
              <p className="link-description-ttt">Website</p>
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
                Tech Tic Tac Toe
              </h1>
            </Parallax>
          </div>
          <div className="project-description-ttt">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
            >
              <div className="arrow">
                <Parallax speed={1}>
                  <h2>The idea</h2>
                </Parallax>
              </div>
              <p>
                The idea with this app was to re-imagine the classic game of Tic
                Tac Toe. The main focus of this project was to learn about DOM
                manipulation with JavaScript and to improve on CSS skills. The
                board is written in the index.html file and all the interactions
                are then managed by adding event listeners with JavaScript. I
                worked with data attributes to be able to handle the turns and
                check for a winner based on possible combinations for winning.
              </p>

              <a
                data-aos="zoom-in-left"
                data-aos-easing="ease-out-cubic"
                data-aos-offset="100"
                data-aos-duration="1100"
                className="resume"
                href="http://flowery-gun.surge.sh/"
                target="_blank"
                rel="noreferrer"
              >
                Try me!
              </a>
            </div>
          </div>
        </div>
        <div onScroll={this.handleScroll} className="frontend-TTT">
          <img
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="600"
            className="TTT-img TTT-img-xlg"
            src="ttt-5.png"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-duration="1100"
            className="TTT-img TTT-img-lg"
            src="ttt-5.png"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-duration="200"
            className="TTT-img TTT-img-sml"
            style={{ width: `${scroll <= 33 ? scroll + 47 + "%" : "80%"}` }}
            src="ttt-5.png"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-duration="1100"
            className="TTT-img TTT-img-lg"
            style={{ width: `${scroll <= 40 ? scroll + "%" : "40%"}` }}
            src="ttt-6.png"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="600"
            className="TTT-img TTT-img-xlg"
            style={{ width: `${scroll <= 35 ? scroll + "%" : "35%"}` }}
            src="ttt-6.png"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-duration="1100"
            className="TTT-img TTT-img-sml"
            style={{ width: `${scroll <= 43 ? scroll + 37 + "%" : "80%"}` }}
            src="ttt-6.png"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="600"
            className="TTT-img TTT-img-xlg"
            src="ttt-4.png"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-duration="1100"
            className="TTT-img TTT-img-lg"
            src="ttt-4.png"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-duration="1100"
            className="TTT-img TTT-img-sml"
            style={{ width: `${scroll <= 53 ? scroll + 27 + "%" : "80%"}` }}
            src="ttt-4.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default TTT;
