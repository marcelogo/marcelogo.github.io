import React, { Component } from "react";
import Parallax from "react-rellax";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../stylesheets/TheHappyPath.css";
import { animateScroll as scroll } from "react-scroll";

library.add(faGithub);

class TheHappyPath extends Component {
  state = {
    next: false,
    scroll: 0,
  };

  handleClick = (event) => {
    this.setState({
      next: true,
    });
    this.scrollToBottom();
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = (event) => {
    let scroll = window.pageYOffset;
    let width = scroll / 20;
    this.setState({
      scroll: width,
    });
  };
  scrollToTop = () => {
    scroll.scrollToTop();
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
      <div className="projects-hp">
        <div className="project-wrapper-hp">
          <img
            className="scroll-down"
            src={!this.isMobile() ? "ios-btn-filled.png" : ""}
            style={{ display: `${this.isMobile() ? "none" : "initial"}` }}
            onClick={() => this.scrollToBottom()}
            onMouseOver={(e) => (e.currentTarget.src = "ios-btn.png")}
            onMouseOut={(e) => (e.currentTarget.src = "ios-btn-filled.png")}
          />
          <div className="project-container-hp">
            <a
              className="github-icon-hp"
              href="https://github.com/ajsaule/The-Happy-Path"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="hvr-icon-push"
                icon={["fab", "github"]}
              />
              <p className="git-hub-description-hp">Github</p>
            </a>
            <a
              className="link-icon-hp"
              href="https://floating-cliffs-04957.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-link"></i>
              <p className="link-description-hp">Website</p>
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
                The Happy Path
              </h1>
            </Parallax>
          </div>
          <div className="project-description-hp">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
            >
              <Parallax speed={1}>
                <h2>The idea</h2>
              </Parallax>
              <p>
                In moments of crisis it's very important to maintain positivity
                and strengthen community.This project came about in the context
                of COVID-19, where the challenging impacts of social isolation
                were being felt across Australia and the world. The Happy Path
                was born of the intent to connect people with positive messaging
                during the pandemic.
              </p>
              <a
                data-aos="zoom-in-left"
                data-aos-easing="ease-out-cubic"
                data-aos-offset="100"
                data-aos-duration="1100"
                className="resume"
                href="https://floating-cliffs-04957.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Try me!
              </a>
            </div>
            <div className="arrow">
              <div
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1200"
                className="solution-hp"
              >
                <Parallax speed={5} percentage={1}>
                  <Parallax speed={1}>
                    <h2>The solution</h2>
                  </Parallax>
                  <p>
                    The Happy Path features are a product of rapid collaboration
                    and iteration within the project team, and were all designed
                    with enhancing positivity in mind. The app serves up
                    important information about mental health, governmental
                    support and education during the pandemic. It contains a
                    community hub that allows users to connect by sharing their
                    stories. Featured also is a food page that generates random
                    comfort food recipes to bring inspiration when cooking at
                    home.
                  </p>
                </Parallax>
              </div>
            </div>
          </div>
        </div>
        <div onScroll={this.handleScroll} className="frontend-hp">
          <img
            data-aos="flip-down"
            data-aos-delay="700"
            data-aos-duration="1100"
            className="dell-img"
            src="hp-2.png"
            alt=""
          />
        </div>
        <div className="zoom">
          <img
            className="zoom-lg"
            data-aos="flip-down"
            data-aos-delay="500"
            data-aos-duration="1100"
            style={{ width: `${scroll <= 67.5 ? scroll + "%" : "67.5%"}` }}
            src="hp-1.png"
            alt=""
          />
          <img
            className="zoom-sml"
            data-aos="flip-down"
            data-aos-delay="500"
            data-aos-duration="1100"
            style={{ width: `${scroll <= 45 ? scroll + 55 + "%" : "100%"}` }}
            src="hp-1.png"
            alt=""
          />
        </div>
        <div className="hp-frontend">
          <Parallax speed={4} percentage={-0.3}>
            <div
              data-aos="fade-right "
              data-aos-easing="ease-out-cubic"
              data-aos-delay="600"
              data-aos-duration="1000"
              className="hp-frontend-description"
            >
              <h2 className="hp-frontend-spec">
                Front <span>end</span>
              </h2>

              <div
                style={{
                  transition: "all 2s ease-in",
                }}
              >
                <img
                  smooth={true}
                  // offset={-70}
                  duration={100}
                  className="keep-moving-icon"
                  src="https://static.thenounproject.com/png/54414-200.png"
                  alt=""
                  onClick={(e) => this.handleClick(e)}
                />
              </div>

              <p>
                The frontend in this project was done using DOM manipulation
                creating content templates managed with JavaScript. All the
                content gets rendered through the user’s interaction. If the
                user creates an account, access is granted to post stories and
                manage them. This connection with the server-side of our app
                happens with the help of Axios, that handles all the Ajax
                requests. To generate the recipes, we used the{" "}
                <a
                  href="http://rapidapi.com/apidojo/api/tasty"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Tasty Api{" "}
                </a>
                .
              </p>
            </div>
          </Parallax>
        </div>
        <div className={`${next ? "display" : "hidden"}`}>
          <div className="backend-hp">
            <h2
              data-aos="fade-down"
              // data-aos-delay="600"
              data-aos-duration="1300"
              className="backend-hp-banner"
            >
              <span className="backend-span shine-1">B</span>
              <span className="backend-span shine-2">A</span>
              <span className="backend-span shine-3">C</span>
              <span className="backend-span shine-4">K</span>
              <span className="backend-span shine-5">E</span>
              <span className="backend-span shine-6">N</span>
              <span className="backend-span shine-7">D</span>
            </h2>
            <div className="backend-hp-description">
              <Parallax speed={4} percentage={0.5}>
                <h2 className="backend-hp-title">On Rails</h2>
              </Parallax>
              <p>
                While the client-side was made with JavaScript the server-side
                was build using Ruby. For the database we used Postgres. In this
                project the database counts with two tables. One for the stories
                that the user shares and one personal account. All the
                management of the data was done using Rails. The persistent
                session was achieved using Sinatra.
              </p>
            </div>
          </div>
          <footer>
            {" "}
            <img
              smooth={true}
              duration={100}
              className="scroll-up-btn"
              src="ios-btn-filled.png"
              onMouseOver={(e) => (e.currentTarget.src = "ios-btn.png")}
              onMouseOut={(e) => (e.currentTarget.src = "ios-btn-filled.png")}
              alt=""
              style={{ display: `${this.isMobile() ? "none" : "initial"}` }}
              onClick={() => this.scrollToTop()}
            />
          </footer>
        </div>
      </div>
    );
  }
}

export default TheHappyPath;
