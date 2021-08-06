import React from "react"
import Nav from "../../components/Nav/nav"
import Hero from "../../components/Home/Hero/hero"
import Featured from "../../components/Home/Featured/featured"
import WhatWeDo from "../../components/Home/WhatWeDo/whatWeDo"
import Clients from "../../components/Home/Clients/clients"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

import { Helmet } from "react-helmet"

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
        <title>Niagara Web Design &amp; SEO Agency, St. Catharines</title>
        <meta
          name="description"
          content="Best Niagara web design &amp; SEO agency near you, local to St. Catharines. We build local small company websites that actually make a difference."
        />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Nav />
      <Hero
        title="Niagara Web Design Agency, St. Catharines SEO Company"
        titleTwo="Niagara Web Design &amp; SEO Agency"
        subTitle="100% hand-coded web designs with SEO performance and security over a WordPress or page builder web design starting at $170/mo for your Niagara or St. Catharines business."
      />
      <WhatWeDo
        title="Giving Niagara Businesses A Big Web Design &amp; SEO Boost"
        subTitle="As a small business in Niagara ourselves, we understand that your small business in Niagara or St. Catharines cannot fork out upfront thousands of dollars for a website or SEO. That's why we offer affordable Niagara web design &amp; SEO solutions to fit your small business budget. Our web designs are secure and are hand-coded for best performance, which helps bring in more local Niagara or St. Catharines leads through SEO near you and revenue through your website."
        boxOneTitle="Responsive"
        boxOneDesc="Your website will respond and adapt to any device - phone, tablet, desktop computer, you name it."
        boxOneImgAlt="websites"
        boxTwoTitle="Optimized"
        boxTwoDesc="Every page is hand-coded and optimized, which leads to much better SEO, security and website performance."
        boxTwoImgAlt="Optimized"
        boxThreeTitle="Secure"
        boxThreeDesc="Unlike WordPress sites, our sites are secure. You can sleep well at night knowing it won't be compromised."
        boxThreeImgAlt="Optimized"
      />
      <Featured
        title="Niagara Web Design &amp; SEO Projects"
        subTitle={[
          "Take a look and see the huge difference we've made to our Niagara & St. Catharines client's online existences, using a hand-coded modern web design & SEO practices.",
        ]}
      />
      <Clients title="Our happy Niagara &amp; St. Catharines clients" />
      <CTA />
      <Footer />
    </>
  )
}

export default Home
