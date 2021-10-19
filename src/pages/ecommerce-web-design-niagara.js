import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import website from "../img/add-to-cart.png"
import bgImage from "../img/inner-ecomm.jpg"

import "../pages/services.scss"

const ECommerce = () => {
  return (
    <>
      <Helmet>
        <title>E-Commerce Website Development Niagara, St. Catharines</title>
        <meta
          name="description"
          content="Infused Agency does e-commerce website development &amp; web design in Niagara &amp; St. Catharines. Click here to get your free quote."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="E-Commerce Website Development Niagara, St. Catharines"
        description="Our E-Commerce website development agency will help your Niagara or St. Catharines company sell online"
        bgImage={bgImage}
      />
      <InnerContent>
        <section className="services">
          <Container>
            {/* Websites */}
            <Row>
              <Col lg="12 pd-btm-80">
                <h3>
                  Niagara &amp; St. Catharines E-Commerce Web Design &amp;
                  Development
                </h3>
              </Col>
            </Row>
            <Row className="web align-items-center">
              <Col md="4">
                <img
                  src={website}
                  alt="E-Commerce Website Development Niagara, St. Catharines E-Commerce Web
                  Design"
                />
              </Col>
              <Col lg={{ size: 7, offset: 1 }}>
                <p>
                  Our <strong>Niagara e-commerce website development</strong>{" "}
                  &amp; design experts are skilled at building out local
                  e-commerce websites. There are many advantages to having your
                  own e-commerce website developed by our{" "}
                  <strong>St. Catharines e-commerce web design</strong> experts:
                </p>
                <ul>
                  <li>
                    Much lower cost to setup an e-commerce website versus a
                    physical location.
                  </li>
                  <li>
                    Your e-commerce web design is able to reach the masses.
                  </li>
                  <li>
                    Ease of product management when it comes to your e-commerce
                    website.
                  </li>
                  <li>
                    There's no need to invest in a physical warehouse when your
                    e-commerce website does it for you.
                  </li>
                </ul>
                <p>
                  The ability to increase your company's revenue with having an
                  online e-commerce website developed is great for your brand.
                  It gives your brand more exposure and also brings more revenue
                  in the door.
                </p>
                <Link to="/get-started">
                  <button>Free Quote</button>
                </Link>
              </Col>
            </Row>
            <Row className="pd-top-80">
              <Col lg="12">
                <h3>
                  What's the cost for Niagara e-commerce website development
                  services?
                </h3>
                <p>
                  Like any <Link to="/websites">website</Link>, the cost can
                  wildly vary. This depends on a lot of factors for your Niagara
                  e-commerce website development project. How many products will
                  you have? Is it a product-based or digital download-based
                  e-commerce website development project? Are you shipping
                  overseas or staying within Niagara / St. Catharines? Do you
                  need a POS e-commerce integration? All of these variables can
                  affect the cost of your e-commerce web design and development
                  project.
                </p>
                <h3>
                  Can your developers train us on how to add, edit and delete
                  products?
                </h3>
                <p>
                  Yes. Our Niagara e-commerce website developers are personable
                  and very skilled when it comes to training our clients on how
                  to use their e-commerce websites.
                </p>
                <h3>What platform do you use for e-commerce websites?</h3>
                <p>
                  We use WordPress when it comes to e-commerce web design and
                  development. It comes packed with feature-rich e-commerce
                  plugins, which helps speed things up for our e-commerce
                  website developers.
                </p>
                <h3>What do you need from us to get started?</h3>
                <p>
                  Getting your e-commerce website content upfront would help our
                  e-commerce developers tremendously. Some of the things we
                  would need upfront for your e-commerce website development
                  project would be:
                </p>
                <ul>
                  <li>E-commerce company logo</li>
                  <li>
                    All e-commerce product details - things like product titles,
                    images, descriptions, pricing, etc.
                  </li>
                  <li>Any shipping charges you'd like customers to pay.</li>
                </ul>
                <p>
                  For more questions regarding a new website project, please{" "}
                  <Link to="/web-design">click here.</Link>
                </p>
                <h3>
                  Our Niagara &amp; St. Catharines e-commerce website
                  development experts are ready to help.
                </h3>
                <p>
                  If you need our agency e-commerce web design experts to work
                  with you and help design and develop your e-commerce website,
                  click below to get your free e-commerce web design and
                  development quote.
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

export default ECommerce
