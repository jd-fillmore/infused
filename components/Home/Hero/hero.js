import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

import "../Hero/hero.scss"

const Hero = ({ title, titleTwo, subTitle }) => {
  return (
    <>
      <section className="hero">
        <Container>
          <div className="bg">
            <Fade>
              <Row className="text-center">
                <Col lg="12">
                  <h1 className="intro">{title}</h1>
                  <h2>{titleTwo}</h2>
                  <a
                    href="https://calendly.com/infused-agency/project-discovery/"
                    target="_blank"
                  >
                    <button>
                      Get Free Quote{" "}
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
                </Col>
              </Row>
            </Fade>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Hero
