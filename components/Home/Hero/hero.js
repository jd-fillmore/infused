import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

import "../Hero/hero.scss"

const Hero = ({ titleTwo, subTitle }) => {
  return (
    <>
      <section className="hero">
        <Container>
          <div className="bg">
            <Fade>
              <Row className="text-center">
                <Col lg="12">
                  <h1>{titleTwo}</h1>
                  <p>{subTitle}</p>
                  <Link to="/get-started/">
                    <button>Get A Quote</button>
                  </Link>
                </Col>
              </Row>
            </Fade>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Hero
