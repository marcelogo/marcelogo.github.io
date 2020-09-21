import React, { Component } from "react";
import Parallax from "react-rellax";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ReactTypingEffect from "react-typing-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../stylesheets/CultureClub.css";
import { Link, animateScroll as scroll } from "react-scroll";

library.add(faGithub);

class CultureClub extends Component {
  state = {
    feature: "",
    scroll: 0,
  };

  handleClick = (event) => {
    const data = event.target.textContent.trim();
    this.setState({
      feature: data,
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
    let width = scroll / 15;
    this.setState({
      scroll: width,
    });
  };
  typeWriter = () => {
    return (
      <ReactTypingEffect
        typingDelay={3000}
        eraseDelay={60000}
        text="Backend features"
      />
    );
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
    const { scroll, feature } = this.state;
    return (
      <div className="projects-cc">
        <div className="project-wrapper">
          <img
            className="scroll-down"
            src={!this.isMobile() ? "ios-btn-filled.png" : ""}
            style={{ display: `${this.isMobile() ? "none" : "initial"}` }}
            onClick={() => this.scrollToBottom()}
            onMouseOver={(e) => (e.currentTarget.src = "ios-btn.png")}
            onMouseOut={(e) => (e.currentTarget.src = "ios-btn-filled.png")}
          />
          <div className="project-container">
            <a
              className="github-icon-front-end"
              href="https://github.com/PhillipeAlves/Culture-Club-Frontend"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="hvr-icon-push"
                icon={["fab", "github"]}
              />
              <p className="git-hub-description-front-end">Github: Frontend</p>
            </a>
            <a
              className="github-icon-back-end"
              href="https://github.com/PhillipeAlves/Culture-Club-Backend"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="hvr-icon-push"
                icon={["fab", "github"]}
              />
              <p className="git-hub-description-back-end">Github: Backend</p>
            </a>

            <Parallax horizontal={true}>
              <p>Project</p>
            </Parallax>
            <Parallax speed={-2}>
              <h1
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1300"
                className="heading-1"
              >
                Culture Club
              </h1>
            </Parallax>
          </div>
          <div className="project-description">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
            >
              <h2>The idea</h2>
              <p>
                Culture Club is the digitisation of a real world tradition that
                occured between my friends and I prior to COVID-19. It is
                essentially a 'surprise' event organised by one club member for
                the others, where the activity is random and the details kept a
                mystery from the other members until the last minute. The event
                could be a dinner party, an escape room experience, a magic
                show, a jazz gig, even just a walk in an unexplored area. The
                core idea is simply to get people together and do something out
                of the ordinary. To plan a Culture Club event, members share
                their availability and a meeting point and time are shared. This
                app helps to facilitate this process.
              </p>
              <p
                data-aos="zoom-in-left"
                data-aos-easing="ease-out-cubic"
                data-aos-offset="100"
                data-aos-duration="1100"
                className="coming-soon"
              >
                Coming soon
              </p>
            </div>
            <div className="arrow">
              <div
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1200"
                className="solution-cc"
              >
                <Parallax speed={6} percentage={1}>
                  <h2>The solution</h2>
                  <p>
                    This app inspires users by displaying local gigs and stay
                    tuned to what's happening in town. It also helps to organize
                    catch ups with a mailing system that allows users to invite
                    friends and store the information in a personal account.
                  </p>
                </Parallax>
              </div>
            </div>
          </div>
        </div>
        <div className="frontend">
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="2000"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "cc-1.png"})`,
              backgroundSize: `${scroll ? scroll + "%" : ""}`,
            }}
            className="img-1 img-front-lg"
          ></div>
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="2000"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "cc-1.png"})`,
              backgroundSize: `${scroll ? (scroll - 10) * 3 + "%" : ""}`,
            }}
            className="img-front-sml"
          ></div>
          <div className="front-end-specs">
            <Parallax
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
              speed={4}
              percentage={0.7}
            >
              <Parallax speed={5} percentage={0.3}>
                <div
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1300"
                >
                  <div className="front-end-underscore"></div>
                  <h2>Frontend features</h2>
                </div>
              </Parallax>
            </Parallax>
            <ul
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-delay="600"
              data-aos-duration="1300"
            >
              <li
                onClick={(e) => this.handleClick(e)}
                className={feature === "React" ? "description-active" : ""}
              >
                React
              </li>
              <div className="underscore-li"></div>
              <img
                style={{ width: "100px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt=""
                className="react-lg"
              />
              <img
                style={{ width: "60px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt=""
                className="react-sml"
              />
              <li
                onClick={(e) => this.handleClick(e)}
                className={feature === "Mobx" ? "description-active" : ""}
              >
                Mobx
              </li>
              <div className="underscore-li"></div>
              <img src="https://api.iconify.design/logos-mobx.svg" alt="" />
              <li
                onClick={(e) => this.handleClick(e)}
                className={feature === "CSS" ? "description-active" : ""}
              >
                CSS
              </li>
              <div className="underscore-li"></div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                alt=""
              />
              <li
                onClick={(e) => this.handleClick(e)}
                className={feature === "Axios" ? "description-active" : ""}
              >
                Axios
              </li>
              <div className="underscore-li"></div>
            </ul>
          </div>
          <TransitionGroup>
            <CSSTransition key={feature} timeout={1000} classNames="messageout">
              <div className="features-description">
                {feature === "React" ? (
                  <p>
                    React was used in this project to build a dynamic UI,
                    rendering the content progressively with the user
                    interaction.
                  </p>
                ) : (
                  ""
                )}
                {feature === "Mobx" ? (
                  <p>
                    Mobx was very useful to manage the state and applying data
                    layers to the login system.
                  </p>
                ) : (
                  ""
                )}
                {feature === "CSS" ? (
                  <p>
                    CSS was used in this project as a first experiment with
                    React's interactions. And mainly on how to handle the states
                    according to the data received from the back end.
                  </p>
                ) : (
                  ""
                )}
                {feature === "Axios" ? (
                  <p>
                    Axios was the main tool that I used to communicate with my
                    server side. From the responses I managed to update all the
                    states in React and render them afterwards.
                  </p>
                ) : (
                  ""
                )}
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <div className="backend">
          <div className="phone-sizes-container">
            <div
              // data-aos="zoom"
              // data-aos-delay="600"
              // data-aos-duration="1300"
              className="backend-title"
            >
              <div className="typeWrite">
                <h2>{this.typeWriter()}</h2>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1300"
              className="phone"
            >
              <img src="cc-2.png" alt="" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1300"
              className="phone"
            >
              <img src="cc-3.png" alt="" />
            </div>
          </div>
          <div className="backend-menu">
            <ul
              data-aos="fade-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
            >
              <li>Node</li>
              <p>|</p>
              <li>Express</li>
              <p>|</p>
              <li>Bcrypt</li>
              <p>|</p>
              <li>Sendgrid</li>
              <p>|</p>
              <li>MySql</li>
              <p>|</p>
              <li>TicketMaster Api</li>
            </ul>
          </div>
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-delay="600"
          data-aos-duration="1300"
          className="backend-information"
        >
          <Parallax
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            speed={4}
            percentage={0.4}
          >
            <p className="focus">Focus</p>
            <h2>The persistent session</h2>
            <div className="backend-logo">
              <p>
                The main focus of this learnig project was to understand better
                how to keep a persistent session on Node. The app allows you to
                create an account and to login. This login allows the user to
                send invitations to friends via emails using Sendgrid. The
                account is stored using MySql and the password is encrypted
                using Bcrypt. Everytime the user logs in it's created a new
                session. This was achieved with the help from Express Session
                that manages the session.
              </p>

              <Parallax
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="800"
                speed={6}
                percentage={0.2}
              >
                <img
                  className="backend-image"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png"
                  alt=""
                />
              </Parallax>
            </div>
          </Parallax>
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
    );
  }
}

export default CultureClub;
