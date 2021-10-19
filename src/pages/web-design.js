import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import website from "../img/responsive.svg"
import bgImage from "../img/inner-web-design.jpg"

import "../pages/services.scss"

const WebDesign = () => {
  return (
    <>
      <Helmet>
        <title>Web Design &amp; Development - Infused</title>
        <meta
          name="description"
          content="Infused Agency offers web design and development services for companies in St. Catharines and Niagara. Click here to get your free quote."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Web Design &amp; Development"
        description="We design and build websites that blow away your competition visually and SEO-wise"
        bgImage={bgImage}
      />
      <InnerContent>
        <section className="services">
          <Container>
            {/* Websites */}
            <Row className="web align-items-center">
              <Col md="4">
                <img src={website} alt="local web design and development" />
              </Col>
              <Col lg={{ size: 7, offset: 1 }}>
                <p>
                  We make websites that will beat out your competition in the
                  following areas:
                </p>
                <ul>
                  <li>Secure</li>
                  <li>Lighting fast</li>
                  <li>Optimized for users</li>
                  <li>Bring you more revenue</li>
                </ul>
                <p>
                  We hand-code websites as it allows for precision in design,
                  development, and rids of the bloated mess of code page
                  builders generate. A secure, optimized, lightning fast website
                  leads to a better experience for your users. The better the
                  experience, the more revenue for you.
                </p>
                <Link to="/get-started">
                  <button>Free Quote</button>
                </Link>
              </Col>
            </Row>
            <Row className="pd-top-80">
              <Col lg="12">
                <h3>How much does a new website cost?</h3>
                <p>
                  There's no single answer to this question. It entirely depends
                  on the needs of the project. Every web design and development
                  project is unique in it's design, purpose, functionality and
                  more. In our free consultation sessions we'll ask lots of
                  questions, assess your needs and then give you a quote based
                  on our findings.
                </p>
                <h3>How long will it take to get a new website?</h3>
                <p>
                  Typically between 6 and 8 weeks. Keep in mind this completely
                  depends on the client, though. For example - if we need
                  content or approval from you and there are potential delays,
                  this could delay the launch. However if you send over content
                  / approval for things along the way quickly, the more quick
                  your website will launch.
                </p>
                <h3>Do you only create WordPress websites?</h3>
                <p>
                  No. WordPress is great for a lot of use cases. You can update
                  your website on your own without needing a developer (we teach
                  you). There's a rich ecosystem of plugins we utilize to speed
                  up development. However, sometimes a hand-coded website far
                  outperforms a WordPress site depending on the situation.
                </p>
                <h3>Do I have to be local to work with you?</h3>
                <p>
                  Nope! We have clients locally but have also served clients all
                  across the world.
                </p>
                <h3>
                  Will I be able to update the website when it's finished?
                </h3>
                <p>
                  If it's a WordPress website, yes. If it's not, our team of
                  developers can update the website for you.
                </p>
                <h3>Can you maintain my website for me?</h3>
                <p>
                  Absolutely. We understand that business owners are busy a lot
                  of the time. We can take that stress off of you by updating
                  your website for you.
                </p>
                <h3>Will my website be mobile-friendly?</h3>
                <p>
                  Of course. Responsive design, aka mobile websites, are a big
                  part of today's society. We make sure to adhere to that so
                  your customers have a pleasant experience on your website.
                </p>
                <h3>When do I pay?</h3>
                <p>
                  Equal payments are made at the start, midway through and at
                  the end of the project.However we can accomodate with smaller
                  monthly payments if need be. We accept e-transfer, cash or
                  credit card payments.
                </p>
                <h3>How much input do I have?</h3>
                <p>
                  Lots! We work with our clients very closely. We make sure that
                  based on our conversations, there are no surprises when it
                  comes to how your website looks or functions.
                </p>
                <h3>Do I provide the content for my website?</h3>
                <p>
                  Yes. You're the expert of your business so typically it's you
                  that provides it. If you don't want to or can't, we will
                  happily write the content at an additional cost.
                </p>
                <h3>What about website hosting?</h3>
                <p>
                  We have a list of favourites hosting providers that we use.
                  During our free consultation we can talk about these
                  providers.
                </p>
                <h3>What if I need help after my site is live?</h3>
                <p>
                  We're only an email away! Contact us any time and we can help
                  you with whatever you need.
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

export default WebDesign
