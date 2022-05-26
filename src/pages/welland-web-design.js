import React from "react"
import Card from "../../components/Card/card"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import website from "../img/welland-web-design-company.webp"
import treeImg from "../img/tree-reports.png"
import kdImg from "../img/niagara-web-design.png"
import cassImg from "../img/featured-seo.png"
import bgImage from "../img/inner-seo.jpg"
import about from "../img/about.jpg"
import About from "../../components/Home/About/about"

import "../pages/services.scss"
import "../pages/seo.scss"

const SEO = () => {
  return (
    <>
      <Helmet>
        <title>Welland Web Design | Best Web Designers - Infused Agency</title>
        <meta
          name="description"
          content="Welland's Best Web Design Company. We design websites aimted to bolster your brand's reputation and increase company sales. Click here for your free quote!"
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Welland Web Design Company"
        description="Infused Agency is an award-winning web design company in Welland. We help businesses bring in more revenue through their websites."
        bgImage={bgImage}
      />
      <InnerContent>
        <section className="seo-page">
          <Container>
            <Row className="web pd-btm-80">
              <Col md="4">
                <img
                  className="img-fluid"
                  src={website}
                  alt="Welland web design company, Welland web design agency, Welland web design services"
                />
              </Col>
              <Col lg={{ size: 7, offset: 1 }}>
                <p>
                  The <strong>Welland web design services</strong> that our{" "}
                  <strong>Welland web design company</strong> provides are
                  pretty impeccable. We consistently provide great web design
                  services to our clients with pretty awesome results. There are
                  a lot of benefits as to why web design services are so
                  important for any local company:
                </p>
                <ul>
                  <li>Helps bolster company branding.</li>
                  <li>
                    Improves your Welland company's reputation and
                    trustworthiness.
                  </li>
                  <li>Leads to more leads and company revenue.</li>
                </ul>
                <p>
                  When you utilize web design services from our company and end
                  up bolstering your company's reputation, it's a great way to
                  gain more customers.
                </p>
              </Col>
            </Row>
          </Container>
          <section className="results">
            <Container>
              <Row>
                <Col lg="12 text-center pd-btm-40">
                  <h2>
                    Our Welland Web Design Clients <span>Get Results</span>
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <div className="card">
                    <img
                      className="img-fluid"
                      src={treeImg}
                      alt="treereports"
                    />
                    <h4>TreeReports</h4>
                    <p>
                      "Fantastic experience from start to end. Infused Agency is
                      organized, thorough and professional. I highly recommend
                      their company if you are thinking of needing their Welland
                      web design services."
                    </p>
                    <ul>
                      <li>
                        <strong>
                          <span>385% increase</span> in being found online
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span>4,000% increase</span> in new website visits
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span>1,500% increase</span> in Google rankings for
                          multiple keywords
                        </strong>
                      </li>
                    </ul>
                    <Link to="/tree-reports">
                      Learn More
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
                  </div>
                </Col>
                <Col lg="4">
                  <div className="card">
                    <img className="img-fluid" src={kdImg} alt="KD Flowers" />
                    <h4>KD Flowers</h4>
                    <p>
                      "Infused Agency drastically improved my online presence.
                      By using their web design services, my Welland company
                      went from having no website at all to one that brings in
                      new customers every week."
                    </p>
                    <ul>
                      <li>
                        <strong>
                          <span>10,700 website views</span> per month
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span>20,000% increase</span> in new leads in the
                          first 6 months
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span>5,800 new people</span> discovering website per
                          month
                        </strong>
                      </li>
                    </ul>
                    <Link to="/kd-florist">
                      Learn More
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
                  </div>
                </Col>
                <Col lg="4">
                  <div className="card">
                    <img
                      className="img-fluid"
                      src={cassImg}
                      alt="Cass-A-Bella Construction"
                    />
                    <h4>Cass-A-Bella Construction</h4>
                    <p>
                      "Great Job, WELL DONE. I'm very pleased with the SEO work
                      on my new web site. If you ever need a web design for your
                      Welland business I do recommend Infused Agency for their
                      services. JD keep up the great work. Thank you."
                    </p>
                    <ul>
                      <li>
                        <strong>
                          <span>12,000 photo views</span> per month
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span>13,000% increase</span> in new leads in first 6
                          months
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span>2,500 new people</span> discovering website per
                          month
                        </strong>
                      </li>
                    </ul>
                    <Link to="/cass-a-bella-construction">
                      Learn More
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
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="call-out">
            <Container>
              <Row>
                <Col lg="12 text-center">
                  <h3>
                    Ready to grow your business with top Welland web design
                    services?
                  </h3>
                  <p>Click the button below to get your free quote.</p>
                  <a
                    target="_blank"
                    href="https://calendly.com/infused-agency/project-discovery/"
                  >
                    <button>Get Free Quote</button>
                  </a>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="seo-services">
            <Container>
              <Row className="pd-top-80 pd-btm-40">
                <Col lg="12 text-center">
                  <h2>
                    Welland <span>Web Design</span> Services
                  </h2>
                  <p>Websites That Help Your Company Bring In More Customers</p>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <h5>Search Engine Optimization (SEO)</h5>
                  <p>
                    We make sure that your websites are indexed and show up for
                    certain keywords in Google. Search engine optimization is a
                    key part of our Welland web design services to help make
                    sure that your customers can find your website. When using
                    our Welland web design experts and{" "}
                    <Link to="/welland-seo-company/">Welland SEO services</Link>
                    , your website should help bring in new company revenue and
                    customers.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Web Design &amp; Development</h5>
                  <p>
                    Our Welland web designers create websites that bolster your
                    brand's reputation, which help bring in more customers. Our
                    websites not only attract customers, our award-winning web
                    designs take into account search engine optimization and
                    responsive web design best practices to help increase brand
                    awareness.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Custom Web Design</h5>
                  <p>
                    Every client website we design is custom. Our Welland web
                    designers will create a modern website design for you,
                    taking into consideration your business goals. We make sure
                    to plug in your vision that factors into our Welland web
                    design experts’ design process.{" "}
                  </p>
                </Col>
              </Row>
              <Row className="pd-btm-80">
                <Col lg="4">
                  <h5>Responsive Web Design</h5>
                  <p>
                    We conduct responsive web design as part of our Welland web
                    design services to help your users navigate your website on
                    any device. Our Welland web design experts specifically
                    develop with custom code to allow your website to look great
                    on any device or computer.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>WordPress Web Design</h5>
                  <p>
                    Our web design company in Welland uses WordPress for all
                    website projects that require a content management system
                    (CMS). Since WordPress powers nearly 50% of the web, it's a
                    clear winner when it comes to choosing a CMS. We choose
                    WordPress as it's easy to develop with and easy for our
                    clients to use.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>E-Commerce Web Design</h5>
                  <p>
                    In the post-covid world, it's especially important as a
                    product or subscription-based business to have an e-commerce
                    website. With the help of our Welland web design agency,
                    your e-commerce website can help sell your products online,
                    expanding your reach drastically. Leave it to our Welland
                    web designers to help design and develop a beautiful, modern
                    online store.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="call-out">
            <Container>
              <Row>
                <Col lg="12 text-center">
                  <h3>Have Our Welland Web Design Experts Help Today</h3>
                  <p>Click the button below to get your free quote.</p>
                  <a
                    target="_blank"
                    href="https://calendly.com/infused-agency/project-discovery/"
                  >
                    <button>Get Free Quote</button>
                  </a>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="seo-why pd-top-80">
            <Container>
              <Row>
                <Col lg="12 text-center pd-btm-40">
                  <h2>
                    Why Choose Infused Agency As Your <span>Welland</span> Web
                    Design Agency
                  </h2>
                  <p>
                    Increase Your Brand's Reputation With Our Web Design Experts
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <p>
                    Since 2013 we've been able to help countless local Welland
                    businesses (and beyond!) with their{" "}
                    <Link to="/web-design">website design</Link>,{" "}
                    <Link to="/digital-marketing-niagara">
                      digital marketing
                    </Link>
                    ,{" "}
                    <Link to="/Welland-seo-company/">
                      search engine optimization (SEO)
                    </Link>{" "}
                    ,{" "}
                    <Link to="/wordpress-developer-niagara">
                      WordPress development
                    </Link>{" "}
                    and{" "}
                    <Link to="/ecommerce-web-design-niagara">
                      e-commerce website development
                    </Link>
                    .
                  </p>
                  <p>
                    We've been able to help small, local businesses all the way
                    to large enterprise companies with increasing traffic to
                    their websites, build modern websites for them and
                    ultimately bringing them more revenue through digital
                    channels.
                  </p>
                </Col>
                <Col lg="6">
                  <img className="img-fluid" src={about} alt="business needs" />
                </Col>
              </Row>
            </Container>
          </section>
          <Container>
            <Row className="pd-top-80 pd-btm-60">
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
          <About
            city="Welland"
            intro={[
              "The Regional Municipality of ",
              <a href="https://www.welland.ca/">Welland</a>,
              " is located directly in the centre of the heart of the Niagara region, within a half-hour distance of driving to Niagara Falls. Traditionally it's known to be the place 'where rails and water meet'. This is referring toe the waterways of the Welland Canal and the Welland River.",
            ]}
            area="81.04"
            population="52,293"
            topSights={[
              <a href="http://www.niagarawellandcanal.com/">Welland Canal</a>,
              ", ",
              <a href="https://www.wellandmuseum.ca/">Welland Museum</a>,
              ", ",
              <a href="https://www.tripadvisor.ca/Attraction_Review-g181735-d11753746-Reviews-Chippawa_Park-Welland_Ontario.html">
                Welland Park
              </a>,
            ]}
            qOne="What is Welland known for?"
            qOneAns="It's been historically known as the place where rails and water meet, which refers to the railways from Buffalo to Toronto and the waterways of Welland Canal the Welland River."
            qTwo="Is Welland a good place to live?"
            qTwoAns="Welland had made MacLean's 2021 list of the best places to live in Canada. The ability to work from home was heavily taken into account."
            qThree="Is Welland poor?"
            qThreeAns="Although it's stereotypical, most people that live in Welland are above the low-income cut off area. The majority of people living in Welland are above the 2016 national median income."
            qFour="Why is Welland called the Rose City?"
            qFourAns="There's an abunance of roses grown locally within the Welland area. This is the reason why Welland is referred to as the Rose City."
            mapURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93404.86381712716!2d-79.29982875026296!3d42.980338098531114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d349cb1aaf497d%3A0xb6a05855226db6e6!2sWelland%2C%20ON!5e0!3m2!1sen!2sca!4v1652793794737!5m2!1sen!2sca"
          />
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  )
}

export default SEO
