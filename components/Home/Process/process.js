import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../Process/process.scss"

const Process = ({
  title,
  subTitle,
  titleOne,
  subTitleOne,
  descOne,
  titleTwo,
  subTitleTwo,
  descTwo,
  titleThree,
  subTitleThree,
  descThree,
  titleFour,
  subTitleFour,
  descFour,
}) => {
  return (
    <>
      <section className="process">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>{title}</h2>
              <p>{subTitle}</p>
              <hr />
            </Col>
          </Row>
          <Row className="d-flex align-items-center">
            <Col lg="7">
              <h3>{titleOne}</h3>
              <p className="subtitle">{subTitleOne}</p>
            </Col>
            <Col lg="5">
              <p>{descOne}</p>
            </Col>
          </Row>
          <Row className="d-flex align-items-center">
            <Col lg="7">
              <h3>{titleTwo}</h3>
              <p className="subtitle">{subTitleTwo}</p>
            </Col>
            <Col lg="5">
              <p>{descTwo}</p>
            </Col>
          </Row>
          <Row className="d-flex align-items-center">
            <Col lg="7">
              <h3>{titleThree}</h3>
              <p className="subtitle">{subTitleThree}</p>
            </Col>
            <Col lg="5">
              <p>{descThree}</p>
            </Col>
          </Row>
          <Row className="d-flex align-items-center">
            <Col lg="7">
              <h3>{titleFour}</h3>
              <p className="subtitle">{subTitleFour}</p>
            </Col>
            <Col lg="5">
              <p>{descFour}</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Process
