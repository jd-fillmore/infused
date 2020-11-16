import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../innerHero/inner-hero.scss"

const InnerHero = ({ title, description }) => {
  return (
    <>
      <section className="inner-hero">
        <Container>
          <Row>
            <Col lg="12">
              <h1>{title}</h1>
              <hr />
              <p>{description}</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default InnerHero
