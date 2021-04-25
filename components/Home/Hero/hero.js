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
                href="https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&q=niagara+digital+marketing&rflfq=1&num=10&sa=X&ved=2ahUKEwi-meq8j5fwAhVSMVkFHUFeCt4QjGp6BAgMEFM&biw=1682&bih=1323#lrd=0x89d3507111975161:0x18a1198be6280a70,1,,,&rlfi=hd:;si:1774727816813218416,l,ChluaWFnYXJhIGRpZ2l0YWwgbWFya2V0aW5nSNLuusa2roCACFo4ChFkaWdpdGFsIG1hcmtldGluZxABEAIYABgBGAIiGW5pYWdhcmEgZGlnaXRhbCBtYXJrZXRpbmeSARBtYXJrZXRpbmdfYWdlbmN5qgEZEAEqFSIRZGlnaXRhbCBtYXJrZXRpbmcoAA;mv:[[43.1680565,-79.043701],[43.0070768,-79.25861900000001]]"
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
