<template>
  <Layout>
    <!--Hero-->
    <section class="inner-hero" data-aos="fade-in" data-aos-duration="1000">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12">
            <h1 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">Cities</h1>
          </div>
        </div>
      </div>
    </section>
    <!--Content-->
    <section class="inner-content">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3>SEO</h3>
            <ul>
              <li>
                <a href="/seo-company-montreal">SEO Montreal</a>
              </li>
              <li>
                <a href="/seo-provider-st-catharines">SEO St Catharines</a>
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <h3>Web Design</h3>
            <ul>
              <li>
                <a href="/grimsby-web-design">Web Design Grimsby</a>
              </li>
              <li>
                <a href="/web-designers-in-calgary">Web Design Calgary</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </Layout>
</template>

<style scoped lang="scss">
@import "../scss/_base.scss";
</style>


<script>
export default {
  metaInfo: {
    title: "Cities",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Learn about the cities that Infused offers web design, SEO and digital marketing services in. Click here to view now."
      }
    ]
  }
};
</script>

