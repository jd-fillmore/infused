import React from "react"
import Nav from "../../components/Nav/nav"
import Hero from "../../components/Home/Hero/hero"
import Intro from "../../components/Home/Intro/intro"
import Featured from "../../components/Home/Featured/featured"
import WhatWeDo from "../../components/Home/WhatWeDo/whatWeDo"
import Process from "../../components/Home/Process/process"
import Clients from "../../components/Home/Clients/clients"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

import { Helmet } from "react-helmet"
import reviewImg from "../img/google-reviews.png"
import introImg from "../img/tree-reports.png"
import featuredImg from "../img/niagara-web-design.png"
import websiteSVG from "../img/websites.svg"
import seoSVG from "../img/seo.svg"
import strategySVG from "../img/strategy.svg"

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
          content="Leap ahead your competitors with Niagara web design and marketing agency services from Infused. Elevate your marketing with Infused, today!"
        />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <meta
          name="facebook-domain-verification"
          content="jl782aoue5dqdjpmbo20fluq6wcd3s"
        />
      </Helmet>
      <Nav />
      <Hero
        title="Niagara Web Design &amp; Marketing Agency."
        subTitle="Our Niagara web design &amp; marketing agency experts specialize in creating cutting-edge websites that engage your users and convert them into customers."
      />
      <Intro img={introImg} />
      <WhatWeDo
        title="What We Can Do For You"
        subTitle="Whether you need an affordable web design or a local SEO provider to showcase your services in Niagara &amp; St. Catharines or want more local Niagara &amp; St. Catharines customers from your website - we can build you a digital platform that's tailor-made to your business needs."
        boxOneTitle={[
          "Bespoke websites built to ",
          <span>convert your visitors</span>,
          ".",
        ]}
        boxOneDesc="We do modern web design &amp; development for Niagara businesses that help convert users into paying customers."
        boxOneImg={websiteSVG}
        boxOneImgAlt="websites"
        boxOneLink="/websites"
        boxOnePriceLink="/websites#pricing"
        boxOneFAQLink="/websites#faq"
        boxTwoTitle={[
          "SEO to ",
          <span>drive local customers</span>,
          " to your website.",
        ]}
        boxTwoDesc="Getting local Niagara traffic through SEO to your modern web design helps bring you more revenue."
        boxTwoImg={seoSVG}
        boxTwoImgAlt="seo provider st catharines"
        boxTwoLink="/seo"
        boxTwoPriceLink="/seo#pricing"
        boxTwoFAQLink="/seo#faq"
        boxThreeTitle={[
          "E-Commerce to help you ",
          <span>sell online</span>,
          ".",
        ]}
        boxThreeDesc="Helping your Niagara business sell more online through E-Commerce."
        boxThreeImg={strategySVG}
        boxThreeImgAlt="e-commerce websites niagara, st catharines"
        boxThreeLink="/e-commerce"
        boxFourTitle={[
          "Digital marketing to help you bring in ",
          <span>more revenue</span>,
          ".",
        ]}
        boxFourDesc="Helping drive Niagara customers to your website."
        boxFourImg={strategySVG}
        boxFourImgAlt="digital marketing agency niagara, st catharines"
        boxFourLink="/digital-marketing"
      />
      <Featured
        title="Featured Niagara Client"
        subTitle={[
          "Take a look and see the ",
          <span>huge difference</span>,
          "we've made to KD Flower's online existence in Niagara, by utilizing modern web design and SEO practices.",
        ]}
        viewsValue="10,700"
        viewsText="website views per month"
        leadsValue="20,000%"
        leadsText="increase in new leads in first 6 months"
        peopleValue="5,800"
        peopleText="people discovering website per month"
        img={featuredImg}
        imgAlt="niagara web design, seo provider st catharines, digital agency"
        testimonial={[
          "Infused created the ",
          <span>perfect web design</span>,
          "for my Niagara floral business. I was very happy with their ",
          <span>professional work ethic</span>,
          "and ",
          <span>great communication</span>,
          "and SEO results!",
        ]}
        btnText="View More Case Studies"
        btnLink="/work"
      />
      <Process
        title="How We Work"
        subTitle="If we didn't have a thought-out, structured process then we'd be all over the place."
        titleOne="1. Discuss"
        subTitleOne="We get to know you and your project needs."
        descOne="After you connect with us through our contact form, we will discuss the details of your new project. Whether it's a new web design, or you'd like to bring more customers / clients to your business through local SEO, we gather all of the necessary information for your project."
        titleTwo="2. Project Estimate"
        subTitleTwo="Pricing packages based on your business goals."
        descTwo={[
          "Based on our conversation you will receive our package option recommendations. If you agree to move forward with us, we get the important stuff signed and the project is underway for your new Niagara web design or SEO project.",
        ]}
        titleThree="3. Get To Work"
        subTitleThree="Time to get our hands dirty."
        descThree="This is where the magic happens. If we're developing a website for you, it's time to design, build and launch it. If we're doing local SEO, it's month-to-month effort to help you rank on the first page of Google. If we're developing a digital strategy, intense research among other diligent efforts to make that happen.

        In whichever way we help you, we'll be working closely together to make it happen."
        titleFour="4. Deliver"
        subTitleFour="The fruits of our labour."
        descFour="After all is said and done, you will receive the final, modern product. Our relationship doesn't stop there. We pride on having ongoing relationships with our clients, making sure we can best serve them in whatever digital ways possible for years to come."
      />
      <Clients title="Our happy clients" />
      <CTA />
      <Footer />
    </>
  )
}

export default Home
