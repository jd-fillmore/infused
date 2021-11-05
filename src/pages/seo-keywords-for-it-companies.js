import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

import img from "../img/seo-keywords-for-it-companies.jpg"
import Card from "../../components/Card/card"
import "../pages/about.scss"

const About = () => {
  return (
    <>
      <Helmet>
        <title>Best SEO Keywords for IT Companies</title>
        <meta
          name="description"
          content="The best SEO keywords for IT companies and how we can help you integrate them into your marketing strategy."
        />
      </Helmet>
      <Nav />
      <InnerHero title="Best SEO Keywords for IT companies" />
      <InnerContent>
        <section className="seo-page">
          <Container>
            <Row>
              <Col lg="12">
                <img
                  className="img-fluid"
                  src={img}
                  alt="best seo keywords for IT companies"
                />
                <br />
                <br />
                <br />
                <p>
                  A big part in finding the best SEO keywords for IT companies
                  comes down to a couple things:
                </p>
                <ul>
                  <li>
                    What are your customers searching for, in terms of your IT
                    Companies company?
                  </li>
                  <li>What city are you located in?</li>
                </ul>
                <p>
                  Since local <Link to="/seo">search engine optimization</Link>{" "}
                  is going to be so huge for you as a IT companies (since you
                  offer a local service), it's super important to build an SEO
                  keyword <Link to="/digital-strategy">digital strategy</Link>{" "}
                  for your business.{" "}
                </p>
                <p>
                  The entire point of SEO is inbound marketing - that is, to
                  bring clients that are looking for what you offer, directly to
                  you. SEO for a IT companies works so well because even when
                  times are tough - recessions, slow times - it doesn't matter.
                  You're tapping into a market that's outside of your network
                  (people you don't know), who are looking for exactly what you
                  offer.
                </p>
                <p>
                  <strong>
                    Some of the best keywords for IT companies are:
                  </strong>
                  <br />
                  <br />
                  <ul>
                    <li>"your city + IT company"</li>
                    <li>"your city + IT services company" </li>
                    <li>"your city + consulting IT companies"</li>
                    <li>"your city + software IT companies"</li>
                    <li>"IT companies near me"</li>
                    <li>
                      "best IT companies + your city" or "best software IT
                      companies + your city"
                    </li>
                  </ul>
                  <p>
                    Lets go a bit indepth below and understand why those are the
                    best keywords for your IT company.
                  </p>
                </p>
                <br />
                <Card>
                  <h3 className="text-center">
                    Want your IT company website to rank on the first page of
                    Google?
                  </h3>
                  <a
                    className="text-center"
                    target="_blank"
                    href="https://calendly.com/infused-agency/project-discovery/"
                  >
                    <strong>Get Free Quote</strong>
                  </a>
                </Card>
                <h2>So.. what are the best SEO keywords for IT companies?</h2>
                <p>
                  In this short post, we'll go through some SEO keyword ideas
                  that are the best to use for IT companies.
                </p>
                <h2>"City + IT company"</h2>
                <p>
                  You'll notice a pattern as we go through these keywords.
                  <br />
                  <br />
                  Since most IT companies deal with clients locally, you will
                  want to target local people that are searching for your
                  services.
                  <br />
                  <br />
                  If you're in Toronto, you want to show up when someone
                  searches "Toronto IT companies" or "IT companies Toronto".
                  <br />
                  <br />
                  If you're in Los Angeles, "IT companies LA" or "Los Angeles IT
                  Companies".
                  <br />
                  <br />
                  These are a bit harder to rank for, because they're such
                  generic terms. Not to mention, since every other IT company is
                  using SEO to try and rank for that keyword, it's super
                  competitive.
                  <br />
                  <br />
                  Which leads us to something called a long-tail keyword.
                </p>
                <h2>"City + IT services company"</h2>
                <p>
                  Long tail keywords are usually phrases of four or more words.
                  <br />
                  <br />
                  These are so much easier to rank for in Google because they're
                  longer phrases, therefore they're less competitive in nature.
                  <br />
                  <br />
                  Below, we'll dive even deeper or go into what's known as
                  "buyer's intent" when it comes to searching.
                </p>
                <h2>"City + consulting IT companies"</h2>
                <p>
                  Here, people Google not only for an IT company within their
                  city.. but a specific type. A consulting IT company. See how
                  much more specific, and with that more intention of buying
                  this phrase entails?
                  <br />
                  <br />
                  It's been proven that the more specific that a search term is,
                  the more intent there is for a person to buy.
                </p>
                <h2>"City + software IT companies"</h2>
                <p>
                  You can see the same sort of effect being played out above.
                  <br />
                  <br />
                  I'm in Toronto (City) looking to for a software IT company.
                  <br />
                  <br />
                  The more specific the search, the more ready-to-buy your
                  customers are.
                </p>
                <h2>
                  "IT companies near me" or "software IT companies near me"
                </h2>
                <p>
                  This one is a bit funny.
                  <br />
                  <br />A lot of people surprisingly use this search term. It's
                  pretty difficult to rank for - but if you can, you're tapping
                  into a fairly large market of people using SEO to search for
                  what you offer.
                </p>
                <h2>
                  "Best IT companies + city" or "best software IT companies +
                  city"
                </h2>
                <p>
                  Not only is there intent in this search, but you know they're
                  not tire kickers.
                  <br />
                  <br />
                  When someone uses words like "Best", you know that they know
                  that with that, comes money to spend. Which is great for you.
                  In conclusion, these are some of the best SEO keywords for IT
                  Companies.
                </p>
                <br />
                <Card>
                  <h3 className="text-center">
                    Want your IT company website to rank on the first page of
                    Google?
                  </h3>
                  <a
                    className="text-center"
                    target="_blank"
                    href="https://calendly.com/infused-agency/project-discovery/"
                  >
                    <strong>Get Free Quote</strong>
                  </a>
                </Card>
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

export default About
