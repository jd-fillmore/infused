import React from "react"
import { Container, Row } from "reactstrap"
import Link from "next/link"

const Intro = ({ img }) => {
  return (
    <>
      <section className="intro-home">
        <Container>
          <Row className="align-items-center">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src={img}
                alt="digital marketing agency niagara"
              />
            </div>
            <div className="col-lg-6">
              <h2>Web Design, SEO &amp; Digital Marketing Company</h2>
              <p>
                Infused is a top web design, SEO &amp; digital marketing agency
                based in Niagara (St. Catharines), Ontario. We specialize in
                creating the best modern websites that differentiate you from
                your competitor's online.
                <br />
                <br />
                Our approach is simple - <strong>
                  getting you results.
                </strong>{" "}
                Our goal is to help your investment into our web design, SEO or
                digital marketing services achieve a return on your investment.
                <br />
                <br />
                We have successfully helped many clients across Niagara, Toronto
                and beyond build and grow their businesses since 2010.
              </p>
              <Link href="/get-started">
                <button>Request A Quote</button>
              </Link>
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Intro
