import React, { Component } from "react";
// import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheets/Home.css";

class Home extends Component {
  state = {};
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({});
  }

  render() {
    return (
      <div className="home">
        <section
          className="section-home-1"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h1>
            <span className="logo">P</span>hillipe{" "}
          </h1>
          <h1 className="family-name">
            <span className="logo">A</span>lves
          </h1>
          <div
            className="underscore"
            data-aos="fade-left"
            aos="arrow"
            data-aos-easing="linear"
            data-aos-duration="1000"
          ></div>
          <p className="home-description">
            Hi, I’m a software developer that loves the joy of crafting elegant,
            simple solutions to the problems that I solve.
          </p>
        </section>
        <section
          data-aos="fade-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="section-home-2"
        >
          <div
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "phillipe_web-copy.jpg"
              })`,
            }}
            className="home-img"
          ></div>
          {/* <img className="responsive" src="phillipe_web-copy.jpg" alt="" /> */}
        </section>
      </div>
    );
  }
}

export default Home;
