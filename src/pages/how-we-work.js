import React from "react"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

const HowWeWork = () => {
  return (
    <>
      <Nav />
      <InnerHero
        title="How We Work"
        description="If we didn't have a thought-out, structured process then we'd be all over the place."
      />
      <InnerContent />
      <CTA />
      <Footer />
    </>
  )
}

export default HowWeWork
