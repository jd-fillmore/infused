import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

import "../pages/about.scss"

const Locations = () => {
  return (
    <>
      <Helmet>
        <title>Locations - Infused</title>
        <meta
          name="description"
          content="Learn more regarding the locations that Infused Agency serves across Ontario. Click here to learn more."
        />
      </Helmet>
      <Nav />
      <InnerHero title="Locations" description="Areas we serve" />
      <InnerContent>
        <section className="about">
          <Container>
            <Row>
              <Col lg="12">
                <ul>
                  <li>
                    <Link to="/seo-beamsville">Beamsville, ON</Link>,{" "}
                  </li>
                  <li>
                    <Link to="/seo-crystal-beach">Crystal Beach, ON</Link>,{" "}
                  </li>
                  <li>
                    <Link to="/seo-fonthill">Fonthill, ON</Link>,{" "}
                  </li>
                  <li>
                    <Link to="/seo-fort-erie">Fort Erie, ON</Link>,{" "}
                  </li>
                  <li>
                    <Link to="/seo-grimsby">Grimsby, ON</Link>,{" "}
                  </li>
                  <li>
                    <Link to="/seo-port-colborne">Port Colborne, ON</Link>,{" "}
                  </li>
                  <li>
                    <Link to="/seo-thorold">Thorold, ON</Link>,{" "}
                  </li>
                  <li>
                    <Link to="/seo-welland">Welland, ON</Link>.
                  </li>
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

export default Locations