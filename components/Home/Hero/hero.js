import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"

import "../Hero/hero.scss"

const Hero = ({ title, titleTwo, subTitle }) => {
  return (
    <>
      <section className="hero">
        <Container>
          <Row className="align-items-center">
            <Col lg="7">
              <h1>{title}</h1>
              <h2>{titleTwo}</h2>
              <p>{subTitle}</p>
              <Link to="/get-started/">
                <button>Get Started</button>
              </Link>
            </Col>
            <Col lg="5">&nbsp;</Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
