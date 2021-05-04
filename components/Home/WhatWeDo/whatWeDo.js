import React from "react"
import { Container, Row, Col } from "reactstrap"

import responsive from "../../../src/img/responsive.svg"
import optimize from "../../../src/img/web-optimization.svg"
import secure from "../../../src/img/shield.svg"

import "../WhatWeDo/what-we-do.scss"

const WhatWeDo = ({
  title,
  subTitle,
  boxOneTitle,
  boxOneDesc,
  boxOneImg,
  boxOneImgAlt,
  boxOneLink,
  boxTwoTitle,
  boxTwoDesc,
  boxTwoImg,
  boxTwoImgAlt,
  boxTwoLink,
  boxThreeTitle,
  boxThreeDesc,
  boxThreeImg,
  boxThreeImgAlt,
  boxThreeLink,
  boxFourTitle,
  boxFourDesc,
  boxFourImg,
  boxFourImgAlt,
  boxFourLink,
}) => {
  return (
    <>
      <section className="what-we-do text-center">
        <Container>
          <Row>
            <Col lg="12">
              <h2>{title}</h2>
              <p id="sub">{subTitle}</p>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <img
                src={responsive}
                width="100"
                height="100"
                className="img-fluid"
                alt={boxOneImgAlt}
              />
              <h3>{boxOneTitle}</h3>
              <p>{boxOneDesc}</p>
            </Col>
            <Col lg="4">
              <img
                src={optimize}
                width="100"
                height="100"
                className="img-fluid"
                alt={boxTwoImgAlt}
              />
              <h3>{boxTwoTitle}</h3>
              <p>{boxTwoDesc}</p>
            </Col>
            <Col lg="4">
              <img
                src={secure}
                width="100"
                height="100"
                className="img-fluid"
                alt={boxThreeImgAlt}
              />
              <h3>{boxThreeTitle}</h3>
              <p>{boxThreeDesc}</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default WhatWeDo
