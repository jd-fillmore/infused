import React from "react"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

const DigitalStrategy = () => {
  return (
    <>
      <Nav />
      <InnerHero
        title="Digital Strategy"
        description="Want to bring in more revenue online but not sure how? We help with that."
      />
      <InnerContent />
      <CTA />
      <Footer />
    </>
  )
}

export default DigitalStrategy
