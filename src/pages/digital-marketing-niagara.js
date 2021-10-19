import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import website from "../img/dm.svg"
import bgImage from "../img/inner-dm.jpg"

import "../pages/services.scss"

const SEO = () => {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency Niagara, St. Catharines</title>
        <meta
          name="description"
          content="Infused Agency is the best digitial marketing agency in Niagara &amp; St. Catharines to help your company. Click here to get your free quote."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Digital Marketing Agency in Niagara, St. Catharines"
        description="Our digital marketing agency will help your Niagara or St. Catharines company driving traffic and convert leads through your website"
        bgImage={bgImage}
      />
      <InnerContent>
        <section className="services">
          <Container>
            {/* Websites */}
            <Row>
              <Col lg="12 pd-btm-80">
                <h3>Digital Marketing Agency in Niagara, St. Catharines</h3>
              </Col>
            </Row>
            <Row className="web align-items-center">
              <Col md="4">
                <img
                  src={website}
                  alt="digital marketing agency niagara, st catharines digital marketing agency"
                />
              </Col>
              <Col lg={{ size: 7, offset: 1 }}>
                <p>
                  As a top <strong>digital marketing agency in Niagara</strong>,
                  we believe it's very important for your business to drive
                  website traffic from all over to your website and convert into
                  paying customers. There are a lot of benefits as to why using
                  our St. Catharines digital marketing agency can help your
                  Niagara business succeed online:
                </p>
                <ul>
                  <li>
                    Bring in more customers through paid social media marketing
                    ads.
                  </li>
                  <li>
                    Create sales funnels to pull users into your services.
                  </li>
                  <li>Consistently advertise to new and current customers.</li>
                  <li>It's trackable.</li>
                </ul>
                <p>
                  When you utilize our Niagara digital marketing agency
                  services, you'll notice a spike in traffic and customers. It's
                  a fantastic way to increase your company's revenue.
                </p>
                <Link to="/get-started">
                  <button>Free Quote</button>
                </Link>
              </Col>
            </Row>
            <Row className="pd-top-80">
              <Col lg="12">
                <h3>What is digital marketing?</h3>
                <p>
                  Digital marketing is the process of a company leverage digital
                  channels to bring in new business directly through your
                  <Link to="/websites">website</Link>. Companies can leverage
                  things like <Link to="/seo">search engine optimization</Link>,
                  Facebook ads, Instagram ads,
                </p>
                <h3>Is digital marketing important?</h3>
                <p>
                  Yes. It helps businesses reach a larger audience than what was
                  previously possible using traditional methods. You're also
                  able to laser-target specifically who you want to advertise
                  to. Not only that, it's a lot more affordable than say,
                  advertising on a billboard (which you can't target your
                  audience, and you can't track who sees it). Our Niagara
                  digital marketing agency can help you laser-focus on your
                  audience.
                </p>
                <h3>What's the role of digital marketing in a company?</h3>
                <p>
                  With traditional marketing, it would exist in mediums such as
                  print ads, cold calling or any other form of physical
                  marketing. With using our St. Catharines digital marketing
                  agency, this occurs all online. With that being so, there's
                  simply much more potential for our Niagara digital marketing
                  agency to help you reach a marge larger audience than you
                  would so doing offline.
                </p>
                <h3>What type of digital marketing do you do?</h3>
                <p>
                  While there are many types of digital marketing services that
                  any agency can do for another company, our digital marketing
                  agency in Niagara focuses on search engine optimization (SEO),
                  email marketing and social media marketing (Instagram ads,
                  Facebook ads). We've found these types of digital marketing
                  services to be the most effective for our Niagara and St.
                  Catharines clients.
                </p>
                <h3>
                  Our digital marketing agency in Niagara is ready to help.
                </h3>
                <p>
                  Need our Niagara digital marketing agency to help your
                  business? Click below to get your free digital marketing
                  quote.
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
