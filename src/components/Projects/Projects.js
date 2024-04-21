import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import GSM from "../../Assets/Projects/GSM.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Ecart from "../../Assets/Projects/ecart.png";
import Resultify from "../../Assets/Projects/Resultify.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="https://github.com/sakshiselmokar/Portfolio"
              demoLink=""
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={GSM}
              title="GSM Digital Repository"
              description="A web app allowing users to securely upload and manage documents in a digital repository."
              ghLink="https://github.com/sakshiselmokar/GSM-Digital-Repository"
              demoLink="https://sakshiselmokar.github.io/GSM-Digital-Repository/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Resultify}
              title="Result Management"
              description="Resultify is a web-based application simplifying student result management, featuring student and admin portals for result access and upload, with responsive design and easy integration. "
              ghLink="https://github.com/sakshiselmokar/Resultify"
              demoLink="https://sakshiselmokar.github.io/Resultify/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="E Cart"
              description="a responsive Ecommerce Website with HTML,CSS,Bootstrap,JavaScript."
              ghLink="https://github.com/sakshiselmokar/E-com"
              demoLink="https://sakshiselmokar.github.io/E-com/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
