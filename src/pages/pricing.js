import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"

import "../pages/work.scss"

const Pricings = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Infused</title>
        <meta
          name="description"
          content="We offer affordable, transparent pricing on our website where most other agencies do not. Please check our prices today."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Pricing"
        description="Check out links to our pricing packages below."
      />
      <InnerContent>
        <section className="work">
          <div className="container">
            <div className="row">
              <ul>
                <li>
                  <Link to="/seo#pricing">SEO Pricing</Link>
                </li>
                <li>
                  <Link to="/websites#pricing">Website Pricing</Link>
                </li>
                <li>
                  <Link to="/e-commerce#pricing">E-Commerce Pricing</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  )
}

export default Pricings
