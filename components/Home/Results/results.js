import React from "react"
import Fade from "react-reveal/Fade"
import { Container, Row, Col } from "reactstrap"

import "../Results/results.scss"
import featuredImg from "../../../src/img/kd-home.jpg"
import resultsImg from "../../../src/img/kd-results.jpg"

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
                  className="img-fluid top"
                  src={featuredImg}
                  alt="Niagara Web Design Agency"
                />
              </Fade>
            </Col>
            <Col lg="6">
              <Fade>
                <img
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
