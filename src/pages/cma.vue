<template>
  <Layout>
    <!--Hero-->
    <section class="inner-hero">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-12">
            <h1>Canadian Mortgage Authority</h1>
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
            <p>We contacted Mark of Canadian Mortgage Authority, as we noticed that there was a seemingly glaring problem that his current website had. The website had a very outdated design, the website's purpose was not there (it was very scattered), and it wasn't mobile-friendly. On top of that, the page speed was slow and it wasn't easy for users to find what they were looking for without getting overwhelmed.</p>
            <p>Here's his old website below:</p>
            <g-image alt="canadian mortgage authority old website" src="~/img/cma-old.jpg" class="img-fluid" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Solution</h2>
            <p>We sat down with Mark and educated him on the reasons why having a modern design builds credibility and trust to not only his current clients, but new clients that find his site as well. From there, we worked with alongside Mark perfecting his new website design. His new website features a design that is clean, engaging, and most of all, easy to navigate. It's also mobile-friendly, so new potential clients can browse the site easily.</p>
            <p>Here's his new website below:</p>
            <g-image alt="canadian mortgage authority new website" src="~/img/cma-new.jpg" class="img-fluid" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2>Result</h2>
            <p>With Mark's new website up and running, after a few months of SEO efforts, he ranks #1 in multiple cities for multiple keywords on Google. These cities include Grimsby, Hamilton, Welland, Brantford and more.</p>
            <p>Here's a screenshot below :</p>
            <g-image alt="canadian mortgage authority results" src="~/img/cma-results.jpg" class="img-fluid" />
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

