import React from "react"
import Link from "next/link.js"
import matter from "gray-matter"
import path from "path"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import fs from "fs"
import { sortByDate } from "../../utils"

const PostsPage = ({ posts }) => {
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
      />
      <section className="inner-content">
        <Container>
          <Row>
            <Col lg="12">
              <div className="post">
                {posts.map((post, index) => (
                  <div key={index} className="card">
                    <h3>
                      <Link href={`/posts/${post.slug}`}>
                        {post.frontmatter.title}
                      </Link>
                    </h3>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <CTA />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("./posts"))

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    // Create slug
    const slug = filename.replace(".md", "")

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("./posts", filename),
      "utf-8"
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    // Check if frontmatter.date is a Date object or a valid date string
    if (
      frontmatter.date &&
      (frontmatter.date instanceof Date || !isNaN(new Date(frontmatter.date)))
    ) {
      // Convert Date object to string
      frontmatter.date = new Date(frontmatter.date).toISOString()
    } else {
      console.error(`Invalid date in post: ${slug}`)
      // You might want to set a default date or handle this error in some way
    }

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}

export default PostsPage
