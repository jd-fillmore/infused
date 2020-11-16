import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Button from "../../Button/button"

import "../Featured/featured.scss"

const Featured = ({
  title,
  subTitle,
  viewsValue,
  viewsText,
  leadsValue,
  leadsText,
  peopleValue,
  peopleText,
  img,
  imgAlt,
  testimonial,
  btnText,
  btnLink,
}) => {
  return (
    <>
      <section className="featured text-center">
        <Container>
          <Row>
            <Col lg="12">
              <h2>{title}</h2>
              <p>{subTitle}</p>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <h3>{viewsValue}</h3>
              <p>{viewsText}</p>
            </Col>
            <Col lg="4">
              <h3>{leadsValue}</h3>
              <p>{leadsText}</p>
            </Col>
            <Col lg="4">
              <h3>{peopleValue}</h3>
              <p>{peopleText}</p>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <img className="img-fluid" src={img} alt={imgAlt} />
              <p id="testimonial">{testimonial}</p>
              <Link to={btnLink}>
                <Button>{btnText}</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Featured
