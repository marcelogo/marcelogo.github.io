import React, { Component } from "react";
import Parallax from "react-rellax";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ReactTypingEffect from "react-typing-effect";
import { animateScroll as scroll } from "react-scroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../stylesheets/Anu.css";

library.add(faGithub);

class Anu extends Component {
  state = {
    feature: "",
  };

  handleClick = (event) => {
    const data = event.target.textContent.trim();
    this.setState({
      feature: data,
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
    const { feature } = this.state;
    const settings = {
      dots: true,
      pauseOnHover: false,
      adaptiveHeight: true,
      easing: "linear",
      useCSS: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4500,
      speed: 1500,
    };
    return (
      <div className="projects-anu">
        <div className="project-wrapper-anu">
          <img
            className="scroll-down"
            src={!this.isMobile() ? "ios-btn-filled.png" : ""}
            style={{ display: `${this.isMobile() ? "none" : "initial"}` }}
            onClick={() => this.scrollToBottom()}
            onMouseOver={(e) => (e.currentTarget.src = "ios-btn.png")}
            onMouseOut={(e) => (e.currentTarget.src = "ios-btn-filled.png")}
          />
          <div className="project-container-anu">
            <a
              className="github-icon-anu"
              href="https://github.com/PhillipeAlves/Anu"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="hvr-icon-push"
                icon={["fab", "github"]}
              />
              <p className="git-hub-description-anu">Github</p>
            </a>
            <a
              className="link-icon-anu"
              href="https://intense-beach-35347.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-link"></i>
              <p className="link-description-anu">Website</p>
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
                Anu
              </h1>
            </Parallax>
          </div>
          <div className="project-description-anu">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
            >
              <h2>The idea</h2>
              <p>
                After over a decade working in hospitality as a chef, it became
                obvious to me that there are some key issues in the industry
                that need addressing. It is common, due to various reasons, that
                staff typically work long hours under a lot of stress in
                comparison to other industries. Even when sick, employees are
                pressured to come to work because employers lack the tools to
                connect with temporary or freelance staff. Anu is a tool that
                serves this need.
              </p>
              <a
                data-aos="zoom-in-left"
                data-aos-easing="ease-out-cubic"
                data-aos-offset="100"
                data-aos-duration="1100"
                className="resume"
                href="https://intense-beach-35347.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Try me!
              </a>
            </div>
            <div className="arrow">
              {/* <Parallax speed={8}>
                <img
                  className="scroll-down-icon-anu"
                  src="https://img.icons8.com/ios-filled/100/000000/circled-down-2.png"
                  alt=""
                />
              </Parallax> */}
              <div
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1200"
                className="solution-anu"
              >
                <Parallax speed={6}>
                  <h2>The solution</h2>
                  <p>
                    This project came as an effort to think about how to connect
                    people to allow freelancing in hospitality. One of the
                    solutions that became a core idea is a booking system that
                    allows workers to get gigs based on their availability. In
                    parallel, businesses can browse for workers based on their
                    profile and post job openings.
                  </p>
                </Parallax>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-container">
          <Parallax
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1300"
            speed={5}
            percentage={0}
          >
            <h2 className="carousel-design-h2">Design</h2>
          </Parallax>
          <Slider className="carousel" {...settings}>
            <div>
              <img
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1200"
                className="carousel-img"
                src="anu-1.png"
                alt=""
              />
            </div>
            <div>
              <img
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1200"
                className="carousel-img"
                src="anu-2.png"
                alt=""
              />
            </div>
            <div>
              <img
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1200"
                className="carousel-img"
                src="anu-3.png"
                alt=""
              />
            </div>
            <div>
              <img
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1200"
                className="carousel-img"
                src="anu-4.png"
                alt=""
              />
            </div>
            <div>
              <img
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1200"
                className="carousel-img"
                src="anu-5.png"
                alt=""
              />
            </div>
            <div>
              <img
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1200"
                className="carousel-img"
                src="anu-6.png"
                alt=""
              />
            </div>
          </Slider>
        </div>
        <div className="backend-anu">
          <Parallax
            // data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1300"
            speed={7}
            percentage={-0.4}
          >
            <h2 className="features-h2-anu">Features</h2>
          </Parallax>
          <div
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1300"
            className="backend-anu-container"
          >
            <ul
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
              className="main-features-anu"
            >
              <li>Ruby</li>
              <p>|</p>
              <li>Bcrypt</li>
              <p>|</p>
              <li>Sinatra</li>
              <p>|</p>
              <li>Postgress</li>
              <p>|</p>
              <li>Cloudinary</li>
            </ul>
            <Parallax
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              speed={4}
              percentage={-0.1}
            >
              <div className="backend-anu-specs">
                <div>
                  <p className="focus">Focus</p>
                  <h2>A whole ruby</h2>
                  <div className="backend-anu-description">
                    <p>
                      This was the very first project I did using Ruby. The app
                      is structured using Sinatra and ERB templating. For my
                      database I used Postgres, in which I created three tables.
                      One for users, one for messages between users and one for
                      gigs.
                    </p>{" "}
                    <p>
                      The User’s table stores login details and profile picture
                      details from photos that can be uploaded by the user on
                      his personal page. The photos are stored are stored on
                      Cloudinary. The User’s is based on one-to-many data model.{" "}
                    </p>
                    <p>
                      {" "}
                      The Gig’s table is a one-to-many relationship that allows
                      the user to create and manage posts.
                    </p>{" "}
                    <p>
                      {" "}
                      The Message’s table is a many-to-many model that helps to
                      keep track of a multidimensional interaction between
                      users, gigs and personal messages.{" "}
                    </p>
                    <p>
                      {" "}
                      The user’s password is encrypted using Bcrypt and the
                      Session is managed with Sinatra to help to persist
                      information across the application.
                    </p>
                  </div>
                </div>
              </div>
            </Parallax>
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
    );
  }
}

export default Anu;
