import React from "react"
import Link from "next/link"
import { Container, Row, Col } from "reactstrap"

const EcommFAQ = props => {
  return (
    <Container>
      <Row>
        <Col lg="12">
          <h4>How long will it take to complete my e-commerce website?</h4>
          <p>
            Typically takes between 4-6 weeks, but this is completely dependent
            on both the size and the progression of the project. How quickly you
            can provide feedback and content when needed affects the completion
            speed. The revisions required also affect project timeline.
          </p>
          <h4>
            Do I have to be in Niagara or St. Catharines to work with you?
          </h4>
          <p>
            No! We do primarily serve Niagara and St. Catharines, but we have
            clients all over North America and even in Australia.
          </p>
          <h4>
            Will I be able to update my website myself when it's launched?
          </h4>
          <p>Yes. You will be able to add and edit content and products.</p>
          <h4>Can you maintain our website for us?</h4>
          <p>
            Yes. We will gladly provide an hourly quote based on your update
            requests.
          </p>
          <h4>Do you provide website hosting and domain?</h4>
          <p>
            No. That will be with you. We can help you choose a good provider,
            though.
          </p>
          <h4>Will our website be mobile-friendly?</h4>
          <p>
            100% yes. In this day and age, your website absolutely needs to be
            mobile friendly.
          </p>
          <h4>How much input do I have in the website design process?</h4>
          <p>
            In our discovery call, we will flesh out what you'd like in the
            design in terms of colours and feel. Based on our call, we will
            design your website by combining what you want with what our experts
            know what works.
          </p>
          <h4>Who provides content for the website?</h4>
          <p>
            The content will come from your end. You know your business domain
            best and so we trust that you will provide great content. If you
            need us to source images, we can provide an hourly quote for you.
          </p>
          <h4>What if I need help with my website in the future?</h4>
          <p>
            Not a problem, we can help. Any questions or requests you may have,
            we'll be happy to look at.
          </p>
          <h4>Is SEO included in my website?</h4>
          <p>
            No, monthly SEO efforts are not included. If you'd like pricing for
            SEO, check out SEO pricing <Link href="/seo">here</Link>.
          </p>
          <h4>What forms of payment do you accept?</h4>
          <p>
            Upon agreement of the quote, we accept Visa, Mastercard or
            e-transfer.
          </p>
          <h4>How do we get started?</h4>
          <p>
            <Link href="/get-started">Click here</Link> to fill out our form.
            Please include website details, page breakdown and any sample
            websites you'd like for us to reference. Upon review, we will
            provide an estimate for your project.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default EcommFAQ
