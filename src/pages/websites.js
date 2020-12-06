import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "reactstrap"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import lightningImg from "../img/lightning.png"
import searchImg from "../img/google.png"
import moneyImg from "../img/money.png"
import featuredImg from "../img/niagara-web-design.png"
import Featured from "../../components/Home/Featured/featured"

import "../pages/websites.scss"
import "../pages/areas-served.scss"

const citiesNiagara = [
  {
    name: "Wainfleet",
    link: "/wainfleet-web-design",
  },
  {
    name: "Port Colborne",
    link: "/port-colborne-web-design",
  },
  {
    name: "Beamsville-Lincoln",
    link: "/beamsville-lincoln-web-design",
  },
  {
    name: "Grimsby",
    link: "/grimsby-web-design",
  },
  {
    name: "Fort Erie",
    link: "/fort-erie-web-design",
  },
  {
    name: "Thorold",
    link: "/thorold-web-design",
  },
  {
    name: "Smithville",
    link: "/smithville-web-design",
  },
  {
    name: "Pelham",
    link: "/pelham-web-design",
  },
  {
    name: "Niagara-on-the-Lake",
    link: "/niagara-on-the-lake-web-design",
  },
]

const citiesHamilton = [
  {
    name: "Hamilton",
    link: "/hamilton-web-design",
  },
  {
    name: "Waterdown",
    link: "/waterdown-web-design",
  },
  {
    name: "Dundas",
    link: "/dundas-web-design",
  },
  {
    name: "Ancaster",
    link: "/ancaster-web-design",
  },
  {
    name: "Stoney Creek",
    link: "/stoney-creek-web-design",
  },
  {
    name: "Burlington",
    link: "/burlington-web-design",
  },
  {
    name: "Caledonia",
    link: "/caledonia-web-design",
  },
  {
    name: "Binbrook",
    link: "/binbrook-web-design",
  },
]

const Websites = () => {
  return (
    <>
      <Helmet>
        <title>Websites - Infused</title>
        <meta
          name="description"
          content="We don't build Wix, Squarespace or WordPress websites. We build lightning fast, modern websites."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Modern Websites"
        description={[
          "We don't build Wix, Squarespace or WordPress websites. We build lightning fast, ",
          <span>modern</span>,
          " websites.",
        ]}
      />
      <InnerContent>
        <section className="websites">
          <Container className="intro">
            <Row className="text-center">
              <Col lg="4">
                <img
                  className="img-width"
                  src={lightningImg}
                  alt="fast websites"
                />
                <p>Lightning fast speeds</p>
              </Col>
              <Col lg="4">
                <img
                  className="img-width"
                  src={searchImg}
                  alt="rank high in google"
                />
                <p>Rank high in Google</p>
              </Col>
              <Col lg="4">
                <img
                  className="img-width"
                  src={moneyImg}
                  alt="users into customers"
                />
                <p>Convert users into customers</p>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <Featured
        title="Our Websites Help Bring In Revenue"
        subTitle={[
          "Take a look and see the ",
          <span>huge difference</span>,
          "we've made to KD Flower's online existence.",
        ]}
        viewsValue="10,700"
        viewsText="website views per month"
        leadsValue="20,000%"
        leadsText="increase in new leads in first 6 months"
        peopleValue="5,800"
        peopleText="people discovering website per month"
        img={featuredImg}
        imgAlt="niagara web design, seo provider st catharines, digital agency"
        testimonial={[
          "Infused created the ",
          <span>perfect website</span>,
          "for my floral business. I was very happy with their ",
          <span>professional work ethic</span>,
          "and ",
          <span>great communication!</span>,
        ]}
        btnText="View More Case Studies"
        btnLink="/work"
      />
      <section className="areas-served">
      <Container>
        <Row>
          <Col lg="12">
            <h3>Areas Served</h3>
          </Col>
        </Row>
        <Row>
          <Col lg="3">
            <h5>Niagara</h5>
            <ul>
              {citiesNiagara.map(city => (
                <li>
                  <Link to={city.link}>{city.name}</Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg="3">
            <h5>Hamilton</h5>
            <ul>
              {citiesHamilton.map(city => (
                <li>
                  <Link to={city.link}>{city.name}</Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
      </section>
      <CTA />
      <Footer />
    </>
  )
}

export default Websites
