<template>
  <Layout>
    <!--Hero-->
    <section class="inner-hero">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12">
          <h1>Work</h1>
          <p>Results we've got for our clients</p>
          </div>
        </div>
      </div>
    </section>
    <!--Content-->
    <section class="inner-content">
      <div class="container">
      <!--Image-->
      <div class="row">
        <div class="col-md-8">
          <g-image alt="Sanko Construction" src="~/img/sanko.jpg" class="img-fluid" />
        </div>
        <div class="col-md-4">
          <h3>Before</h3>
          <ul>
            <li>Zero sales from website</li>
            <li>Poor trust and credibility to the public</li>
            <li>Wanted to do something about it</li>
          </ul>
          <h3>After</h3>
          <ul>
            <li>Consistent sales solely from website</li>
            <li>Experiencing growth</li>
            <li>Doesn’t have to look for clients anymore</li>
          </ul>
          <a href="http://sankoconstruction.ca" target="_blank"><button type="submit" class="btn btn-primary">View Website</button></a>
        </div>
      </div>
    </div>
    </section>
    <Footer></Footer>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Work'
  }
}
</script>
