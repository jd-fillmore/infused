import React from "react"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

const About = () => {
  return (
    <>
      <Nav />
      <InnerHero
        title="About Us"
        description="We build modern websites, local SEO and digital strategies to help you grow your business."
      />
      <InnerContent />
      <CTA />
      <Footer />
    </>
  )
}

export default About
