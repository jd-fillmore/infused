import React from "react"
import { Container, Row, Col } from "reactstrap"
import Form from "../../Form/form"
import Fade from "react-reveal/Fade"

import "../Hero/hero.scss"

const Hero = ({ titleTwo, subTitle }) => {
  return (
    <>
      <section className="hero">
        <Container>
          <div className="bg">
            <Fade>
              <Row className="d-flex align-items-center">
                <Col lg="6">
                  <p className="intro">We're Infused Agency</p>
                  <h1>{titleTwo}</h1>
                  <p>{subTitle}</p>
                  <p className="results">Latest Client Results:</p>
                  <div className="card" id="card-result">
                    <ul>
                      <li>
                        20,000% increase in new leads in the first 6 months
                      </li>
                      <li>10,700 website views per month</li>
                      <li>5,800 new people discovering website per month</li>
                    </ul>
                  </div>
                </Col>
                <Col lg="6">
                  <h4 className="consult">Free Quote</h4>
                  <Form />
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
