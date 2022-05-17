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
        <title>SEO Beamsville | Best Beamsville SEO Company</title>
        <meta
          name="description"
          content="Best Beamsville SEO company since 2013. Infused Agency are Beamsville SEO experts that will help your Beamsville business grow."
        />
      </Helmet>
      <Nav />
      <Hero
        title="SEO Beamsville, Beamsville SEO Services"
        titleTwo="Beamsville SEO Services That Grow Your Business"
        subTitle="Infused Agency is the best SEO company helping Beamsville businesses since 2013."
      />
      <section className="home-services">
        <div className="container">
          <div className="row pd-btm-80">
            <div className="col-lg-12 text-center">
              <h2>SEO Agency Beamsville</h2>
              <p className="serv-intro">
                We specialize in{" "}
                <Link to="/seo-niagara">Beamsville SEO services</Link> that help
                grow your Beamsville business. Alongside our SEO services, we
                can also help your Beamsville company with the following
                services.
              </p>
            </div>
          </div>
          {/* Row One */}
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <img className="img-fluid" src={webImg} alt="SEO Beamsville" />
                <h2>Web Design &amp; Development</h2>
                <p>
                  We create Beamsville websites to help attract more customers.
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
                  alt="SEO Beamsville Services"
                />
                <h2>WordPress Development</h2>
                <p>
                  Update your Beamsville website without the need of a
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
                  alt="Beamsville SEO experts"
                />
                <h2>Digital Marketing</h2>
                <p>
                  Social media ads to drive Beamsville traffic and increase
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
                <h2>Beamsville SEO</h2>
                <p>
                  We help rank your Beamsville website on the first page of
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
                  alt="Best SEO Agency Beamsville"
                />
                <h2>E-Commerce Development</h2>
                <p>
                  Robust e-commerce systems to help your Beamsville company sell
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
                    clients around the Beamsville using modern SEO practices.
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
        title="Featured Beamsville SEO Results"
        subTitle="We create SEO campaigns that rank our Beamsville clients well in Google and help them beat out their Beamsville competition."
      />
      <WhatWeDo
        title="SEO services in Beamsville"
        subTitle={[
          "As a small business that's near Beamsville ourselves, we understand that your small business in Beamsville cannot fork out upfront thousands of dollars for a ",
          <Link to="/seo-niagara">SEO company</Link>,
          ". That's why we offer local and affordable Beamsville ",
          <Link to="/work">SEO services</Link>,
          " to fit your small business budget. Our SEO experts use the latest trends, which helps bring in more local Beamsville leads near you and revenue through your new SEO services campaign.",
        ]}
        boxOneTitle="Responsive"
        boxOneDesc="Your SEO Beamsville project needs to make sure your website is mobile-friendly, which will help in the long run."
        boxOneImgAlt="SEO"
        boxTwoTitle="Optimized"
        boxTwoDesc="Every Beamsville SEO project optimized, which leads to much better lead conversion and website performance."
        boxTwoImgAlt="Optimized"
        boxThreeTitle="Secure"
        boxThreeDesc="Making sure your website has HTTPS security is important for your Beamsville SEO project."
        boxThreeImgAlt="Optimized"
        whatTitle="What Makes A Good SEO Service in Beamsville?"
        whatText={[
          "Does your current ",
          <Link to="/seo-niagara">SEO</Link>,
          " not bring in new Beamsville leads? Sometimes SEO problems are obvious like when a website is not mobile-friendly or if your on-page SEO isn't up to snuff. Other times, a closer inspection into your SEO practices are required in order to identify issues. Most issues relating to any Beamsville company's ",
          <Link to="/seo-niagara">SEO</Link>,
          " can be directly related to not enough content, backlinks or website's code foundation being proper. In other words, the lack of good SEO is simply not converting your Beamsville users into paying customers.",
        ]}
        servicesTitle="Why Is Hiring a Good SEO Company near Beamsville Important?"
        servicesText={[
          "Your Beamsville company website acts as your main hub on the internet. The fact that your website is the first stop to any new customers means that you need local, Beamsville SEO traffic to come to it, in order to gain new revenue from said customers. This means that you need the best SEO company around Beamsville to deliver great SEO results to your business. Infused Agency makes sure that we do a custom-tailored SEO job right from the start, to ensure your SEO is a success and is optimized. Not only do we use modern SEO services for your business, we're the only SEO business around Beamsville that offers affordable monthly SEO packages to help alleviate any financial strain.",
        ]}
        whatKindTitle="What Type of Beamsville SEO Services Do You Need?"
        whatKindText={[
          "Whether your SEO is in place does a good job but you want to do some SEO optimization, or if your website has no SEO at all, we can do it all. We strive with our Beamsville SEO services to help your Beamsville business bring in new leads via SEO. You will have a highly professional and skilled SEO expert who can answer any SEO questions you may have when it comes to your new SEO Beamsville project. For Beamsville SEO, call on our trusted professionals. We're here to assess your current SEO and provide our own SEO services to help your Beamsville business.",
        ]}
      />
      <About
        city="Beamsville"
        intro={[
          "The Regional Municipality of ",
          <a href="https://en.wikipedia.org/wiki/Beamsville,_Ontario">
            Beamsville
          </a>,
          " is a small community that's part of the townset of Lincoln, Ontario. It's located right at the southern shore of Lake Ontario. It contains buildings that are hundreds of years old, with barbershops, print shops, restaurants and more.",
        ]}
        area="9.19"
        population="12,000"
        topSights={[
          <a href="https://www.tripadvisor.ca/Attraction_Review-g2158792-d2178002-Reviews-Thirty_Bench_Wine_Makers-Beamsville_Lincoln_Ontario.html">
            Thirty Bench Winemakers in Beamsville
          </a>,
          ", ",
          <a href="https://www.tripadvisor.ca/Attraction_Review-g2158792-d6661856-Reviews-Vieni_Estates-Beamsville_Lincoln_Ontario.html">
            Vieni Estates in Beamsville
          </a>,
          ", ",
          <a href="https://www.tripadvisor.ca/Attraction_Review-g2158792-d14784777-Reviews-Bench_Brewing_Company-Beamsville_Lincoln_Ontario.html">
            Bench Brewing Company in Beamsville
          </a>,
        ]}
        qOne="Is Beamsville a nice place to live?"
        qOneAns="Beamsville, Ontario is a dainty little commnity surrounded by rural homes, farms and home to lots of wineries."
        qTwo="What is Beamsville, Ontario known for?"
        qTwoAns="Beamsville is directly in the heart of Ontario's wine country. Beamsville greatly contributes to the Niagara Peninsula wine industry."
        qThree="What are some top things to do in Beamsville?"
        qThreeAns="Beamsville, Ontario is known mostly for it's wineries. Some of the best Beamsville wineries include thirty bench, vieni estates, bench brewing, fielding estates and more."
        qFour="How old is Beamsville, Ontario?"
        qFourAns="According to wikipedia, Beamsville is over 130 years old."
        mapURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23282.93610835877!2d-79.49632748592452!3d43.15981971502678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ca6a63bd9bd41%3A0x22e434fb6db3b5f!2sBeamsville%2C%20Lincoln%2C%20ON!5e0!3m2!1sen!2sca!4v1652796199053!5m2!1sen!2sca"
      />
      <CTA />
      <Footer />
    </>
  )
}

export default SEOCity
