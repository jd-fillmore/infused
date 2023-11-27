import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import website from "../img/responsive.svg"
import seo from "../img/seoo.svg"
import dm from "../img/dm.svg"
import wp from "../img/wordpress.png"
import ecomm from "../img/add-to-cart.png"
import wm from "../img/maintenance.png"

const About = () => {
  return (
    <>
      <Helmet>
        <title>Services - Infused</title>
        <meta
          name="description"
          content="Learn more about services that Infused offers to help small businesses. Web design, development, SEO and digital marketing."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Services"
        description="We offer websites, SEO and digital marketing for small businesses on a budget."
      />
      <InnerContent>
        <section className="services">
          <Container>
            {/* Websites */}
            <Row className="web align-items-center">
              <Col md="4">
                <img src={website} alt="web design and development" />
              </Col>
              <Col lg={{ size: 7, offset: 1 }}>
                <a id="web-design"></a>
                <h3>Web Design &amp; Development</h3>
                <p>
                  We make websites that will beat out your competition in the
                  following areas:
                </p>
                <ul>
                  <li>Secure</li>
                  <li>Lighting fast</li>
                  <li>Optimized for users</li>
                  <li>Bring you more revenue</li>
                </ul>
                <p>
                  We hand-code websites as it allows for precision in design,
                  development, and rids of the bloated mess of code page
                  builders generate. A secure, optimized, lightning fast website
                  leads to a better experience for your users. The better the
                  experience, the more revenue for you.
                </p>
              </Col>
            </Row>
            {/* WordPress Development */}
            <Row className="seo align-items-center">
              <img className="seo" src={wp} alt="WordPress Development" />
              <Col lg={{ size: 5, offset: 1 }}>
                <h3>WordPress Development</h3>
                <p>
                  WordPress powers over 40% of all websites online. There's a
                  good reason for that. The rich ecosystem that WordPress
                  provides, coupled by it's content management system is a match
                  for none.
                </p>
                <p>
                  Our WordPress developers will help you build a website for you
                  that not only looks amazing and functions great, but one that
                  you can update on your end without knowledge of code. No need
                  to call us!
                </p>
              </Col>
              <Col md="5">
                <img
                  className="img-fluid seo-two"
                  src={wp}
                  alt="wordpress development"
                />
              </Col>
            </Row>
            {/* DM */}
            <Row className="dm align-items-center">
              <Col md="4">
                <img className="img-fluid" src={dm} alt="digital marketing" />
              </Col>
              <Col lg={{ size: 7, offset: 1 }}>
                <h3>Digital Marketing</h3>
                <p>
                  Advertising on social media is paramount for small businesses.
                  Growing your brand through where your customers spend a lot of
                  their time is absolutely key to success in this day and age.
                </p>
                <p>
                  We focus on creating digital marketing campaigns around the
                  following:
                </p>
                <ul>
                  <li>Laser-targeted to gender, age, locality and more</li>
                  <li>Modern, attractive ads with offers users can't refuse</li>
                  <li>Monthly reporting</li>
                  <li>Ongoing A/B testing to maximize revenue</li>
                  <li>
                    Sales funnel landing page magnets to attract local audiences
                  </li>
                </ul>
              </Col>
            </Row>
            {/* Local SEO */}
            <Row className="seo align-items-center">
              <img className="seo" src={seo} alt="local seo" />
              <Col lg={{ size: 5, offset: 1 }}>
                <h3>Local SEO</h3>
                <p>
                  Search Engine Optimization is as relevant today as it was 20
                  years ago. People go to google for everything -{" "}
                  <strong>especially</strong> to search for a local small
                  business.
                </p>
                <p>
                  Some of the many techniques we help employ to boost your
                  website up in Google's rankings:
                </p>
                <ul>
                  <li>Keyword research &amp; strategic implementation</li>
                  <li>Local and non-local backlink building</li>
                  <li>Creation of fresh, educational blog content</li>
                  <li>Optimize your website and Google My Business listing</li>
                </ul>
              </Col>
              <Col md="5">
                <img className="img-fluid seo-two" src={seo} alt="local seo" />
              </Col>
            </Row>
            {/* E-Comm */}
            <Row className="dm align-items-center">
              <Col md="4">
                <img
                  className="img-fluid"
                  src={ecomm}
                  alt="E-Commerce Development"
                />
              </Col>
              <Col lg={{ size: 7, offset: 1 }}>
                <h3>E-Commerce Development</h3>
                <p>Want to sell your physical or digital products online?</p>
                <p>
                  We help companies do exactly that. We build powerful
                  e-commerce websites that help local companies sell their
                  products and digital services either locally or globally.
                </p>
                <p>
                  The best part of it? You can manage your products and website
                  yourself without knowing how to code.
                </p>
              </Col>
            </Row>
            {/* Website Maintenance */}
            <Row className="seo align-items-center">
              <img className="seo" src={wm} alt="Website Maintenance" />
              <Col lg={{ size: 5, offset: 1 }}>
                <h3>Website Maintenance</h3>
                <p>
                  Already have a website but don't have the time to maintain it?
                </p>
                <p>No problem, we can help.</p>
                <p>
                  Even if you do have a website that you can update yourself but
                  simply don't have the time, that's completely understand. Many
                  of our clients are like that. We help with website maintenance
                  of any kind.
                </p>
              </Col>
              <Col md="5">
                <img
                  className="img-fluid seo-two"
                  src={wm}
                  alt="Website Maintenance"
                />
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

export default About
