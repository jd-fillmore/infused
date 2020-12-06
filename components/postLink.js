import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div className="post">
  <div className="card">
      <h3><Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link></h3>
  </div>
  </div>
)
export default PostLink