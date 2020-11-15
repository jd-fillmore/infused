import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Button from "../../Button/button"
import Slider from "./slider/slider"

import "../Clients/clients.scss"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Hero = () => {
  return (
    <>
      <section className="clients text-center">
        <Container>
          <Row>
            <Col lg="12">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.3 }}
              >
                <h2>Our happy clients</h2>
                <p>
                  We take pride in knowing that we do a great job for our
                  clients.
                </p>
                <hr />
              </motion.div>
              <Slider />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
