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
              <Slider
                testimOne="Great Job, WELL DONE. I'm very please with the service and
        the design of my new web site. If you ever need a new web site
        I do recommend Infused Agency for their services. JD keep up
        the great work. Thank you."
                testimOneAuthor="Mr. Duarte, Cass-A-Bella Construction"
                testimTwo="Amazing experience, really helped to elevate my business and
        I would highly recommend working with them for all of your
        website, design, and SEO needs!!"
                testimTwoAuthor="Lauren Emberson, Lauren Emberson Photography"
                testimThree="JD did an amazing job creating a seamless website for my
        aesthetics clinic. He thoroughly went through each aspect of
        the web design and was extremely easy to talk to about small
        tweaks and changes I wanted to see. I would highly recommend
        his services to anyone looking for web design and SEO
        optimization."
                testimThreeAuthor="Melissa Cundell, MC Aesthetics"
                testimFour="I have been working with JD on my new website and the process
        has been great! He is easy to work with, and has a good
        understanding of my vision and what I need from a website. I
        have worked with other web design agencies in the past and I
        would recommend JD first!"
                testimFourAuthor="Jasmine Morvay, KC Interiors"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Clients
