import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-Commerce Website",
      description: "Cara - fashion up yourself",
      imgUrl: projImg1,
      link: "https://github.com/sharmakarish/Cara-Fashion-Up-Yourself",
    },
       {
      title: "Messenger - login & signUp ",
      description: "Chatify - Messenger to stay in touch with friends and family.",
      imgUrl: projImg2,
      link: "https://github.com/sharmakarish/Chatify",
    },
    {
      title: "News Application",
      description: "Taaza Khabar - Top headlines on your tips",
      imgUrl: projImg4,
      link: "https://github.com/sharmakarish/News-app",
    },
    {
      title: "Plan for Every Dog's Needs",
      description: "Tindog - Meet new and interesting dogs nearby.",
      imgUrl: projImg3,
      link: "https://github.com/sharmakarish/Tindog-Website",
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__slideInUp": ""}>
                <h2>My Recent Works</h2>
                <p>Crafting digital dreams into reality with a codebrush and boundless imagination. ✨




</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
  <Tab.Pane eventKey="first">
    <Row>
      {/* Display projects projImg1, projImg2, projImg4 */}
      <ProjectCard
        key={1}
        {...projects[0]}
      />
      <ProjectCard
        key={2}
        {...projects[1]}
      />
      <ProjectCard
        key={4}
        {...projects[2]}
      />
    </Row>
  </Tab.Pane>
  <Tab.Pane eventKey="second">
    <Row>
      {/* Display project projImg3 */}
      <ProjectCard
        key={3}
        {...projects[3]}
      />
    </Row>
  </Tab.Pane>
  <Tab.Pane eventKey="third">
    <h2>Comingg ssoooooooon...!!</h2>
  </Tab.Pane>
</Tab.Content>

                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}