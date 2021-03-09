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
