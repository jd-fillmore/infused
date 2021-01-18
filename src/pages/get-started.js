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
        <title>Get A Free Quote - Infused</title>
        <meta
          name="description"
          content="Ready to start your project? Click here to fill out the form and we'll be in contact as soon as possible."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Get A Free Quote"
        description="Ready to start your project? Fill out the form below to get your free quote."
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
                    name="phone"
                    type="phone"
                    class="form-control"
                    id="Phone"
                    aria-describedby="urlhelp"
                    placeholder="Cell Phone Number"
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
                <button type="submit">Submit</button>
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
