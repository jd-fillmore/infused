import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import website from "../img/wordpress.png"
import bgImage from "../img/inner-wordpress.jpg"

const WordPress = () => {
  return (
    <>
      <Helmet>
        <title>
          WordPress Developer Niagara | St. Catharines WordPress Experts
        </title>
        <meta
          name="description"
          content="Infused Agency has WordPress developers specializing in WordPress development for your business. Click here to get your free quote."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Niagara WordPress Developer, St. Catharines"
        description="Our WordPress development agency builds modern WordPress websites for your Niagara or St. Catharines company"
        bgImage={bgImage}
      />
      <InnerContent>
        <section className="services">
          <Container>
            {/* Websites */}
            <Row>
              <Col lg="12 pd-btm-80">
                <h3>
                  WordPress Developer Niagara, St. Catharines WordPress Experts
                </h3>
              </Col>
            </Row>
            <Row className="web align-items-center">
              <Col md="4">
                <Image
                  src={website}
                  alt="wordpress developer niagara, st catharines wordpress development agency"
                />
              </Col>
              <Col lg={{ size: 7, offset: 1 }}>
                <p>
                  When our <strong>Niagara WordPress developers</strong> build
                  out a <strong>Niagara WordPress web design</strong> for your
                  Niagara or St. Catharines business, you get a plethora of
                  benefits.
                </p>
                <ul>
                  <li>
                    You can update your own WordPress web design without us
                    (we'll teach you!)
                  </li>
                  <li>Access to a rich ecosystem of WordPress plugins</li>
                  <li>
                    Ability to use WordPress plugins to add functionality to
                    your WordPress site
                  </li>
                  <li>And more!</li>
                </ul>
                <p>
                  WordPress powers over 40% of all websites on the internet, and
                  there's a good reason for that. WordPress allows you to update
                  your website's content easily without knowing how to code. It
                  allows you to add rich functionality like e-commerce shops, a
                  blog, membership areas and more.
                </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://calendly.com/infused-agency/project-discovery/"
                >
                  <button>Get Free Quote</button>
                </a>
              </Col>
            </Row>
            <Row className="pd-top-80">
              <Col lg="12">
                <h3>What is WordPress?</h3>
                <p>
                  WordPress is a very powerful content management system (CMS).
                  It powers over 40% of all{" "}
                  <Link href="/websites">websites</Link> online. WordPress
                  developers can add functionality to your site with ease and
                  get you up and running very quickly.
                </p>
                <h3>What is a WordPress CMS?</h3>
                <p>
                  A WordPress CMS - or a content management system - enables our
                  St. Catharines WordPress developers and owners to add pages,
                  edit pages, delete pages and more. It allows your to manage
                  your WordPress website with ease. A CMS gets rid of the need
                  for our Niagara WordPress developers to edit the code
                  themselves, and rather the owner of the business can do so
                  easily.
                </p>
                <h3>What's a WordPress plugin?</h3>
                <p>
                  A WordPress plugin is basically a chunk of code that adds
                  functionality to your WordPress website. We have Niagara
                  WordPress developers that can add these to your website no
                  problem. There's plugins for{" "}
                  <Link href="/ecommerce-company-niagara/">e-commerce</Link>,
                  WordPress plugins for{" "}
                  <Link href="/niagara-seo-agency">SEO</Link>, and more.
                </p>
                <h3>Is WordPress secure?</h3>
                <p>
                  WordPress needs to be updated monthly in order to make sure it
                  stays secure. This is because WordPress experts cross the
                  world update their WordPress plugins. In order to keep your
                  WordPress plugins secure, our Niagara WordPress developers can
                  updates these WordPress plugins for you.
                </p>
                <h3>Why do you need to make WordPress plugin updates?</h3>
                <p>
                  As mentioned above, WordPress developer experts ensure the
                  safety of their plugins by constantly updating them on a
                  monthly basis. If our St. Catharines WordPress developers do
                  not maintain these plugins for you, your WordPress plugins
                  will become out of date and have security holes in them. It's
                  vital that our Niagara WordPress developers consistently
                  maintain your WordPress website in order to keep it safe.
                </p>
                <h3>How much does a WordPress website cost?</h3>
                <p>
                  That completely depends. Every project is different and it
                  depends on the functionality of the WordPress website. A
                  static, purely information WordPress website will cost less
                  than a WordPress site that has e-commerce functionality, for
                  example. In our initial all about your new WordPress website,
                  we'll flesh out information, assess and provide you with a
                  free quote for your Niagara WordPress web design and
                  development project.
                </p>
                <p>
                  For more questions regarding a new website project, please{" "}
                  <Link href="/web-design">click here.</Link>
                </p>
                <h3>
                  Our Niagara &amp; St. Catharines WordPress Developer Experts
                  are ready to help.
                </h3>
                <p>
                  If you need our agency Niagara / St. Catharines WordPress
                  experts to work with you and help design and develop your
                  WordPress website, click below to get your free WordPress web
                  design and development quote.
                </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://calendly.com/infused-agency/project-discovery/"
                >
                  <button>Get Free Quote</button>
                </a>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  )
}

export default WordPress
