import React from "react"
import { Container, Row, Col } from "reactstrap"
import Fade from "react-reveal/Fade"

const ClientLogos = ({
  title,
  logoOne,
  logoTwo,
  logoThree,
  logoFour,
  logoOneAlt,
  logoTwoAlt,
  logoThreeAlt,
  logoFourAlt,
}) => {
  return (
    <>
      <section className="client-logos">
        <Container>
          <Fade>
            <Row className="text-center">
              <Col lg="12">
                <h2>{title}</h2>
              </Col>
            </Row>
            <Row className="text-center logos align-items-center">
              <Col lg="3">
                <img src={logoOne} alt={logoOneAlt} />
              </Col>
              <Col lg="3">
                <img src={logoTwo} alt={logoTwoAlt} />
              </Col>
              <Col lg="3">
                <img src={logoThree} alt={logoThreeAlt} />
              </Col>
              <Col lg="3">
                <img src={logoFour} alt={logoFourAlt} />
              </Col>
            </Row>
          </Fade>
        </Container>
      </section>
    </>
  )
}

export default ClientLogos
