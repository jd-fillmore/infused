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
              <p>
                Get in touch with us for a free quote regarding your Niagara web
                design or SEO project today.
              </p>
              <Link to="/get-started">
                <Button>Get Started</Button>
              </Link>
            </Col>
            <Col lg="7">
              <img
                width="635"
                height="335"
                className="img-fluid"
                src={ctaSVG}
                alt="book a project"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
