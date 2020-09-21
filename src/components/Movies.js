import React, { Component } from "react";
import Parallax from "react-rellax";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../stylesheets/Movies.css";

library.add(faGithub);

class Movies extends Component {
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
      <div className="projects-movies">
        <div className="project-wrapper-movies">
          <img
            className="scroll-down"
            src={!this.isMobile() ? "ios-btn-filled.png" : ""}
            style={{ display: `${this.isMobile() ? "none" : "initial"}` }}
            onClick={() => this.scrollToBottom()}
            onMouseOver={(e) => (e.currentTarget.src = "ios-btn.png")}
            onMouseOut={(e) => (e.currentTarget.src = "ios-btn-filled.png")}
          />
          <div className="project-container-movies">
            <a
              className="github-icon-movies-1"
              href="https://github.com/PhillipeAlves/Movies-1"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="hvr-icon-push"
                icon={["fab", "github"]}
              />
              <p className="git-hub-description-movies-1">Github: Movies 1</p>
            </a>
            <a
              className="github-icon-movies-2"
              href="https://github.com/PhillipeAlves/Movies-2"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="hvr-icon-push"
                icon={["fab", "github"]}
              />
              <p className="git-hub-description-movies-2">Github: Movies 2</p>
            </a>
            <a
              className="link-icon-movies"
              href="https://warm-basin-03855.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-link"></i>
              <p className="link-description-movies">Website</p>
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
                Movies
              </h1>
            </Parallax>
          </div>
          <div className="project-description-movies">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
            >
              <div className="arrow">
                <Parallax speed={7}>
                  <h2>The apps</h2>
                </Parallax>
              </div>
              <Parallax speed={5}>
                <p>
                  These two websites were build using the OMDb Api and had for a
                  goal to further the knowledge on building applications using
                  Ruby. Both rely on the use of HTTParty for retrieving data and
                  ERB templating to render the images on the browser. The apps
                  allow users to search movies by title, accessing relevant
                  information such as ratings, cast and synopses.
                </p>
                <a
                  data-aos="zoom-in-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-offset="100"
                  data-aos-duration="1100"
                  className="resume"
                  href="https://warm-basin-03855.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Try me!
                </a>
              </Parallax>
            </div>
          </div>
        </div>

        <div onScroll={this.handleScroll} className="frontend-movies">
          <img
            data-aos="fade-up"
            data-aos-duration="1100"
            className="movies-img"
            //   style={{ width: `${scroll <= 67.5 ? scroll + "%" : "67.5%"}` }}
            src="movies-4.png"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-duration="1100"
            className="movies-img"
            //   style={{ width: `${scroll <= 67.5 ? scroll + "%" : "67.5%"}` }}
            src="movies-5.png"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-duration="1100"
            className="movies-img"
            // style={{ width: `${scroll <= 67.5 ? scroll + "%" : "67.5%"}` }}
            src="movies-2.png"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-duration="1100"
            className="movies-img"
            // style={{ width: `${scroll <= 67.5 ? scroll + "%" : "67.5%"}` }}
            src="movies-7.png"
            alt=""
          />
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

export default Movies;
