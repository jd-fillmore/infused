import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "reactstrap"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Infused</title>
        <meta
          name="description"
          content="We help educate potential clients and existing customers on web design, digital strategy and SEO."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Blog"
        description="We help educate potential clients and existing customers on web design, digital strategy and SEO."
      />
      <InnerContent>
        <Container>
          <Row>
            <Col lg="12">
              <p>Coming soon!</p>
            </Col>
          </Row>
        </Container>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  )
}

export default Blog
