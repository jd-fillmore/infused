import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "reactstrap"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import Card from "../../components/Card/card"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import kdImg from "../img/niagara-web-design.png"
import cassImg from "../img/featured-seo.png"
import mcImg from "../img/mc-phone.png"

import "../pages/grimsby.scss"

const projects = [
  {
    title: "KD Flowers",
    desc:
      "A boutique affordable wedding flower business in the heart of St. Catharines.",
    thingsDone: "UI design, website development & local SEO",
    link: "/kd-flowers",
    pic: kdImg,
  },
  {
    title: "Cass-A-Bella Construction",
    desc:
      "A contracting company focused on custom home building and renovation in Toronto.",
    thingsDone: "UI design, website development & local SEO",
    link: "/cass-a-bella-construction",
    pic: cassImg,
  },
  {
    title: "MC Aesthetics",
    desc:
      "An Ottawa-based business specializing in wrinkle relaxers and other beauty services.",
    thingsDone: "UI design, website development & local SEO",
    link: "/mc-aesthetics",
    pic: mcImg,
  },
]

const Ancaster = () => {
  return (
    <>
      <Helmet>
        <title>Ancaster Web Design & SEO Company - Infused</title>
        <meta
          name="description"
          content="Ancaster's best web design and SEO company around. 10+ years in business helping hundreds of clients. Click here to view portfolio."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Ancaster Web Design & SEO Company"
        description="We help local Ancaster businesses drive traffic & increase revenue online."
      />
      <InnerContent>
        <section className="grimsby">
          {/* <!--Hero--> */}
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6">
                <h3>Are you looking to...</h3>
                <ul>
                  <li>Get your website re-designed?</li>
                  <li>Get a new website that brings in business?</li>
                  <li>Get more sales through SEO?</li>
                  <li>Maximize profits?</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <img
                  src={kdImg}
                  className="img-fluid"
                  alt="Ancaster web design & seo company"
                />
              </div>
            </div>
          </div>

          {/* <!--Intro--> */}

          <section className="niche-intro">
            <br></br>
            <div className="container">
              <div className="row">
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-10">
                  <p className="text-center">
                    Please fill out the form and we'll get back to you as soon
                    as possible.
                  </p>
                  <form
                    name="contact"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <div class="form-group">
                      <input
                        name="name"
                        type="name"
                        class="form-control"
                        id="Name"
                        aria-describedby="namehelp"
                        placeholder="Full Name"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        name="email"
                        type="email"
                        class="form-control"
                        id="Email"
                        placeholder="Email"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        name="phone"
                        type="phone"
                        class="form-control"
                        id="Phone"
                        aria-describedby="urlhelp"
                        placeholder="Cell Phone Number"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        name="url"
                        type="name"
                        class="form-control"
                        id="URL"
                        aria-describedby="urlhelp"
                        placeholder="Website URL"
                      />
                    </div>
                    <div class="form-group">
                      <textarea
                        name="message"
                        class="form-control"
                        id="Message"
                        rows="3"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <button className="text-center" type="submit">
                      Submit
                    </button>
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                  </form>
                </div>
                <div className="col-lg-1">&nbsp;</div>
              </div>
              <div className="row d-flex align-items-center">
                <div className="col-md-12">
                  <br />
                  <br />
                  <p>
                    If you're looking for a
                    <a
                      href="https://en.wikipedia.org/wiki/Web_design"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Ancaster web design
                    </a>{" "}
                    company that knows how to boost your sales and credibility
                    online, you've come to the right place!
                  </p>
                  <p>
                    It's super important if you care about your company brand,
                    the immediate first impression you'll have on new customers
                    and more importantly, the ability to sell your company's
                    product or service without having to lift a finger. Having
                    an amazing web design, in a nut shell, is making sure that
                    when people come to your website, that people can quickly
                    and easily find what they're looking for, and you give them
                    what they need. This is the difference between a website
                    that does sell, and that doesn't.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <h2>Why Your Ancaster Business Needs A Successful Website</h2>
                  <p>
                    Traditionally in the past, companies didn't have to rely on
                    any sort of online presence, because it didn't exist.
                    However now, since everyone who needs something usually
                    Googles what they need, it's imperative to hire a Ancaster
                    website development company that knows what they're doing.
                    You have to make sure that your company is professional
                    represented in a mordern way - so that when people go to
                    your website, they're amazed. They're impressed. And
                    ultimately, your web design converts them into paying
                    customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    So, what's the solution?
                    <br />
                    <br />
                    An amazing, modern and easy-to-navigate
                    <Link to="/work"> website.</Link>
                    <br />
                    <br />
                    When your company has an unbelievable and amazing site, when
                    people come to your website, you no longer have to convince
                    them to buy. With having an amazing site, the amazing impact
                    it will have on people will almost force them to call or
                    email you. So if you have local customers heading over to
                    Google, clicking on your website and viewing your amazing
                    site, those local leads will contact you through your new
                    site, and ultimately you will have more paying customers.
                    <br />
                    <br />
                    You want to make sure that your site is far better than all
                    of your other competition. Because when that is the case,
                    people will be much more impressed and inclined to contact
                    you.
                    <br />
                    <br />
                    You can count on our specialists get the job done for you.
                  </p>
                </div>
              </div>
            </div>

            {/* <!--Work--> */}

            {/* <!--Content--> */}
            <br />
            <br />
            <section className="work">
              {projects.map(project => (
                <Container>
                  <Card>
                    <Row className="item align-items-center">
                      <Col lg="6" className="text-left">
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                        <p className="things-done">{project.thingsDone}</p>
                        <Link to={project.link}>
                          Discover
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
                      </Col>
                      <Col lg="6">
                        <img
                          className="img-fluid"
                          src={project.pic}
                          alt={project.title}
                        />
                      </Col>
                    </Row>
                  </Card>
                </Container>
              ))}
            </section>

            <br />
            <br />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2>Our Websites Help Boost Your Credibility &amp; Sales</h2>
                  <p>
                    There are countless benefits as to how site can help not
                    only your business, but really any business. But, lets keep
                    the focus on yours for now.
                  </p>
                  <h4>A 24/7, full times salesperson</h4>
                  <p>
                    Imagine you did not have a website. Better yet, imagine your
                    website had a terrible design and a terrible user
                    experience. Meaning - it wasn't attractive, it wasn't
                    personable and people couldn't find what they're looking
                    for. An overall embarrassment to interact with and look at.
                    <br />
                    <br />
                    Now imagine your website was the total opposite. It looked
                    amazing on devices (desktop, laptop, tablet and phone), it
                    was super easy to navigate, and it was far more beautiful
                    than your competitions.
                    <br />
                    <br />
                    In what situation do you think your potential customers are
                    buying from you?
                    <br />
                    <br />
                    Better design, better user experience = increase in sales.
                  </p>
                  <h4>ROI</h4>
                  <p>
                    The great thing is that everything is translated into
                    <em>trackable</em> results. We're able to track pretty much
                    every aspect of your website - month to month reports that
                    record analytics pertaining to increase in Google rankings,
                    overall traffic and exactly how many conversions you had.
                  </p>
                  <h4>Cost Effectiveness</h4>
                  <p>
                    Investing in a site is bar-none, THE most cost-effective
                    marketing tool in today's modern digital world. The reason
                    for this is that is simple - the sheer impact and potential
                    your website has on the amount of business that it brings
                    in. The inbound marketing nature of a great site saves
                    countless man hours and cost versus something like cold
                    calling, direct mail campaigns and other outbound marketing
                    strategies.
                  </p>
                  <h4>Qualified Leads</h4>
                  <p>
                    This is probably one of the biggest advantages of an amazing
                    site - you get people that
                    <em>need</em> your service, and they're so impressed by what
                    they see that it's a no brainer to contact you. Gone are the
                    days of spending thousands on outbound marketing, in hopes
                    that you
                    <em>might</em> get some customers. Now, when people contact
                    you via your awesome website, you KNOW that they're
                    interested and that they are absolutely ready to buy.
                  </p>
                </div>
              </div>
            </div>

            {/* <!--FAQ--> */}

            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <br />
                  <h2>FAQ</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <h4>What's the first step?</h4>
                  <p>
                    First, we'll get together for a 10 - 15 minute
                    <Link to="/get-started"> discovery call.</Link> This call is
                    used to flesh out the current problems your having (if you
                    already have a website up), and also to talk about your
                    business goals and what you expect your website to do /
                    accomplish.
                  </p>
                </div>
                <div className="col-md-4">
                  <h4>How does your pricing work?</h4>
                  <p>
                    This completely depends on what you want. For example - is
                    it an informational site? Will you be selling a product or
                    service on the website? Are there any types of custom
                    functionality you wish to use? After these questions are
                    answered, we'll be in a better spot to give you a choice
                    between packages.
                  </p>
                </div>
                <div className="col-md-4">
                  <h4>Is there a contract?</h4>
                  <p>
                    Yes. The contract lasts for the length of the project. Once
                    the website is launched and everything is complete, the
                    contract ends. Unless, you want to sign up for website
                    maintenance or security - which is highly recommended.
                  </p>
                </div>
              </div>
              <br />
              <br />
            </div>

            <section className="need">
              <div className="container">
                <div className="row text-center">
                  <div className="col-md-12">
                    <h2>Need a website for your business?</h2>
                    <p>
                      Fill out the form below and we'll get back to you as soon
                      as possible.
                    </p>
                    <form
                      name="contact"
                      method="post"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                    >
                      <div class="form-group">
                        <input
                          name="name"
                          type="name"
                          class="form-control"
                          id="Name"
                          aria-describedby="namehelp"
                          placeholder="Full Name"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          name="email"
                          type="email"
                          class="form-control"
                          id="Email"
                          placeholder="Email"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          name="phone"
                          type="phone"
                          class="form-control"
                          id="Phone"
                          aria-describedby="urlhelp"
                          placeholder="Cell Phone Number"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          name="url"
                          type="name"
                          class="form-control"
                          id="URL"
                          aria-describedby="urlhelp"
                          placeholder="Website URL"
                        />
                      </div>
                      <div class="form-group">
                        <textarea
                          name="message"
                          class="form-control"
                          id="Message"
                          rows="3"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>
                      <button type="submit">Submit</button>
                      <input type="hidden" name="bot-field" />
                      <input type="hidden" name="form-name" value="contact" />
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  )
}

export default Ancaster
