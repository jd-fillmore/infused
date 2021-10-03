import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

import "../FAQ/faq.scss"

const FAQSEO = () => {
  return (
    <>
      <section className="faq">
        <Container>
          <div className="bg">
            <Fade>
              <Row>
                <Col lg="12">
                  <h2>Niagara SEO Common Questions &amp; FAQ</h2>
                  <p>
                    <strong>How will I know if my SEO needs updating?</strong>
                  </p>
                  <p>
                    The biggest factor when it comes to deciding if your website
                    needs new SEO, is if it's achieving your business goal. For
                    example - if you own a local business, is your SEO bringing
                    you new Niagara or St. Catharines clients? If not, it may be
                    time for a new SEO that does so. Another example - if you
                    own a local e-commerce website store, is your SEO bringing
                    you more local sales in the Niagara or St. Catharines area?
                    If not, it's time for a new SEO.
                  </p>
                  <p>
                    <strong>
                      Will adjusting my current SEO be sufficient?
                    </strong>
                  </p>
                  <p>
                    Comparing an old <Link to="/services">SEO project</Link> to
                    a new SEO project is a lot like a car; can you put a Porsche
                    engine inside of a Ford Tempo and make it perform like a
                    Porsche? Probably not. While you can certainly make small
                    updates here and there to a current SEO, it's much more
                    effective if you had an all-around modern SEO to be
                    implemented. It's much more effective in terms of bringing
                    in local leads if you're a company in the St. Catharines,
                    Niagara region.
                  </p>
                  <p>
                    <strong>What questions should I ask my SEO?</strong>
                  </p>
                  <p>
                    As a business owner, there are several key questions you
                    want to ask your SEO. For example, does your current
                    website's SEO include SEO (search engine optimization - the
                    ability to rank on the first of Google for the Niagara or
                    St. Catharines area)? How long does the entire SEO process
                    take? Are they outsourcing the SEO or keeping the SEO
                    in-house? These are all very important questions and it's
                    equally important to weigh out the answers.
                  </p>
                  <p>
                    <strong>
                      What should I expect during a new SEO project?
                    </strong>
                  </p>
                  <p>
                    At Infused Agency, we want you to have the best possible
                    experience when it comes to investing in a new SEO project
                    for your Niagara or St. Catharines company. You should
                    expect to work closely with the company themselves and for
                    the SEO work to especially not be outsourced overseas
                    (everything we do is in-house).
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

export default FAQSEO
