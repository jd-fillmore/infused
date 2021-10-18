import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Button from "../Button/button"

import "../CTA/cta.scss"

const CTA = () => {
  return (
    <>
      <section className="cta">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h2>Connect with us &amp; let's start your project.</h2>
              <Link to="/get-started">
                <Button>Get Started</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default CTA
