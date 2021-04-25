import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"

import "../Hero/hero.scss"
import Clients from "./../Clients/clients"

const Hero = ({ title, subTitle, btnText, btnLink, img, imgAlt }) => {
  return (
    <>
      <section className="hero">
        <Container>
          <Row>
            <Col lg="7">
              <h1 className="bg">{title}</h1>
              <p>{subTitle}</p>
              <Link to={btnLink}>
                <button>{btnText}</button>
              </Link>
              <a
                target="_blank"
                href="https://www.google.com/search?q=infused+agency&oq=infused+agency&aqs=chrome.0.69i59j0l2j69i61j69i60l4.1980j1j7&sourceid=chrome&ie=UTF-8#lrd=0x89d3507111975161:0x18a1198be6280a70,1,,,s"
              >
                <img className="google" src={img} alt={imgAlt} />
              </a>
            </Col>
            <Col lg="5">
              <div className="card">
                <h4>Featured Client Results</h4>
                <p>within 6 months</p>
                <ul>
                  <li>
                    <span>10,700</span> website views / month
                  </li>
                  <li>
                    <span>20,000%</span> increase in new leads
                  </li>
                  <li>
                    <span>5,000</span> new users / month
                  </li>
                </ul>
                <Link to="/kd-flowers">Learn More</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Hero
