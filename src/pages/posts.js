import React from "react"
import Link from "next/link.js"
import matter from "gray-matter"
import PostLink from "./postLink.js"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import CTA from "../../components/CTA/cta"
import Footer from "../../components/Footer/footer"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import fs from "fs/promises" // Import the fs module

const PostsPage = ({ blogs }) => {
  const Posts = blogs
    .filter(blog => !!blog.date) // You can filter your blogs based on some criteria
    .map(blog => <PostLink key={blog.id} post={blog} />)

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
        bgImage="/path/to/your/bgImage.jpg" // Update with the correct path
      />
      <section className="inner-content">
        <Container>
          <Row>
            <ul>
              {blogs.map(blog => (
                <li key={blog.slug}>
                  <Link href={`./posts/${blog.slug}`}>
                    {blog.date}:{blog.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Row>
        </Container>
      </section>
      <CTA />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  // List of files in the blogs folder
  const filesInBlogs = await fs.readdir(`./posts`)

  // Get the front matter and slug (the filename without .md) of all files
  const blogs = await Promise.all(
    filesInBlogs.map(async filename => {
      const fileContent = await fs.readFile(`./posts/${filename}`, "utf8")
      const matterData = matter(fileContent)

      const date =
        matterData.data.date instanceof Date
          ? matterData.data.date.toISOString()
          : null

      return {
        ...matterData.data, // matterData.data contains front matter
        slug: filename.slice(0, filename.indexOf(".")),
        date, // Convert Date to string or set to null if undefined
      }
    })
  )

  return {
    props: {
      blogs,
    },
  }
}

export default PostsPage
