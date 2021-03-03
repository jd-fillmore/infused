import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import about1 from "../img/about-1.svg"
import about2 from "../img/about-2.svg"
import about3 from "../img/about-3.svg"
import about4 from "../img/about-4.svg"

import "../pages/about.scss"

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Infused</title>
        <meta
          name="description"
          content="Learn more about the core values, the hardworking team and how we accomplish your business goals at Infused."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="About Us"
        description="We build websites and execute SEO efforts to help you grow your business."
      />
      <InnerContent>
        <section className="about">
          <Container>
            {/* One */}
            <Row>
              <Col lg="7">
                <p>
                  We care about our client's business needs. That's why we do
                  our absolute best to meet them.
                </p>
              </Col>
              <Col lg="5">
                <img className="img-fluid" src={about1} alt="business needs" />
              </Col>
            </Row>
            {/* Two */}
            {/* Desktop */}
            <Row className="hide-mobile">
              <Col lg="5">
                <img className="img-fluid" src={about2} alt="business goals" />
              </Col>
              <Col lg="7">
                <p>
                  We work with businesses to identify their digital business
                  goals, and build around those to meet them.
                </p>
              </Col>
            </Row>
            {/* Mobile */}
            <Row className="hide-desktop">
              <Col lg="7">
                <p>
                  We work with businesses to identify their digital business
                  goals, and build around those to meet them.
                </p>
              </Col>
              <Col lg="5">
                <img
                  className="img-fluid"
                  src={about2}
                  alt="business goals mobile"
                />
              </Col>
            </Row>
            {/* Three */}
            <Row>
              <Col lg="7">
                <p>
                  We design and develop modern websites, local SEO and digital
                  strategies to help bring you more revenue.
                </p>
              </Col>
              <Col lg="5">
                <img className="img-fluid" src={about3} alt="revenue" />
              </Col>
            </Row>
            {/* Four */}
            {/* Desktop */}
            <Row className="hide-mobile">
              <Col lg="5">
                <img className="img-fluid" src={about4} alt="succeed online" />
              </Col>
              <Col lg="7">
                <p>
                  It's our mission to help our clients succeed online. We help
                  them to make a lasting impact in their market place.
                </p>
              </Col>
            </Row>
            {/* Mobile */}
            <Row className="hide-desktop">
              <Col lg="7">
                <p>
                  We make it our mission to empower our clients digital success.
                  We do more than just build our client's website. We help them
                  to make a lasting impact in their market place.
                </p>
              </Col>
              <Col lg="5">
                <img
                  className="img-fluid"
                  src={about4}
                  alt="succeed online mobile"
                />
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  )
}

export default About
