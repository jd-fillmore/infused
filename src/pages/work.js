import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "reactstrap"
import Link from "next/link"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import Card from "../../components/Card/card"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import treeImg from "../img/tree-reports.png"
import kdImg from "../img/niagara-web-design.png"
import cassImg from "../img/featured-seo.png"
import bgImage from "../img/inner-work.jpg"

import PortfolioSlider from "../../components/PortfolioSlider/portfolioSlider"

const OurWork = () => {
  return (
    <>
      <Helmet>
        <title>Our Work - Infused</title>
        <meta
          name="description"
          content="We're passionate about putting in the work to deliver to our client's needs. Check out the results we've got for our clients"
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Our Work"
        description="Our work is our passion. See what we've created for our clients."
        bgImage={bgImage}
      />
      <InnerContent>
        <section className="work">
          <Container>
            <Row>
              <Col lg="12 text-center pd-btm-80">
                <h3>Featured Case Studies</h3>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col lg="4">
                <Card>
                  <img className="img-fluid" src={treeImg} alt="treereports" />
                  <h3>TreeReports</h3>
                  <p>
                    A local certified consulting arborist specializing in
                    reports, planning and consulting.
                  </p>
                  <Link href="/tree-reports">
                    Discover
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                    </svg>
                  </Link>
                </Card>
              </Col>
              <Col lg="4">
                <Card>
                  <img className="img-fluid" src={kdImg} alt="KD Flowers" />
                  <h3>KD Flowers</h3>
                  <p>
                    A boutique affordable wedding flower business in the heart
                    of St. Catharines.
                  </p>
                  <Link href="/kd-florist">
                    Discover
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                    </svg>
                  </Link>
                </Card>
              </Col>
              <Col lg="4">
                <Card>
                  <img
                    className="img-fluid"
                    src={cassImg}
                    alt="Cass-A-Bella Construction"
                  />
                  <h3>Cass-A-Bella Construction</h3>
                  <p>
                    A contracting company focused on custom home building and
                    renovation in Toronto.
                  </p>
                  <Link href="/cass-a-bella-construction">
                    Discover
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                    </svg>
                  </Link>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col lg="12 text-center pd-top-80 pd-btm-80">
                <h3>Other Work</h3>
              </Col>
            </Row>
          </Container>
          <PortfolioSlider />
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  )
}

export default OurWork
