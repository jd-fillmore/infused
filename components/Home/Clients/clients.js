import React from "react"
import { Container, Row, Col } from "reactstrap"
import Slider from "./slider/slider"

import "../Clients/clients.scss"

const Clients = ({ title, subTitle }) => {
  return (
    <>
      <section className="clients text-center">
        <Container>
          <Row>
            <Col lg="12">
              <h2>{title}</h2>
              <p>{subTitle}</p>
              <hr />
              <Slider />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Clients
