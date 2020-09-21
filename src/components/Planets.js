import React, { Component } from "react";
import Parallax from "react-rellax";
import ReactTypingEffect from "react-typing-effect";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../stylesheets/Planets.css";

library.add(faGithub);

class planets extends Component {
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
  render() {
    const { feature } = this.state;
    const settings = {
      //   dots: true,
      fade: true,
      pauseOnHover: false,
      adaptiveHeight: true,
      easing: "linear",
      useCSS: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1500,
    };
    return (
      <div className="projects-planets">
        <div className="project-wrapper-planets">
          <div className="project-container-planets">
            <a
              className="github-icon-planets"
              href="https://github.com/PhillipeAlves/Planets"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="hvr-icon-push"
                icon={["fab", "github"]}
              />
              <p className="git-hub-description-planets">Planets</p>
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
                Planets
              </h1>
            </Parallax>
          </div>
          <div className="project-description-planets">
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
                The idea of this app is originated from a homework that I decide
                to take further for practicing how to build web apps using ruby
                only, build using Sinatra. The app counts with a database
                (Postgres) that holds the input from the user. The idea is
                pretty simple. The app allows you to build your planet. It works
                with the possibility for the user to add an image that is
                “converted” into a planet. The greatest challenge at the time
                was to learn how to use params and how to use it for styling
                purposes and data manipulation.
              </p>
              {/* <img
                className="scroll-down-icon"
                src="https://img.icons8.com/ios-filled/100/000000/circled-down-2.png"
                alt=""
              /> */}
            </div>
          </div>
        </div>
        <div className="carousel-container-planets">
          <Slider className="carousel-planets" {...settings}>
            <div>
              <img
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1200"
                className="carousel-img-planets"
                src="planets-1.png"
                alt=""
              />
            </div>
            <div>
              <img
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1200"
                className="carousel-img-planets"
                src="planets-2.png"
                alt=""
              />
            </div>
            <div>
              <img
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1200"
                className="carousel-img-planets"
                src="planets-3.png"
                alt=""
              />
            </div>
            <div>
              <img
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1200"
                className="carousel-img-planets"
                src="planets-5.png"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default planets;
