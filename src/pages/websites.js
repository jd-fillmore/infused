import React from "react"
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

import "../pages/websites.scss"

const Websites = () => {
  return (
    <>
      <Nav />
      <InnerHero
        title="Modern Websites"
        description={[
          "We don't build Wix, Squarespace or WordPress websites. We build lightning fast, ",
          <span>modern</span>,
          " websites.",
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
                <p>Rank high in Google</p>
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
      <CTA />
      <Footer />
    </>
  )
}

export default Websites
