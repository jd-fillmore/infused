import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "reactstrap"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import lightningImg from "../img/lightning.png"
import searchImg from "../img/google.png"
import moneyImg from "../img/money.png"
import EcommFAQ from "./../../components/ecommFAQ/ecommFAQ"

import "../pages/websites.scss"

const Websites = () => {
  return (
    <>
      <Helmet>
        <title>E-Commerce - Infused</title>
        <meta name="description" content="" />
      </Helmet>
      <Nav />
      <InnerHero
        title="E-Commerce Websites"
        description={[
          "We build e-commerce websites that ",
          <span>help boost</span>,
          " your online sales.",
        ]}
      />
      <InnerContent>
        <section className="websites">
          <Container className="intro">
            <Row className="text-center">
              <Col lg="4">
                <img
                  className="img-width"
                  src={lightningImg}
                  alt="fast websites"
                />
                <p>Lightning fast speeds</p>
              </Col>
              <Col lg="4">
                <img
                  className="img-width"
                  src={searchImg}
                  alt="rank high in google"
                />
                <p>Indexed in Google</p>
              </Col>
              <Col lg="4">
                <img
                  className="img-width"
                  src={moneyImg}
                  alt="users into customers"
                />
                <p>Convert users into customers</p>
              </Col>
            </Row>
          </Container>
          <br />
          <br />
          <br />
          <br />
        </section>
      </InnerContent>

      {/* FAQ */}
      <a name="faq"></a>
      <section className="website-faq">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h3>Frequently Asked Questions</h3>
              <p>
                Some of our more frequently asked questions with answers to
                supplement.
              </p>
            </Col>
          </Row>
        </Container>
        <EcommFAQ />
      </section>
      <CTA />
      <Footer />
    </>
  )
}

export default Websites
