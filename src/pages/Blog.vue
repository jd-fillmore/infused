<template>
  <Layout>
    <!--Hero-->
    <section class="inner-hero">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12">
            <h1>Blog</h1>
            <p>Our latest posts educating clients</p>
          </div>
        </div>
      </div>
    </section>
    <!--Content-->
    <section class="inner-content">
      <div class="container">
        <div class="row">
          <!--Content-->
          <div
            v-for="edge in $page.posts.edges"
            :key="edge.node.id"
            class="col-md-12 text-center"
          >
            <h2>
              <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
            </h2>
            <p>{{ edge.node.excerpt }}</p>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </Layout>
</template>

<page-query>
query BlogPosts {
  posts: allPost {
    edges {
      node {
        id
        title
        path
        date (format: "D. MMMM YYYY")
        excerpt
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Blog'
  }
}
</script>