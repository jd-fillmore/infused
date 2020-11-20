import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "reactstrap"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

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
        description="Ready to start your project? Fill out the form below and we'll be in contact as soon as possible."
      />
      <InnerContent>
        <Container>
          <Row>
            <Col lg="12">
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <div class="form-group">
                  <input
                    name="name"
                    type="name"
                    class="form-control"
                    id="Name"
                    aria-describedby="namehelp"
                    placeholder="Full Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    name="email"
                    type="email"
                    class="form-control"
                    id="Email"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    name="company"
                    type="name"
                    class="form-control"
                    id="Company"
                    aria-describedby="companyname"
                    placeholder="Company Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    name="url"
                    type="name"
                    class="form-control"
                    id="URL"
                    aria-describedby="urlhelp"
                    placeholder="Website URL"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name="message"
                    class="form-control"
                    id="Message"
                    rows="3"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
              </form>
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
