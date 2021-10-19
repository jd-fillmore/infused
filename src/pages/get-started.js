import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "reactstrap"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import Form from "../../components/Form/form"
import bgImage from "../img/inner-work.jpg"

const GetEvaluation = () => {
  return (
    <>
      <Helmet>
        <title>Get Started - Infused</title>
        <meta
          name="description"
          content="Ready to start your project? Click here to fill out the form and we'll be in contact as soon as possible."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Get Started"
        description="Ready to start your project? Fill out the form below to get started."
        bgImage={bgImage}
      />
      <InnerContent>
        <Container>
          <Row>
            <Col lg="12">
              <p>
                You can also email us at{" "}
                <a href="mailto:hello@infused.agency">hello@infused.agency</a>{" "}
                to inquire about our services.
              </p>
              <Form />
            </Col>
          </Row>
        </Container>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  )
}

export default GetEvaluation
