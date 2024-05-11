import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Shivam_Kapahi.webp";
import Tilt from "react-parallax-tilt";

import { FaLinkedinIn, FaMailBulk } from "react-icons/fa";

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
              Understanding your{" "}
              <i>
                <b className="purple"> target audience </b>
              </i>{" "}
              to personalise your content’s
              <i>
                <b className="purple"> voice & tone </b>
              </i>{" "}
              is key to
              <i>
                <b className="purple">exponential growth </b>
              </i>{" "}
              for your business.
              <br />
              <br /> But if you are searching for how to get it done, this is
              where my
              <i>
                <b className="purple"> experience shines. </b>
              </i>{" "}
              <br />
              <br />
              <i>
                <b className="purple">
                  I’m Shivam, your friendly neighborhood content writer who
                  truly believes in the above-mentioned words of former French
                  Emperor “Napoleon Bonaparte.”{" "}
                </b>
              </i>{" "}
              I ensure that your content communicates with your audience and
              drives conversions. It makes your brand voice resonate with your
              audience.
              <br />
              <br /> With a passion for crafting clear and engaging content
              across diverse niches, I possess writing expertise in a range of
              topics. Education, technology, social media trends, travel and the
              ever-evolving business landscape (retail, startups, and beyond!)
              are a few niches that I love to research and write about.
              <br />
              <br /> My writing journey began in a unique way – a blend of
              retail trade and English language training. While dealing with the
              roadblocks of these domains, I realised the importance of
              effective communication and impactful messaging. This transcended
              into my writing, and hence began simplifying complex
              communication.
              <br />
              <br /> I carefully analyse client briefs, leveraging my expertise
              and experience to craft high-quality content. Based on thorough
              research and keyword research, my writing is tailored to clients’
              most valuable projects, be it copywriting, articles, web content,
              SOPs, and fiction pieces.
              <br />
              <br /> If you are ready to elevate your content and spark
              meaningful conversations with your customers, I’d certainly love
              to collaborate with you and create content that delivers real
              value for your business!
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                style={{ width: 300, height: 300 }}
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              Feel free to <span className="purple">connect </span>with me
            </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kshitijarya92/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaMailBulk />
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
