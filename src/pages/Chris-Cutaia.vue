<template>
  <Layout>
    <!--Hero-->
    <section class="inner-hero" data-aos="fade-in" data-aos-duration="1000">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-12">
            <h1 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">Chris Cutaia</h1>
            <p data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1000">Web Design, Development &amp; Digital Strategy</p>
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
            <p>We were put in contact with Chris via referral. He started his own mortgage brokerage business and needed a website, as it was crucial for his own brand's trust and credibility when people went online to look for him. He wanted something that was easy for users to find information, as well as a form to capture leads from.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Solution</h2>
            <p>We met up with Chris and discussed the important of a website that was mobile-friendly, one that was easy for users to quickly and efficiently find what they were looking for and most importantly, a way to capture leads.</p>
            <p>Here's his new website below:</p>
            <g-image alt="chris cutaia new website" src="~/img/chris-new.jpg" class="img-fluid" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Result</h2>
            <p>With Chris' new website up and running, he now has a website that he can not only be proud of, but one that represents him locally. This has been imperative in bringing him in local leads, and his business continues to flourish because of it.</p>
            <a href="http://www.chriscutaia.ca/" target="_blank"><button type="button" class="btn btn-primary">View Website</button></a>
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
    title: 'Chris Cutaia Case Study',
    meta: [
      { key: 'description', name: 'description', content: 'Chris Cutaia had their website designed and developed by Infused Agency. Click here to view the case study.' }
    ]
  }
}
</script>

