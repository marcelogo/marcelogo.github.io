import React, { Component } from "react";
import CultureClub from "./CultureClub";
import Anu from "./Anu";
import TheHappyPath from "./TheHappyPath";
import ProjectsLP from "./ProjectsLP";
import TTT from "./TTT";
import Drawing from "./Drawing";
import Movies from "./Movies";
import Cube from "./Cube";
import "../stylesheets/Projects.css";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="btns-container">
          <div className="toggle-projects-btns">
            <p
              className={`toggle-projects-btn ${
                this.props.project === "1" ? "active-project-btn" : ""
              }`}
              onClick={() => this.props.handleClick("1")}
            >
              1
            </p>
            <p
              className={`toggle-projects-btn ${
                this.props.project === "2" ? "active-project-btn" : ""
              }`}
              onClick={() => this.props.handleClick("2")}
            >
              2
            </p>
            <p
              className={`toggle-projects-btn ${
                this.props.project === "3" ? "active-project-btn" : ""
              }`}
              onClick={() => this.props.handleClick("3")}
            >
              3
            </p>
            <p
              className={`toggle-projects-btn ${
                this.props.project === "4" ? "active-project-btn" : ""
              }`}
              onClick={() => this.props.handleClick("4")}
            >
              4
            </p>
            <p
              className={`toggle-projects-btn ${
                this.props.project === "5" ? "active-project-btn" : ""
              }`}
              onClick={() => this.props.handleClick("5")}
            >
              5
            </p>
            <p
              className={`toggle-projects-btn ${
                this.props.project === "6" ? "active-project-btn" : ""
              }`}
              onClick={() => this.props.handleClick("6")}
            >
              6
            </p>
            <p
              className={`toggle-projects-btn ${
                this.props.project === "7" ? "active-project-btn" : ""
              }`}
              onClick={() => this.props.handleClick("7")}
            >
              7
            </p>
          </div>
        </div>
        {this.props.project === "ProjectsLP" ? <ProjectsLP /> : ""}
        {this.props.project === "1" ? <TTT /> : ""}
        {this.props.project === "2" ? <Cube /> : ""}
        {this.props.project === "3" ? <Drawing /> : ""}
        {this.props.project === "4" ? <Movies /> : ""}
        {this.props.project === "5" ? <Anu /> : ""}
        {this.props.project === "6" ? <TheHappyPath /> : ""}
        {this.props.project === "7" ? <CultureClub /> : ""}
      </div>
    );
  }
}

export default Projects;
