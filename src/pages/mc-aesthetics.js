import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "reactstrap"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import Featured from "../../components/Home/Featured/featured"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import featuredImg from "../img/mc-phone.png"

const MCAesthetics = () => {
  return (
    <>
      <Helmet>
        <title>MC Aesthetics - Infused</title>
        <meta
          name="description"
          content="Check out how Infused helped MC Aesthetics with a new website, and helped their get them new leads in their surrounding local area."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="MC Aesthetics"
        description="How we helped a local aesthetics business increase their leads."
      />
      <InnerContent>
        <section className="work-specific">
          <Container>
            <Row>
              <Col lg="12">
                <h2>Challenge</h2>
                <p>
                  Melissa Cundell from MC Aesthetics approached us through
                  referral. She wanted a website that was response, and that
                  would bring her local inquries around the Ottawa Valley and
                  Pembroke area.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <h2>Solution</h2>
                <p>
                  We talked with Melissa about how she'd like her business to be
                  positioned in terms of digital. We then used our expertise to
                  cultivate those business goals and that vision through her
                  website and her online presence.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <h2>Result</h2>
                <p>
                  After less than a week of launching, MC Aesthetics ranks on
                  the first page of Google in multiple cities. Because of this,
                  she's had an influx in new business.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <Featured
        title="New &amp; Improved"
        subTitle={[
          "Take a look and see the ",
          <span>huge difference</span>,
          "we've made to MC Aesthetic's online existence.",
        ]}
        viewsValue="800%"
        viewsText="increase in phone calls"
        leadsValue="22,000%"
        leadsText="increase in new leads in first 6 months"
        peopleValue="3,800"
        peopleText="people discovering website per month"
        img={featuredImg}
        imgAlt="local seo featured client"
        testimonial="They did an amazing job creating a seamless website for my aesthetics clinic. They thoroughly went through each aspect of the web design and was extremely easy to talk to about small tweaks and changes I wanted to see. I felt like I had complete control over my content and design and would highly recommend their services to anyone looking for web design and SEO optimization."
        btnText="View More Case Studies"
        btnLink="/work"
      />
      <CTA />
      <Footer />
    </>
  )
}

export default MCAesthetics
