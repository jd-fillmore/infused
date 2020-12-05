import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
    <Helmet>
        <title>{frontmatter.title} - Infused</title>
        <meta
          name="description"
          content={frontmatter.excerpt}
        />
      </Helmet>
    <div className="blog-post-container">
    <Container>
    <Row>
      <Col lg="12">
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            </div>
        </Col>
      </Row>
      </Container>
    </div>
    </>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
