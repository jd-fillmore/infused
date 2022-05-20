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
        <title>SEO Port Colborne | Best Port Colborne SEO Company</title>
        <meta
          name="description"
          content="Best Port Colborne SEO company since 2013. Infused Agency are Port Colborne SEO experts that will help your Port Colborne business grow."
        />
      </Helmet>
      <Nav />
      <Hero
        title="SEO Port Colborne, Port Colborne SEO Services"
        titleTwo="Port Colborne SEO Services That Grow Your Business"
        subTitle="Infused Agency is the best SEO company helping Port Colborne businesses since 2013."
      />
      <section className="home-services">
        <div className="container">
          <div className="row pd-btm-80">
            <div className="col-lg-12 text-center">
              <h2>SEO Agency Port Colborne</h2>
              <p className="serv-intro">
                We specialize in{" "}
                <Link to="/seo-niagara">Port Colborne SEO services</Link> that
                help grow your Port Colborne business. Alongside our SEO
                services, we can also help your Port Colborne company with the
                following services.
              </p>
            </div>
          </div>
          {/* Row One */}
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <img
                  className="img-fluid"
                  src={webImg}
                  alt="SEO Port Colborne"
                />
                <h2>Web Design &amp; Development</h2>
                <p>
                  We create Port Colborne websites to help attract more
                  customers.
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
                  alt="SEO Port Colborne Services"
                />
                <h2>WordPress Development</h2>
                <p>
                  Update your Port Colborne website without the need of a
                  developer.
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
                  alt="Port Colborne SEO experts"
                />
                <h2>Digital Marketing</h2>
                <p>
                  Social media ads to drive Port Colborne traffic and increase
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
                <h2>Port Colborne SEO</h2>
                <p>
                  We help rank your Port Colborne website on the first page of
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
                  alt="Best SEO Agency Port Colborne"
                />
                <h2>E-Commerce Development</h2>
                <p>
                  Robust e-commerce systems to help your Port Colborne company
                  sell online.
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
                    clients around the Port Colborne using modern SEO practices.
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
        title="Featured Port Colborne SEO Results"
        subTitle="We create SEO campaigns that rank our Port Colborne clients well in Google and help them beat out their Port Colborne competition."
      />
      <WhatWeDo
        title="SEO services in Port Colborne"
        subTitle={[
          "As a small business that's near Port Colborne ourselves, we understand that your small business in Port Colborne cannot fork out upfront thousands of dollars for a ",
          <Link to="/seo-niagara">SEO company</Link>,
          ". That's why we offer local and affordable Port Colborne ",
          <Link to="/work">SEO services</Link>,
          " to fit your small business budget. Our SEO experts use the latest trends, which helps bring in more local Port Colborne leads near you and revenue through your new SEO services campaign.",
        ]}
        boxOneTitle="Responsive"
        boxOneDesc="Your SEO Port Colborne project needs to make sure your website is mobile-friendly, which will help in the long run."
        boxOneImgAlt="SEO"
        boxTwoTitle="Optimized"
        boxTwoDesc="Every Port Colborne SEO project optimized, which leads to much better lead conversion and website performance."
        boxTwoImgAlt="Optimized"
        boxThreeTitle="Secure"
        boxThreeDesc="Making sure your website has HTTPS security is important for your Port Colborne SEO project."
        boxThreeImgAlt="Optimized"
        whatTitle="What Makes A Good SEO Service in Port Colborne?"
        whatText={[
          "Does your current ",
          <Link to="/seo-niagara">SEO</Link>,
          " not bring in new Port Colborne leads? Sometimes SEO problems are obvious like when a website is not mobile-friendly or if your on-page SEO isn't up to snuff. Other times, a closer inspection into your SEO practices are required in order to identify issues. Most issues relating to any Port Colborne company's ",
          <Link to="/seo-niagara">SEO</Link>,
          " can be directly related to not enough content, backlinks or website's code foundation being proper. In other words, the lack of good SEO is simply not converting your Port Colborne users into paying customers.",
        ]}
        servicesTitle="Why Is Hiring a Good SEO Company near Port Colborne Important?"
        servicesText={[
          "Your Port Colborne company website acts as your main hub on the internet. The fact that your website is the first stop to any new customers means that you need local, Port Colborne SEO traffic to come to it, in order to gain new revenue from said customers. This means that you need the best SEO company around Port Colborne to deliver great SEO results to your business. Infused Agency makes sure that we do a custom-tailored SEO job right from the start, to ensure your SEO is a success and is optimized. Not only do we use modern SEO services for your business, we're the only SEO business around Port Colborne that offers affordable monthly SEO packages to help alleviate any financial strain.",
        ]}
        whatKindTitle="What Type of Port Colborne SEO Services Do You Need?"
        whatKindText={[
          "Whether your SEO is in place does a good job but you want to do some SEO optimization, or if your website has no SEO at all, we can do it all. We strive with our Port Colborne SEO services to help your Port Colborne business bring in new leads via SEO. You will have a highly professional and skilled SEO expert who can answer any SEO questions you may have when it comes to your new SEO Port Colborne project. For Port Colborne SEO, call on our trusted professionals. We're here to assess your current SEO and provide our own SEO services to help your Port Colborne business.",
        ]}
      />
      <About
        city="Port Colborne"
        intro={[
          "The Regional Municipality of ",
          <a href="https://en.wikipedia.org/wiki/Port_Colborne">
            Port Colborne
          </a>,
          " (the end of the Welland Canal, which in 2016 had a populace 18,306) is a city in Ontario, Canada. It is situated on Lake Erie, at the southern finish of the Welland Canal, in the Niagara Region of Southern Ontario.",
        ]}
        area="121"
        population="18,603"
        topSights={[
          <a href="https://www.google.com/travel/things-to-do/see-all?g2lb=2502548,2503771,2503781,4258168,4270442,4284970,4291517,4306835,4515404,4524133,4597339,4649665,4722900,4723331,4733969,4738545,4757164,4758493,4762561,4779393&hl=en-CA&gl=ca&ssta=1&dest_mid=/m/01kzjk&dest_state_type=sattd&dest_src=ts&q=things+to+do+in+Port Colborne+ontario&poi_mid=/g/1thxr8jc&sa=X&ved=2ahUKEwjnxaf6je73AhUWG80KHdB5CXoQ69EBKAB6BAgIEAc">
            Welland Canal in Port Colborne
          </a>,
          ", ",
          <a href="https://www.google.com/travel/things-to-do/see-all?g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4524133%2C4597339%2C4649665%2C4722900%2C4723331%2C4733969%2C4738545%2C4757164%2C4758493%2C4762561%2C4779393&hl=en-CA&gl=ca&ssta=1&dest_mid=%2Fm%2F01kzz6&dest_state_type=sattd&dest_src=ts&q=top%20things%20to%20do%20in%20port%20colborne&sa=X&ved=2ahUKEwj-hevkke73AhUMHM0KHRj6BBUQ69EBKAB6BAgIEAc">
            Nickel Beach in Port Colborne
          </a>,
          ", ",
          <a href="https://www.google.com/travel/things-to-do/see-all?g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4515404%2C4524133%2C4597339%2C4649665%2C4722900%2C4723331%2C4733969%2C4738545%2C4757164%2C4758493%2C4762561%2C4779393&hl=en-CA&gl=ca&ssta=1&dest_mid=%2Fm%2F01kzz6&dest_state_type=sattd&dest_src=ts&q=top%20things%20to%20do%20in%20port%20colborne&sa=X&ved=2ahUKEwj-hevkke73AhUMHM0KHRj6BBUQ69EBKAB6BAgIEAc">
            Friendship Beach in Port Colborne
          </a>,
        ]}
        qOne="Is Port Colborne a nice place to live?"
        qOneAns="The City of Port Colborne is an incredible spot to live, work and raise a family."
        qTwo="What is it like to live in Port Colborne?"
        qTwoAns="Port Colborne truly has a local area feel and this is a direct result of the extraordinary individuals of this city and how curious the midtown is and every one of the little exceptional, privately possessed shops. You will find WAY MORE mother and pop shops than enormous box stores in Port Colborne! There are likewise some truly incredible eating and eateries!"
        qThree="Where does the friendship trail start in Port Colborne?"
        qThreeAns="The path starts at Port Colborne Seaway Park and finishes at Historic Fort Erie where it gets together with the Niagara Parks Commission Recreation Trail."
        qFour="Where is the shrinking mill in Port Colborne?"
        qFourAns="Nearby us here in Port Colborne, Ontario, is a superb fascination that a great many people have hardly any familiarity with. It is known as the extraordinary contracting plant."
        mapURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187270.2721219696!2d-79.33834971138214!3d42.82854362231943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d33125c46ca209%3A0x8222e76e59ecba10!2sPort%20Colborne%2C%20ON!5e0!3m2!1sen!2sca!4v1653053896754!5m2!1sen!2sca"
      />
      <CTA />
      <Footer />
    </>
  )
}

export default SEOCity
