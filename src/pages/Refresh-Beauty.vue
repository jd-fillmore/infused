<template>
  <Layout>
    <!--Hero-->
    <section class="inner-hero">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-12">
            <h1>Refresh Beauty</h1>
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
            <p>We were put in contact with Refresh Beauty via referral. The owner of Refresh Beauty, Teresa Ruggi, wanted to get a website designed and developed to show off her mobile makeup business. Having no website online at the time of discussion, she was not only missing out on potential leads, but this meant her credibility was lacking as well.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Solution</h2>
            <p>We met up with Refresh Beauty and educated them on how important it was for them to get a new, mobile-friendly and <g-link to="/web-design">well-designed website</g-link> up and running for their new restaurant business. We also discussed certain ways that we could bring her website to the forefront of Google, as they had previously requested.</p>
            <p>Here's their new website below:</p>
            <g-image alt="refresh beauty new website" src="~/img/refresh-new.jpg" class="img-fluid" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Result</h2>
            <p>With Refresh Beauty's new website up and running, they now have a modern and cleanly designed online prescence, that is mobile-friendly and indexed by Google. This has been amazing for our client, as it as built credibility and trust in her brand. She's received many referrals solely based on her newly designed website.</p>
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
    title: 'Refresh Beauty Case Study',
    meta: [
      { key: 'description', name: 'description', content: 'Refresh Beauty had their website designed and developed by Infused Agency. Click here to view the case study.' }
    ]
  }
}
</script>

