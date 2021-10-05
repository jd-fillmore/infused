import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "reactstrap"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import checkImg from "../img/check.png"
import searchImg from "../img/google.png"
import userImg from "../img/user.png"
import digImg from "../img/digital-strategy.svg"

import "../pages/digital-marketing.scss"

const DigitalStrategy = () => {
  return (
    <>
      <Helmet>
        <title>Digital Marketing - Infused</title>
        <meta
          name="description"
          content="We help with identifying your digital goals, target audience & brand positioning."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Digital Marketing"
        description="We help bring in more traffic through Facebook Ads and Instagram Ads."
      />
      <InnerContent>
        <section className="strategy">
          <Container className="intro">
            <Row className="text-center">
              <Col lg="4">
                <img
                  className="img-width"
                  src={searchImg}
                  alt="Identify your digital business goals"
                />
                <p>Identify your business goals</p>
              </Col>
              <Col lg="4">
                <img
                  className="img-width"
                  src={userImg}
                  alt="Identify your target audience"
                />
                <p>Identify your target audience</p>
              </Col>
              <Col lg="4">
                <img
                  className="img-width"
                  src={checkImg}
                  alt="more traffic and sales"
                />
                <p>Position for success</p>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="pad align-items-center">
              <Col lg="5">
                <img
                  className="img-fluid"
                  src={digImg}
                  alt="digital strategy"
                />
              </Col>
              <Col lg="7">
                <h3>Digital Ads for Facebook and Instagram</h3>
                <p>
                  Having a website built is half the battle. But how good is it
                  if there's no traffic coming to to it?
                </p>
                <h4>Establishing Your Budget and Target Market</h4>
                <p>
                  This step is crucial for success. Before we design or deploy
                  any ads, we must figure out who your target market, what
                  interests they may have and where they live.
                </p>
                <h4>Creating Digital Ads for Facebook and / or Instagram</h4>
                <p>
                  Based on your budget and target market, our experts will help
                  in designing and deploying Facebook and / or Instagram ads
                  that laser-target and speak to your market. Through this
                  process, the goal is to bring your business more traffic or
                  leads depending on your business goals.
                </p>
                <h4>Analyzing Performance</h4>
                <p>
                  Based on how your ads perform, we will suggest improvements
                  that we can make to said ads if need be, to help them perform
                  better. A/B testing is crucial to see which ads perform
                  better.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  )
}

export default DigitalStrategy
