import React from "react"
import Link from "next/link"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import website from "../img/crystal-beach-web-design-company.webp"
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
        <title>
          Crystal Beach Web Design Company | Top Web Designers - Infused Agency
        </title>
        <meta
          name="description"
          content="Crystal Beach's Best Web Design Company. We design websites aimted to bolster your brand's reputation and increase company sales. Click here for your free quote!"
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Crystal Beach Web Design Company"
        description="Infused Agency is an award-winning web design company in Crystal Beach. We help businesses bring in more revenue through their websites."
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
                  alt="Crystal Beach web design company, Crystal Beach web design agency, Crystal Beach web design services"
                />
              </Col>
              <Col lg={{ size: 7, offset: 1 }}>
                <p>
                  The <strong>Crystal Beach web design services</strong> that
                  our <strong>Crystal Beach web design company</strong> provides
                  are pretty impeccable. We consistently provide great web
                  design services to our clients with pretty awesome results.
                  There are a lot of benefits as to why web design services are
                  so important for any local company:
                </p>
                <ul>
                  <li>Helps bolster company branding.</li>
                  <li>
                    Improves your Crystal Beach company's reputation and
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
                    Our Crystal Beach Web Design Clients{" "}
                    <span>Get Results</span>
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
                      their company if you are thinking of needing their Crystal
                      Beach web design services."
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
                    <Link href="/tree-reports">
                      Learn More
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
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
                      By using their web design services, my Crystal Beach
                      company went from having no website at all to one that
                      brings in new customers every week."
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
                    <Link href="/kd-florist">
                      Learn More
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
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
                      Crystal Beach business I do recommend Infused Agency for
                      their services. JD keep up the great work. Thank you."
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
                    <Link href="/cass-a-bella-construction">
                      Learn More
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
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
                    Ready to grow your business with top Crystal Beach web
                    design services?
                  </h3>
                  <p>Click the button below to get your free quote.</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
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
                    Crystal Beach <span>Web Design</span> Services
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
                    key part of our Crystal Beach web design services to help
                    make sure that your customers can find your website. When
                    using our Crystal Beach web design experts and{" "}
                    <Link href="/crystal-beach-seo-company/">
                      Crystal Beach SEO services
                    </Link>
                    , your website should help bring in new company revenue and
                    customers.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Web Design &amp; Development</h5>
                  <p>
                    Our Crystal Beach web designers create websites that bolster
                    your brand's reputation, which help bring in more customers.
                    Our websites not only attract customers, our award-winning
                    web designs take into account search engine optimization and
                    responsive web design best practices to help increase brand
                    awareness.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Custom Web Design</h5>
                  <p>
                    Every client website we design is custom. Our Crystal Beach
                    web designers will create a modern website design for you,
                    taking into consideration your business goals. We make sure
                    to plug in your vision that factors into our Crystal Beach
                    web design experts’ design process.{" "}
                  </p>
                </Col>
              </Row>
              <Row className="pd-btm-80">
                <Col lg="4">
                  <h5>Responsive Web Design</h5>
                  <p>
                    We conduct responsive web design as part of our Crystal
                    Beach web design services to help your users navigate your
                    website on any device. Our Crystal Beach web design experts
                    specifically develop with custom code to allow your website
                    to look great on any device or computer.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>WordPress Web Design</h5>
                  <p>
                    Our web design company in Crystal Beach uses WordPress for
                    all website projects that require a content management
                    system (CMS). Since WordPress powers nearly 50% of the web,
                    it's a clear winner when it comes to choosing a CMS. We
                    choose WordPress as it's easy to develop with and easy for
                    our clients to use.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>E-Commerce Web Design</h5>
                  <p>
                    In the post-covid world, it's especially important as a
                    product or subscription-based business to have an e-commerce
                    website. With the help of our Crystal Beach web design
                    agency, your e-commerce website can help sell your products
                    online, expanding your reach drastically. Leave it to our
                    Crystal Beach web designers to help design and develop a
                    beautiful, modern online store.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="call-out">
            <Container>
              <Row>
                <Col lg="12 text-center">
                  <h3>Have Our Crystal Beach Web Design Experts Help Today</h3>
                  <p>Click the button below to get your free quote.</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
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
                    Why Choose Infused Agency As Your <span>Crystal Beach</span>{" "}
                    Web Design Agency
                  </h2>
                  <p>
                    Increase Your Brand's Reputation With Our Web Design Experts
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <p>
                    Since 2013 we've been able to help countless local Crystal
                    Beach businesses (and beyond!) with their{" "}
                    <Link href="/web-design">website design</Link>,{" "}
                    <Link href="/digital-marketing-niagara">
                      digital marketing
                    </Link>
                    ,{" "}
                    <Link href="/Crystal-Beach-seo-company/">
                      search engine optimization (SEO)
                    </Link>{" "}
                    ,{" "}
                    <Link href="/wordpress-developer-niagara">
                      WordPress development
                    </Link>{" "}
                    and{" "}
                    <Link href="/ecommerce-web-design-niagara">
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
            city="Crystal Beach"
            intro={[
              "The Regional Municipality of ",
              <a href="https://en.wikipedia.org/wiki/Crystal_Beach,_Ontario">
                Crystal Beach
              </a>,
              " is a lakefront local area in Fort Erie, Ontario, Canada. Starting around 2016, it had a populace of 8,524. It was named for the completely clear water conditions present when it was established on the upper east shore of Lake Erie, opposite Buffalo.",
            ]}
            area="11.34"
            population="8,524"
            topSights={[
              <a href="https://www.tripadvisor.ca/Attraction_Review-g154987-d15635651-Reviews-Last_Chance_Horse_and_Pony_Rescue-Crystal_Beach_Fort_Erie_Ontario.html">
                Last Chance Horse and Pony Rescue
              </a>,
              ", ",
              <a href="https://www.tripadvisor.ca/Attraction_Review-g154987-d1903803-Reviews-Bay_Beach-Crystal_Beach_Fort_Erie_Ontario.html">
                Bay Beach
              </a>,
              ", ",
              <a href="https://www.tripadvisor.ca/Attraction_Review-g154987-d23376482-Reviews-Pop_Up_Paddle_Co-Crystal_Beach_Fort_Erie_Ontario.html">
                Pop Up Paddle Co.
              </a>,
            ]}
            qOne="Can you swim in Crystal Beach?"
            qOneAns="Most of the time. It depends on the day, but most days if the water is safe, you can swim at Crystal Beach."
            qTwo="Do you have to pay to get into Crystal Beach?"
            qTwoAns="The limit furthest reaches of Crystal Beach is (1700). Occupant and Commercial pass holders will actually want to get to the ocean side paying little mind to limit levels. The Crystal Beach day pass charges are $5 (Monday to Thursday) and $10 per individual (Friday to Sunday, including occasions)."
            qThree="What is Crystal Beach, Ontario known for?"
            qThreeAns="When known as a vacation spot for its entertainment mecca, Crystal Beach is currently viewed as an ocean side location. Partake in the laid-back climate of this lakefront local area from Crystal Beach's most famous ocean side, Bay Beach. Highlighting immaculate white sand and warm completely clear water."
            qFour="Is Crystal Beach closed?"
            qFourAns="Crystal Beach is available to the overall population. Ocean side limit limitations will be set up to take into consideration appropriate physical separating."
            mapURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23393.86326967679!2d-79.07187908652702!3d42.86792796597088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d33dc989b4ccc5%3A0xb57a249d19dfde0b!2sCrystal%20Beach%2C%20Fort%20Erie%2C%20ON!5e0!3m2!1sen!2sca!4v1652816736675!5m2!1sen!2sca"
          />
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  )
}

export default SEO
