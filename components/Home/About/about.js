import React from "react"
import { Container, Row, Col } from "reactstrap"
import Fade from "react-reveal/Fade"

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
                  <h3>{qOne}</h3>
                  <p>{qOneAns}</p>
                  <h3>{qTwo}</h3>
                  <p>{qTwoAns}</p>
                  <h3>{qThree}</h3>
                  <p>{qThreeAns}</p>
                  <h3>{qFour}</h3>
                  <p>{qFourAns}</p>
                  <iframe
                    src={mapURL}
                    title={city}
                    width="100%"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
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
