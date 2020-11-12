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
            >Web Design &amp; Development</h1>
            <p
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >Designed and developed with sales generation and conversion in mind</p>
          </div>
        </div>
      </div>
    </section>

    <!--Intro-->
    <section class="intro">
      <div class="container">
        <div class="row text-center cards">
          <div class="col-lg-4">
            <div class="card">
              <g-image alt="check" src="~/img/check.jpg" class="img-fluid mx-auto d-block" />
              <h4>Modern Design</h4>
              <p>A modern website design + higher customer engagement = higher conversions.</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <g-image alt="check" src="~/img/check.jpg" class="img-fluid mx-auto d-block" />
              <h4>ROI In Mind</h4>
              <p>Our websites are not "just websites". They're built to get sales.</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <g-image alt="check" src="~/img/check.jpg" class="img-fluid mx-auto d-block" />
              <h4>Optimized For SEO</h4>
              <p>We develop websites that are optimized and ready for Google's search engine.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Second-->
    <section class="main-project">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <g-image
              alt="small &amp; local business website design in niagara ON"
              src="~/img/niagara-web-design.jpg"
              class="img-fluid cass"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <p>
              As a leading web design company, you can count on us to design, build and marketing your business specifically.
              <br />
              <br />We're different than other web design and marketing companies because they don't specialize, and know your industry.
              <strong>We do.</strong> We've worked with numerous industries, and have been for years. We know what it takes to succeed online in many different niches.
            </p>
          </div>
          <div class="col-md-6">
            <p>
              We believe in partnering with you when it comes to your new website design. We sit down with you, have weekly meetings to make sure we're hitting your website design and development goals. You have touch points all the way from start to end.
              <br />
              <br />We're also not afraid to share our expertise and guide you to the best possible website you can have, that
              <strong>generates sales.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>

    
    <!--CTA-->
    <section class="pdf">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <h2>Need a website that brings in projects?</h2>
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

// Intro / Pricing
.intro,
.pricing {
  background: $light-grey;
  padding-top: 100px;
  padding-bottom: 100px;
  @include bp-tablet {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .cards {
    .col-lg-4 {
      display: flex;
    }
    .card {
      width: 100%;
      padding: 30px;
      border: none;
      box-shadow: 0px 20px 100px #edeff2;
      transition: 0.2s;
      &:focus,
      &:hover {
        box-shadow: 0px 20px 100px #c7c7c7;
        transform: translate3D(0, -5px, 0);
        transition: 0.2s;
      }
      @include bp-tablet {
        width: 100%;
        margin-bottom: 20px;
      }
      h4 {
        margin-bottom: 10px;
        margin-top: 15px;
      }
    }
  }
}

.main-project {
  padding-top: 100px;
  padding-bottom: 100px;
  @include bp-tablet {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  img {
    margin-bottom: 60px;
  }
}

// Pricing
#pricing {
  background: $light-grey;
  padding-top: 100px;
  padding-bottom: 100px;
  @include bp-tablet {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .heading {
    background-image: linear-gradient(to right, #412caf, #0671bc);
    text-align: center;
    h2 {
      color: $white;
      margin-bottom: 0px;
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }
  .value {
    background: #2ab347;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    h4 {
      color: $white;
      margin-bottom: 0px;
    }
  }
  .card {
    @include bp-tablet-sm {
      margin-bottom: 20px;
    }
    text-align: center;
    padding: 15px;
    h3 {
      margin-bottom: 0px;
    }
    p {
      font-size: 16px;
      margin-bottom: 10px;
    }
    ul {
      list-style: none;
      margin-left: -40px;
      li {
        border-bottom: 1px solid $light-blue;
        padding-top: 5px;
        padding-bottom: 5px;
      }
    }
  }
}
//FAQ
#faq {
  padding-top: 100px;
  padding-bottom: 100px;
  @include bp-tablet {
    padding-top: 60px;
    padding-bottom: 60px;
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
    title: "Web Design",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Infused offers website design & development tailored to your contractor business in order to help engage and convert your customers. Click here to learn how."
      }
    ]
  }
};
</script>

