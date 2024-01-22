import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Link from "next/link"
import Image from "next/image"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import about from "../img/about.jpeg"

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Infused</title>
        <meta
          name="description"
          content="Check out the premium pricing for Infused Ageny's web design, SEO and digital marketing services."
        />
      </Helmet>
      <Nav />
      <InnerHero title="Pricing" description="Our Website & SEO Pricing" />
      <InnerContent>
        <section className="pricing">
          <Container>
            <Row>
              <Col lg="12">
                <p>
                  Our pricing is based on the <strong>value and results</strong>{" "}
                  we continue give our clients over the past 10+ years. If your
                  company needs oustanding web design or SEO services, you've
                  come to the right place.
                  <br />
                  <br />
                  <strong>All prices are tax included.</strong> These packages
                  are not set in stone - they serve as a general guideline to
                  give a rough idea on investments. To book your free
                  consultation to talk about your project, please visit our{" "}
                  <a
                    href="https://calendly.com/infused-agency/project-discovery/"
                    target="_blank"
                  >
                    Calendly link
                  </a>{" "}
                  and fill out the form to book a free consult.
                </p>
              </Col>
            </Row>
            {/* Websites */}
            <Row>
              <Col lg="12">
                <h2>Websites</h2>
              </Col>
            </Row>
            <Row className="pd-top-40">
              <Col lg="4">
                <div className="card text-center">
                  <div className="top">
                    <h4>Starter Website</h4>
                    <h3>
                      <sup>$</sup>3,500
                    </h3>
                  </div>
                  <div className="bg">
                    <ul>
                      <li>
                        <strong>5 pages</strong>
                      </li>
                      <li>
                        <strong>1 round of revisions</strong>
                      </li>
                      <li>Hosting included</li>
                      <li>SSL Certificate included</li>
                      <li>Mobile-Friendly</li>
                      <li>Google Sitemap</li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <div className="card text-center">
                  <div className="popular">
                    <h3>Most Popular</h3>
                  </div>
                  <div className="top">
                    <h4>Modern Website</h4>
                    <h3>
                      <sup>$</sup>4,500
                    </h3>
                  </div>
                  <div className="bg">
                    <ul>
                      <li>
                        <strong>15 pages</strong>
                      </li>
                      <li>
                        <strong>2 rounds of revisions</strong>
                      </li>
                      <li>Hosting included</li>
                      <li>SSL Certificate included</li>
                      <li>Mobile-Friendly</li>
                      <li>Google Sitemap</li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <div className="card text-center">
                  <div className="top">
                    <h4>Enterprise Website</h4>
                    <h3>
                      <sup>$</sup>5,000+
                    </h3>
                  </div>
                  <div className="bg">
                    <ul>
                      <li>
                        <strong>20+ pages</strong>
                      </li>
                      <li>
                        <strong>2 rounds of revisions</strong>
                      </li>
                      <li>
                        <strong>Extended programming functionality</strong>
                      </li>
                      <li>Hosting included</li>
                      <li>SSL Certificate included</li>
                      <li>Mobile-Friendly</li>
                      <li>Google Sitemap</li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
            {/* SEO*/}
            <Row>
              <Col lg="12">
                <h2>Search Engine Optimization</h2>
              </Col>
            </Row>
            <Row className="pd-top-40">
              <Col lg="4">
                <div className="card text-center">
                  <div className="top">
                    <h4>Starter SEO</h4>
                    <h3>
                      <sup>$</sup>1,000
                    </h3>
                    per month for 1 month
                  </div>
                  <div className="bg">
                    <ul>
                      <li>Optimize Google My Business Listing</li>
                      <li>Optimize website home page</li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <div className="card text-center">
                  <div className="popular">
                    <h3>Most Popular</h3>
                  </div>
                  <div className="top">
                    <h4>Boosted SEO</h4>
                    <h3>
                      <sup>$</sup>1,000
                    </h3>
                    per month for 3 months
                  </div>
                  <div className="bg">
                    <ul>
                      <li>
                        <strong>Backlink building</strong>
                      </li>
                      <li>
                        <strong>Custom SEO strategy</strong>
                      </li>
                      <li>
                        <strong>Keyword research</strong>
                      </li>
                      <li>
                        <strong>On-page SEO</strong>
                      </li>
                      <li>
                        <strong>Campaign reporting</strong>
                      </li>
                      <li>Optimize Google My Business Listing</li>
                      <li>Optimize website home page</li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <div className="card text-center">
                  <div className="top">
                    <h4>Enterprise SEO</h4>
                    <h3>
                      <sup>$</sup>1,000
                    </h3>
                    per month for 6 months
                  </div>
                  <div className="bg">
                    <ul>
                      <li>Backlink building</li>
                      <li>Custom SEO strategy</li>
                      <li>Keyword research</li>
                      <li>On-page SEO</li>
                      <li>Optimize Google My Business Listing</li>
                      <li>Optimize website home page</li>
                      <li>Campaign reporting</li>
                    </ul>
                  </div>
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

export default Pricing
