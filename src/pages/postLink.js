import React from "react"
import Link from "next/link"

const PostLink = ({ post }) => {
  // Check if post and post.frontmatter exist before accessing properties
  if (!post || !post.frontmatter || !post.frontmatter.slug) {
    return null // or handle this case as needed
  }

  return (
    <div className="post">
      <div className="card">
        <h3>
          <Link href={post.frontmatter.slug}>{post.frontmatter.title}</Link>
        </h3>
      </div>
    </div>
  )
}

export default PostLink
