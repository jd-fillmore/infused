import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../innerHero/inner-hero.scss"

const InnerHero = ({ title, description }) => {
  return (
    <>
      <section className="inner-hero">
        <Container>
          <Row>
            <Col lg="7">
              <h1>{title}</h1>
              <hr />
              <p>{description}</p>
            </Col>
            <Col lg="5" className="card">
              <p>
                Get in touch with us for a <strong>free quote</strong> regarding
                your web design, SEO or digital marketing project.
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
                    id="Name-field"
                    aria-describedby="namehelp"
                    aria-label="name field"
                    placeholder="Full Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    name="email"
                    type="email"
                    class="form-control"
                    id="Email-field"
                    aria-label="email field"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    name="phone"
                    type="phone"
                    class="form-control"
                    id="Phone-field"
                    aria-describedby="urlhelp"
                    aria-label="phone field"
                    placeholder="Cell Phone Number"
                  />
                </div>
                <div class="form-group">
                  <input
                    name="url"
                    type="name"
                    class="form-control"
                    id="URL-field"
                    aria-describedby="urlhelp"
                    aria-label="url field"
                    placeholder="Website URL"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name="message"
                    class="form-control"
                    id="Message-field"
                    aria-label="message field"
                    rows="3"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button type="submit">Get My Quote</button>
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default InnerHero
