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
              <h2>{title}</h2>
              <p>{subTitle}</p>
              <hr />
              <div>
                <TestimonialCard>
                  <p>
                    "Fantastic experience from start to end. JD is organized,
                    thorough and professional. I highly recommend his company
                    and services if you are thinking of building a website."
                  </p>
                  <em>Harry Althorpe, TreeReports</em>
                </TestimonialCard>
                <TestimonialCard>
                  <p>
                    "Great Job, WELL DONE. I'm very pleased with the SEO service
                    and the web design of my new web site. If you ever need a
                    new web design for your Niagara business I do recommend
                    Infused Agency for their services. JD keep up the great
                    work. Thank you."
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
              <div>
                <TestimonialCard>
                  <p>
                    "JD did an amazing job creating a seamless web design for my
                    aesthetics clinic. He thoroughly went through each aspect of
                    the web design and was extremely easy to talk to about small
                    tweaks and changes I wanted to see. I would highly recommend
                    his services to anyone looking for web design and SEO
                    optimization."
                  </p>
                  <em>Melissa Cundell, MC Aesthetics</em>
                </TestimonialCard>
              </div>
              <div>
                <TestimonialCard>
                  <p>
                    "I have been working with JD on my new web design and the
                    process has been great! He is easy to work with, and has a
                    good understanding of my vision and what I need from a web
                    design. I have worked with other web design agencies in the
                    past and I would recommend JD first!"
                  </p>
                  <em>Jasmine Morvay, KC Interiors</em>
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
