import React from "react"
import { Container, Row, Col } from "reactstrap"
import Nav from "../../components/Nav/nav"
import Hero from "../../components/Home/Hero/hero"
import Featured from "../../components/Home/Featured/featured"
import Process from "../../components/Home/Process/process"
import TestimonialCard from "../../components/testimonialCard/testimonialCard"
import CTA from "../../components/CTA/cta"

import { Helmet } from "react-helmet"
import featuredImg from "../img/Welland-web-design.png"

import "bootstrap/dist/css/bootstrap.min.css"
import "../pages/general.scss"
import Footer from "../../components/Footer/footer"

const City = () => {
  return (
    <>
      <Helmet>
        <title>Welland Web Design &amp; SEO | Infused</title>
        <meta
          name="description"
          content="Welland's leading web design &amp; SEO marketing agency. We're a website design agency thats brings more sales to your Welland company."
        />
      </Helmet>
      <Nav />
      <Hero
        titleTwo="Web Design Welland, SEO"
        subTitle="We do modern web design &amp; build modern websites to help you grow your Welland company."
        btnText="Get Started"
        btnLink="/get-started"
      />
      <Featured
        title="Featured Web Design & SEO Clients"
        viewsValue="10,700"
        viewsText="website views per month"
        leadsValue="20,000%"
        leadsText="increase in new leads in first 6 months"
        peopleValue="5,800"
        peopleText="people discovering website per month"
        img={featuredImg}
        imgAlt="Welland web design"
        testimonial={[
          "Infused created the ",
          <span>perfect web design</span>,
          "for my  floral business. Many of my clients come from Welland and I was very happy with their ",
          <span>professional work ethic</span>,
          "and ",
          <span>great communication!</span>,
        ]}
        btnText="View More Case Studies"
        btnLink="/work"
      />
      <Process
        title="How Our Welland Web Design Process Works"
        subTitle="If we didn't have a thought-out web design process, then we'd be all over the place."
        titleOne="1. Discuss"
        subTitleOne="We get to know you and your project needs."
        descOne="On a quick 15-20 minute call, we discuss and extract everything you're interested in for your Welland business. Whether it's a new web design, or you'd like to bring more customers / clients to your business through local SEO or digital strategy, we gather all of the necessary information for your project."
        titleTwo="2. Project Evaluation"
        subTitleTwo="Deep-dive project evaluation with bespoke recommendations."
        descTwo={[
          "Virtually all digital and web design agencies offer a project proposal - not us. Enter the Project Evaluation. We want to thoroughly get to know your company, your business goals in the Welland area and what you'd like to accomplish with your project.",
          <br />,
          <br />,
          "Based on our in-depth research and findings, we will offer you extremely detailed recommendations on how to move forward. If you agree to move forward with us, we get the important stuff signed, requirements delivered and the project is underway for your new Welland web design or SEO project.",
        ]}
        titleThree="3. Get To Work"
        subTitleThree="Time to get our hands dirty."
        descThree="This is where the magic happens. If we're developing a website for you, it's time to design, build and launch it. If we're doing local SEO, it's month-to-month effort to help you rank on the first page of Google. If we're developing a digital strategy, intense research among other diligent efforts to make that happen.

        In whichever way we help you, we'll be working closely together to make it happen."
        titleFour="4. Deliver"
        subTitleFour="The fruits of our labour."
        descFour="After all is said and done, you will receive the final, modern product. Our relationship doesn't stop there. We pride on having ongoing relationships with our clients, making sure we can best serve them in whatever digital ways possible for years to come."
      />
      <section className="city-benefits">
        <Container>
          <Row>
            <Col lg="12">
              <h2>Benefits of having a modern Welland website design</h2>
              <p>
                Having just any website online doesn't cut it anymore. You need
                to impress your customers, and having a modern website design
                does just exactly that.
              </p>
              <p>
                Below you'll find some benefits of using our web design services
                over the competitors:
              </p>
              <h3>Responsive, mobile-friendly web design</h3>
              <p>
                In this day and age, it's extremely important to have your web
                design be mobile-friendly responsive.
                <br />
                <br />
                This means that whichever device your website design is on -
                whether it be a phone, tablet or a computer - it will
                shape-shift and adapt to the size of that screen.
                <br />
                <br />
                A huge part of having your website to be mobile-friendly is that
                it increases their user engagement of your website design. What
                this means is that if your users have a good browsing experience
                on their phones, the more likely they will stay on your website.
                <br />
                <br />
                And the more likely users will stay on your website, the more
                likely they'll contact your company to do business with you.
              </p>
              <h3>
                Your Welland web design will build trust and credibility for
                your company
              </h3>
              <p>
                With so many Welland businesses competing for eachother's
                customer-base, it's extremely important your company stands out.
                <br />
                <br />
                Imagine two different scenarios.
                <br />
                <br />
                The first scenario being that a customer goes to one website,
                and it's outdated. It looks unprofessional, it's hard to use -
                they can't find what they're looking for.
                <br />
                <br />
                Ultimately, they get frustrated and they leave.
                <br />
                <br />
                Now imagine the next scenario.
                <br />
                <br />
                That same customer goes to a website, and the design is
                stunning. They're immediately impressed, and you've hooked them.
                <br />
                <br />
                They want to know more.
                <br />
                <br />
                They browse your website with ease, find exactly what they're
                looking for and they're left with a great feeling.
                <br />
                <br />
                Which company do you think they'll do business with?Component
                <br />
                <br />
                When you have a modern web design that beats your competitors,
                this will end up wow'ing your customers. And with your customers
                being so impressed with their first impression of your company
                online, they will be much more likely to do business with you.
              </p>
              <h3>Our website designs help you rank better in Google</h3>
              <p>
                When it comes to ranking well in Google, there's over 200
                different ranking factors.
                <br />
                <br />
                Of those 200 factors, having a great web design and a custom
                coded website greatly increase your chances of ranking on the
                first page of Google.
                <br />
                <br />
                How?
                <br />
                <br />
                Well for starters, having a modern and easy to use design helps
                increase user engagement. And the longer people are on a
                website, that tells Google that your website must be good.
                <br />
                <br />
                So, they'll rank you higher.
                <br />
                <br />
                Second, having a custom coded modern design means that your
                website will be performant. It will be fast.
                <br />
                <br />
                And since Google likes fast websites, you'll again rank higher.
                <br />
                <br />
                Lastly, our websites are designed specifically in a way where
                the textual content, imagery, colours and more speak directly to
                your customers. There's a strategy behind our designs. Thus,
                again ranking higher.
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46702.37206815384!2d-79.26489397366197!3d42.98041687931766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d349cb1aaf497d%3A0xb6a05855226db6e6!2sWelland%2C%20ON!5e0!3m2!1sen!2sca!4v1633405552713!5m2!1sen!2sca"
                width="100%"
                height="450"
                title="welland web design"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="clients text-center">
        <br />
        <br />
        <Container>
          <Row>
            <Col lg="12">
              <h2>Our Happy Web Design Clients In Or Near Welland</h2>
              <hr />
              <div>
                <TestimonialCard>
                  <p>
                    "Great Job, WELL DONE. I'm very pleased with the SEO service
                    and the web design of my new web site. If you ever need a
                    new web design for your Welland business I do recommend
                    Infused Agency for their services. JD keep up the great
                    work. Thank you."
                  </p>
                  <em>Mr. Duarte, Cass-A-Bella Construction</em>
                </TestimonialCard>
              </div>
              <div>
                <TestimonialCard>
                  <p>
                    "Amazing experience, really helped to elevate my business
                    and I would highly recommend working with them for all of
                    your Welland web design and SEO needs!!"
                  </p>
                  <em>Lauren Emberson, Lauren Emberson Photography</em>
                </TestimonialCard>
              </div>
              <div>
                <TestimonialCard>
                  <p>
                    "JD did an amazing job creating a seamless web design for my
                    aesthetics clinic. He thoroughly went through each aspect of
                    the web design and was extremely easy to talk to about small
                    tweaks and changes I wanted to see. I would highly recommend
                    his services to anyone looking for web design and SEO
                    optimization."
                  </p>
                  <em>Melissa Cundell, MC Aesthetics</em>
                </TestimonialCard>
              </div>
              <div>
                <TestimonialCard>
                  <p>
                    "I have been working with JD on my new web design and the
                    process has been great! He is easy to work with, and has a
                    good understanding of my vision and what I need from a web
                    design. I have worked with other web design agencies in the
                    past and I would recommend JD first!"
                  </p>
                  <em>Jasmine Morvay, KC Interiors</em>
                </TestimonialCard>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <CTA />
      <Footer />
    </>
  )
}

export default City
