import React from "react"
import Fade from "react-reveal/Fade"
import { Container, Row, Col } from "reactstrap"

import "../innerHero/inner-hero.scss"

const InnerHero = ({ title, description, bgImage }) => {
  return (
    <>
      <section className="inner-hero">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <Fade>
                <h1>{title}</h1>
                <hr />
                <p>{description}</p>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default InnerHero
