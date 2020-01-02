<template>
  <Layout>
    <!--Hero-->
    <section class="inner-hero">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12">
            <h1 v-html="$page.post.title"/>
          </div>
        </div>
      </div>
    </section>
    <!--Content-->
    <section class="inner-content single-blog">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <Section class="post">

            <g-link class="nav__link" to="/blog">Back to Blog</g-link>

            <div v-html="$page.post.content"/>

            <g-link class="nav__link" to="/blog">Back to Blog</g-link>

            </Section>
          </div>
        </div>
      </div>
    </Section>
    <Footer></Footer>
  </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
  post (path: $path) {
    title
    date (format: "D. MMMM YYYY")
    content
    excerpt
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.excerpt
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.single-blog {
  h1 {
    margin-bottom: 30px;
  }
  h2 {
    margin-top: 30px;
  }
}
</style>