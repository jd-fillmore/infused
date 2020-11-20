import React from "react"
import Nav from "../../components/Nav/nav"
import Hero from "../../components/Home/Hero/hero"
import Featured from "../../components/Home/Featured/featured"
import WhatWeDo from "../../components/Home/WhatWeDo/whatWeDo"
import Clients from "../../components/Home/Clients/Clients"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

import { Helmet } from "react-helmet"
import featuredImg from "../img/niagara-web-design.png"
import websiteSVG from "../img/websites.svg"
import seoSVG from "../img/seo.svg"
import strategySVG from "../img/strategy.svg"

import "bootstrap/dist/css/bootstrap.min.css"
import "../pages/general.scss"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Niagara Web Design, SEO Provider St. Catharines, Digital Marketing
          Company - Infused
        </title>
        <meta
          name="description"
          content="Niagara's web design, St. Catharines' SEO provider & digital marketing company. We're a digital marketing agency thats brings more sales to your company."
        />
      </Helmet>
      <Nav />
      <Hero
        seoTitle="Niagara Web Design, SEO Provider St. Catharines & Digital
                    Marketing Agency"
        title="Strategic Web Development for Growing Businesses."
        subTitle="We build modern websites, local SEO and digital strategies to help you grow your business."
        btnText="Get Started"
        btnLink="/get-started"
      />
      <Featured
        title="Featured Client"
        subTitle={[
          "Take a look and see the ",
          <span>huge difference</span>,
          "we've made to KD Flower's online existence.",
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
          <span>perfect website</span>,
          "for my floral business. I was very happy with their ",
          <span>professional work ethic</span>,
          "and ",
          <span>great communication!</span>,
        ]}
        btnText="View More Case Studies"
        btnLink="/work"
      />
      <WhatWeDo
        title="What We Can Do For You"
        subTitle="Whether you need a website to showcase your services or want more local customers from your website - we can build you a digital platform that's tailor-made to your business needs."
        boxOneTitle={[
          "Bespoke websites built to ",
          <span>convert your visitors</span>,
          ".",
        ]}
        boxOneDesc="We design and build modern websites that help convert users into paying customers."
        boxOneImg={websiteSVG}
        boxOneImgAlt="websites"
        boxOneLink="/websites"
        boxTwoTitle={[
          "SEO to ",
          <span>drive local customers</span>,
          " to your website.",
        ]}
        boxTwoDesc="Getting local traffic through Google helps bring you more revenue."
        boxTwoImg={seoSVG}
        boxTwoImgAlt="seo provider st catharines"
        boxTwoLink="/seo"
        boxThreeTitle={[
          "Digital strategy to help bring you ",
          <span>more revenue</span>,
          ".",
        ]}
        boxThreeDesc="Helping you navigate through the digital world to help maximize profits."
        boxThreeImg={strategySVG}
        boxThreeImgAlt="digital strategy agency niagara, st catharines"
        boxThreeLink="/digital-strategy"
      />
      <Clients
        title="Our happy clients"
        subtitle="We take pride in knowing that we do a great job for our clients."
      />
      <CTA />
      <Footer />
    </>
  )
}

export default Home
