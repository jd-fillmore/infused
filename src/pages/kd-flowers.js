import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "reactstrap"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import Featured from "../../components/Home/Featured/featured"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import featuredImg from "../img/niagara-web-design.png"

import "../pages/work-specific.scss"

const KDFlowers = () => {
  return (
    <>
      <Helmet>
        <title>KD Flowers - Infused</title>
        <meta
          name="description"
          content="Check out how Infused help KD Flowers with a new website, and bring in more local clients through Google than she ever had before."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="KD Flowers"
        description="How we helped a local floral business skyrocket their revenue"
      />
      <InnerContent>
        <section className="work-specific">
          <Container>
            <Row>
              <Col lg="12">
                <h2>Challenge</h2>
                <p>
                  KD Flowers came to us seeking our expertise for two main
                  reason. They wanted a modern website to professionally reflect
                  their brand, and they wanted local customers that were
                  interested in wedding flowers and bridal boutiques, to find
                  them in Google when they searched for those specific terms.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <h2>Solution</h2>
                <p>
                  We sat down with KD Flowers and discussed her business vision,
                  goals, design, among other items regarding her new online
                  presence. They wanted a website that was not only modern, but
                  brought in new local customers.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <h2>Result</h2>
                <p>
                  We designed, built and launched KD Flowers' new modern
                  website. We also helped them with ranking locally for keywords
                  in their area, that people Google for. The numbers speak for
                  themselves.
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

export default KDFlowers
