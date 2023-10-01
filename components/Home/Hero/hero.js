import React from "react"
import { Container, Row, Col } from "reactstrap"
import heroImg from "../../../src/img/hero.webp"

import "../Hero/hero.scss"
import reviews from "../../../src/img/infused-reviews.jpg"

const Hero = ({ title, titleTwo }) => {
  return (
    <>
      <section className="hero">
        <Container>
          <div className="bg">
            <Row>
              <Col lg="12" className="text-center">
                <h1 className="intro">{title}</h1>
                <h2>{titleTwo}</h2>
                <a href="/work" rel="noreferrer">
                  <button>
                    View Portfolio{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                    </svg>
                  </button>
                </a>
                <br />
                <img
                  className="img-fluid"
                  src={reviews}
                  alt="infused agency reviews"
                />
                <p>Reliable. Credible. Dependable.</p>
                <br />
              </Col>
              {/* <Col lg="5" className="text-center">
                  <img src={reviews} alt="infused agency reviews" />
                  <p>Reliable. Credible. Dependable.</p>
                </Col> */}
            </Row>
          </div>
          <img
            className="img-fluid showcase"
            src={heroImg}
            alt="niagara web design"
          />
        </Container>
      </section>
    </>
  )
}

export default Hero
