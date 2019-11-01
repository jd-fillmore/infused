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
            >Skin Care Website Design</h1>
            <p
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >Custom website design, website development and search engine optimization (SEO) for a skin care company.</p>
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
            <p>Melissa Cundell from MC Aesthetics approached us through referral. She had heard that we could design and build a great website for her, so that's exactly what we did! She wanted somethin that was modern, clean, pastel coloured and easy to use. Most importantly, she wanted people to email and call her with ease from the website.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Solution</h2>
            <p>We talked with Melissa. We discussed how we'd approach the web design, the build itself (using a more powerful platform versus using WordPress), and going over her search engine optimization (SEO) strategy with her. Her new web design below:</p>
            <g-image
              alt="skin care website design"
              src="~/img/skin-care-website-design.jpg"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Result</h2>
            <p>After less than a week of launching, MC Aesthetics ranks on the first page of Google in multiple cities. Because of this, she's had an influx in new business. It's been a success!</p>
            <a href="https://mcaesthetics.ca" target="_blank">
              <button class="btn btn-primary">View Website</button>
            </a>
            <br />
            <br />
            <p>Here's a screenshot below of MC Aesthetics' SEO in action:</p>
            <g-image alt="mc aesthetics results" src="~/img/mc-results.jpg" class="img-fluid" />
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
    title: "Skin Care Website Design",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "MC Aesthetics' skin care website design was made with SEO and development in mind by Infused. Click here to view the case study."
      }
    ]
  }
};
</script>

