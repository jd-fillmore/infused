import React from "react"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

const GetEvaluation = () => {
  return (
    <>
      <Helmet>
        <title>Get Started - Infused</title>
        <meta
          name="description"
          content="Ready to start your project? Click here to fill out the form and we'll be in contact as soon as possible."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Get Started"
        description="Ready to start your project? Fill out the form below and we'll be in contact as soon as possible."
      />
      <InnerContent />
      <CTA />
      <Footer />
    </>
  )
}

export default GetEvaluation
