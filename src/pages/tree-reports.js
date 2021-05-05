import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "reactstrap"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import Featured from "../../components/Home/Featured/featured"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import featuredImg from "../img/tree-reports.png"

import "../pages/work-specific.scss"

const KDFlowers = () => {
  return (
    <>
      <Helmet>
        <title>TreeReports - Infused</title>
        <meta
          name="description"
          content="Check out how Infused help Tree Reports with a new website, and bring in more local clients through Google than she ever had before."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="TreeReports"
        description="How we helped a local arborist with their online presence."
      />
      <InnerContent>
        <section className="work-specific">
          <Container>
            <Row>
              <Col lg="12">
                <h2>Challenge</h2>
                <p>
                  TreeReports came to us seeking our expertise for two main
                  reasons. They wanted a modern website to professionally
                  reflect their brand, and they wanted local customers that were
                  interested in an arborist consultant to find them in Google
                  when they searched for specific terms.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <h2>Solution</h2>
                <p>
                  We sat down with TreeReports and discussed her business
                  vision, goals, design, among other items regarding her new
                  online presence. They wanted a website that was not only
                  modern, but brought in new local customers.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <h2>Result</h2>
                <p>
                  We designed, built and launched TreeReports' new modern
                  website. We also helped them with ranking locally for keywords
                  in their area, that people Google for. The numbers speak for
                  themselves.
                </p>
                <div className="card">
                  <ul>
                    <li>385% increase in being found online</li>
                    <li>4,000% increase in new website visits</li>
                    <li>
                      1,500% increase in Google rankings for multiple keywords
                    </li>
                  </ul>
                </div>
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

export default KDFlowers
