import React from "react"
import { Container, Row, Col } from "reactstrap"
import Link from "next/link"
import Fade from "react-reveal/Fade"

const FAQ = () => {
  return (
    <>
      <section className="faq">
        <Container>
          <div className="bg">
            <Fade>
              <Row>
                <Col lg="12">
                  <h2>Niagara Web Design Common Questions &amp; FAQ</h2>
                  <p>
                    <strong>
                      How will I know if my web design needs updating?
                    </strong>
                  </p>
                  <p>
                    The biggest factor when it comes to deciding if your website
                    needs a new web design, is if it's achieving your business
                    goal. For example - if you own a local business, is your web
                    design bringing you new Niagara or St. Catharines clients?
                    If not, it may be time for a new web design that does so.
                    Another example - if you own a local e-commerce website
                    store, is your web design bringing you more local sales in
                    the Niagara or St. Catharines area? If not, it's time for a
                    new web design.
                  </p>
                  <p>
                    <strong>
                      Will adjusting my current web design be sufficient?
                    </strong>
                  </p>
                  <p>
                    Comparing an old <Link href="/services">web design</Link> to
                    a new web design is a lot like a car; can you put a Porsche
                    engine inside of a Ford Tempo and make it perform like a
                    Porsche? Probably not. While you can certainly make small
                    updates here and there to a current web design, it's much
                    more effective if you had an all-around modern web design.
                    It's much more effective in terms of bringing in local leads
                    if you're a business in the St. Catharines, Niagara region.
                  </p>
                  <p>
                    <strong>
                      What questions should I ask my web designer?
                    </strong>
                  </p>
                  <p>
                    As a business owner, there are several key questions you
                    want to ask your web designer. For example, does your new
                    web design include SEO (search engine optimization - the
                    ability to rank on the first of Google for the Niagara or
                    St. Catharines area)? How long does the entire web design
                    process take? Are they outsourcing the web design or keeping
                    the web design in-house? These are all very important
                    questions and it's equally important to weigh out the
                    answers.
                  </p>
                  <p>
                    <strong>
                      What should I expect during a new web design build?
                    </strong>
                  </p>
                  <p>
                    At Infused Agency, we want you to have the best possible
                    experience when it comes to investing in a new website
                    design for your Niagara or St. Catharines business. You
                    should expect to work closely with the company themselves
                    and for the web design work to especially not be outsourced
                    overseas (everything we do is in-house).
                  </p>
                </Col>
              </Row>
            </Fade>
          </div>
        </Container>
      </section>
    </>
  )
}

export default FAQ
