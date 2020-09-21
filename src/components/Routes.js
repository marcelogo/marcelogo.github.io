import React, { Component } from "react";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Home";
import Menu from "./Menu";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import Projects from "./Projects";
import { NotFound } from "./NotFound";
import "../stylesheets/Routes.css";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      project: "ProjectsLP",
      // project: "1",
    };
  }

  componentDidMount() {
    AOS.init({});
  }

  handleToggle = () => {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  };

  handleClick(childData, event) {
    this.setState({
      project: childData,
    });
  }

  render() {
    const { isToggleOn, project } = this.state;
    return (
      <HashRouter>
        <Link to="/"></Link>
        <div
          onClick={this.handleToggle.bind(this)}
          className={`menu-bars ${
            !isToggleOn ? "active-menu" : "inactive-menu"
          }`}
          id="menu-bars"
        >
          <div className={`bar1 ${!isToggleOn ? "toggle-menu" : ""}`}></div>
          <div className={`bar2 ${!isToggleOn ? "toggle-menu" : ""}`}></div>
        </div>
        <Menu
          handleToggle={this.handleToggle.bind(null, this)}
          handleClick={this.handleClick.bind(this)}
          isToggleOn={isToggleOn}
        />
        <div className="screen">
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/aboutme" component={AboutMe} />
            <Route
              path="/projects"
              component={() => (
                <Projects
                  handleClick={this.handleClick.bind(this)}
                  project={project}
                />
              )}
            />
            <Route path="/contacts" component={Contacts} />
            <Route path="/menu" component={Menu} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Routes;
