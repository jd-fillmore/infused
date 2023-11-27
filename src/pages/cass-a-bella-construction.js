import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "reactstrap"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import bgImage from "../img/inner-about.jpg"

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
        description="How we helped a local custom home builder increase their leads."
        bgImage={bgImage}
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
                <div className="card">
                  <ul>
                    <li>12,000 photo views per month</li>
                    <li>13,000% increase in new leads in first 6 months</li>
                    <li>2,500 new people discovering website per month</li>
                  </ul>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://cass-a-bellaconstruction.com"
                >
                  Click here to view website
                </a>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  )
}

export default CassABella
