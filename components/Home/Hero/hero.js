import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Button from "../../Button/button"

import "../Hero/hero.scss"

const Hero = ({ seoTitle, title, subTitle, btnText, btnLink }) => {
  return (
    <>
      <section className="hero text-center">
        <Container>
          <Row>
            <Col lg="12">
              <div className="glow">
                <h1>{seoTitle}</h1>
                <h2>{title}</h2>
                <p>{subTitle}</p>
                <Link to={btnLink}>
                  <Button>{btnText}</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
