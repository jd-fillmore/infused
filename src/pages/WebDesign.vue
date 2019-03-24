<template>
  <Layout>
    <!--Hero-->
    <section class="inner-hero">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-12">
            <h1>Web Design</h1>
            <p>Designed and developed with sales generation and conversion in mind</p>
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

    <!--Process-->
    <section class="process">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>Our Process</h2>
            <p>Our web design process that helps create a sales generating website</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <h3>1. Discovery</h3>
            <p>What's holding your business back from growing? What do you expect to get out of web design? Who is your target audience? These are some of the many questions that help with the diagnosis and eventual solution as to how we can help your business grow.</p>
          </div>
          <div class="col-lg-4">
            <h3>2. Plan</h3>
            <p>Before we touch a single pixel or a create a single line of code, we need to sit down and strategize a plan of attack. We will go over a few things - the aesthetics of your web design plan that attracts your specific audience, create wireframe sketches, website flowcharts and more.</p>
          </div>
          <div class="col-lg-4">
            <h3>3. Design</h3>
            <p>This is the fun part. We will produce a unique web design that powers and infuses your online presence as a whole. Your web design will be engaging, adapt easily to mobile design best practices, and most importantly, it will be aimed at generating much more business than you're currently getting.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <h3>4. Develop</h3>
            <p>Once we have your web design approved and ready to go, it's time to step into the website development phase. Our web designers, as well as website developers will step in and create your high performance website, aimed to rank extremely well in Google's search engine. They will start adding content, uploading media, testing and more.</p>
          </div>
          <div class="col-lg-4">
            <h3>5. Launch</h3>
            <p>One of the most important milestones in your project, is launching your new web design project. Our team will triple-check all of the content for any sort of spelling mistakes, make sure all links are working correctly, and lastly, making sure that's it shows up in Google searches.</p>
          </div>
          <div class="col-lg-4">
            <h3>6. Promote</h3>
            <p>At Infused, we believe that your web design project has just begun once the site has launched. You may have an amazing web design - but without traffic? It won't do anything for your business. The internet marketing aspect comes into play here and is the utmost important for your business to succeed.</p>
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

.process {
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

</style>


<script>
export default {
  metaInfo: {
    title: 'Web Design'
  }
}
</script>

