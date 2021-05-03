import React from "react"
import { Container, Row, Col } from "reactstrap"
import Form from "../Form/form"

import "../CTA/cta.scss"

const CTA = () => {
  return (
    <>
      <section className="cta">
        <Container>
          <Row>
            <Col lg="5">
              <h2>Start Your Project</h2>
              <p>
                Get in touch with us for a free consultation regarding your
                Niagara web design, marketing or SEO project today.
                <br />
                <br />
                You can also email us at{" "}
                <a href="mailto:hello@infused.agency">
                  hello@infused.agency
                </a>{" "}
                to inquire about our services.
              </p>
            </Col>
            <Col lg="7" className="card">
              <Form />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default CTA
