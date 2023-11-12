import React from "react"
import Nav from "../../components/Nav/nav"
import Hero from "../../components/Home/Hero/hero"
import Fade from "react-reveal/Fade"
import PortfolioSlider from "../../components/Home/PortfolioSlider/portfolioSlider"
import Results from "../../components/Home/Results/results"
import WhatWeDo from "../../components/Home/WhatWeDo/whatWeDo"
import Clients from "../../components/Home/Clients/clients"
import FAQ from "../../components/Home/FAQ/faq"
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
import clientLmc from "../../src/img/client-lmc.png"
import clientKd from "../../src/img/client-kd.png"
import clientTr from "../../src/img/client-tr.png"
import clientGgs from "../../src/img/client-ggs.png"

import "bootstrap/dist/css/bootstrap.min.css"
import "../pages/general.scss"
import "../pages/home-services.scss"
import ClientLogos from "../../components/Home/ClientLogos/clientLogos"

const schema = {
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  name: "Infused Agency",
  image:
    "https://infused.agency/static/niagara-web-design-2f828e960c0871169524dbd5886ab097.png",
  telephone: "(905) 933-3115",
  address: {
    "@type": "PostalAddress",
    streetAddress: "73 Alexandra Blvd",
    addressLocality: "St. Catharines",
    addressRegion: "ON",
    postalCode: "L2P 1K2",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: "Monday",
      },
      opens:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
      closes:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: "Tuesday",
      },
      opens:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
      closes:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: "Wednesday",
      },
      opens:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
      closes:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: "Thursday",
      },
      opens:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
      closes:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: "Friday",
      },
      opens:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
      closes:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: "Saturday",
      },
      closes:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: {
        "@type": "DayOfWeek",
        name: "Sunday",
      },
      closes:
        "Please insert valid ISO 8601 date/time here. Examples: 2015-07-27 or 2015-07-27T15:30",
    },
  ],
}

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Niagara Web Design | Web Designers St. Catharines</title>
        <meta
          name="description"
          content="Best Niagara web design company since 2013. Infused Agency are St. Catharines and Niagara's experts in custom website design, WordPress development and more."
        />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Nav />
      <Hero
        title="Niagara Web Design Company, Web Design St. Catharines"
        titleTwo="Web design and SEO done right."
        subTitle="Infused Agency is a top web design agency hand-crafting beautiful website design since 2013."
      />
      <ClientLogos
        title="We work with awesome, local clients"
        logoOne={clientLmc}
        logoOneAlt="lincoln medical centre - web design"
        logoTwo={clientKd}
        logoTwoAlt="kd flowers - web design"
        logoThree={clientTr}
        logoThreeAlt="tree reports - web design"
        logoFour={clientGgs}
        logoFourAlt="ggs landscaping niagara - web design"
      />
      <section className="home-services">
        <div className="container">
          <div className="row pd-btm-80">
            <div className="col-lg-12 text-center">
              <h2>Niagara Web Design Company</h2>
              <p className="serv-intro">
                We design <Link to="/web-design">mobile-friendly websites</Link>{" "}
                that help grow your business. From our initial discovery meeting
                to post-launch support, we're always here to help.
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
                  alt="Niagara web design company"
                />
                <h2>Web Design &amp; Development</h2>
                <p>We create websites to help attract more customers.</p>
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
                  alt="Niagara WordPress website development"
                />
                <h2>WordPress Development</h2>
                <p>Update your website without the need of a developer.</p>
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
                  alt="digital marketing Niagara"
                />
                <h2>Digital Marketing</h2>
                <p>Social media ads to drive traffic and increase revenue.</p>
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
                <h2>SEO</h2>
                <p>We help rank your website on the first page of Google.</p>
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
                  alt="e-commerce website wordpress development niagara"
                />
                <h2>E-Commerce Development</h2>
                <p>Robust e-commerce systems to help your sell online.</p>
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
        </div>
      </section>
      <section className="home-feat">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center pd-top-120 pd-btm-80">
                <Fade>
                  <h2>Featured Web Design Projects</h2>
                  <p id="sub">
                    Take a look and see the huge difference we've made to our
                    Niagara & St. Catharines client's online existences, using
                    modern web design practices.
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
        title="Featured Web Design Results"
        subTitle="We create web designs that rank our clients well in Google and help them beat out their competition."
      />
      <WhatWeDo
        title="Web Design Services in Niagara, St. Catharines"
        subTitle={[
          "As a small business in St. Catharines, Niagara ourselves, we understand that your small business in Niagara or St. Catharines cannot fork out upfront thousands of dollars for a ",
          <Link to="/services">web design</Link>,
          ". That's why we offer local and affordable Niagara web design & St. Catharines ",
          <Link to="/work">website design</Link>,
          " solutions to fit your small business budget. Our web designs are secure and modern, which helps bring in more local Niagara or St. Catharines leads near you and revenue through your new web design.",
        ]}
        boxOneTitle="Responsive"
        boxOneDesc="Your web design will respond and adapt to any device - phone, tablet, desktop computer, you name it."
        boxOneImgAlt="web design"
        boxTwoTitle="Optimized"
        boxTwoDesc="Every web design is hand-coded and optimized, which leads to much better security and website performance."
        boxTwoImgAlt="Optimized"
        boxThreeTitle="Secure"
        boxThreeDesc="Our web designs are secure. You can sleep well at night knowing it won't be compromised."
        boxThreeImgAlt="Optimized"
        whatTitle="What Makes A Good Web Design?"
        whatText={[
          "Does your current ",
          <Link to="/services">web design</Link>,
          " not bring in new Niagara or St. Catharines leads? Sometimes web design problems are obvious like when a website is not mobile-friendly or if a web design doesn't have a modern design. Other times, a closer inspection into your web design practices are required in order to identify issues. Most issues relating to any Niagara or St. Catharines ",
          <Link to="/why-is-my-website-not-bringing-in-new-business/">
            web design
          </Link>,
          " can be a web design that doesn't rank on the first page of Google, which means it's SEO isn't up to par. A web design message that doesn't align with your customers, or a web design that doesn't convert users into paying customers.",
        ]}
        servicesTitle="Why Is Hiring a Good Web Design Company Important?"
        servicesText={[
          "Your Niagara or St. Catharines ",
          <Link to="/tree-reports">web design</Link>,
          " acts as the main hub on the internet. The fact that your web design is the first stop to any new customers is absolutely vital to your business, in terms of gaining new revenue from your web design. This means that you need the best web design company in Niagara & St. Catharines to deliver great web design results to your business. Infused Agency makes sure that we do a custom-tailored web design job right from the start, to ensure your web design is a success and is optimized. Not only do we create a modern web design for your business, we're the only web design business in St. Catharines and Niagara that offers monthly web design packages to help alleviate any financial strain.",
        ]}
        whatKindTitle="What Type of Web Design Services Do You Need?"
        whatKindText={[
          "Whether you want to update the look of your website with a custom web design or need to manage your current website, we can do it all. We strive to create a quality web design that helps bring in new Niagara or St. Catharines clients to your business. You will have a highly professional and skilled web designer and WordPress web developer who can answer any web design questions you may have when it comes to your new Niagara or St. Catharines web design. For web design and WordPress web development, call on our trusted professionals. We're here to assess your current web design and provide our own web design & WordPress solutions to help your Niagara or St. Catharines business.",
        ]}
      />

      <Clients title="Our happy Niagara &amp; St. Catharines clients" />
      <FAQ />
      <About
        city="Niagara"
        intro={[
          "The Regional Municipality of ",
          <a href="https://www.niagararegion.ca/">Niagara</a>,
          " in Southern Ontario, Canada, lies on the west side of the Niagara River, between lakes Ontario and Erie. The Canadian section of Niagara Falls, including the dramatic Horseshoe Falls, is its most famous feature.",
        ]}
        area="1,854"
        population="447,888"
        topSights={[
          <a href="https://www.niagaraparks.com/visit-niagara-parks/plan-your-visit/niagara-falls-geology-facts-figures/">
            Niagara Falls
          </a>,
          ", ",
          <a href="https://www.niagaraparks.com/visit/attractions/journey-behind-the-falls/">
            Journey Behind The Falls
          </a>,
          ", ",
          <a href="https://www.skylon.com/">Skylon Tower</a>,
        ]}
        qOne="What is Niagara in Canada?"
        qOneAns="Niagara Falls is a city in Ontario. It's near the west bank of the Niagara River in the Golden Horseshoe region of Southern Ontario."
        qTwo="What is Niagara known for?"
        qTwoAns="Niagara is known for having one of the most famous waterfalls in the entire world. It's been a popular tourist attraction for over 200 years, and it's also a major source of electric power for the surrounding region."
        qThree="Is Niagara dangerous?"
        qThreeAns="Even though Niagara has the falls and it's beautiful, Niagara itself actually is not a very safe place. 91% of cities are safer than Niagara, but 9% of cities are more dangerous than the region."
        qFour="What is the best time of year to go to Niagara?"
        qFourAns="The best time to visit Niagara FAlls is between the months of June and August. Summer is the best time to go because the mist coming off of Niagara falls can make the area feel much cooler."
        mapURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d746182.1554938729!2d-79.90704906963097!3d43.06721961311654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d34c9ec993deb7%3A0xef7f46930d192396!2sRegional%20Municipality%20of%20Niagara%2C%20ON!5e0!3m2!1sen!2sca!4v1628642324816!5m2!1sen!2sca"
      />
      <CTA />
      <Footer />
    </>
  )
}

export default Home
