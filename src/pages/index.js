import React from "react"
import Nav from "../../components/Nav/nav"
import Hero from "../../components/Home/Hero/hero"
import Featured from "../../components/Home/Featured/featured"
import WhatWeDo from "../../components/Home/WhatWeDo/whatWeDo"
import Clients from "../../components/Home/Clients/clients"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

import { Helmet } from "react-helmet"
import featuredImg from "../img/niagara-web-design.png"

import "bootstrap/dist/css/bootstrap.min.css"
import "../pages/general.scss"

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
        <title>Niagara Web Design and Marketing Agency | Infused</title>
        <meta
          name="description"
          content="Affordable Niagara web design and marketing agency services from Infused based in St. Catharines. Elevate your marketing with Infused, today!"
        />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Nav />
      <Hero
        title="Niagara Web Design, St. Catharines SEO Company &amp; Digital Marketing Agency"
        titleTwo="Small Business Web Design &amp; Development"
        subTitle="100% hand-coded websites with far superior performance and security over a WordPress or page builder website starting at $170/mo for 1 year."
      />
      {/* Intro Image */}
      {/* <div className="container intro-pic">
        <div className="row">
          <div className="col-lg-5">&nbsp;</div>
          <div className="col-lg-7">
            <img
              className="img-fluid"
              src={featuredImg}
              alt="niagara web design, small business digital marketing"
            />
          </div>
        </div>
      </div> */}
      <WhatWeDo
        title="Giving Small Businesses A Big Business Treatment"
        subTitle="As a small business, we understand that your small business cannot fork out upfront thousands of dollars for a website. That's why we offer affordable web design solutions to fit your small business budget. Our websites are secure and are hand-coded for best performance, which helps bring in more leads and revenue through your website."
        boxOneTitle="Responsive"
        boxOneDesc="Your website will respond and adapt to any device - phone, tablet, desktop computer, you name it."
        boxOneImgAlt="websites"
        boxTwoTitle="Optimized"
        boxTwoDesc="Every page is hand-coded and optimized, which leads to much better security and website performance."
        boxTwoImgAlt="Optimized"
        boxThreeTitle="Secure"
        boxThreeDesc="Unlike WordPress sites, our sites are secure. You can sleep well at night knowing it won't be compromised."
        boxThreeImgAlt="Optimized"
      />
      <Featured
        title="Featured Work"
        subTitle={[
          "Take a look and see the we've made to our client's online existences, using a hand-coded modern web design and SEO practices.",
        ]}
      />
      <Clients title="Our happy clients" />
      <CTA />
      <Footer />
    </>
  )
}

export default Home
