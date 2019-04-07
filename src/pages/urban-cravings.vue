<template>
  <Layout>
    <!--Hero-->
    <section class="inner-hero">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-12">
            <h1>Urban Cravings</h1>
            <p>Web Design, Development and Digital Strategy</p>
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
            <p>We were put in contact by a colleague about Urban Cravings web situation. They had just opened up a physical location, and business was growing rapidly. However, they did not have any sort of online presence. This was difficult as people were constantly messagin them through Facebook, or texting them, asking for their menu. They needed to get a modern designed website online quickly. They also wanted to rank in Google, so when local people searched for salad bars, they would come up.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Solution</h2>
            <p>We met up with Urban Cravings and educated them on how important it was for them to get a new, mobile-friendly and well-designed website up and running for their new restaurant business. We also discussed certain ways that we could bring her website to the forefront of Google, as they had previously requested.</p>
            <p>Here's their new website below:</p>
            <g-image alt="urban cravings new website" src="~/img/urban-new.jpg" class="img-fluid" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Result</h2>
            <p>With Urban Craving's new website up and running, after a few months of SEO efforts, they rank #1 in a few different cities for multiple keywords on Google. These cities include Niagara, St. Catharines and more. This means that they get inbound leads without having to lift a finger.</p>
            <p>Here's a screenshot below :</p>
            <g-image alt="urban cravings results" src="~/img/urban-results.jpg" class="img-fluid" />
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
           <a rel="noopener" href="https://calendly.com/infused-agency/" target="_blank"><button type="button" class="btn btn-primary">Book Now</button></a>
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
    title: 'Canadian Mortgage Authority Case Study',
    meta: [
      { key: 'description', name: 'description', content: 'Canadian Mortgage Authority website was designed, developed and marketed by Infused Agency. Click here to view the case study.' }
    ]
  }
}
</script>

