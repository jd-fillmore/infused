import React from "react"
import Fade from "react-reveal/Fade"
import { Container, Row, Col } from "reactstrap"
import Image from "next/image"

import responsive from "../../../src/img/responsive.svg"
import optimize from "../../../src/img/web-optimization.svg"
import secure from "../../../src/img/shield.svg"

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
  whatTitle,
  whatText,
  servicesTitle,
  servicesText,
  whatKindTitle,
  whatKindText,
}) => {
  return (
    <>
      <section className="what-we-do">
        <Container>
          <Row>
            <Col lg="12">
              <Fade>
                <h2>{title}</h2>
                <p className="sub">{subTitle}</p>
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Fade>
                <Image
                  src={responsive}
                  width="100"
                  height="100"
                  className="img-fluid"
                  alt={boxOneImgAlt}
                />
                <h3>{boxOneTitle}</h3>
                <p>{boxOneDesc}</p>
              </Fade>
            </Col>
            <Col lg="4">
              <Fade delay={300}>
                <Image
                  src={optimize}
                  width="100"
                  height="100"
                  className="img-fluid"
                  alt={boxTwoImgAlt}
                />
                <h3>{boxTwoTitle}</h3>
                <p>{boxTwoDesc}</p>
              </Fade>
            </Col>
            <Col lg="4">
              <Fade delay={600}>
                <Image
                  src={secure}
                  width="100"
                  height="100"
                  className="img-fluid"
                  alt={boxThreeImgAlt}
                />
                <h3>{boxThreeTitle}</h3>
                <p>{boxThreeDesc}</p>
              </Fade>
            </Col>
          </Row>
          <Row className="what-makes">
            <Col lg="12">
              <Fade>
                <h2>{whatTitle}</h2>
                <p id="sub">{whatText}</p>
              </Fade>
            </Col>
          </Row>
          <Row className="services">
            <Col lg="12">
              <Fade>
                <h2>{servicesTitle}</h2>
                <p id="sub">{servicesText}</p>
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <Fade>
                <h2>{whatKindTitle}</h2>

                <p id="sub">{whatKindText}</p>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default WhatWeDo
