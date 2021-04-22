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
      {/* Pricing */}
      <a id="pricing"></a>
      <section className="pricing">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h3>Our E-Commerce Pricing</h3>
            </Col>
          </Row>
          <Row>
            {/* Silver */}
            <Col lg="4">
              <div className="price-card">
                <h3>Silver</h3>
                <p>
                  We will build a template WordPress website based on your
                  website samples provided.
                </p>
                <p>
                  <strong>E-Commerce Details</strong>
                </p>
                <ul>
                  <li>WordPress Template</li>
                  <li>Up to 10 Products Added</li>
                  <li>WooCommerce</li>
                  <li>Discovery Call</li>
                  <li>Mobile Responsive</li>
                  <li>Social Media Integration</li>
                  <li>SSL Certificate</li>
                  <li>Customization of Theme</li>
                  <li>Google Map Integration</li>
                  <li>Contact Form</li>
                  <li>2 Rounds of Revisions</li>
                </ul>
                <Row className="align-items-center">
                  <Col lg="12">
                    <p className="price">
                      <strong>$350 / month</strong>
                    </p>
                    <p>For 1 year</p>
                  </Col>
                </Row>
              </div>
            </Col>
            {/* Gold */}
            <Col lg="4">
              <div className="price-card">
                <h3>Gold</h3>
                <p>Everything from Silver plus 5 additional products added.</p>
                <p>
                  <strong>E-Commerce Details</strong>
                </p>
                <ul>
                  <li>WordPress Template</li>
                  <li>Up to 15 Products Added</li>
                  <li>WooCommerce</li>
                  <li>Discovery Call</li>
                  <li>Mobile Responsive</li>
                  <li>Social Media Integration</li>
                  <li>SSL Certificate</li>
                  <li>Customization of Theme</li>
                  <li>Google Map Integration</li>
                  <li>Contact Form</li>
                  <li>2 Rounds of Revisions</li>
                </ul>
                <Row className="align-items-center">
                  <Col lg="12">
                    <p className="price">
                      <strong>$500 / month</strong>
                    </p>
                    <p>For 1 year</p>
                  </Col>
                </Row>
              </div>
            </Col>
            {/* Platinum */}
            <Col lg="4">
              <div className="price-card">
                <h3>Platinum</h3>
                <p>Everything from Gold plus 10 additional products added.</p>
                <p>
                  <strong>E-Commerce Details</strong>
                </p>
                <ul>
                  <li>WordPress Template</li>
                  <li>Up to 25 Products Added</li>
                  <li>WooCommerce</li>
                  <li>Discovery Call</li>
                  <li>Mobile Responsive</li>
                  <li>Social Media Integration</li>
                  <li>SSL Certificate</li>
                  <li>Customization of Theme</li>
                  <li>Google Map Integration</li>
                  <li>Contact Form</li>
                  <li>2 Rounds of Revisions</li>
                </ul>
                <Row className="align-items-center">
                  <Col lg="12">
                    <p className="price">
                      <strong>$1,000 / month</strong>
                    </p>
                    <p>For 1 year</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
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
