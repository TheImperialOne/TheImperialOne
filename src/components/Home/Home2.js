import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I am a tech enthusiast who loves creating impactful digital solutions.
                <br />
                <br />
                My expertise lies in programming with
                <i>
                  <b className="purple"> Dart, Java, and JavaScript, </b>
                </i>
                with a keen interest in mobile and web application development.
                <br />
                <br />
                I enjoy exploring new technologies and have a particular interest in building
                <i>
                  <b className="purple"> scalable applications </b>
                </i>
                and working with cutting-edge frameworks like
                <i>
                  <b className="purple"> Flutter, React.js, and Next.js.</b>
                </i>
                <br />
                <br />
                I am also fascinated by the possibilities of
                <b className="purple"> Blockchain </b>
                technology and its role in shaping the future.
                <br />
                <br />
                Beyond coding, I have a passion for solving real-world problems and enjoy leveraging tools like
                <b className="purple"> Node.js </b> and modern frameworks to build robust, user-centric products.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                      href="https://github.com/TheImperialOne"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://www.linkedin.com/in/theimperialone/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://www.instagram.com/aniket_d_kale"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
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
