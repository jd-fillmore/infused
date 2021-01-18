import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../Hero/hero.scss"

const Hero = ({ seoTitle, title, subTitle, btnText, btnLink }) => {
  return (
    <>
      <section className="hero">
        <Container>
          <Row className="align-items-center">
            <Col lg="7">
              <div className="glow">
                <h1>{seoTitle}</h1>
                <h2>{title}</h2>
                <p>{subTitle}</p>
              </div>
            </Col>
            <Col lg="5" className="card">
              <p>
                Get in touch with us for a free quote regarding your web design,
                SEO or digital marketing project.
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
