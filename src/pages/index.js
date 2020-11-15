import React from "react"
import Nav from "../../components/Nav/nav"
import Hero from "../../components/Home/Hero/hero"
import Featured from "../../components/Home/Featured/featured"
import WhatWeDo from "../../components/Home/WhatWeDo/whatWeDo"
import Clients from "../../components/Home/Clients/Clients"
import CTA from "../../components/CTA/cta"

import "bootstrap/dist/css/bootstrap.min.css"
import "../pages/general.scss"

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Featured />
      <WhatWeDo />
      <Clients />
      <CTA />
    </>
  )
}

export default Home
