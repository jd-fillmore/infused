import React from "react"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

const LocalSEO = () => {
  return (
    <>
      <Nav />
      <InnerHero
        title="Local SEO"
        description="We help local businesses rank in the place where their customers are looking - on the first page of Google."
      />
      <InnerContent />
      <CTA />
      <Footer />
    </>
  )
}

export default LocalSEO
