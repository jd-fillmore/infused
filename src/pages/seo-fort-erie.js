import React from "react"
import Nav from "../../components/Nav/nav"
import Hero from "../../components/Home/Hero/hero"
import Fade from "react-reveal/Fade"
import PortfolioSlider from "../../components/Home/PortfolioSlider/portfolioSlider"
import Results from "../../components/Home/Results/results"
import WhatWeDo from "../../components/Home/WhatWeDo/whatWeDo"
import About from "../../components/Home/About/about"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import webImg from "../../src/img/responsive.svg"
import seoImg from "../../src/img/seoo.svg"
import dmImg from "../../src/img/dm.svg"
import ecommImg from "../../src/img/add-to-cart.png"
import wpImg from "../../src/img/wordpress.png"

import "bootstrap/dist/css/bootstrap.min.css"
import "../pages/general.scss"
import "../pages/home-services.scss"

const SEOCity = () => {
  return (
    <>
      <Helmet>
        <title>SEO Fort Erie | Best Fort Erie SEO Company</title>
        <meta
          name="description"
          content="Best Fort Erie SEO company since 2013. Infused Agency are Fort Erie SEO experts that will help your Fort Erie business grow."
        />
      </Helmet>
      <Nav />
      <Hero
        title="SEO Fort Erie, Fort Erie SEO Services"
        titleTwo="Fort Erie SEO Services That Grow Your Business"
        subTitle="Infused Agency is the best SEO company helping Fort Erie businesses since 2013."
      />
      <section className="home-services">
        <div className="container">
          <div className="row pd-btm-80">
            <div className="col-lg-12 text-center">
              <h2>SEO Agency Fort Erie</h2>
              <p className="serv-intro">
                We specialize in{" "}
                <Link to="/seo-niagara">Fort Erie SEO services</Link> that help
                grow your Fort Erie business. Alongside our SEO services, we can
                also help your Fort Erie company with the following services.
              </p>
            </div>
          </div>
          {/* Row One */}
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <img className="img-fluid" src={webImg} alt="SEO Fort Erie" />
                <h2>Web Design &amp; Development</h2>
                <p>
                  We create Fort Erie websites to help attract more customers.
                </p>
                <Link to="/web-design">
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
            </div>
            <div className="col-lg-4">
              <div className="card">
                <img
                  className="img-fluid"
                  src={wpImg}
                  alt="SEO Fort Erie Services"
                />
                <h2>WordPress Development</h2>
                <p>
                  Update your Fort Erie website without the need of a developer.
                </p>
                <Link to="/wordpress-developer-niagara/">
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
            </div>
            <div className="col-lg-4">
              <div className="card">
                <img
                  className="img-fluid"
                  src={dmImg}
                  alt="Fort Erie SEO experts"
                />
                <h2>Digital Marketing</h2>
                <p>
                  Social media ads to drive Fort Erie traffic and increase
                  revenue.
                </p>
                <Link to="/digital-marketing-niagara/">
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
            </div>
          </div>
          {/* Row Two */}
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <img className="img-fluid" src={seoImg} alt="seo Niagara" />
                <h2>Fort Erie SEO</h2>
                <p>
                  We help rank your Fort Erie website on the first page of
                  Google.
                </p>
                <Link to="/seo-niagara/">
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
            </div>
            <div className="col-lg-4">
              <div className="card">
                <img
                  className="img-fluid"
                  src={ecommImg}
                  alt="Best SEO Agency Fort Erie"
                />
                <h2>E-Commerce Development</h2>
                <p>
                  Robust e-commerce systems to help your Fort Erie company sell
                  online.
                </p>
                <Link to="/ecommerce-web-design-niagara/">
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
            </div>
            <div className="col-lg-4">&nbsp;</div>
          </div>
          <Link className="d-block text-center" to="/pricing">
            <button className="price">View Our Pricing</button>
          </Link>
        </div>
      </section>
      <section className="home-feat">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center pd-top-120 pd-btm-80">
                <Fade>
                  <h2>Featured SEO Projects</h2>
                  <p id="sub">
                    Take a look and see the huge difference we've made to our
                    clients around the Fort Erie using modern SEO practices.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PortfolioSlider />
      <Link className="d-block text-center pd-top-80" to="/work">
        <button>View More Work</button>
      </Link>
      <Results
        title="Featured Fort Erie SEO Results"
        subTitle="We create SEO campaigns that rank our Fort Erie clients well in Google and help them beat out their Fort Erie competition."
      />
      <WhatWeDo
        title="SEO services in Fort Erie"
        subTitle={[
          "As a small business that's near Fort Erie ourselves, we understand that your small business in Fort Erie cannot fork out upfront thousands of dollars for a ",
          <Link to="/seo-niagara">SEO company</Link>,
          ". That's why we offer local and affordable Fort Erie ",
          <Link to="/work">SEO services</Link>,
          " to fit your small business budget. Our SEO experts use the latest trends, which helps bring in more local Fort Erie leads near you and revenue through your new SEO services campaign.",
        ]}
        boxOneTitle="Responsive"
        boxOneDesc="Your SEO Fort Erie project needs to make sure your website is mobile-friendly, which will help in the long run."
        boxOneImgAlt="SEO"
        boxTwoTitle="Optimized"
        boxTwoDesc="Every Fort Erie SEO project optimized, which leads to much better lead conversion and website performance."
        boxTwoImgAlt="Optimized"
        boxThreeTitle="Secure"
        boxThreeDesc="Making sure your website has HTTPS security is important for your Fort Erie SEO project."
        boxThreeImgAlt="Optimized"
        whatTitle="What Makes A Good SEO Service in Fort Erie?"
        whatText={[
          "Does your current ",
          <Link to="/seo-niagara">SEO</Link>,
          " not bring in new Fort Erie leads? Sometimes SEO problems are obvious like when a website is not mobile-friendly or if your on-page SEO isn't up to snuff. Other times, a closer inspection into your SEO practices are required in order to identify issues. Most issues relating to any Fort Erie company's ",
          <Link to="/seo-niagara">SEO</Link>,
          " can be directly related to not enough content, backlinks or website's code foundation being proper. In other words, the lack of good SEO is simply not converting your Fort Erie users into paying customers.",
        ]}
        servicesTitle="Why Is Hiring a Good SEO Company near Fort Erie Important?"
        servicesText={[
          "Your Fort Erie company website acts as your main hub on the internet. The fact that your website is the first stop to any new customers means that you need local, Fort Erie SEO traffic to come to it, in order to gain new revenue from said customers. This means that you need the best SEO company around Fort Erie to deliver great SEO results to your business. Infused Agency makes sure that we do a custom-tailored SEO job right from the start, to ensure your SEO is a success and is optimized. Not only do we use modern SEO services for your business, we're the only SEO business around Fort Erie that offers affordable monthly SEO packages to help alleviate any financial strain.",
        ]}
        whatKindTitle="What Type of Fort Erie SEO Services Do You Need?"
        whatKindText={[
          "Whether your SEO is in place does a good job but you want to do some SEO optimization, or if your website has no SEO at all, we can do it all. We strive with our Fort Erie SEO services to help your Fort Erie business bring in new leads via SEO. You will have a highly professional and skilled SEO expert who can answer any SEO questions you may have when it comes to your new SEO Fort Erie project. For Fort Erie SEO, call on our trusted professionals. We're here to assess your current SEO and provide our own SEO services to help your Fort Erie business.",
        ]}
      />
      <About
        city="Fort Erie"
        intro={[
          "The Regional Municipality of ",
          <a href="https://en.wikipedia.org/wiki/Fort_Erie,_Ontario">
            Fort Erie
          </a>,
          " is a town on the Niagara River in the Niagara Region, Ontario, Canada. It is straightforwardly across the waterway from Buffalo, New York and is the site of Old Fort Erie which assumed a conspicuous part in the War of 1812.",
        ]}
        area="166"
        population="30,710"
        topSights={[
          <a href="https://www.google.com/travel/things-to-do/see-all?g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4524133%2C4597339%2C4649665%2C4722900%2C4723331%2C4733969%2C4738545%2C4757164%2C4758493%2C4762561%2C4779393&hl=en-CA&gl=ca&ssta=1&dest_mid=%2Fm%2F01kzhs&dest_state_type=sattd&dest_src=ts&q=things%20to%20do%20in%20fort%20erie&sa=X&ved=2ahUKEwjriMzPi-73AhWOWc0KHQblCS8Q69EBKAB6BAgIEAc">
            Safari Niagara in Fort Erie
          </a>,
          ", ",
          <a href="https://www.google.com/travel/things-to-do/see-all?g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4524133%2C4597339%2C4649665%2C4722900%2C4723331%2C4733969%2C4738545%2C4757164%2C4758493%2C4762561%2C4779393&hl=en-CA&gl=ca&ssta=1&dest_mid=%2Fm%2F01kzhs&dest_state_type=sattd&dest_src=ts&q=things%20to%20do%20in%20fort%20erie&sa=X&ved=2ahUKEwjriMzPi-73AhWOWc0KHQblCS8Q69EBKAB6BAgIEAc">
            Niagara Parkway in Fort Erie
          </a>,
          ", ",
          <a href="https://www.google.com/travel/things-to-do/see-all?g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4524133%2C4597339%2C4649665%2C4722900%2C4723331%2C4733969%2C4738545%2C4757164%2C4758493%2C4762561%2C4779393&hl=en-CA&gl=ca&ssta=1&dest_mid=%2Fm%2F01kzhs&dest_state_type=sattd&dest_src=ts&q=things%20to%20do%20in%20fort%20erie&sa=X&ved=2ahUKEwjriMzPi-73AhWOWc0KHQblCS8Q69EBKAB6BAgIEAc">
            Old Fort Erie in Fort Erie
          </a>,
        ]}
        qOne="Is Fort Erie a nice place to live?"
        qOneAns="Offering an intriguing blend of unassuming community esteems, a powerful workplace and simple admittance to large city conveniences and culture, Fort Erie gives a personal satisfaction unrivaled in the territory. No big surprise such countless individuals are making it their home!"
        qTwo="What is Fort Erie, Ontario known for?"
        qTwoAns="Fort Erie, the nearby site of the War of 1812, is one of the main notable milestones nearby. Post Erie saw significant activity in the War of 1812 including the catch of two American ships, the 'Ohio' and the 'Somers'."
        qThree="What happened in Fort Erie?"
        qThreeAns="The post, worked by the British in 1764, was caught by American soldiers during the War of 1812. English endeavors at recover were rebuffed, and the fortress was deserted (1814) and exploded. The post was reestablished (1937-39) and was integrated as a town in 1857."
        qFour="Is Fort Erie growing?"
        qFourAns="This is a 6.3% expansion over the last Census (2001), and makes Fort Erie the quickest developing region in the St. Catharines-Niagara CMA (Census Metropolitan Area), and the third quickest developing district in the Region of Niagara."
        mapURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187141.48056112576!2d-79.15433070551377!3d42.87103666280323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d33e24e7337d03%3A0x885d5008ef9ad9d1!2sFort%20Erie%2C%20ON!5e0!3m2!1sen!2sca!4v1653050333135!5m2!1sen!2sca"
      />
      <CTA />
      <Footer />
    </>
  )
}

export default SEOCity
