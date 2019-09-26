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
            >Krysta Gauthier Mortgage</h1>
            <p
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >Web Design, Development and Digital Strategy</p>
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
            <p>We contacted Krysta, as we felt like her website could use a website re-design. It was a templated, old-looking website that was provided to her by her mortgage company - and more importantly, it wasn't optimized for Google to bring in potential clients to her.</p>
            <p>Here's her old website below:</p>
            <g-image
              alt="krysta gauthier old website"
              src="~/img/krysta-old.jpg"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Solution</h2>
            <p>We met up with Krysta and discussed the advantages of having a website that fast, performant, modernly designed and optimized for Google. She wanted something that was crisp, clean, easy to use and ultimately built for Google's search engine.</p>
            <p>Here's her new website below:</p>
            <g-image
              alt="krysta gauthier mortgage new website"
              src="~/img/krysta-new.jpg"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Result</h2>
            <p>We're currently working together to polish things off. When the website goes live, you'll be sure to know about it!</p>
            <a href="#" target="_blank">
              <button class="btn btn-primary">Coming Soon</button>
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
    title: "Krysta Gauthier Mortgage Case Study",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Krysta Gauthier Mortgage website was designed by Infused Agency. Click here to view the case study."
      }
    ]
  }
};
</script>

