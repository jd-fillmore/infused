import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "reactstrap"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import Featured from "../../components/Home/Featured/featured"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import featuredImg from "../img/featured-seo.png"

import "../pages/work-specific.scss"

const CassABella = () => {
  return (
    <>
      <Helmet>
        <title>Cass-A-Bella Construction - Infused</title>
        <meta
          name="description"
          content="Check out how Infused help Cass-A-Bella Construction with a new website, and helped their online presence with new views and leads."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Cass-A-Bella Construction"
        description="How we helped a local custome home builder increase their leads"
      />
      <InnerContent>
        <section className="work-specific">
          <Container>
            <Row>
              <Col lg="12">
                <h2>Challenge</h2>
                <p>
                  Fernando of Cass-A-Bella Construction came seeking our
                  expertise initially because his website's design was very out
                  of date. The user navigation on the website wasn't easy to
                  follow, the colours were all over the place and the website's
                  direction was lacking. Fernando then mentioned to us that his
                  SEO needed a lot of work, as he would like some new leads
                  coming in consistently from Google.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <h2>Solution</h2>
                <p>
                  We sat down with Cass-A-Bella Construction and discussed how
                  the websites we build would benefit them. Not only would they
                  have a modern designed website on a modern platform, but the
                  website would rank well in Google. This means they would
                  attract people that are searching for what they offer, and
                  once people found their site, a great impression would be had
                  due to the modern design.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <h2>Result</h2>
                <p>
                  We designed, built and launched Cass-A-Bella Construction's
                  new modern website. We also helped them with ranking locally
                  for keywords in their area, that people Google for. The
                  numbers speak for themselves.
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
      <CTA />
      <Footer />
    </>
  )
}

export default CassABella
