import React from "react"
import Nav from "../../components/Nav/nav"
import Hero from "../../components/Home/Hero/hero"
import Featured from "../../components/Home/Featured/featured"
import WhatWeDo from "../../components/Home/WhatWeDo/whatWeDo"
import Clients from "../../components/Home/Clients/clients"
import FAQSEO from "../../components/Home/FAQ/faqSEO"
import About from "../../components/Home/About/about"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import "../pages/general.scss"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>SEO Niagara Company | St. Catharines SEO Agency | Infused</title>
        <meta
          name="description"
          content="Infused is a full-service Niagara SEO company. We provide local SEO solutions to help your business bring in more revenue!"
        />
      </Helmet>
      <Nav />
      <Hero
        titleTwo="SEO Niagara Agency"
        subTitle="We're a top local Niagara SEO Company based in St. Catharines, Niagara. Our SEO experts create SEO campaigns that work."
      />
      <WhatWeDo
        title="SEO Agency &amp; Experts in Niagara"
        subTitle={[
          "As a small business in St. Catharines, Niagara ourselves, we understand that your small business in Niagara or St. Catharines cannot fork out upfront thousands of dollars for an ",
          <Link to="/services">SEO or digital marketing campaign.</Link>,
          " That's why we offer local and affordable Niagara & St. Catharines ",
          <Link to="/work">SEO</Link>,
          " solutions to fit your small business budget. Our SEO campaigns follow the best modern practices, which helps bring in more local Niagara or St. Catharines leads near you and revenue through your SEO campaign.",
        ]}
        boxOneTitle="Research"
        boxOneDesc="Bespoke SEO keyword search wil be done to ensure your SEO campaign drives results"
        boxOneImgAlt="web design"
        boxTwoTitle="Optimized"
        boxTwoDesc="We make sure that your SEO campaign is optimized for best results for your Niagara company."
        boxTwoImgAlt="Optimized"
        boxThreeTitle="Rankings"
        boxThreeDesc="We know what it takes to have your website's SEO rank on the first page of Google."
        boxThreeImgAlt="Optimized"
        whatTitle="What Makes A Good SEO Campaign?"
        whatText={[
          "Does your current ",
          <Link to="/services">SEO</Link>,
          " not bring in new Niagara or St. Catharines leads? Sometimes SEO problems are obvious like when SEO on a website is not optimized if the SEO simply doesn't exist on a website. Other times, a closer inspection into your SEO is required in order to identify issues. Most issues relating to any Niagara or St. Catharines ",
          <Link to="/seo-steps-new-website/">SEO</Link>,
          " can be boiled down to SEO that isn't optimized, SEO that's done improperly or SEO that simply doesn't exist.",
        ]}
        servicesTitle="SEO Company in St. Catharines, Niagara"
        servicesText={[
          "Your Niagara or St. Catharines ",
          <Link to="/tree-reports">SEO</Link>,
          " acts as the main inbound marketing strategy for new leads on the internet. The fact that your SEO on your website is the first stop to any new customers is absolutely vital to your business, in terms of gaining new revenue from your SEO. This means that you need the best SEO company in Niagara & St. Catharines to deliver great SEO results to your business. Infused makes sure that we do a custom-tailored SEO job right from the start, to ensure your SEO is a success. Not only do we follow modern SEO best practices for your business, we're the only SEO company in St. Catharines and Niagara that offers monthly SEO packages to help alleviate any financial strain.",
        ]}
        whatKindTitle="What Type of SEO Do You Need?"
        whatKindText={[
          "Whether you want to update the SEO of your current website or to completely start your SEO from scratch, we can do it all. We strive to create a quality SEO campaigns that help bring in new Niagara or St. Catharines clients to your business. You will have a highly professional and skilled SEO who can answer any SEO questions you may have when it comes to your new Niagara or St. Catharines SEO prject.For SEO, call on our trusted professionals. We're here to assess your current SEO and provide our own SEO solutions to help your Niagara or St. Catharines company.",
        ]}
      />
      <Featured
        title="SEO Niagara Projects"
        subTitle={[
          "Take a look and see the huge difference we've made to our Niagara & St. Catharines client's online existences, using modern SEO practices.",
        ]}
      />
      <Clients title="Our happy Niagara &amp; St. Catharines clients" />
      <FAQSEO />
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
