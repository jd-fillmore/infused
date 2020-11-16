import React from "react"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

const OurWork = () => {
  return (
    <>
      <Nav />
      <InnerHero
        title="Our Work"
        description="Our work is our passion. See what we've created for our clients."
      />
      <InnerContent />
      <CTA />
      <Footer />
    </>
  )
}

export default OurWork
