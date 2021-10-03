import React from "react"
import Nav from "../../components/Nav/nav"
import Hero from "../../components/Home/Hero/hero"
import Featured from "../../components/Home/Featured/featured"
import WhatWeDo from "../../components/Home/WhatWeDo/whatWeDo"
import Clients from "../../components/Home/Clients/clients"
import FAQ from "../../components/Home/FAQ/faq"
import About from "../../components/Home/About/about"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

import { Helmet } from "react-helmet"
import { Link } from "gatsby"

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
        <title>
          Niagara Web Design Agency | Web Development Company St. Catharines
        </title>
        <meta
          name="description"
          content="Niagara web design agency that drives results! A St. Catharines website development company near you that creates websites that actually make a difference."
        />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Nav />
      <Hero
        titleTwo="Niagara Web Design."
        subTitle="We're a top web design &amp; development agency based in St. Catharines, Niagara. We create websites that work."
      />
      <WhatWeDo
        title="Web Design Services in Niagara, St. Catharines"
        subTitle={[
          "As a small business in St. Catharines, Niagara ourselves, we understand that your small business in Niagara or St. Catharines cannot fork out upfront thousands of dollars for a ",
          <Link to="/services">web design.</Link>,
          " That's why we offer local and affordable Niagara web design & St. Catharines ",
          <Link to="/work">website design</Link>,
          " solutions to fit your small business budget. Our web designs are secure and are hand-coded for best performance, which helps bring in more local Niagara or St. Catharines leads near you and revenue through your new web design.",
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
          " not bring in new Niagara or St. Catharines leads? Sometimes web design problems are obvious like when a web design is not mobile-friendly or if a web design doesn't have a modern design. Other times, a closer inspection into your web design is required in order to identify issues. Most issues relating to any Niagara or St. Catharines ",
          <Link to="/why-is-my-website-not-bringing-in-new-business/">
            web design
          </Link>,
          " can be a web design that doesn't rank on the first page of Google. A web design message that doesn't align with your customers, or a web design that doesn't convert users into paying customers.",
        ]}
        servicesTitle="Web Design & Development Company in St. Catharines, Niagara"
        servicesText={[
          "Your Niagara or St. Catharines ",
          <Link to="/tree-reports">web design</Link>,
          " acts as the main hub on the internet. The fact that your web design is the first stop to any new customers is absolutely vital to your business, in terms of gaining new revenue from your web design. This means that you need the best web design company in Niagara & St. Catharines to deliver great web design results to your business. Infused makes sure that we do a custom-tailored web design job right from the start, to ensure your web design is a success. Not only do we create a modern web design for your business, we're the only web design business in St. Catharines and Niagara that offers monthly web design packages to help alleviate any financial strain.",
        ]}
        whatKindTitle="What Type of Web Design Do You Need?"
        whatKindText={[
          "Whether you want to update the look of your website with a custom web design or need to manage your current website, we can do it all. We strive to create a quality web design that helps bring in new Niagara or St. Catharines clients to your business. You will have a highly professional and skilled web designer, web developer and SEO who can answer any web design questions you may have when it comes to your new Niagara or St. Catharines web design.For web design and web development, call on our trusted professionals. We're here to assess your current web design and provide our own web design solutions to help your Niagara or St. Catharines business.",
        ]}
      />
      <Featured
        title="Niagara Web Design Projects"
        subTitle={[
          "Take a look and see the huge difference we've made to our Niagara & St. Catharines client's online existences, using a hand-coded modern web design practices.",
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
