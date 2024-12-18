import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: "justify"}}>
            Hi Everyone, I am <span className="purple">Aniket Kale </span>
            from <span className="purple"> Mumbai, India.</span>
            <br/>
            I am currently employed as an Quality Assurance Intern at Yoliday LLP.
            <br/>
            I have pursuing Bachelors of Engineering in Information Technology from Vasantdada Patil Prathishthan's
            College of
            Engineering, Mumbai, India.
            <br/>
            I have completed a Diploma in Information Technology from Government Polytechnic, Mumbai, India.
            <br/>
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight/> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight/> Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight/> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight/> Athletics
            </li>
          </ul>

          <p style={{color: "rgb(155 126 172)"}}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">TheImperialOne</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
