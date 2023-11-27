import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Link from "next/link"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

const About = () => {
  return (
    <>
      <Helmet>
        <title>404 - Infused</title>
        <meta
          name="description"
          content="Uh oh! You've reached a page that doesn't exist."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="404 Error"
        description="Uh oh! You've reached a page that doesn't exist."
      />
      <InnerContent>
        <Container>
          {/* One */}
          <Row>
            <Col lg="7">
              <p>
                <Link href="/">Click here</Link> to return to the home page.
              </p>
            </Col>
          </Row>
        </Container>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  )
}

export default About
