import React from "react"
import { Container, Row, Col } from "reactstrap"
import Link from "next/link"
import Industries from "../Footer/industries-modal"

const pages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Work",
    link: "/work",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blog",
    link: "/posts",
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
                Infused is a Niagara web design &amp; St. Catharines SEO
                company. We help local and non-local businesses build their
                credibility online, as well as help bring in more sales.
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
                    <Link href={`${page.link}`}>{page.name}</Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg="3">
              <h3>Services</h3>
              <ul>
                <li>
                  <Link href="/web-design">Web Design & Development</Link>
                </li>
                <li>
                  <Link href="/wordpress-developer-niagara">
                    WordPress Development
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce-web-design-niagara">
                    E-Commerce Development
                  </Link>
                </li>
                <li>
                  <Link href="/niagara-seo-company">SEO</Link>
                </li>
              </ul>
            </Col>
            <Col lg="3">
              <h3>Contact</h3>
              <a
                href="https://calendly.com/infused-agency/project-discovery/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Get Free Quote</strong>
              </a>
              <br />
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
              <h3>Areas Served</h3>
              <p className="subtitle">SEO</p>
              <Link href="/beamsville-seo-company">Beamsville, ON</Link>,{" "}
              <Link href="/crystal-beach-seo-company">Crystal Beach, ON</Link>,{" "}
              <Link href="/fonthill-seo-company">Fonthill, ON</Link>,{" "}
              <Link href="/fort-erie-seo-company">Fort Erie, ON</Link>,{" "}
              <Link href="/grimsby-seo-company">Grimsby, ON</Link>,{" "}
              <Link href="/niagara-seo-company">Niagara, ON</Link>,{" "}
              <Link href="/port-colborne-seo-company">Port Colborne, ON</Link>,{" "}
              <Link href="/st-catharines-seo-company">St. Catharines, ON</Link>,{" "}
              <Link href="/thorold-seo-company">Thorold, ON</Link>,{" "}
              <Link href="/welland-seo-company">Welland, ON</Link>.
              <p className="subtitle">Web Design</p>
              <Link href="/beamsville-web-design">Beamsville, ON</Link>,{" "}
              <Link href="/crystal-beach-web-design">Crystal Beach, ON</Link>,{" "}
              <Link href="/fonthill-web-design">Fonthill, ON</Link>,{" "}
              <Link href="/fort-erie-web-design">Fort Erie, ON</Link>,{" "}
              <Link href="/grimsby-web-design">Grimsby, ON</Link>,{" "}
              <Link href="/port-colborne-web-design">Port Colborne, ON</Link>,{" "}
              <Link href="/thorold-web-design">Thorold, ON</Link>,{" "}
              <Link href="/welland-web-design">Welland, ON</Link>.
              <br />
              <br />
              <h3>Industries Served</h3>
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
