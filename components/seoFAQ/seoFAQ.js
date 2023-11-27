import React from "react"
import Link from "next/link"
import { Container, Row, Col } from "reactstrap"

import "../seoFAQ/seo-faq.scss"

const SEOFAQ = props => {
  return (
    <Container>
      <Row>
        <Col lg="12">
          <h4>What is SEO?</h4>
          <p>
            Search Engine Optimization is the process of executing monthly tasks
            - on and off a website - to help rank it on the first page of
            Google. This is important as virtually everyone Google's for a
            product or service. Having your website or certian web pages show up
            on the first page of Google - where people are looking - is very
            important for brand awareness, and bring in more revenue.
          </p>
          <h4>How long does SEO take?</h4>
          <p>
            This completely depends on where your current website is at in
            Google for certain keywords. For a website that isn't optimized -
            brand new or not - it can take anywhere from 6-12 months to start
            seeing any meaningful results.
          </p>
          <h4>What's the ROI on SEO?</h4>
          <p>
            In the vast majority of cases when we've ranked clients on the first
            page of Google, their online sales / local leads have increased
            dramatically. We've had clients increase leads by 13,000% within 6
            months of being on the first page. All in all, being on the first
            page of Google is extremely lucrative for any business.
          </p>
          <h4>Can you get me to #1 on Google?</h4>
          <p>
            No one can guarantee that SEO efforts will retain a first page or #1
            spot on Google. Ultimately, that decision is up to Google. However
            based on our years of SEO experience, we do know the steps and what
            it takes to gradually rank a website on the first page of Google.
          </p>
          <h4>Will my results drop if I stop doing SEO?</h4>
          <p>
            SEO is a lot like a car. After getting oil changes and general
            checkups for a while, your car's going to be in great shape. And
            those results will last for a few months after stopping the
            maintenance. However if you stop doing so entirely, the car will
            start to break down. The same goes for SEO. Although it's entirely
            dependent on your competition, the general rule of thumb is you need
            to keep maintaining your SEO through monthly efforts in order to
            keep up your rankings. This is because your competition is
            constantly maintaining their SEO as well.
          </p>
          <h4>
            I've done SEO before and it hasn't worked, why are you different?
          </h4>
          <p>
            You were probably dealing with someone or some company that didn't
            fully understanding your SEO goals, and clearly didn't execute
            properly. Based on our past and current results, we do know what it
            takes to lead a successful SEO campaign.
          </p>
          <h4>Do you do PPC (Pay Per Click)?</h4>
          <p>
            No, we don't. Based on data, getting traffic through organic SEO
            versus paid ads is a much better return on investment. This is why
            we focus on helping businesses purely from an SEO standpoint.
          </p>
          <h4>Do you manage social media accounts?</h4>
          <p>No, we don't.</p>
          <h4>What type of reporting will I get?</h4>
          <p>
            You will get results based on how your website is doing in Google's
            SERPs, as well as Google My Business (if you're a local business).
            This will provide you with clear results in terms of your website's
            progression based on our SEO efforts.
          </p>
          <h4>How do we get started?</h4>
          <p>
            <Link href="/get-started">Click here</Link> to fill out our form.
            Please include the any details relating to SEO (which keywords you
            want to rank for, which geographical areas, etc.). Upon review, we
            will provide an estimate for your project.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default SEOFAQ
