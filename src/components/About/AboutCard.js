import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, <span className="khaki"> let me introduce my self </span>
            my name <span className="khaki"> Jefri Pratama Andika Oktari</span>
            <br />I from indonesia, 
i like to share point of view, play video games, go play with someone even though now she is angry with me because what i did i want to cheer her up but i don't know, her response is hard for me to make hem smile now, she is in a bad mood right now, i'm scared lose it 
            <br />
            <br />
            What should I do to make she smile?
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Comfort her
            </li>
            <li className="about-activity">
              <ImPointRight /> Give a small surprise
            </li>
            <li className="about-activity">
              <ImPointRight /> Sorry, and I don't know what else to do
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
