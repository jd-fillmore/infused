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
            >Home Renovation Website Design</h1>
            <p
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >A home renovation website design, with developed SEO and digital strategy for the Cass-A-Bella Construction</p>
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
            <p>We contacted Fernando of Cass-A-Bella construction, initially because his website's design was very out of date. The user navigation on the website wasn't easy to follow, the colours were all over the place and the website's direction was lacking. Fernando then mentioned to us that his SEO needed a lot of work, as he would like some new leads coming in consistently from Google.</p>
            <p>Here's his old website below:</p>
            <g-image
              alt="home renovation website design"
              src="~/img/home-renovation-website-design.jpg"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Solution</h2>
            <p>We discussed with Fernando the importance of having a website design that reflects his business in a modern way, and especially having a website that caters to his target audience - high end customers. We wanted to really modernize the design, as well as the performance of the website, in order to successfully speak to his customers.</p>
            <p>Here's his new website below:</p>
            <g-image
              alt="new custom home renovation web design"
              src="~/img/cass.jpg"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Result</h2>
            <ul>
              <li>
                Organic Google Search views
                <strong>went up over 320%.</strong>
              </li>
              <li>
                Google Map views
                <strong>went up almost 100%.</strong>
              </li>
              <li>
                Website visits
                <strong>went up over 250%.</strong>
              </li>
              <li>
                Within the first month,
                <strong>three new clients.</strong>
              </li>
            </ul>
            <a href="https://cassabellaconstruction.com" target="_blank">
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
    title: "Home Renovation Website Design",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "A Home Renovation website design that designed, developed and SEO'd by Infused. Click here to view the case study."
      }
    ]
  }
};
</script>

