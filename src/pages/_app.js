import "../../src/pages/variables.scss"
import "../../src/pages/breakpoints.scss"
import "../../src/pages/about.scss"
import "../../components/Home/ClientLogos/client-logos.scss"
import "../../components/Home/Clients/clients.scss"
import "../../components/Home/FAQ/faq.scss"
import "../../components/Home/Hero/hero.scss"
import "../../components/Home/Results/results.scss"
import "../../components/Home/WhatWeDo/what-we-do.scss"
import "../../components/Home/Intro/intro.scss"
import "../../components/Nav/nav.scss"
import "../../components/innerContent/inner-content.scss"
import "../../components/innerHero/inner-hero.scss"
import "../../components/testimonialCard/testimonial-card.scss"
import "../../src/pages/general.scss"
import "../../src/pages/home-services.scss"
import "../../components/Card/card.scss"
import "../pages/work.scss"
import "../pages/seo.scss"
import "../pages/work-specific.scss"
import "../pages/how-we-work.scss"
import "../pages/about.scss"
import "../../components/seoFAQ/seo-faq.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../components/ecommFAQ/ecomm-faq.scss"
import "../../components/Home/Clients/slider/slider.scss"
import "../../components/Home/FAQ/faq.scss"
import "../../components/Home/Featured/featured.scss"
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import "../../components/Home/Process/process.scss"
import "../../components/websiteFAQ/website-faq.scss"

import { Playfair_Display, Open_Sans } from "next/font/google"

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
})

export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${playfairDisplay.className} ${openSans.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
