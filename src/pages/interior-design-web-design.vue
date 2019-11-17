<template>
  <Layout>
    <!--Hero-->
    <section class="inner-hero" data-aos="fade-in" data-aos-duration="1000">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-12">
            <h1
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
            >Residential &amp; Commercial Interior Design Web Design</h1>
            <p
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >A residential and commercial interior design web design, with developed SEO and digital strategy for ALC Interiors.</p>
          </div>
        </div>
      </div>
    </section>
    <!--Content-->
    <section class="inner-content">
      <div class="container" id="shrunk">
        <div class="row">
          <div class="col-lg-12">
            <h2>Challenge</h2>
            <p>We had reached out to Lisa of ALC Interiors, as we noticed a few things about the web design. First off, it's scores on Google's Lighthouse tool were a little poor in terms of best practices, accessibility, performance and search engine optimization. We proposed to design and build a website that would perform much better than her current one.</p>
            <p>Here's her old website below:</p>
            <g-image
              alt="residential commercial interior web design"
              src="~/img/residential-commercial-interior-web-design.jpg"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Solution</h2>
            <p>We discussed with Lisa and educated her on the reasons why having her current website, or any website for that matter being "built" using a website builder like Wix, Squarespace etc, was very bad for search engine reasons. We educated her on how having a custom built, fast and performant website would work greatly to her advantage for ranking in Google for local keyword terms.</p>
            <p>Here's her new website below:</p>
            <g-image alt="alc new site" src="~/img/alc-new.jpg" class="img-fluid" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Result</h2>
            <p>Although currently still in development, we predict that her new website will rank in multiple cities for various different keywords. Check out the (still in development) website below.</p>
            <a href="https://alcint.netlify.com/" target="_blank">
              <button class="btn btn-primary">View Website</button>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!--CTA-->
    <section class="pdf">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <h2>Need a website that brings in sales?</h2>
            <p>Book your free 30 minute consultation. We'll talk about exactly what you need.</p>
          </div>
          <div class="col-lg-4">
            <g-link to="/contact">
              <button type="button" class="btn btn-primary">Book Now</button>
            </g-link>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </Layout>
</template>

<style scoped lang="scss">
@import "../scss/_base.scss";

#shrunk {
  width: 50%;
  @include bp-tablet {
    width: 100%;
  }
}

// CTA
.pdf {
  background: linear-gradient(to right, #2caf73, #0671bc);
  padding-top: 60px;
  padding-bottom: 60px;
  @include bp-tablet {
    text-align: center;
  }
  .row {
    align-items: center;
  }
  h2,
  p {
    color: $white;
  }
  h2 {
    margin-bottom: 0px;
    @include bp-tablet {
      margin-bottom: 20px;
    }
  }
  .btn-primary {
    background: $white;
    color: $dark-blue;
  }
}
</style>


<script>
export default {
  metaInfo: {
    title: "Residential Interior Design Web Design",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "A residential interior design web design, created by Infused Agency to get results. Click here to view the case study."
      }
    ]
  }
};
</script>

