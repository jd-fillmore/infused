import React from "react"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Infused</title>
        <meta
          name="description"
          content="We help educate potential clients and existing customers on web design, digital strategy and SEO."
        />
      </Helmet>
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
