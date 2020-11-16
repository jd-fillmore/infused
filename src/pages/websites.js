import React from "react"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

const Websites = () => {
  return (
    <>
      <Nav />
      <InnerHero
        title="Modern Websites"
        description="We don't build Wix, Squarespace or WordPress websites. We build modern websites that bring you revenue."
      />
      <InnerContent />
      <CTA />
      <Footer />
    </>
  )
}

export default Websites
