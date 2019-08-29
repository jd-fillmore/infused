<template>
  <Layout>
    <!--Hero-->
    <section class="inner-hero" data-aos="fade-in" data-aos-duration="1000">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-12">
            <h1 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">Web Design</h1>
            <p data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1000">Designed and developed with sales generation and conversion in mind</p>
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
            <g-image alt="sanko construction responsive" src="~/img/sanko-construction-responsive.jpg" class="img-fluid mx-auto d-block" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <p>As a leading web design company, you can count on us to design, build and marketing your business specifically. <br><br>We're different than other web design and marketing companies because they don't specialize, and know your industry.

            <strong>We do.</strong> We've worked with numerous industries, and have been for years. We know what it takes to succeed online in many different niches.
            </p>
          </div>
          <div class="col-md-6">
            <p>We believe in partnering with you when it comes to your new website design. We sit down with you, have weekly meetings to make sure we're hitting your website design and development goals. You have touch points all the way from start to end. <br><br>We're also not afraid to share our expertise and guide you to the best possible website you can have, that <strong>generates sales.</strong></p>
          </div>
        </div>
      </div>
    </section>

    <!--Pricing-->
    <section class="pricing">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-12">
            <h2>Pricing</h2>
          </div>
        </div>
        <div class="row cards">
          <div class="col-lg-4">
            <div class="card text-center">
              <h4>Starter Package</h4>
              <p>Perfect for newcomers.</p>
              <ul>
                <li>3 pages</li>
                <li>Responsive / Mobile-Friendly</li>
                <li>Template design</li>
                <li>6-70 Page Speed Score</li>
                <li>SSL Security</li>
                <li>Click to call on mobile</li>
                <li>Google Analytics</li>
                <li>1 Social Media Link</li>
              </ul>
              <h3 class="price"><strong><sup>$</sup>99.99</strong></h3>
              <p class="price-text">price per month, 24 month contract. <br>2-4 week turn-around.</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card text-center lead-gen">
              <h4>Lead-Gen Package</h4>
              <p>Attracts new business.</p>
              <ul>
                <li class="first">Most Popular</li>
                <li>10 pages</li>
                <li>Optimized to generate leads</li>
                <li>Responsive / Mobile-Friendly</li>
                <li>SEO Optimization</li>
                <li>Strong call-to-actions</li>
                <li>Custom design</li>
                <li>90-100 Page Speed Score</li>
                <li>Keyword-optimized</li>
                <li>SSL Security</li>
                <li>Click to call on mobile</li>
                <li>Google Analytics</li>
                <li>Google Search Console</li>
                <li>2 Social Media Links</li>
                <li>Re-design at 24 months</li>
              </ul>
              <h3 class="price"><strong><sup>$</sup>199.99</strong></h3>
              <p class="price-text">price per month, 24 month contract</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card text-center">
              <h4>Enterprise Package</h4>
              <p>National growth.</p>
              <ul>
                <li>20 pages</li>
                <li>5 SEO landing pages</li>
                <li>Optimized to generate leads</li>
                <li>Responsive / Mobile-Friendly</li>
                <li>SEO Optimization</li>
                <li>Strong call-to-actions</li>
                <li>Custom design</li>
                <li>100 Page Speed Score</li>
                <li>Keyword-optimized</li>
                <li>SSL Security</li>
                <li>Click to call on mobile</li>
                <li>Google Analytics</li>
                <li>Google Search Console</li>
                <li>3 Social Media Links</li>
                <li>Re-design at 24 months</li>
                <li>Custom CMS</li>
              </ul>
              <h3 class="price"><strong><sup>$</sup>299.99</strong></h3>
              <p class="price-text">price per month, 24 month contract</p>
            </div>
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
           <g-link to="/contact"><button type="button" class="btn btn-primary">Book Now</button></g-link>
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
.intro, .pricing {
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
      box-shadow: 0px 20px 100px #EDEFF2;
      transition: .2s;
      &:focus, &:hover {
        box-shadow: 0px 20px 100px #c7c7c7;
        transform: translate3D(0, -5px, 0);
        transition: .2s;
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
.pricing {
  .lead-gen {
      box-shadow: 0px 20px 100px #c7c7c7 !important;
          transform: translate3D(0, -5px, 0) !important;
  }
  ul {
    list-style: none;
    padding-left: 0px;
    li {
      border-bottom: #c7c7c7 1px solid;
      padding-top: 10px;
      padding-bottom: 10px;
      &.first {
        background: #2b83e0;
        color: #fff;
        border-bottom: none;
      }
    }
  }
  h3 {
    &.price {
      margin-top: 20px;
    }
  }
  p {
    &.price-text {
      margin-top: -20px;
      font-size: 12px;
      text-transform: uppercase;
    }
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
  h2,p {
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
    title: 'Web Design',
    meta: [
      { key: 'description', name: 'description', content: 'Infused offers website design & development tailored to your contractor business in order to help engage and convert your customers. Click here to learn how.' }
    ]
  }
}
</script>

