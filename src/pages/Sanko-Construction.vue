<template>
  <Layout>
    <!--Hero-->
    <section class="inner-hero">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-12">
            <h1>Sanko Construction</h1>
            <p>Web Design + Development</p>
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
            <p>We were put in contact with Sanko Construction via referral. He had started his own landscaping construction businesses and was without a website. It was absolutely crucial for Sanko to get a modern, clean, mobile-friendly website up and running as when people wanted to Google his business, he needed to show up and impress. This was imperative for building a reputation, trust and credibility within his brand.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Solution</h2>
            <p>We met up with Sanko Construction and educated him on how important it was to not only get a nice website up and running quickly, but the strategy behind the website in order to make it successful. A gallery showcasing only his best work, as well as a clean and easy way to navigate his website, was absolutely imperative to his online success.</p>
            <p>Here's his new website below:</p>
            <g-image alt="sanko construction new website" src="~/img/sanko-construction-responsive.jpg" class="img-fluid" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Result</h2>
            <p>With Sanko Construction's new website up and running, this has made a very large impact on his brand's overall trust and credibility to owners that are potentially interested in hiring them for landscaping jobs. He continues to have his calendar filled up, a big part in thanks to his new website design.</p>
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
    title: 'Sanko Construction Case Study',
    meta: [
      { key: 'description', name: 'description', content: 'Sanko Construction had their website designed and developed by Infused Agency. Click here to view the case study.' }
    ]
  }
}
</script>

