import React from "react"
import { Container, Row, Col } from "reactstrap"
import Fade from "react-reveal/Fade"

import "../About/about.scss"

const About = ({
  city,
  intro,
  area,
  population,
  topSights,
  qOne,
  qOneAns,
  qTwo,
  qTwoAns,
  qThree,
  qThreeAns,
  qFour,
  qFourAns,
  mapURL,
}) => {
  return (
    <>
      <section className="about-city">
        <Container>
          <div className="bg">
            <Fade>
              <Row>
                <Col lg="12">
                  <h2>About {city}</h2>
                  <p>{intro}</p>
                  <ul>
                    <li>
                      <strong>Area:</strong> {area}km²
                    </li>
                    <li>
                      <strong>Population:</strong> {population}
                    </li>
                  </ul>
                  <p>
                    <strong>Top sights in {city}:</strong>
                  </p>
                  <p>{topSights}</p>
                  <h4>{qOne}</h4>
                  <p>{qOneAns}</p>
                  <h4>{qTwo}</h4>
                  <p>{qTwoAns}</p>
                  <h4>{qThree}</h4>
                  <p>{qThreeAns}</p>
                  <h4>{qFour}</h4>
                  <p>{qFourAns}</p>
                  {mapURL}
                </Col>
              </Row>
            </Fade>
          </div>
        </Container>
      </section>
    </>
  )
}

export default About
