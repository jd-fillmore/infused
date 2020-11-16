import React from "react"
import Nav from "../../components/Nav/nav"
import Hero from "../../components/Home/Hero/hero"
import Featured from "../../components/Home/Featured/featured"
import WhatWeDo from "../../components/Home/WhatWeDo/whatWeDo"
import Clients from "../../components/Home/Clients/Clients"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

import { Helmet } from "react-helmet"

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
      <Hero />
      <Featured />
      <WhatWeDo />
      <Clients />
      <CTA />
      <Footer />
    </>
  )
}

export default Home
