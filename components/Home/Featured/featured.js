import React from "react"
import { Container, Row, Col } from "reactstrap"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Button from "../../Button/button"
import featuredImg from "../../../src/img/niagara-web-design.png"

import "../Featured/featured.scss"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Featured = props => {
  return (
    <>
      <section className="featured text-center">
        <Container>
          <Row>
            <Col lg="12">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5 }}
              >
                <h2>Featured Client</h2>
                <p>
                  Take a look and see the <span>huge difference</span> we've
                  made to KD Flower's online existence.
                </p>
                <hr />
              </motion.div>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5 }}
              >
                <h3>10,700</h3>
                <p>website views per month</p>
              </motion.div>
            </Col>
            <Col lg="4">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3>20,000%</h3>
                <p>increase in new leads in first 6 months</p>
              </motion.div>
            </Col>
            <Col lg="4">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3>5,800</h3>
                <p>people discovering website per month</p>
              </motion.div>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <img
                className="img-fluid"
                src={featuredImg}
                alt="niagara web design, seo provider st catharines"
              />
              <p id="testimonial">
                "Infused created the <span>perfect</span> website for my floral
                business. I was very happy with their <span>professional</span>{" "}
                work ethic and <span>great communication!</span>"
              </p>
              <Link to="/work">
                <Button>View More Case Studies</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Featured
