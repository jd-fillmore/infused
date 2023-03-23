import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import website from "../img/crystal-beach-seo-company.webp"
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
          Crystal Beach SEO | Professional SEO Services - Infused Agency
        </title>
        <meta
          name="description"
          content="Crystal Beach's Best SEO Company. We deliver measurable impact for our clients through our search engine optimization services, bringing you more leads."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Crystal Beach SEO Company"
        description="Infused Agency is an award-winning SEO company in Crystal Beach. We help businesses bring in more revenue through their websites."
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
                  alt="Crystal Beach seo company, Crystal Beach seo agency, Crystal Beach seo services"
                />
              </Col>
              <Col lg={{ size: 7, offset: 1 }}>
                <p>
                  The <strong>Crystal Beach SEO services</strong> that our{" "}
                  <strong>Crystal Beach SEO company</strong> provides are pretty
                  impeccable. We consistently provide great SEO services to our
                  clients with pretty awesome results. There are a lot of
                  benefits as to why SEO services are so important for any local
                  company:
                </p>
                <ul>
                  <li>Bring in more customers through organic search.</li>
                  <li>
                    Creates a trustworthy experience for potential customers.
                  </li>
                  <li>Improves your Crystal Beach brand's awareness.</li>
                  <li>It's trackable.</li>
                </ul>
                <p>
                  When you utilize SEO services from our company and end up
                  ranking on the first of Google, it's a great way to increase
                  your company's revenue.
                </p>
              </Col>
            </Row>
          </Container>
          <section className="results">
            <Container>
              <Row>
                <Col lg="12 text-center pd-btm-40">
                  <h2>
                    Our Crystal Beach SEO Clients <span>Get Results</span>
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
                      Beach SEO services."
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
                      By using their SEO services, my Crystal Beach company went
                      from not ranking at all to the first page of Google for
                      tons of keywords."
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
                      on my new web site. If you ever need a SEO for your
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
                    Ready to grow your business with top Crystal Beach SEO
                    services?
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
                    Crystal Beach <span>SEO</span> Services
                  </h2>
                  <p>
                    Solutions That Bring In Qualified Leads And Boost Your Sales
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <h5>Keyword Research &amp; Strategy</h5>
                  <p>
                    Infused Agency's SEO company in Crystal Beach conducts
                    specific keyword research that covers specifically what your
                    users are searching for. We look at keywords as the main
                    foundation to your SEO project. Beyond this, we dive into
                    the technicalities to further deliver value to your
                    customers.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Link Building</h5>
                  <p>
                    Off of your website, our Crystal Beach SEO exports utilize
                    efforts to build links to your website, to help your site
                    rise in search rankings. When other websites link back to
                    your own, you can be seen as authoratative and rank for
                    relevant keyword searche. We can also help filter out
                    certain backlinks that Google may refer to as spammy.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Content Writing</h5>
                  <p>
                    Our Crystal Beach SEO services are conducted by a highly
                    trained group of marketers, which includes content writers.
                    At Infused, you can take advantage of our content writing
                    skills to create content that attracts highly qualified
                    leads. We help mix keywords and your brand voice together,
                    to help bring in more leads to your website.
                  </p>
                </Col>
              </Row>
              <Row className="pd-btm-80">
                <Col lg="4">
                  <h5>On-Page SEO</h5>
                  <p>
                    It's very important that your on-page work is done well, as
                    it can signal to Google that you may give your users a poor
                    user experience. This is why our Crystal Beach SEO agency
                    looks for and fixes these issues for you. We conduct on-page
                    SEO to help bolster your online presence, amplify your lead
                    generation and help boost sales.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Local SEO</h5>
                  <p>
                    For a more local approach, our Crystal Beach SEO specialists
                    can leverage the power of local SEO. We help local customers
                    find your website in local search engine rankings. We do
                    this by employing on and off page search engine optimization
                    best practices, to help raise your local website in Google's
                    rankings.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Technical SEO</h5>
                  <p>
                    If you find out about some technical mishaps on your
                    website, our Crystal Beach SEO experts are here to help.
                    We'll dive into your website by conducting a site-wide audit
                    to check for problems related to website speed, content and
                    optimization. Our team will fix these issues, helping your
                    website get back on the right track.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="call-out">
            <Container>
              <Row>
                <Col lg="12 text-center">
                  <h3>Have Our Crystal Beach SEO Experts Help Today</h3>
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
                    SEO Agency
                  </h2>
                  <p>Increase Your Website's Rankings With Our SEO Experts</p>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <p>
                    Since 2013 we've been able to help countless local Crystal
                    Beach businesses (and beyond!) with their{" "}
                    <Link to="/web-design">website design</Link>,{" "}
                    <Link to="/digital-marketing-Crystal Beach">
                      digital marketing
                    </Link>
                    , search engine optimization (SEO) ,{" "}
                    <Link to="/wordpress-developer-Crystal Beach">
                      WordPress development
                    </Link>{" "}
                    and{" "}
                    <Link to="/ecommerce-web-design-Crystal Beach">
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
                  absolutely you need a Crystal Beach SEO company to help you
                  with SEO services. It's important that our Crystal Beach SEO
                  experts help your website rank where your customers are
                  looking - on the first page of Google.
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
                <h3>Our Crystal Beach SEO company is ready to help.</h3>
                <p>
                  If you need our Crystal Beach SEO company to help your company
                  rise in Google with our expert SEO services, click below to
                  get your free SEO quote.
                </p>
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
