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
import Link from "next/link"
import Image from "next/image"

import webImg from "../../src/img/responsive.svg"
import seoImg from "../../src/img/seoo.svg"
import dmImg from "../../src/img/dm.svg"
import ecommImg from "../../src/img/add-to-cart.png"
import wpImg from "../../src/img/wordpress.png"

import "bootstrap/dist/css/bootstrap.min.css"

const SEOCity = () => {
  return (
    <>
      <Helmet>
        <title>SEO Welland | Best Welland SEO Company</title>
        <meta
          name="description"
          content="Best Welland SEO company since 2013. Infused Agency are Welland SEO experts that will help your Welland business grow."
        />
      </Helmet>
      <Nav />
      <Hero
        title="SEO Welland, Welland SEO Services"
        titleTwo="Welland SEO Services That Grow Your Business"
        subTitle="Infused Agency is the best SEO company helping Welland businesses since 2013."
      />
      <section className="home-services">
        <div className="container">
          <div className="row pd-btm-80">
            <div className="col-lg-12 text-center">
              <h2>SEO Agency Welland</h2>
              <p className="serv-intro">
                We specialize in{" "}
                <Link href="/seo-niagara">Welland SEO services</Link> that help
                grow your Welland business. Alongside our SEO services, we can
                also help your Welland company with the following services.
              </p>
            </div>
          </div>
          {/* Row One */}
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <Image className="img-fluid" src={webImg} alt="SEO Welland" />
                <h2>Web Design &amp; Development</h2>
                <p>
                  We create Welland websites to help attract more customers.
                </p>
                <Link href="/web-design">
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
            </div>
            <div className="col-lg-4">
              <div className="card">
                <Image
                  className="img-fluid"
                  src={wpImg}
                  alt="SEO Welland Services"
                />
                <h2>WordPress Development</h2>
                <p>
                  Update your Welland website without the need of a developer.
                </p>
                <Link href="/wordpress-developer-niagara/">
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
            </div>
            <div className="col-lg-4">
              <div className="card">
                <Image
                  className="img-fluid"
                  src={dmImg}
                  alt="Welland SEO experts"
                />
                <h2>Digital Marketing</h2>
                <p>
                  Social media ads to drive Welland traffic and increase
                  revenue.
                </p>
                <Link href="/digital-marketing-niagara/">
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
            </div>
          </div>
          {/* Row Two */}
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <Image className="img-fluid" src={seoImg} alt="seo Niagara" />
                <h2>Welland SEO</h2>
                <p>
                  We help rank your Welland website on the first page of Google.
                </p>
                <Link href="/seo-niagara/">
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
            </div>
            <div className="col-lg-4">
              <div className="card">
                <Image
                  className="img-fluid"
                  src={ecommImg}
                  alt="Best SEO Agency Welland"
                />
                <h2>E-Commerce Development</h2>
                <p>
                  Robust e-commerce systems to help your Welland company sell
                  online.
                </p>
                <Link href="/ecommerce-web-design-niagara/">
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
            </div>
            <div className="col-lg-4">&nbsp;</div>
          </div>
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
                    clients around the Welland using modern SEO practices.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PortfolioSlider />
      <Link className="d-block text-center pd-top-80" href="/work">
        <button>View More Work</button>
      </Link>
      <Results
        title="Featured Welland SEO Results"
        subTitle="We create SEO campaigns that rank our Welland clients well in Google and help them beat out their Welland competition."
      />
      <WhatWeDo
        title="SEO services in Welland"
        subTitle={[
          "As a small business that's near Welland ourselves, we understand that your small business in Welland cannot fork out upfront thousands of dollars for a ",
          <Link href="/seo-niagara">SEO company</Link>,
          ". That's why we offer local and affordable Welland ",
          <Link href="/work">SEO services</Link>,
          " to fit your small business budget. Our SEO experts use the latest trends, which helps bring in more local Welland leads near you and revenue through your new SEO services campaign.",
        ]}
        boxOneTitle="Responsive"
        boxOneDesc="Your SEO Welland project needs to make sure your website is mobile-friendly, which will help in the long run."
        boxOneImgAlt="SEO"
        boxTwoTitle="Optimized"
        boxTwoDesc="Every Welland SEO project optimized, which leads to much better lead conversion and website performance."
        boxTwoImgAlt="Optimized"
        boxThreeTitle="Secure"
        boxThreeDesc="Making sure your website has HTTPS security is important for your Welland SEO project."
        boxThreeImgAlt="Optimized"
        whatTitle="What Makes A Good SEO Service in Welland?"
        whatText={[
          "Does your current ",
          <Link href="/seo-niagara">SEO</Link>,
          " not bring in new Welland leads? Sometimes SEO problems are obvious like when a website is not mobile-friendly or if your on-page SEO isn't up to snuff. Other times, a closer inspection into your SEO practices are required in order to identify issues. Most issues relating to any Welland company's ",
          <Link href="/seo-niagara">SEO</Link>,
          " can be directly related to not enough content, backlinks or website's code foundation being proper. In other words, the lack of good SEO is simply not converting your Welland users into paying customers.",
        ]}
        servicesTitle="Why Is Hiring a Good SEO Company near Welland Important?"
        servicesText={[
          "Your Welland company website acts as your main hub on the internet. The fact that your website is the first stop to any new customers means that you need local, Welland SEO traffic to come to it, in order to gain new revenue from said customers. This means that you need the best SEO company around Welland to deliver great SEO results to your business. Infused Agency makes sure that we do a custom-tailored SEO job right from the start, to ensure your SEO is a success and is optimized. Not only do we use modern SEO services for your business, we're the only SEO business around Welland that offers affordable monthly SEO packages to help alleviate any financial strain.",
        ]}
        whatKindTitle="What Type of Welland SEO Services Do You Need?"
        whatKindText={[
          "Whether your SEO is in place does a good job but you want to do some SEO optimization, or if your website has no SEO at all, we can do it all. We strive with our Welland SEO services to help your Welland business bring in new leads via SEO. You will have a highly professional and skilled SEO expert who can answer any SEO questions you may have when it comes to your new SEO Welland project. For Welland SEO, call on our trusted professionals. We're here to assess your current SEO and provide our own SEO services to help your Welland business.",
        ]}
      />
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
      <CTA />
      <Footer />
    </>
  )
}

export default SEOCity
