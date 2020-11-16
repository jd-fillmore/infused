import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Button from "../../Button/button"

import "../Hero/hero.scss"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Hero = () => {
  return (
    <>
      <section className="hero text-center">
        <Container>
          <Row>
            <Col lg="12">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.3 }}
              >
                <div className="glow">
                  <h1>
                    Niagara Web Design, SEO Provider St. Catharines & Digital
                    Marketing Agency
                  </h1>
                  <h2>Strategic Web Development for Growing Businesses.</h2>
                  <p>
                    We build modern websites, local SEO and digital strategies
                    to help you <span>grow your business</span>.
                  </p>
                  <Link to="/get-evaluation">
                    <Button>Get An Evaluation</Button>
                  </Link>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
