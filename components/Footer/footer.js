import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"

import "../Footer/footer.scss"

const Footer = () => {
  return (
    <>
      <section className="footer">
        <Container>
          <Row>
            <Col lg="3">
              <h4>About</h4>
              <p>
                Infused is a Niagara web design, SEO company and digital
                marketing agency. We help local and non-local businesses build
                their credibility online, as well as help bring in more sales.
              </p>
            </Col>
            <Col lg="3">
              <h4>Pages</h4>
              <ul>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/how-we-work">How We Work</Link>
                </li>

                <li>
                  <Link to="/work">Our Work</Link>
                </li>
              </ul>
            </Col>
            <Col lg="3">
              <h4>Services</h4>
              <ul>
                <li>
                  <Link to="/websites">Modern Websites</Link>
                </li>
                <li>
                  <Link to="/seo">Local SEO</Link>
                </li>
                <li>
                  <Link to="/digital-strategy">Digital Strategy</Link>
                </li>
              </ul>
            </Col>
            <Col lg="3">
              <h4>Contact</h4>
              <ul>
                <li>
                  <Link to="/get-evaluation">Get An Evaluation</Link>
                </li>
              </ul>
              <p>73 Alexandra Blvd, St. Catharines, ON L2P 1K2</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Footer
