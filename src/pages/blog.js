import React from "react"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

const Blog = () => {
  return (
    <>
      <Nav />
      <InnerHero
        title="Blog"
        description="We help educate potential clients and existing customers on web design, digital strategy and SEO."
      />
      <InnerContent />
      <CTA />
      <Footer />
    </>
  )
}

export default Blog
