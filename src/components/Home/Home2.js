import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-m">
              <span className="primary-header"> ABOUT </span> ME
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              
              I'm a Third-year BTech student passionate about 
              <i className="primary-header"> Software Engineering, Cloud Computing, and Web Development</i>
          
              <br />
              <br />I am Skilled in{" "}
              <i className="primary-header">Java, Python, and machine learning,  </i>with internship experience and coursework.

              <br />
              <br />Proactive leader with a track record of success, including
              <i>
                <i className="primary-header"> winning the Smart India Hackathon 2023.</i>
              </i>
              <br />
              <br />Currently expanding portfolio with projects in{" "}
              <i className="primary-header">Node.js</i> and Modern Javascript
              Library and Framework like
              <i className="primary-header"> React.js.</i>
              <br />
              <br />
              Pursuing honors in{" "}
              <i className="primary-header">Cloud Computing, </i> driven by a keen interest in leveraging scalable and innovative cloud solutions to address complex technological challenges.  
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/sakshiselmokar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="mailto:selmokarsakshi0@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sakshi-selmokar-45802a241/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
