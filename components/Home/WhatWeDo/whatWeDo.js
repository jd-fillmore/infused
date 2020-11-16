import React from "react"
import { Container, Row, Col } from "reactstrap"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Card from "../../Card/card"
import websiteSVG from "../../../src/img/websites.svg"
import seoSVG from "../../../src/img/seo.svg"
import strategySVG from "../../../src/img/strategy.svg"

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

import "../WhatWeDo/what-we-do.scss"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const WhatWeDo = props => {
  return (
    <>
      <section className="what-we-do text-center">
        <Container>
          <Row>
            <Col lg="12">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5 }}
              >
                <h2>What We Can Do For You</h2>
                <p>
                  Whether you need a website to showcase your services or want
                  more local customers from your website - we can design, build
                  and deliver you a website that's tailor-made to your business
                  needs.
                </p>
                <hr />
              </motion.div>
            </Col>
          </Row>
          {/* Websites */}
          <Card>
            <Row className="item">
              <Col lg="6" className="text-left">
                <h3>
                  Bespoke websites built to <span>convert your visitors</span>.
                </h3>
                <p>
                  We design and build modern websites that help convert users
                  into paying customers.
                </p>
                <Link to="/websites">
                  Discover
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
                </Link>
              </Col>
              <Col lg="6">
                <img
                  src={websiteSVG}
                  className="img-fluid"
                  alt="bespoke website design in niagara"
                />
              </Col>
            </Row>
          </Card>
          {/* SEO - Desktop */}
          <div className="hide-mobile">
            <Card>
              <Row className="item">
                <Col lg="6">
                  <img
                    src={seoSVG}
                    className="img-fluid"
                    alt="seo provider st catharines"
                  />
                </Col>
                <Col lg="6" className="text-left">
                  <h3>
                    SEO to <span>drive local customers</span> to your website.
                  </h3>
                  <p>
                    Getting local traffic through Google helps bring you more
                    revenue.
                  </p>
                  <Link to="/seo">
                    Discover
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
                  </Link>
                </Col>
              </Row>
            </Card>
          </div>
          <div className="hide-desktop">
            {/* SEO - Mobile */}
            <Card>
              <Row className="item">
                <Col lg="6" className="text-left">
                  <h3>
                    SEO to <span>drive local customers</span> to your website.
                  </h3>
                  <p>
                    Getting local traffic to your website helps bring you more
                    revenue.
                  </p>
                  <Link to="/seo">
                    Discover
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
                  </Link>
                </Col>
                <Col lg="6">
                  <img
                    src={seoSVG}
                    className="img-fluid"
                    alt="seo provider niagara"
                  />
                </Col>
              </Row>
            </Card>
          </div>
          {/* Digital Strategy */}
          <Card>
            <Row className="item">
              <Col lg="6" className="text-left">
                <h3>
                  Digital strategy to help bring you <span>more revenue</span>.
                </h3>
                <p>
                  Helping you navigate through the digital world to help
                  maximize profits.
                </p>
                <Link to="/strategy">
                  Discover
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
                </Link>
              </Col>
              <Col lg="6">
                <img
                  src={strategySVG}
                  className="img-fluid"
                  alt="digital strategy niagara, st catharines"
                />
              </Col>
            </Row>
          </Card>
        </Container>
      </section>
    </>
  )
}

export default WhatWeDo
