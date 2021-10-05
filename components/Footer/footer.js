import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import WebDesignCities from "../Footer/cities-modal"
import Industries from "../Footer/industries-modal"

import "../Footer/footer.scss"

const pages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Portfolio",
    link: "/work",
  },
  {
    name: "Blog",
    link: "/posts",
  },
  {
    name: "Free Consultation",
    link: "/get-started",
  },
]

const Footer = () => {
  return (
    <>
      <section className="footer">
        <Container>
          <Row>
            <Col lg="4">
              <h3>About</h3>
              <p>
                Infused is a Niagara web design, St. Catharines SEO company and
                digital marketing agency. We help local and non-local businesses
                build their credibility online, as well as help bring in more
                sales.
              </p>
              <p>
                Follow us on{" "}
                <a
                  rel="noreferrer"
                  href="https://www.instagram.com/infusedweb/"
                  target="_blank"
                >
                  Instagram
                </a>
              </p>
            </Col>
            <Col lg="2">
              <h3>Pages</h3>
              <ul>
                {pages.map(page => (
                  <li>
                    <Link to={page.link}>{page.name}</Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg="2">
              <h3>Services</h3>
              <ul>
                <li>Websites</li>
                <li>
                  <a href="seo-niagara">SEO</a>
                </li>
                <li>Digital Marketing</li>
              </ul>
            </Col>
            <Col lg="2">
              <h3>Contact</h3>
              <ul>
                <li>
                  <Link to="/get-started">Start your Project</Link>
                </li>
              </ul>
              <a href="mailto:hello@infused.agency">hello@infused.agency</a>
              <br />
              <a class="phone" href="tel:(905) 933-3115">
                (905) 933-3115
              </a>
              <br />
              <br />
              <p>73 Alexandra Blvd, St. Catharines, ON L2P 1K2</p>
            </Col>
          </Row>
          <Row>
            <Col lg="8">
              <h3>Areas &amp; Industries Served</h3>
              <WebDesignCities />
              <br />
              <Industries />
            </Col>
            <Col lg="4">
              <h3>Hours</h3>
              <ul>
                <li>Monday - 9a.m.-6p.m.</li>
                <li>Tuesday - 9a.m.-6p.m.</li>
                <li>Wednesday - 9a.m.-6p.m.</li>
                <li>Thursday - 9a.m.-6p.m.</li>
                <li>Friday - 9a.m.-6p.m.</li>
                <li>Saturday - Closed</li>
                <li>Sunday - Closed</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Footer
