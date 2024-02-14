import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight , ImArrowRight} from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Selvin Prabhakaran </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am currently employed as a Front-End-Developer at Techriffs Info Systems.
            <br />
            I have completed BE - computer Science And Engineering
            at Sri Ramakrishna Institute Of Technology,
            Coimbatore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Instrumental music in  Keybords
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <h1 className="mt-5">WORK <span className="purple">EXPERIENCE</span> </h1>
          <ul>
            <li className="about-activity mt-3">
              <ImArrowRight />  &nbsp; Developed and maintained user interfaces using React components to ensure
              high performance and scalability.

            </li>
            <li className="about-activity">
              <ImArrowRight /> &nbsp; Implemented state management with Redux to manage application data flow
              and ensure consistency across components.
            </li>
            <li className="about-activity">
              <ImArrowRight /> &nbsp; Designed and styled user interfaces using HTML and CSS to create visually
              appealing and user-friendly web applications.
            </li>
            <li className="about-activity">
              <ImArrowRight />&nbsp;  Utilized Bootstrap framework to streamline the development process and
              ensure compatibility across different devices and browsers.

            </li>
            <li className="about-activity">
              <ImArrowRight /> &nbsp; Integrated third-party APIs such as RESTful APIs to fetch and manipulate data
              from external sources within the application.

            </li>
            <li className="about-activity">
              <ImArrowRight /> &nbsp; Collaborated with backend developers to define API requirements and ensure
              seamless integration between frontend and backend systems.
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
