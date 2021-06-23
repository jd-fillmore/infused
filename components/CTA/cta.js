import React from "react"
import Fade from "react-reveal/Fade"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Card from "../Card/card"

import "../CTA/cta.scss"

const CTA = () => {
  return (
    <>
      <section className="cta">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <Fade>
                <h2>Affordable Niagara Web Design Packages</h2>
                <p id="sub">
                  Giving Niagara small businesses the big business web design
                  treatment, for a fraction of the price.
                </p>
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Fade>
                <div className="heading">
                  <p>Standard</p>
                </div>
                <Card>
                  <p className="pages">5 Pages</p>
                  <h3 className="price">
                    $170<span>/mo</span>
                  </h3>
                  <p className="small">For 1 year</p>
                  <ul>
                    <li>Responsive</li>
                    <li>User-Friendly Design</li>
                    <li>Hosting / SSL Included</li>
                    <li>Optimized for Google</li>
                  </ul>
                  <p class="benefits">
                    <strong>Benefits:</strong>
                  </p>
                  <ul>
                    <li>Works on all devices</li>
                    <li>Improve your brand's look</li>
                    <li>Secure, Fast, Performant</li>
                    <li>Leads to more revenue</li>
                  </ul>
                  <Link to="/get-started/">
                    <button>Contact Us</button>
                  </Link>
                </Card>
              </Fade>
            </Col>
            <Col lg="4">
              <Fade delay={300}>
                <div className="heading">
                  <p>Standard + Analytics</p>
                  <div className="popular">
                    <p>(Most Popular)</p>
                  </div>
                </div>
                <Card>
                  <p className="pages">10 Pages</p>
                  <h3 className="price">
                    $250<span>/mo</span>
                  </h3>
                  <p className="small">For 1 year</p>
                  <ul>
                    <li>Everything from Standard</li>
                    <li>Additional 5 pages</li>
                    <li>Google Analytics</li>
                    <li>Google Search Console</li>
                    <li>Submit to Google</li>
                  </ul>
                  <p class="benefits">
                    <strong>Benefits:</strong>
                  </p>
                  <ul>
                    <li>Everything from Standard</li>
                    <li>More pages</li>
                    <li>Shows up in Google</li>
                    <li>Track website analytics</li>
                  </ul>
                  <Link to="/get-started">
                    <button>Contact Us</button>
                  </Link>
                </Card>
              </Fade>
            </Col>
            <Col lg="4">
              <Fade delay={600}>
                <div className="heading">
                  <p>Standard + Analytics + Local SEO</p>
                </div>
                <Card>
                  <p className="pages">15 Pages</p>
                  <h3 className="price">
                    $500<span>/mo</span>
                  </h3>
                  <p className="small">For 1 year</p>
                  <ul>
                    <li>Everything from Standard + Analytics</li>
                    <li>Keyword Research</li>
                    <li>Create / Optimize Google My Business</li>
                    <li>Local Backlinks</li>
                    <li>2 Local SEO City Pages</li>
                  </ul>
                  <p class="benefits">
                    <strong>Benefits:</strong>
                  </p>
                  <ul>
                    <li>Everything from Standard + Analytics</li>
                    <li>More pages</li>
                    <li>
                      Monthly SEO efforts to help boost website in Google and
                      beat competitors
                    </li>
                    <li>
                      Leading to even more revenue and local authority online
                    </li>
                  </ul>
                  <Link to="/get-started">
                    <button>Contact Us</button>
                  </Link>
                </Card>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default CTA
