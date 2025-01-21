import React, { Component } from "react";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3, SiVercel } from "react-icons/si";
import "./Services.css"; 

class ContactSection extends Component {
  render() {
    return (
      <div className="service-container">
        {/* <h2 className="contact-heading">Contact Me</h2> */}
        <div className="icon-container">
          <div className="icon-item">
            <FaReact className="icon" />
            <span>React</span>
          </div>
          <div className="icon-item">
            <SiJavascript className="icon" />
            <span>JavaScript</span>
          </div>
          <div className="icon-item">
            <SiHtml5 className="icon" />
            <span>HTML</span>
          </div>
          <div className="icon-item">
            <SiCss3 className="icon" />
            <span>CSS</span>
          </div>
          <div className="icon-item">
            <SiVercel className="icon" />
            <span>Vercel</span>
          </div>
          <div className="icon-item">
            <FaGithub className="icon" />
            <span>GitHub</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactSection;
