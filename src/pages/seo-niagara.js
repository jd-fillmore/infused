import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import website from "../img/seoo.svg"
import bgImage from "../img/inner-seo.jpg"

import "../pages/services.scss"

const SEO = () => {
  return (
    <>
      <Helmet>
        <title>SEO Niagara | St. Catharines SEO Company</title>
        <meta
          name="description"
          content="Infused Agency specializes in local SEO for Niagara &amp; St. Catharines companies. Click here to get your free quote."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="SEO Company in Niagara, St. Catharines"
        description="Our SEO agency will help your Niagara or St. Catharines company rank on the first page of Google where your customers are"
        bgImage={bgImage}
      />
      <InnerContent>
        <section className="services">
          <Container>
            {/* Websites */}
            <Row>
              <Col lg="12 pd-btm-80">
                <h3>Niagara SEO &amp; St. Catharines SEO Company</h3>
              </Col>
            </Row>
            <Row className="web align-items-center">
              <Col md="4">
                <img
                  src={website}
                  alt="seo niagara, seo company st catharines, niagara seo agency, st catharines seo services"
                />
              </Col>
              <Col lg={{ size: 7, offset: 1 }}>
                <p>
                  The <strong>Niagara SEO</strong> and{" "}
                  <strong>St Catharines SEO services</strong> that our Niagara
                  SEO company provides are pretty impeccable. We consistently
                  provide great SEO services to our clients ith pretty awesome
                  results. There are a lot of benefits as to why SEO services
                  are so important for any local company:
                </p>
                <ul>
                  <li>Bring in more customers through organic search.</li>
                  <li>
                    Creates a trustworthy experience for potential customers.
                  </li>
                  <li>
                    Improves your Niagara / St. Catharines brand's awareness.
                  </li>
                  <li>It's trackable.</li>
                </ul>
                <p>
                  When you utilize SEO services from our company and end up
                  ranking on the first of Google, it's a great way to increase
                  your company's revenue.
                </p>
                <a
                  target="_blank"
                  href="https://calendly.com/infused-agency/project-discovery/"
                >
                  <button>Get Free Quote</button>
                </a>
              </Col>
            </Row>
            <Row className="pd-top-80">
              <Col lg="12">
                <h3>What is SEO?</h3>
                <p>
                  Search Engine Optimization (SEO) is the process of increasing
                  your <Link to="/websites">websites</Link> visibility within
                  Google's search results. If your website is on the first page
                  of Google with our SEO services versus your website being on
                  the 10th page, you will get a lot more customers.
                </p>
                <h3>Do I need SEO?</h3>
                <p>
                  Does your business depend on attracting new customers? Then
                  absolutely you need a Niagara SEO company to help you with SEO
                  services. It's important that our Niagara SEO experts help
                  your website rank where your customers are looking - on the
                  first page of Google.
                </p>
                <h3>What's important when it comes to SEO?</h3>
                <p>
                  There's about 200 ranking signals that Google evaluates a
                  website on when it comes to SEO. The top factors here are
                  domain authority (how old your website's domain is), the
                  quality SEO content of your website, SEO backlinks going to
                  your website, technical SEO coding on your site and more. We
                  will clearly identify the strengths and weaknesses in terms of
                  SEO that your current website has, and come up with a game
                  plan to improve.
                </p>
                <h3>How long does SEO take?</h3>
                <p>
                  There are many variables and depends on the website. For
                  example - a brand new website can take upwards to a year to
                  start seeing any meaningful results. A website that has been
                  around for a longer amount of time could start seeing movement
                  within 2-3 months. It all depends on your website's standing
                  when it comes to SEO.
                </p>
                <h3>How do I get on the Google Map Pack?</h3>
                <p>
                  The Google Map Pack is great for local SEO. This is the area
                  where when someone searches, local companies pop up with 5
                  star reviews. If you do local SEO and get in the top 3 of this
                  map pack, you're golden. The best way to get there is to
                  optimize your Google My Business profile. We specialize in
                  doing so and can help you rise up in the local SEO map pack
                  rankings.
                </p>
                <ul>
                  <li>E-commerce company logo</li>
                  <li>
                    All e-commerce product details - things like product titles,
                    images, descriptions, pricing, etc.
                  </li>
                  <li>Any shipping charges you'd like customers to pay.</li>
                </ul>
                <h3>Our Niagara SEO company is ready to help.</h3>
                <p>
                  If you need our Niagara SEO company to help your company rise
                  in Google with our expert SEO services, click below to get
                  your free SEO quote.
                </p>
                <Link to="/get-started">
                  <button>Free Quote</button>
                </Link>
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

export default SEO
