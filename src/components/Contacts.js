import React, { Component } from "react";
import Parallax from "react-rellax";
import { ClipboardCopy } from "@patternfly/react-core";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "../stylesheets/Contacts.css";

class Contacts extends Component {
  state = {
    copyEmail: false,
    copyPhone: false,
  };
  copyCodeToClipboard = (input) => {
    let el = "";
    if (input === "email") {
      el = this.textArea;
      this.setState({ copyEmail: true });
      setTimeout(
        function () {
          this.setState({ copyEmail: false });
        }.bind(this),
        1000
      );
    } else {
      el = this.textArea2;
      this.setState({ copyPhone: true });
      setTimeout(
        function () {
          this.setState({ copyPhone: false });
        }.bind(this),
        1000
      );
    }
    el.select();
    document.execCommand("copy");
  };

  render() {
    return (
      <div className="projects-contacts">
        <div className="project-container-contacts">
          <Parallax speed={1}>
            <h1
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1300"
              className="heading-1"
            >
              Contacts
            </h1>
          </Parallax>
        </div>
        <div className="description-contacts">
          <div
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1200"
            className="contact-links"
          >
            <div>
              <h1>Links</h1>
              <div>
                <a
                  className="contact-icons"
                  href="https://www.linkedin.com/in/phillipe-alves-pereira/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <div>
                <a
                  className="contact-icons"
                  href="https://github.com/PhillipeAlves"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github-square"></i>
                </a>
              </div>
            </div>
            <div>
              <h1>Click&Copy</h1>
              <div className="contacts">
                <div>
                  <i
                    onClick={() => this.copyCodeToClipboard("email")}
                    className="contact-icons fas fa-clipboard"
                  >
                    <textarea
                      ref={(textarea) => (this.textArea = textarea)}
                      value="phillipe.alves@gmail.com"
                    />
                    {this.state.copyEmail ? (
                      <div
                        style={{
                          fontWeight: "normal",
                          fontSize: "1rem",
                          color: "var(--navColor2)",
                        }}
                      >
                        Copied!
                      </div>
                    ) : null}
                  </i>
                  <i
                    onClick={() => this.copyCodeToClipboard("phone")}
                    className="contact-icons fas fa-clipboard"
                  >
                    <textarea
                      ref={(textarea) => (this.textArea2 = textarea)}
                      value="0474-851-747"
                    />
                    {this.state.copyPhone ? (
                      <div
                        style={{
                          fontWeight: "normal",
                          fontSize: "1rem",
                          color: "var(--navColor2)",
                        }}
                      >
                        Copied!
                      </div>
                    ) : null}
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
