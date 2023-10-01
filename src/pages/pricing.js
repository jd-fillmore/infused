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
        <title>Niagara Website &amp; SEO Service Pricing</title>
        <meta
          name="description"
          content="Infused Agency offers affordable website and SEO pricing whether you're a small or enterprise business. Click here to view pricing."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Website & SEO Pricing"
        description="Website & SEO investments for small to large businessess"
        bgImage={bgImage}
      />
      <InnerContent>
        <section className="pricing">
          <Container>
            <Row>
              <Col lg="12">
                <p>
                  Our <Link to="/web-design">website design</Link>,{" "}
                  <Link to="/niagara-seo-company">
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
                  pricing may change based on the scope your requirements.
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
            <Row>
              <Col lg="12 pd-top-80">
                <h2>Website Pricing</h2>
                <br />
              </Col>
            </Row>
            <Row className="d-flex">
              <Col lg="4">
                <Card>
                  <img src={web} alt="website pricing" />
                  <Link to="/web-design">
                    <h3>Standard Website</h3>
                  </Link>
                  <p>
                    Establish your online presence with a sleek website tailored
                    for small businesses.
                  </p>
                  <em>
                    <p>
                      <sup>$</sup>2,500 (all in)
                    </p>
                  </em>
                  <ul>
                    <li>5-page website</li>
                    <li>Brainstorm Call</li>
                    <li>Modern, sleek design</li>
                    <li>Mobile Responsive</li>
                    <li>Contact Form</li>
                    <li>SSL Certificate for security</li>
                    <li>Complimentary hosting</li>
                    <li>Google Sitemap</li>
                  </ul>
                  <a
                    href="https://calendly.com/infused-agency/project-discovery/"
                    target="_blank"
                  >
                    <Button>
                      Get A Free Quote
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
              <Col lg="4">
                <Card>
                  <img src={wp} alt="wordpress pricing" />
                  <h3>Professional Website</h3>
                  <h4>(Best Seller)</h4>
                  <p>
                    Elevate your digital presence with content management
                    capabilities and advanced features.
                  </p>
                  <em>
                    <p>
                      <sup>$</sup>3,500 (all in)
                    </p>
                  </em>
                  <ul>
                    <li>
                      <strong>10-page website</strong>
                    </li>
                    <li>
                      <strong>Content editing capabilities</strong>
                    </li>
                    <li>
                      <strong>Social Media Integration</strong>
                    </li>
                    <li>
                      <strong>Google Maps Integration</strong>
                    </li>
                    <li>
                      <strong>Mailing List Plugin</strong>
                    </li>
                    <li>Brainstorm Call</li>
                    <li>Modern, sleek design</li>
                    <li>Mobile Responsive</li>
                    <li>Contact Form</li>
                    <li>Google Sitemap</li>
                  </ul>
                  <a
                    href="https://calendly.com/infused-agency/project-discovery/"
                    target="_blank"
                  >
                    <Button>
                      Get A Free Quote
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
              <Col lg="4">
                <Card>
                  <img src={ecomm} alt="e-commerce pricing" />
                  <h3>E-Commerce Website</h3>
                  <p>
                    Turn your website into a thriving online store, complete
                    with e-commerce capabilities.
                  </p>
                  <em>
                    <p>
                      <sup>$</sup>4,500 (all in)
                    </p>
                  </em>
                  <ul>
                    <li>10-page website</li>
                    <li>
                      <strong></strong>Built on WordPress and WooCommerce
                    </li>
                    <li>Utilizes a WooCommerce WordPress theme</li>
                    <li>Seamless online product sales</li>
                    <li>Accept credit card payments</li>
                    <li>Content editing capabilities</li>
                    <li>Social Media Integration</li>
                    <li>Google Maps Integration</li>
                    <li>Mailing List Plugin</li>
                    <li>Brainstorm Call</li>
                    <li>Modern, sleek design</li>
                    <li>Mobile Responsive</li>
                    <li>Contact Form</li>
                    <li>Google Sitemap</li>
                  </ul>
                  <a
                    href="https://calendly.com/infused-agency/project-discovery/"
                    target="_blank"
                  >
                    <Button>
                      Get A Free Quote
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
            <Row>
              <Col lg="12">
                <h2>SEO Pricing</h2>
                <br />
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <Card>
                  <img src={seo} alt="SEO pricing" />
                  <Link to="/niagara-seo-company">
                    <h3>Essential</h3>
                  </Link>
                  <em>
                    <p>
                      <sup>$</sup>1,000/month (all in) for 3 months
                    </p>
                  </em>
                  <ul>
                    <li>1 SEO-Optimized City Page</li>
                    <li>Keyword Research</li>
                    <li>On-Page SEO</li>
                    <li>Off-Page SEO</li>
                    <li>Link Building</li>
                    <li>Campaign-End Reporting</li>
                  </ul>
                  <a href="https://calendly.com/infused-agency" target="_blank">
                    <Button>
                      Get A Free Quote
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
              <Col lg="4">
                <Card>
                  <img src={seo} alt="SEO pricing" />
                  <Link to="/niagara-seo-company">
                    <h3>Premium (Best Seller)</h3>
                  </Link>
                  <em>
                    <p>
                      <sup>$</sup>1,000/month (all in) for 6 months
                    </p>
                  </em>
                  <ul>
                    <li>
                      <strong>3 SEO-Optimized City Pages</strong>
                    </li>
                    <li>Keyword Research</li>
                    <li>On-Page SEO</li>
                    <li>Off-Page SEO</li>
                    <li>Link Building</li>
                    <li>Campaign-End Reporting</li>
                  </ul>
                  <a href="https://calendly.com/infused-agency" target="_blank">
                    <Button>
                      Get A Free Quote
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
              <Col lg="4">
                <Card>
                  <img src={seo} alt="SEO pricing" />
                  <Link to="/niagara-seo-company">
                    <h3>Powerhouse</h3>
                  </Link>
                  <em>
                    <p>
                      <sup>$</sup>1,000/month (all in) for 12 months
                    </p>
                  </em>
                  <ul>
                    <li>6 SEO-Optimized City Pages</li>
                    <li>Keyword Research</li>
                    <li>On-Page SEO</li>
                    <li>Off-Page SEO</li>
                    <li>Link Building</li>
                    <li>Campaign-End Reporting</li>
                  </ul>
                  <a href="https://calendly.com/infused-agency" target="_blank">
                    <Button>
                      Get A Free Quote
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
