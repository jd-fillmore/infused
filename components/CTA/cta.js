import React from "react"
import { Container, Row, Col } from "reactstrap"
import Card from "../Card/card"

import "../CTA/cta.scss"

const CTA = () => {
  return (
    <>
      <section className="cta">
        <Container>
          <Row>
            <Col lg="4">
              <div className="heading">
                <p>Standard</p>
              </div>
              <Card>
                <p>5 Pages</p>
                <h2 className="price">$170/mo</h2>
                <p className="small">For 1 year</p>
                <ul>
                  <li>Hosting included</li>
                  <li>Optimized for Google</li>
                  <li>Secure</li>
                  <li>Fast, Performant</li>
                </ul>
              </Card>
            </Col>
            <Col lg="4">
              <div className="heading">
                <p>Standard</p>
              </div>
              <Card>
                <p>5 Pages</p>
                <h2 className="price">$170/mo</h2>
                <p className="small">For 1 year</p>
                <ul>
                  <li>Hosting included</li>
                  <li>Optimized for Google</li>
                  <li>Secure</li>
                  <li>Fast, Performant</li>
                </ul>
              </Card>
            </Col>
            <Col lg="4">
              <div className="heading">
                <p>Standard</p>
              </div>
              <Card>
                <p>5 Pages</p>
                <h2 className="price">$170/mo</h2>
                <p className="small">For 1 year</p>
                <ul>
                  <li>Hosting included</li>
                  <li>Optimized for Google</li>
                  <li>Secure</li>
                  <li>Fast, Performant</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default CTA
