import React from "react"
import { Container, Row, Col } from "reactstrap"
import Form from "../../Form/form"

import "../Hero/hero.scss"

const Hero = ({ title, subTitle }) => {
  return (
    <>
      <section className="hero">
        <Container>
          <Row className="align-items-center">
            <Col lg="7">
              <h1 className="bg">{title}</h1>
              <p>{subTitle}</p>
            </Col>
            <Col lg="5" className="card">
              <Form />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
