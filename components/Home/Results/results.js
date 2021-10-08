import React from "react"
import Fade from "react-reveal/Fade"
import { Container, Row, Col } from "reactstrap"

import "../Results/results.scss"
import featuredImg from "../../../src/img/kd-home.webp"
import resultsImg from "../../../src/img/kd-results.webp"

const Results = ({ title, subTitle }) => {
  return (
    <>
      <section className="home-results">
        <Container>
          <Row>
            <Col lg="12">
              <Fade>
                <h2>{title}</h2>
                <p className="sub">{subTitle}</p>
              </Fade>
            </Col>
          </Row>
          <Row className="d-flex align-items-center">
            <Col lg="6">
              <Fade>
                <img
                  width="383"
                  height="636"
                  className="img-fluid top"
                  src={featuredImg}
                  alt="Niagara Web Design Agency"
                />
              </Fade>
            </Col>
            <Col lg="6">
              <Fade>
                <img
                  width="383"
                  height="636"
                  className="img-fluid"
                  src={resultsImg}
                  alt="Niagara Web Design Company"
                />
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Results
