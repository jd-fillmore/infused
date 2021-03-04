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
            <Row>
              <Col lg="12" className="d-flex justify-content-center">
                <p id="view">
                  <a href="#pricing">View Pricing</a> |{" "}
                  <a href="#faq">View FAQ</a>
                </p>
              </Col>
            </Row>
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

      <a name="pricing"></a>
      {/* Pricing */}
      <section className="pricing">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h3>Our E-Commerce Website Pricing</h3>
              <p>
                We're flexible. If your budget is restrictive, smaller monthly
                payments can be arranged versus flat fee.
              </p>
            </Col>
          </Row>
          <Row>
            {/* Silver */}
            <Col lg="4">
              <div className="price-card">
                <h3>Silver</h3>
                <p>
                  We will build a customized templated e-commerce design based
                  on templates provided.
                </p>
                <p>
                  <strong>E-Commerce Package Details</strong>
                </p>
                <ul>
                  <li>Templated Design</li>
                  <li>10 Products</li>
                  <li>WordPress (WooCommerce)</li>
                  <li>Discovery Call</li>
                  <li>Mobile Responsive</li>
                  <li>Social Media Integration</li>
                  <li>2 Rounds of Revisions</li>
                </ul>
                <Row className="align-items-center">
                  <Col lg="4">
                    <p className="price">
                      <strong>$2,000</strong>
                    </p>
                  </Col>
                  <Col lg="8">
                    <p className="extra">Additional Pages Extra</p>
                    <p>
                      <strong>3 Page Site $2,600</strong>
                    </p>
                    <p className="small">($200 per additional page)</p>
                    <p>
                      <strong>5 Page Site $3,000</strong>
                    </p>
                    <p className="small">($200 per additional page)</p>
                    <p>
                      <strong>10 Page Site $4,000</strong>
                    </p>
                    <p className="small">($200 per additional page)</p>
                  </Col>
                </Row>
              </div>
            </Col>
            {/* Gold */}
            <Col lg="4">
              <div className="price-card">
                <h3>Gold</h3>
                <p>
                  Everything from Silver + Google Analytics, Submitting to
                  Google, more products &amp; more.
                </p>
                <p>
                  <strong>E-Commerce Package Details</strong>
                </p>
                <ul>
                  <li>Templated Design</li>
                  <li>15 Products</li>
                  <li>WordPress (WooCommerce)</li>
                  <li>Discovery Call</li>
                  <li>Mobile Responsive</li>
                  <li>Social Media Integration</li>
                  <li>Contact Form</li>
                  <li>Google Analytics</li>
                  <li>Google Indexing</li>
                  <li>XML Sitemap</li>
                  <li>SEO Meta Titles &amp; Descriptions</li>
                  <li>2 Rounds of Revisions</li>
                </ul>
                <Row className="align-items-center">
                  <Col lg="4">
                    <p className="price">
                      <strong>$3,500</strong>
                    </p>
                  </Col>
                  <Col lg="8">
                    <p className="extra">Additional Pages Extra</p>
                    <p>
                      <strong>3 Page Site $4,100</strong>
                    </p>
                    <p className="small">($200 per additional page)</p>
                    <p>
                      <strong>5 Page Site $4,500</strong>
                    </p>
                    <p className="small">($200 per additional page)</p>
                    <p>
                      <strong>10 Page Site $5,500</strong>
                    </p>
                    <p className="small">($200 per additional page)</p>
                  </Col>
                </Row>
              </div>
            </Col>
            {/* Platinum */}
            <Col lg="4">
              <div className="price-card">
                <h3>Platinum</h3>
                <p>
                  Everything from Gold + Customized Design, Customized Checkout
                  &amp; more.
                </p>
                <p>
                  <strong>E-Commerce Package Details</strong>
                </p>
                <ul>
                  <li>Custom Design</li>
                  <li>25 Products</li>
                  <li>Customized Checkout</li>
                  <li>Customized Shop</li>
                  <li>Customized Cart</li>
                  <li>WordPress (WooCommerce)</li>
                  <li>Discovery Call</li>
                  <li>Mobile Responsive</li>
                  <li>Social Media Integration</li>
                  <li>Contact Form</li>
                  <li>Google Analytics</li>
                  <li>Google Indexing</li>
                  <li>XML Sitemap</li>
                  <li>SEO Meta Titles &amp; Descriptions</li>
                  <li>2 Rounds of Revisions</li>
                </ul>
                <Row className="align-items-center">
                  <Col lg="4">
                    <p className="price">
                      <strong>$9,000</strong>
                    </p>
                  </Col>
                  <Col lg="8">
                    <p className="extra">Additional Pages Extra</p>
                    <p>
                      <strong>3 Page Site $9,600</strong>
                    </p>
                    <p className="small">($200 per additional page)</p>
                    <p>
                      <strong>5 Page Site $10,000</strong>
                    </p>
                    <p className="small">($200 per additional page)</p>
                    <p>
                      <strong>10 Page Site $11,000</strong>
                    </p>
                    <p className="small">($200 per additional page)</p>
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
