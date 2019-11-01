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
            >Commercial Mortgage Broker Website Design</h1>
            <p
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >A residential and commercial mortgage broker website design, with developed SEO and digital strategy for the Canadian Mortgage Authority</p>
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
            <p>We contacted Mark of Canadian Mortgage Authority, as we noticed that there was a seemingly glaring problem that his current website had. The website had a very outdated design, the website's purpose was not there (it was very scattered), and it wasn't mobile-friendly. On top of that, the page speed was slow and it wasn't easy for users to find what they were looking for without getting overwhelmed.</p>
            <p>Here's his old website below:</p>
            <g-image
              alt="residential mortgage broker website design"
              src="~/img/residential-mortgage-broker-website-design.jpg"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Solution</h2>
            <p>
              We sat down with Mark and educated him on the reasons why having a
              <g-link to="/web-design">modern design</g-link>builds credibility and trust to not only his current clients, but new clients that find his site as well. From there, we worked with alongside Mark perfecting his new website design. His new website features a design that is clean, engaging, and most of all, easy to navigate. It's also mobile-friendly, so new potential clients can browse the site easily.
            </p>
            <p>Here's his new website below:</p>
            <g-image
              alt="commercial mortgage broker website design"
              src="~/img/commercial-mortgage-broker-website-design.jpg"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Result</h2>
            <p>
              With Mark's new website up and running, after a few months of
              <g-link to="/seo">SEO efforts</g-link>, he ranks #1 in multiple cities for multiple keywords on Google. These cities include Grimsby, Hamilton, Welland, Brantford and more.
            </p>
            <a href="https://canadianmortgageauthority.com/" target="_blank">
              <button class="btn btn-primary">View Website</button>
            </a>
            <br />
            <br />
            <p>Here's a screenshot below :</p>
            <g-image
              alt="canadian mortgage authority results"
              src="~/img/cma-results.jpg"
              class="img-fluid"
            />
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
    title: "Commercial Mortgage Broker Website Design",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "A commercial mortgage broker website design that ranks very high in the search engines! Click here to view the case study."
      }
    ]
  }
};
</script>

