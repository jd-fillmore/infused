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
            >Architecture Firm Web Design</h1>
            <p
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >An architecture firm web design, with developed SEO and digital strategy for MJ Dixon.</p>
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
            <p>We had reached out to the architecture firm MJ Dixon, as we had noticed that their website was extremely dated and old. You could tell. It was not responsive, the design was from the late 90s, and it was very hard for any potential customers to find out information about them.</p>
            <p>Here's their old website below:</p>
            <g-image
              alt="architecture firm web design"
              src="~/img/architecture-firm-web-design.jpg"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Solution</h2>
            <p>We discussed with MJ Dixon the importance of a website that had a great user experience to it. Since their business model followed an RFP process, they needed to look good online as their website would be viewed by the companies receiving their proposals. We built MJ Dixon a website that was responsive, modern, and had up to date projects.</p>
            <p>Here's their new website below:</p>
            <g-image alt="mj dixon new site" src="~/img/mj-new.jpg" class="img-fluid" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Result</h2>
            <p>Although the company has gone in another direction with their website, you can still check out their website below.</p>
            <a href="https://mjdixon.ca/" target="_blank">
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
    title: "Architecture Firm Web Design",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "An architecture firm web design, created by Infused Agency in order to mordernize MJ Dixon's web presence. Click here to view the case study."
      }
    ]
  }
};
</script>

