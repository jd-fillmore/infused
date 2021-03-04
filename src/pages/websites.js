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
import featuredImg from "../img/niagara-web-design.png"
import Featured from "../../components/Home/Featured/featured"
import WebsiteFAQ from "./../../components/websiteFAQ/websiteFAQ"

import "../pages/websites.scss"

const Websites = () => {
  return (
    <>
      <Helmet>
        <title>Website Design - Infused</title>
        <meta
          name="description"
          content="We build lightning fast, modern websites."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Website Design"
        description={[
          "We build lightning fast, ",
          <span>modern</span>,
          " websites.",
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
        </section>
      </InnerContent>
      <Featured
        title="Our Websites Help Bring In Revenue"
        subTitle={[
          "Take a look and see the ",
          <span>huge difference</span>,
          "we've made to KD Flower's online existence.",
        ]}
        viewsValue="10,700"
        viewsText="website views per month"
        leadsValue="20,000%"
        leadsText="increase in new leads in first 6 months"
        peopleValue="5,800"
        peopleText="people discovering website per month"
        img={featuredImg}
        imgAlt="niagara web design, seo provider st catharines, digital agency"
        testimonial={[
          "Infused created the ",
          <span>perfect website</span>,
          "for my floral business. I was very happy with their ",
          <span>professional work ethic</span>,
          "and ",
          <span>great communication!</span>,
        ]}
        btnText="View More Case Studies"
        btnLink="/work"
      />
      <a name="pricing"></a>
      {/* Pricing */}
      <section className="pricing">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h3>Our Website Design Pricing</h3>
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
                  We will build a custom website design based on your website
                  samples provided.
                </p>
                <p>
                  <strong>Website Package Details</strong>
                </p>
                <ul>
                  <li>Custom Design</li>
                  <li>Free Hosting</li>
                  <li>Discovery Call</li>
                  <li>Mobile Responsive</li>
                  <li>Social Media Integration</li>
                  <li>SSL Certificate</li>
                </ul>
                <Row className="align-items-center">
                  <Col lg="4">
                    <p className="price">
                      <strong>$1,000</strong>
                    </p>
                  </Col>
                  <Col lg="8">
                    <p className="extra">Additional Pages Extra</p>
                    <p>
                      <strong>3 Page Site $1,600</strong>
                    </p>
                    <p className="small">($200 per additional page)</p>
                    <p>
                      <strong>5 Page Site $2,000</strong>
                    </p>
                    <p className="small">($200 per additional page)</p>
                    <p>
                      <strong>10 Page Site $3,000</strong>
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
                  Everything from Silver + built on a CMS (you can edit your own
                  website) &amp; more.
                </p>
                <p>
                  <strong>Website Package Details</strong>
                </p>
                <ul>
                  <li>Custom Design</li>
                  <li>Free Hosting</li>
                  <li>Discovery Call</li>
                  <li>Mobile Responsive</li>
                  <li>Social Media Integration</li>
                  <li>SSL Certificate</li>
                  <li>CMS (can edit your website)</li>
                  <li>Google Maps</li>
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
                      <strong>$2,500</strong>
                    </p>
                  </Col>
                  <Col lg="8">
                    <p className="extra">Additional Pages Extra</p>
                    <p>
                      <strong>3 Page Site $3,100</strong>
                    </p>
                    <p className="small">($200 per additional page)</p>
                    <p>
                      <strong>5 Page Site $3,500</strong>
                    </p>
                    <p className="small">($200 per additional page)</p>
                    <p>
                      <strong>10 Page Site $4,500</strong>
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
                  Web applications that are anything outside the scope of a
                  marketing website.
                </p>
                <p>
                  <strong>Web Application Package Details</strong>
                </p>
                <ul>
                  <li>Custom Design</li>
                  <li>Discovery Call</li>
                  <li>Mobile Responsive</li>
                  <li>CRUD Functionality (Create, Read, Update, Delete)</li>
                  <li>Database Programming</li>
                  <li>Internal Systems</li>
                  <li>Dynamic Web Applications</li>
                  <li>Software Development</li>
                  <li>2 Rounds of Revisions</li>
                </ul>
                <Row className="align-items-center">
                  <Col lg="12">
                    <p className="price">
                      <strong>$10,000+</strong>
                      <p className="extra">Quoting charged hourly</p>
                    </p>
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
        <WebsiteFAQ />
      </section>
      <CTA />
      <Footer />
    </>
  )
}

export default Websites
