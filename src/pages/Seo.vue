<template>
  <Layout>
    <!--Hero-->
    <section class="inner-hero">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-12">
            <h1>Search Engine Optimization (SEO)</h1>
            <p>Getting you more sales through Google Search</p>
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
            <h4>Organic SEO</h4>
            <p>We focus on where the clicks happen - on organic listings. Not paid ads.</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <g-image alt="check" src="~/img/check.jpg" class="img-fluid mx-auto d-block" />
            <h4>Content Development</h4>
            <p>Professionally written and tactfully placed content drivces traffic directly to you.</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <g-image alt="check" src="~/img/check.jpg" class="img-fluid mx-auto d-block" />
            <h4>Analytics &amp; Reports</h4>
            <p>Tracking analytics every month to make sure you're getting the highest conversions and ROI.</p>
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
            <g-image alt="seo search engine optimization" src="~/img/seo.jpg" class="img-fluid mx-auto d-block" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <p>As a company that specializes in SEO for numerous different industries, know exactly what type of SEO (search engine optimization) strategies it takes to rank these types of business on page one of Google. <br><br>We're different than other search engine optimization businesses because they don't specialize, and know your industry.

            <strong>We do.</strong> We've worked with numerous industries, and have been for years. We know what it takes to succeed online in many different niches.
            </p>
          </div>
          <div class="col-md-6">
            <p>We believe in partnering with you when it comes to growing your business online through search engine optimization. We sit down with you, have weekly meetings to make sure we're hitting your SEO goals. You have touch points all the way from start to end. <br><br>We're also not afraid to share our expertise and guide you to the best possible SEO strategies you can have, that <strong>generates sales.</strong></p>
          </div>
        </div>
      </div>
    </section>

    <!--Process-->
    <section class="process">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>Our Process</h2>
            <p>Our SEO process that helps create a sales generating website</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <h3>1. Research</h3>
            <p>Before we dive into your project, we'll sit down and do some research into most effective keywords you'd like to rank for, based on your company's future goals.</p>
          </div>
          <div class="col-lg-3">
            <h3>2. Analysis</h3>
            <p>At the same time, we'll analyze your competition. What are they ranking for? Are there areas we can take advantage of that your competition isn't already?</p>
          </div>
          <div class="col-lg-3">
            <h3>3. Launch</h3>
            <p>After we've done our researc, analysis and optimized your website for SEO, we'll launch the systems we've created for you onto the web. We will then submit them to Google.</p>
          </div>
          <div class="col-lg-3">
            <h3>4. Monthly Efforts</h3>
            <p>We're not done here. Google won't rank your website just because. There will be monthly efforts and investments in order for your website to crawl up the rankings over time.</p>
          </div>
        </div>
      </div>
    </section>

    <!--CTA-->
    <section class="pdf">
     <div class="container">
       <div class="row">
         <div class="col-lg-8">
           <h2>Need SEO to market your company?</h2>
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

// Intro
.intro {
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

.process {
  background: $light-grey;
  padding-top: 100px;
  padding-bottom: 100px;
  @include bp-tablet {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  h3 {
    color: $light-blue;
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
    title: 'Search Engine Optimization',
    meta: [
      { key: 'description', name: 'description', content: 'Infused offers SEO (search engine optimization) to Niagara businesses and beyond as a business growth strategy. Click here to learn more.' }
    ]
  }
}
</script>

