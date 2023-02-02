import React from "react"
import { Container, Row, Col, Card } from "reactstrap"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import bgImage from "../img/inner-about.jpg"
import web from "../img/responsive.svg"
import wp from "../img/wordpress.png"
import seo from "../../src/img/seoo.svg"
import dm from "../../src/img/dm.svg"
import ecomm from "../../src/img/add-to-cart.png"
import Button from "../../components/Button/button"

import "../pages/pricing.scss"

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>
          Niagara Website, Digital Marketing &amp; SEO Service Pricing
        </title>
        <meta
          name="description"
          content="Infused Agency offers affordable website and SEO pricing whether you're a small or enterprise business. Click here to view pricing."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Website, SEO Service &amp; Digital Marketing Pricing"
        description="Website pricing pages and costs for small to large businessess"
        bgImage={bgImage}
      />
      <InnerContent>
        <section className="pricing">
          <Container>
            <Row>
              <Col lg="12">
                <h2>Our Website &amp; SEO Pricing</h2>
                <p>
                  Our <Link to="/web-design">website design</Link>,{" "}
                  <Link to="/digital-marketing-niagara">digital marketing</Link>
                  ,{" "}
                  <Link to="/seo-niagara">
                    search engine optimization (SEO)
                  </Link>
                  ,{" "}
                  <Link to="/wordpress-developer-niagara">
                    WordPress development
                  </Link>{" "}
                  and{" "}
                  <Link to="/ecommerce-web-design-niagara">
                    e-commerce website development
                  </Link>{" "}
                  pricing will change based on your requirements.
                </p>
                <p>
                  However in order to give you an idea, we've put together some
                  ranges to help you budget for your budget. To receive an exact
                  estimate, please head over to our{" "}
                  <Link to="/get-started">Get Started</Link> page and fill out
                  the form.
                </p>
              </Col>
            </Row>
            <Row className="pd-top-80">
              <Col lg="4">
                <Card>
                  <img src={web} alt="website pricing" />
                  <h3>Custom Website</h3>
                  <em>
                    <p>
                      Starting from <sup>$</sup>2,000
                    </p>
                  </em>
                  <ul>
                    <li>Create a new website from scratch</li>
                    <li>Re-design your current website</li>
                    <li>Tailored design to your audience</li>
                    <li>Responsive mobile-friendly</li>
                  </ul>
                  <Link to="/web-design">
                    <Button>
                      Custom Website
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                      </svg>
                    </Button>
                  </Link>
                </Card>
              </Col>
              <Col lg="4">
                <Card>
                  <img src={wp} alt="wordpress pricing" />
                  <h3>WordPress Website</h3>
                  <em>
                    <p>
                      Starting from <sup>$</sup>3,000
                    </p>
                  </em>
                  <ul>
                    <li>Everything from Custom Website</li>
                    <li>Content management system</li>
                    <li>Can edit your own content</li>
                    <li>Custom - no pre-made template</li>
                  </ul>
                  <Link to="/web-design">
                    <Button>
                      WordPress Website
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                      </svg>
                    </Button>
                  </Link>
                </Card>
              </Col>
              <Col lg="4">
                <Card>
                  <img src={ecomm} alt="e-commerce pricing" />
                  <h3>E-Commerce Website</h3>
                  <em>
                    <p>
                      Starting from <sup>$</sup>4,000
                    </p>
                  </em>
                  <ul>
                    <li>Everything from WordPress Website</li>
                    <li>Content management system</li>
                    <li>Can edit your own content</li>
                    <li>Product management</li>
                  </ul>
                  <Link to="/ecommerce-web-design-niagara">
                    <Button>
                      E-Commerce Website
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                      </svg>
                    </Button>
                  </Link>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <Card>
                  <img src={dm} alt="digital marketing pricing" />
                  <h3>Digital Marketing</h3>
                  <em>
                    <p>
                      Starting from <sup>$</sup>600/mo
                    </p>
                  </em>
                  <ul>
                    <li>Facebook ads creation/mgmt</li>
                    <li>Instagram ads creation/mgmt</li>
                    <li>Tailored marketing to your audience</li>
                    <li>Monthly reports</li>
                  </ul>
                  <Link to="/digital-marketing-niagara">
                    <Button>
                      Digital Marketing{" "}
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                      </svg>
                    </Button>
                  </Link>
                </Card>
              </Col>
              <Col lg="4">
                <Card>
                  <img src={seo} alt="SEO pricing" />
                  <h3>SEO</h3>
                  <em>
                    <p>
                      Starting from <sup>$</sup>600/mo
                    </p>
                  </em>
                  <ul>
                    <li>Keyword Research / Optimization</li>
                    <li>Multiple SEO page creation</li>
                    <li>Creation of local citations</li>
                    <li>Creation of backlinks</li>
                  </ul>
                  <Link to="/seo-niagara">
                    <Button>
                      SEO
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                      </svg>
                    </Button>
                  </Link>
                </Card>
              </Col>
              <Col lg="4">
                <Card>
                  <img src={ecomm} alt="e-commerce pricing" />
                  <h3>Website / SEO Audit</h3>
                  <em>
                    <p>
                      Starting from <sup>$</sup>600
                    </p>
                  </em>
                  <ul>
                    <li>Audit your website performance</li>
                    <li>Audit your SEO standing</li>
                    <li>Detailed report on what to fix</li>
                    <li>Roadmap to website/SEO success</li>
                  </ul>
                  <a
                    target="_blank"
                    href="https://calendly.com/infused-agency/project-discovery/"
                  >
                    <Button>
                      Get Free Quote
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                      </svg>
                    </Button>
                  </a>
                </Card>
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
