import React from "react"
import Fade from "react-reveal/Fade"
import { Container, Row, Col } from "reactstrap"
import Form from "../Form/form"

import "../innerHero/inner-hero.scss"

const InnerHero = ({ title, description }) => {
  return (
    <>
      <section className="inner-hero text-center">
        <Container>
          <Row>
            <Col lg="6">
              <Fade>
                <h1>{title}</h1>
                <hr />
                <p>{description}</p>
              </Fade>
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

export default InnerHero
