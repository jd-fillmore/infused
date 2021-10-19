import React from "react"
import { graphql } from "gatsby"
import PostLink from "../../components/postLink.js"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import bgImage from "../img/inner-work.jpg"

const PostsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <>
      <Helmet>
        <title>Blog - Infused</title>
        <meta
          name="description"
          content="Check out the latest educational blog posts from Infused."
        />
      </Helmet>
      <Nav />
      <InnerHero
        title="Blog"
        description="Educating companies on best practices"
        bgImage={bgImage}
      />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="12">{Posts}</Col>
          </Row>
        </Container>
      </section>
      <CTA />
      <Footer />
    </>
  )
}

export default PostsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
