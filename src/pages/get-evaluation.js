import React from "react"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

const GetEvaluation = () => {
  return (
    <>
      <Nav />
      <InnerHero
        title="Get An Evaluation"
        description="A different approach to the traditional proposal"
      />
      <InnerContent />
      <CTA />
      <Footer />
    </>
  )
}

export default GetEvaluation
