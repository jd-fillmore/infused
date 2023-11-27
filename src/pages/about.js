import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Link from "next/link"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import about from "../img/about.jpeg"

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Infused</title>
        <meta
          name="description"
          content="Learn more about the core values, the hardworking team and how we accomplish your business goals at Infused."
        />
      </Helmet>
      <Nav />
      <InnerHero title="About Us" description="A bit about the company" />
      <InnerContent>
        <section className="about">
          <Container>
            <Row className="d-flex align-items-center">
              <Col lg="6">
                <img className="img-fluid" src={about} alt="business needs" />
                <br />
                <p className="text-center">
                  <em>
                    JD (Owner) and his daughter (side-kick) hiking in Banff
                  </em>
                </p>
              </Col>
              <Col lg="6">
                <p>
                  Since 2013 we've been able to help countless local St.
                  Catharines, Niagara businesses (and beyond!) with their{" "}
                  <Link href="/web-design">website design</Link>,{" "}
                  <Link href="/digital-marketing-niagara">
                    digital marketing
                  </Link>
                  ,{" "}
                  <Link href="/seo-niagara">
                    search engine optimization (SEO)
                  </Link>
                  ,{" "}
                  <Link href="/wordpress-developer-niagara">
                    WordPress development
                  </Link>{" "}
                  and{" "}
                  <Link href="/ecommerce-web-design-niagara">
                    e-commerce website development
                  </Link>
                  .
                </p>
                <p>
                  We've been able to help small, local businesses all the way to
                  large enterprise companies with increasing traffic to their
                  websites, build modern websites for them and ultimately
                  bringing them more revenue through digital channels.
                </p>
              </Col>
            </Row>
            <Row className="pd-top-120">
              <Col lg="12">
                <h2>How we can help you</h2>
                <p>
                  If you're looking for help in any of the areas below, please
                  head over to our <Link href="/get-started">Get Started</Link>{" "}
                  page and a member from our team will respond to you promptly.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <ul>
                  <li>Re-design my website</li>
                  <li>Increase my website traffic</li>
                  <li>Grow my online sales</li>
                  <li>Get more people calling my business</li>
                  <li>Get found on Google</li>
                </ul>
              </Col>
              <Col lg="6">
                <ul>
                  <li>Outrank my competitors in Google Search</li>
                  <li>Make my website mobile-frienly</li>
                  <li>Increase my online presence</li>
                  <li>Create and run Facebook &amp; Instagram ads for me</li>
                </ul>
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
