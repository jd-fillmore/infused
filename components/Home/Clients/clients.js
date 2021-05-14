import React from "react"
import { Container, Row, Col } from "reactstrap"
import TestimonialCard from "./../../testimonialCard/testimonialCard"

import "../Clients/clients.scss"

const Clients = ({ title, subTitle }) => {
  return (
    <>
      <section className="clients text-center">
        <Container>
          <Row>
            <Col lg="12">
              <h2>
                {title}{" "}
                <span role="img" aria-label="wave">
                  &#9994;
                </span>
              </h2>
              <p>{subTitle}</p>
              <hr />
              <div>
                <TestimonialCard>
                  <p>
                    "Fantastic experience from start to end. JD is organized,
                    thorough and professional. I highly recommend his company if
                    you are thinking of needing his Niagara or St. Catharines
                    web design &amp; SEO services."
                  </p>
                  <em>Harry Althorpe, TreeReports</em>
                </TestimonialCard>
                <TestimonialCard>
                  <p>
                    "Great Job, WELL DONE. I'm very pleased with the SEO service
                    and the web design of my new web site. If you ever need a
                    new web design for your Niagara or St. Catharines business I
                    do recommend Infused Agency for their services. JD keep up
                    the great work. Thank you."
                  </p>
                  <em>Mr. Duarte, Cass-A-Bella Construction</em>
                </TestimonialCard>
              </div>
              <div>
                <TestimonialCard>
                  <p>
                    "Amazing experience, really helped to elevate my business
                    and I would highly recommend working with them for all of
                    your Niagara web design and SEO needs!!"
                  </p>
                  <em>Lauren Emberson, Lauren Emberson Photography</em>
                </TestimonialCard>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Clients
