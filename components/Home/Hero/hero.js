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
                    Marketing Company
                  </h1>
                  <h2>
                    We design & build <span>modern</span> websites.
                  </h2>
                  <p>Expertly-crafted with purpose and meaning.</p>
                  <Link to="/get-estimate">
                    <Button>Get An Estimate</Button>
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
