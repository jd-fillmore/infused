import React from "react"
import { Container, Row, Col } from "reactstrap"
import Form from "../../Form/form"

import "../Hero/hero.scss"

const Hero = ({ seoTitle, title, subTitle, btnText, btnLink }) => {
  return (
    <>
      <section className="hero">
        <Container>
          <Row className="align-items-center">
            <Col lg="7">
              <div className="glow">
                <h1>{seoTitle}</h1>
                <h2>{title}</h2>
                <p>{subTitle}</p>
              </div>
            </Col>
            <Col lg="5" className="card">
              <p>
                Get in touch with us for a <strong>free quote</strong> regarding
                your web design, SEO or digital marketing project.
              </p>
              <Form />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
