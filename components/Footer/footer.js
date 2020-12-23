import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"

import "../Footer/footer.scss"

const pages = [
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "How We Work",
    link: "/how-we-work",
  },
  {
    name: "Our Work",
    link: "/work",
  },
]

const services = [
  {
    name: "Modern Websites",
    link: "/websites",
  },
  {
    name: "Local SEO",
    link: "/seo",
  },
  {
    name: "Digital Marketing Consulting",
    link: "/digital-strategy",
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
                Infused Agency is a Niagara web design, SEO company and digital
                marketing agency. We help local and non-local businesses build
                their credibility online, as well as help bring in more sales.
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
                {services.map(service => (
                  <li>
                    <Link to={service.link}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg="2">
              <h3>Contact</h3>
              <ul>
                <li>
                  <Link to="/get-started">Get Started</Link>
                </li>
              </ul>
              <a href="tel:9059333115">(905) 933-3115</a>
              <p>73 Alexandra Blvd, St. Catharines, ON L2P 1K2</p>
            </Col>
          </Row>
          <Row>
            <Col lg="8">
              <h3>Local Areas Served</h3>
              <p>
                <Link to="/beamsville-web-design">Beamsville</Link>,{" "}
                <Link to="/fonthill-web-design">Fonthill</Link>,{" "}
                <Link to="/fort-erie-web-design">Fort Erie</Link>,{" "}
                <Link to="/grimsby-web-design">Grimsby</Link>,{" "}
                <Link to="/jordan-web-design">Jordan</Link>, Niagara Falls,
                Niagara-on-the-Lake, <Link to="/pelham-web-design">Pelham</Link>
                , <Link to="/port-colborne-web-design">Port Colborne</Link>,
                Port Dalhousie,{" "}
                <Link to="/smithville-web-design">Smithville</Link>, St.
                Catharines, <Link to="/thorold-web-design">Thorold</Link>,
                <Link to="/vineland-web-design">Vineland</Link>,{" "}
                <Link to="/virgil-web-design">Virgil</Link>,{" "}
                <Link to="/wainfleet-web-design">Wainfleet</Link>,{" "}
                <Link to="/welland-web-design">Welland</Link>.
              </p>
              <h3>Other Areas Served</h3>
              <p>
                <Link to="/ajax-web-design">Ajax</Link>,{" "}
                <Link to="/aurora-web-design">Aurora</Link>,{" "}
                <Link to="/barrie-web-design">Barrie</Link>,{" "}
                <Link to="/beamsville-web-design">Beamsville</Link>,{" "}
                <Link to="/bowmanville-web-design">Bowmanville</Link>,{" "}
                <Link to="/brampton-web-design">Brampton</Link>,{" "}
                <Link to="/brantford-web-design">Brantford</Link>,{" "}
                <Link to="/buffalo-web-design">Buffalo</Link>,{" "}
                <Link to="/cambridge-web-design">Cambridge</Link>,{" "}
                <Link to="/chatam-web-design">Chatam-Kent</Link>,{" "}
                <Link to="/etobicoke-web-design">Etobicoke</Link>,{" "}
                <Link to="/georgetown-web-design">Georgetown</Link>,{" "}
                <Link to="/guelph-web-design">Guelph</Link>,{" "}
                <Link to="/hamilton-web-design">Hamilton</Link>,{" "}
                <Link to="/kitchener-web-design">Kitchener</Link>,{" "}
                <Link to="/leamington-web-design">Leamington</Link>,{" "}
                <Link to="/london-on-web-design">London</Link>,{" "}
                <Link to="/markham-web-design">Markham</Link>,{" "}
                <Link to="/mississauga-web-design">Mississauga</Link>,{" "}
                <Link to="/oakville-web-design">Oakville</Link>,{" "}
                <Link to="/orangeville-web-design">Orangeville</Link>,{" "}
                <Link to="/orillia-web-design">Orillia</Link>,{" "}
                <Link to="/oshawa-web-design">Oshawa</Link>,{" "}
                <Link to="/pelham-web-design">Pelham</Link>,{" "}
                <Link to="/peterborough-web-design">Peterborough</Link>,{" "}
                <Link to="/sarnia-web-design">Sarnia</Link>,{" "}
                <Link to="/toronto-web-design">Toronto</Link>,{" "}
                <Link to="/vaughan-web-design">Vaughan</Link>,{" "}
                <Link to="/waterloo-web-design">Waterloo</Link>,{" "}
                <Link to="/whitby-web-design">Whitby</Link>,{" "}
                <Link to="/windsor-web-design">Windsor</Link>.{" "}
              </p>
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
