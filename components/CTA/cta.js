import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../CTA/cta.scss"

const Hero = () => {
  return (
    <>
      <section className="cta">
        <Container>
          <Row>
            <Col lg="5">
              <h2>
                Ready to <span>start</span> your project?
              </h2>
              <p>
                Get in touch with us for a free quote regarding your Niagara web
                design or SEO project today.
              </p>
            </Col>
            <Col lg="7" className="card">
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
                    aria-label="name"
                  />
                </div>
                <div class="form-group">
                  <input
                    name="email"
                    type="email"
                    class="form-control"
                    id="Email"
                    placeholder="Email"
                    aria-label="email"
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
                    aria-label="phone"
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
                    aria-label="url"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name="message"
                    class="form-control"
                    id="Message"
                    rows="3"
                    placeholder="How can we help you?"
                    aria-label="how can we help"
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

export default Hero
