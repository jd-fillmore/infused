import React from "react"
import { Container, Row, Col } from "reactstrap"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import checkImg from "../img/check.png"
import searchImg from "../img/google.png"
import userImg from "../img/user.png"
import digImg from "../img/digital-strategy.svg"

import "../pages/digital-strategy.scss"

const DigitalStrategy = () => {
  return (
    <>
      <Nav />
      <InnerHero
        title="Digital Marketing Strategy Consulting"
        description="We help with identifying your digital goals, target audience & brand positioning."
      />
      <InnerContent>
        <section className="strategy">
          <Container className="intro">
            <Row className="text-center">
              <Col lg="4">
                <img
                  className="img-width"
                  src={searchImg}
                  alt="Identify your digital business goals"
                />
                <p>Identify your business goals</p>
              </Col>
              <Col lg="4">
                <img
                  className="img-width"
                  src={userImg}
                  alt="Identify your target audience"
                />
                <p>Identify your target audience</p>
              </Col>
              <Col lg="4">
                <img
                  className="img-width"
                  src={checkImg}
                  alt="more traffic and sales"
                />
                <p>Position for success</p>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="pad align-items-center">
              <Col lg="5">
                <img
                  className="img-fluid"
                  src={digImg}
                  alt="digital strategy"
                />
              </Col>
              <Col lg="7">
                <p>
                  Having a digital marketing strategy is crucial if you're a new
                  or existing business. It separates the businesses that will
                  fail, from the ones that will succeed online.
                </p>
                <p>
                  Our experts will help you navigate the world of online, to
                  help create a modern and bespoke digital marketing strategy
                  for your company to move forward with.
                </p>
                <p>
                  Identifying your business goals, your target audience and much
                  more - we will help you by providing a custom roadmap to
                  follow that will help aide in your success online.
                </p>
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

export default DigitalStrategy
