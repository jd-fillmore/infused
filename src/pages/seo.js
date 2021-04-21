import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "reactstrap"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import increaseImg from "../img/increase.png"
import searchImg from "../img/google.png"
import mapImg from "../img/map.png"
import featuredImg from "../img/featured-seo.png"
import Featured from "../../components/Home/Featured/featured"
import SEOFAQ from "../../components/seoFAQ/seoFAQ"

import "../pages/seo.scss"

const LocalSEO = () => {
  return (
    <>
      <Helmet>
        <title>SEO - Infused</title>
        <meta
          name="description"
          content="Check out how Infused offers and utilizes their SEO expertise to help local businesses get more customers through Google."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="SEO (Search Engine Optimization)"
        description="We help businesses rank in the place where their customers are looking - on the first page of Google."
      />
      <InnerContent>
        <section className="websites">
          <Container className="intro">
            <Row className="text-center">
              <Col lg="4">
                <img
                  className="img-width"
                  src={searchImg}
                  alt="rank high in google"
                />
                <p>Show up in Google Search</p>
              </Col>
              <Col lg="4">
                <img className="img-width" src={mapImg} alt="google maps" />
                <p>Show up in Google Maps</p>
              </Col>
              <Col lg="4">
                <img
                  className="img-width"
                  src={increaseImg}
                  alt="more traffic and sales"
                />
                <p>More traffic &amp; sales</p>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <Featured
        title="Our SEO Strategies Help Bring In Sales"
        subTitle={[
          "Take a look and see the ",
          <span>huge difference</span>,
          "we've made to Cass-A-Bella's online existence.",
        ]}
        viewsValue="12,000"
        viewsText="photo views per month"
        leadsValue="13,000%"
        leadsText="increase in new leads in first 6 months"
        peopleValue="2,500"
        peopleText="people discovering website per month"
        img={featuredImg}
        imgAlt="local seo featured client"
        testimonial="Great Job, WELL DONE. I'm very pleased with the service and
        the design of my new web site. If you ever need a new web site or SEO
        I do recommend Infused Agency for their services. Keep up
        the great work. Thank you."
        btnText="View More Case Studies"
        btnLink="/work"
      />
      <a id="pricing"></a>
      {/* Pricing */}
      <section className="pricing">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h3>Our SEO Pricing</h3>
            </Col>
          </Row>
          {/* Jumpstart */}
          <div className="price-card jump">
            <Row>
              <Col lg="12">
                <h3>SEO Jump-Start</h3>
                <p>
                  Perfect for companies with an existing website that have had
                  zero SEO optimization done to it. This Jump-Start package will
                  lay the foundation in the pursuit of gathering new leads and
                  generating revenue.
                </p>
                <p>
                  <strong>Campaign Setup &amp; Optimization</strong>
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <ul>
                  <li>Create Meta Titles and Descriptions</li>
                  <li>Keyword Research</li>
                  <li>Install Google Analytics</li>
                  <li>Setup Google Search Console</li>
                </ul>
              </Col>
              <Col lg="4">
                <ul>
                  <li>Add Alt Tags</li>
                  <li>Add / Optimize Google My Business Listing</li>
                  <li>Add Business to 3 Local Directories</li>
                </ul>
              </Col>
              <Col lg="4">
                <p className="price">
                  <strong>$1000</strong>
                </p>
                <p className="extra">
                  One-time fee. Prices based on a 5 page website. Additional
                  pages are $200 each.
                </p>
              </Col>
            </Row>
          </div>
          <Row>
            {/* Silver */}
            <Col lg="4">
              <div className="price-card">
                <h3>Silver</h3>
                <p>
                  We will create and execute a monthly SEO strategy for you.
                </p>
                <p>
                  <strong>Campaign Setup &amp; Optimization</strong>
                </p>
                <ul>
                  <li>Keyword Research, Assess, Strategize</li>
                  <li>Initial Website Audit</li>
                  <li>Ongoing Technical Audit</li>
                  <li>Enhance Meta Titles</li>
                  <li>Enhance Meta Descriptions</li>
                  <li>Create XML Sitemap</li>
                  <li>Link Building</li>
                  <li>Monthly Reporting</li>
                </ul>
                <Row className="align-items-center">
                  <Col lg="12">
                    <p className="price">
                      <strong>$500 / month</strong>
                      <p className="p-month">(for 6 months)</p>
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            {/* Gold */}
            <Col lg="4">
              <div className="price-card">
                <h3>Gold</h3>
                <p>
                  Everything from Silver + Citation Building, Blog Posts &amp;
                  More.
                </p>
                <p>
                  <strong>Campaign Setup &amp; Optimization</strong>
                </p>
                <ul>
                  <li>Keyword Research, Assess, Strategize</li>
                  <li>Initial Website Audit</li>
                  <li>Ongoing Technical Audit</li>
                  <li>Enhance Meta Titles</li>
                  <li>Enhance Meta Descriptions</li>
                  <li>Create XML Sitemap</li>
                  <li>Link Building</li>
                  <li>Citation Building</li>
                  <li>Add Schema</li>
                  <li>Optimize Current Content</li>
                  <li>1 SEO Blog Post / Month</li>
                  <li>3 SEO Geo Pages (one time)</li>
                  <li>Monthly Reporting</li>
                </ul>
                <Row className="align-items-center">
                  <Col lg="12">
                    <p className="price">
                      <strong>$1,500 / month</strong>
                      <p className="p-month">(for 6 months)</p>
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            {/* Platinum */}
            <Col lg="4">
              <div className="price-card">
                <h3>Platinum</h3>
                <p>
                  Everything from Gold + Further Citation Building, Blog Posts
                  &amp; More.
                </p>
                <p>
                  <strong>Campaign Setup &amp; Optimization</strong>
                </p>
                <ul>
                  <li>Keyword Research, Assess, Strategize</li>
                  <li>Initial Website Audit</li>
                  <li>Ongoing Technical Audit</li>
                  <li>Enhance Meta Titles</li>
                  <li>Enhance Meta Descriptions</li>
                  <li>Create XML Sitemap</li>
                  <li>Link Building</li>
                  <li>Citation Building</li>
                  <li>Add Schema</li>
                  <li>Optimize Current Content</li>
                  <li>2 SEO Blog Posts / Month</li>
                  <li>6 SEO Geo Pages (one time)</li>
                  <li>Monthly Reporting</li>
                </ul>
                <Row className="align-items-center">
                  <Col lg="12">
                    <p className="price">
                      <strong>$2,500 / month</strong>
                      <p className="p-month">(for 6 months)</p>
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
      <section className="seo-faq">
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
          <SEOFAQ />
        </Container>
      </section>
      <CTA />
      <Footer />
    </>
  )
}

export default LocalSEO
