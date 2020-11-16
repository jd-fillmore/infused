import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Button from "../Button/button"
import ctaSVG from "../../src/img/cta.svg"

import "../CTA/cta.scss"

const Hero = () => {
  return (
    <>
      <section className="cta">
        <Container>
          <Row>
            <Col lg="5">
              <h2>
                Ready to <span>start</span> your project?
              </h2>
              <p>Get in touch with us with what you'd like to accomplish.</p>
              <Link to="/get-evaluation">
                <Button>Get An Evaluation</Button>
              </Link>
            </Col>
            <Col lg="7">
              <img className="img-fluid" src={ctaSVG} alt="book a project" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
