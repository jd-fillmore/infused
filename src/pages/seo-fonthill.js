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
        <title>SEO Fonthill | Best Fonthill SEO Company</title>
        <meta
          name="description"
          content="Best Fonthill SEO company since 2013. Infused Agency are Fonthill SEO experts that will help your Fonthill business grow."
        />
      </Helmet>
      <Nav />
      <Hero
        title="SEO Fonthill, Fonthill SEO Services"
        titleTwo="Fonthill SEO Services That Grow Your Business"
        subTitle="Infused Agency is the best SEO company helping Fonthill businesses since 2013."
      />
      <section className="home-services">
        <div className="container">
          <div className="row pd-btm-80">
            <div className="col-lg-12 text-center">
              <h2>SEO Agency Fonthill</h2>
              <p className="serv-intro">
                We specialize in{" "}
                <Link to="/seo-niagara">Fonthill SEO services</Link> that help
                grow your Fonthill business. Alongside our SEO services, we can
                also help your Fonthill company with the following services.
              </p>
            </div>
          </div>
          {/* Row One */}
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <img className="img-fluid" src={webImg} alt="SEO Fonthill" />
                <h2>Web Design &amp; Development</h2>
                <p>
                  We create Fonthill websites to help attract more customers.
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
                  alt="SEO Fonthill Services"
                />
                <h2>WordPress Development</h2>
                <p>
                  Update your Fonthill website without the need of a developer.
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
                  alt="Fonthill SEO experts"
                />
                <h2>Digital Marketing</h2>
                <p>
                  Social media ads to drive Fonthill traffic and increase
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
                <h2>Fonthill SEO</h2>
                <p>
                  We help rank your Fonthill website on the first page of
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
                  alt="Best SEO Agency Fonthill"
                />
                <h2>E-Commerce Development</h2>
                <p>
                  Robust e-commerce systems to help your Fonthill company sell
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
                    clients around the Fonthill using modern SEO practices.
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
        title="Featured Fonthill SEO Results"
        subTitle="We create SEO campaigns that rank our Fonthill clients well in Google and help them beat out their Fonthill competition."
      />
      <WhatWeDo
        title="SEO services in Fonthill"
        subTitle={[
          "As a small business that's near Fonthill ourselves, we understand that your small business in Fonthill cannot fork out upfront thousands of dollars for a ",
          <Link to="/seo-niagara">SEO company</Link>,
          ". That's why we offer local and affordable Fonthill ",
          <Link to="/work">SEO services</Link>,
          " to fit your small business budget. Our SEO experts use the latest trends, which helps bring in more local Fonthill leads near you and revenue through your new SEO services campaign.",
        ]}
        boxOneTitle="Responsive"
        boxOneDesc="Your SEO Fonthill project needs to make sure your website is mobile-friendly, which will help in the long run."
        boxOneImgAlt="SEO"
        boxTwoTitle="Optimized"
        boxTwoDesc="Every Fonthill SEO project optimized, which leads to much better lead conversion and website performance."
        boxTwoImgAlt="Optimized"
        boxThreeTitle="Secure"
        boxThreeDesc="Making sure your website has HTTPS security is important for your Fonthill SEO project."
        boxThreeImgAlt="Optimized"
        whatTitle="What Makes A Good SEO Service in Fonthill?"
        whatText={[
          "Does your current ",
          <Link to="/seo-niagara">SEO</Link>,
          " not bring in new Fonthill leads? Sometimes SEO problems are obvious like when a website is not mobile-friendly or if your on-page SEO isn't up to snuff. Other times, a closer inspection into your SEO practices are required in order to identify issues. Most issues relating to any Fonthill company's ",
          <Link to="/seo-niagara">SEO</Link>,
          " can be directly related to not enough content, backlinks or website's code foundation being proper. In other words, the lack of good SEO is simply not converting your Fonthill users into paying customers.",
        ]}
        servicesTitle="Why Is Hiring a Good SEO Company near Fonthill Important?"
        servicesText={[
          "Your Fonthill company website acts as your main hub on the internet. The fact that your website is the first stop to any new customers means that you need local, Fonthill SEO traffic to come to it, in order to gain new revenue from said customers. This means that you need the best SEO company around Fonthill to deliver great SEO results to your business. Infused Agency makes sure that we do a custom-tailored SEO job right from the start, to ensure your SEO is a success and is optimized. Not only do we use modern SEO services for your business, we're the only SEO business around Fonthill that offers affordable monthly SEO packages to help alleviate any financial strain.",
        ]}
        whatKindTitle="What Type of Fonthill SEO Services Do You Need?"
        whatKindText={[
          "Whether your SEO is in place does a good job but you want to do some SEO optimization, or if your website has no SEO at all, we can do it all. We strive with our Fonthill SEO services to help your Fonthill business bring in new leads via SEO. You will have a highly professional and skilled SEO expert who can answer any SEO questions you may have when it comes to your new SEO Fonthill project. For Fonthill SEO, call on our trusted professionals. We're here to assess your current SEO and provide our own SEO services to help your Fonthill business.",
        ]}
      />
      <About
        city="Fonthill"
        intro={[
          "The Regional Municipality of ",
          <a href="https://en.wikipedia.org/wiki/Fonthill,_Ontario">
            Fonthill
          </a>,
          " is a small community that's part of the townset of Lincoln, Ontario. It's located right at the southern shore of Lake Ontario. It contains buildings that are hundreds of years old, with barbershops, print shops, restaurants and more.",
        ]}
        area="7.28"
        population="10,378"
        topSights={[
          <a href="https://www.tripadvisor.ca/Attraction_Review-g3546128-d8043710-Reviews-Baxo_Fine_Art_Gallery-Fonthill_Pelham_Ontario.html">
            Baxo Art Gallery in Fonthill
          </a>,
          ", ",
          <a href="https://www.tripadvisor.ca/Attraction_Review-g3546128-d628302-Reviews-Howell_Family_Pumpkin_Farm-Fonthill_Pelham_Ontario.html">
            Howell Family Farm in Fonthill
          </a>,
          ", ",
          <a href="https://www.tripadvisor.ca/Attraction_Review-g3546128-d12498728-Reviews-Weiland_s_Cherry_Farm-Fonthill_Pelham_Ontario.html">
            Weiland Cherry Farm in Fonthill
          </a>,
        ]}
        qOne="Is Fonthill a nice place to live?"
        qOneAns="The Village of Fonthill is probably the most delightful put to live on the Niagara Peninsula, for sure in all of Ontario! Nearly whatever an individual could require is inside a brief distance of Town Square Manor. The Fonthill business region has two enormous supermarkets, numerous niche stores, banks, cafés and bars."
        qTwo="Is Pelham the same as Fonthill?"
        qTwoAns="
        Pelham, Ont, integrated as a town in 1970, populace 16 598 (2011c), 16 155 (2006c). The Town of Pelham is in the Regional Municipality of Niagara, situated between the NIAGARA ESCARPMENT and the Welland River. The people group inside Pelham are Fonthill, Fenwick, Ridgeville, Effingham and North Pelham."
        qThree="How old is Fonthill?"
        qThreeAns="The primary appearance of a house at Fonthill comes in 1533, when Sir John Mervyn bought the bequest and resided in a house encompassed by a recreation area. After 100 years Fonthill House was possessed by Lord Cottington, Chancellor of the Exchequer in Charles I's rule."
        qFour="What is Fonthill known for?"
        qFourAns="Fonthill is a rich local area in the town of Pelham, Ontario, Canada. It has a couple of little ventures, yet is fundamentally a private suburb known for its organic product plantations, nature trails, and local area soul."
        mapURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11664.900816707064!2d-79.29441710180834!3d43.03669295016674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3495b85ab330f%3A0xa66b7f6644047a01!2sFonthill%2C%20Pelham%2C%20ON!5e0!3m2!1sen!2sca!4v1652827497733!5m2!1sen!2sca"
      />
      <CTA />
      <Footer />
    </>
  )
}

export default SEOCity
