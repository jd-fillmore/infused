import React from "react"
import Fade from "react-reveal/Fade"
import { Container, Row, Col } from "reactstrap"
import Form from "../Form/form"

import "../CTA/cta.scss"

const CTA = () => {
  return (
    <>
      <section className="cta">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg="6">
              <h2>Connect with us today.</h2>
            </Col>
            <Col lg="6">
              <h4 className="consult">Free Consultation</h4>
              <Form />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default CTA
