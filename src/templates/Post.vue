<template>
  <Layout>
    <Section class="post">

      <div class="post-header container-sm text-center mb">
        <h1 v-html="$page.post.title"/>
      </div>

      <p class="lead" v-html="$page.post.excerpt"/>

      <div v-html="$page.post.content"/>
    </Section>
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
// Your styles goes here
</style>