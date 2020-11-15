import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Button from "../Button/button"

import "../CTA/cta.scss"

const Hero = () => {
  return (
    <>
      <section className="cta">
        <Container>
          <Row>
            <Col lg="12">
              <h2>
                Ready to <span>start</span> your project?
              </h2>
              <p>Get in touch with us with our east to answer online form.</p>
              <Link to="/get-estimate">
                <Button>Get An Estimate</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
