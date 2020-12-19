import React from "react"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import increaseImg from "../img/increase.png"
import searchImg from "../img/google.png"
import mapImg from "../img/map.png"
import featuredImg from "../img/featured-seo.png"
import Featured from "../../components/Home/Featured/featured"

import "../pages/seo.scss"

const LocalSEO = () => {
  return (
    <>
      <Helmet>
        <title>SEO - Infused</title>
        <meta
          name="description"
          content="Check out how Infused offers and utilizes their SEO expertise to help local businesses get more customers through Google."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Local SEO"
        description="We help local businesses rank in the place where their customers are looking - on the first page of Google."
      />
      <InnerContent>
        <section className="websites">
          <Container className="intro">
            <Row className="text-center">
              <Col lg="4">
                <img
                  className="img-width"
                  src={searchImg}
                  alt="rank high in google"
                />
                <p>Show up in Google Search</p>
              </Col>
              <Col lg="4">
                <img className="img-width" src={mapImg} alt="google maps" />
                <p>Show up in Google Maps</p>
              </Col>
              <Col lg="4">
                <img
                  className="img-width"
                  src={increaseImg}
                  alt="more traffic and sales"
                />
                <p>More traffic &amp; sales</p>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col lg="12">
                <br />
                <br />
                <p>Industries we serve</p>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <ul>
                  <li>
                    <Link to="/seo-keywords-for-accountants">Accountants</Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-addiction-treatment">
                      Addiction Treatment Centers
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-architects">Architects</Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-atv-dealers">ATV Dealers</Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-auto-glass-shops">
                      Auto Glass Shops
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-bakeries">Bakeries</Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-boating-companies">
                      Boating Companies
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-bookkeeping">Bookkeeping</Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-breweries">Breweries</Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-cabinet-makers">
                      Cabinet Makers
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-carpenters">Carpenters</Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-chiropractors">
                      Chiropractors
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-closet-designers">
                      Closet Designers
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-commercial-cleaning">
                      Commercial Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-construction-companies">
                      Construction Companies
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-cottage-rentals">
                      Cottage Rentals
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-country-clubs">
                      Golf &amp; Country Clubs
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-custom-home-builders">
                      Custom Home Builders
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-deck-builders">
                      Deck Builders
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-dentists">Dentists</Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-dermatoligists">
                      Dermatoligists
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-dock-builders">
                      Dock Builders
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-dog-sitters">Dog Sitters</Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-dog-trainers">
                      Dog Trainers
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-door-suppliers">
                      Door Suppliers
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg="6">
                <ul>
                  <li>
                    <Link to="/seo-keywords-for-electricians">
                      Electricians
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-estate-planners">
                      Estate Planners
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-event-planners">
                      Event Planners
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-estate-planners">
                      Estate Planners
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-financial-advisors">
                      Financial Advisors
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-fire-protection">
                      Fire Protection
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-flooring">Flooring</Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-garage-door-repair">
                      Garage Door Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-hvac">HVAC</Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-it-companies">
                      IT Companies
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-landscapers">Landscapers</Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-lawyers">Lawyers</Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-mechanics">Mechanics</Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-moving-companies">
                      Moving Companies
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-pest-control">
                      Pest Control
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-pool-builders">
                      Pool Builders
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-roofers">Roofers</Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-rv-dealers">RV Dealers</Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-salons">Salons</Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-solar-companies">
                      Solar Companies
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-spas">Spas</Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-tree-service-arborists">
                      Tree Service Arborists
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-wedding-venues">
                      Wedding Venues
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-wineries">Wineries</Link>
                  </li>
                  <li>
                    <Link to="/seo-keywords-for-yoga-studios">
                      Yoga Studios
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <Featured
        title="Our SEO Strategies Help Bring In Sales"
        subTitle={[
          "Take a look and see the ",
          <span>huge difference</span>,
          "we've made to Cass-A-Bella's online existence.",
        ]}
        viewsValue="12,000"
        viewsText="photo views per month"
        leadsValue="13,000%"
        leadsText="increase in new leads in first 6 months"
        peopleValue="2,500"
        peopleText="people discovering website per month"
        img={featuredImg}
        imgAlt="local seo featured client"
        testimonial="Great Job, WELL DONE. I'm very pleased with the service and
        the design of my new web site. If you ever need a new web site or SEO
        I do recommend Infused Agency for their services. Keep up
        the great work. Thank you."
        btnText="View More Case Studies"
        btnLink="/work"
      />
      <CTA />
      <Footer />
    </>
  )
}

export default LocalSEO
