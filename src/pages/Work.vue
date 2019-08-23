<template>
  <Layout>
    <!--Hero-->
    <section class="inner-hero" data-aos="fade-in" data-aos-duration="1000">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12">
          <h1 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">Work</h1>
          <p data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1000">Results we've got for our clients</p>
          </div>
        </div>
      </div>
    </section>
    <!--Content-->
    <section class="inner-content" id="work">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <g-image alt="canadian mortgage authority" src="~/img/cma.jpg" class="img-fluid" />
            <g-link to="/cma"><button type="submit" class="btn btn-primary">View Case Study</button></g-link>
          </div>
          <div class="col-lg-4">
            <g-image alt="urban cravings" src="~/img/urban-cravings.jpg" class="img-fluid" />
            <g-link to="/urban-cravings"><button type="submit" class="btn btn-primary">View Case Study</button></g-link>
          </div>
          <div class="col-lg-4">
            <g-image alt="refresh beauty" src="~/img/refresh.jpg" class="img-fluid" />
            <g-link to="/refresh-beauty"><button type="submit" class="btn btn-primary">View Case Study</button></g-link>
          </div>
        </div>
        <div class="row two">
          <div class="col-lg-4">
            <g-image alt="chris cutaia" src="~/img/chris.jpg" class="img-fluid" />
            <g-link to="/chris-cutaia"><button type="submit" class="btn btn-primary">View Case Study</button></g-link>
          </div>
          <div class="col-lg-4">
            <g-image alt="sanko construction" src="~/img/sanko-construction.jpg" class="img-fluid" />
            <g-link to="/sanko-construction"><button type="submit" class="btn btn-primary">View Case Study</button></g-link>
          </div>
          <div class="col-lg-4">
            &nbsp;
            <!-- <g-image alt="holly oaks" src="~/img/hollyoaks.jpg" class="img-fluid" />
            <g-link to="/holly-oaks"><button type="submit" class="btn btn-primary">View Case Study</button></g-link> -->
          </div>
        </div>
      </div>
    </div>
    </section>
    <Footer></Footer>
  </Layout>
</template>

<style scoped lang="scss">
@import "../scss/_base.scss";

#work {
  img {
    width: 100%;
    @include bp-tablet-sm {
      margin-top: 20px;
    }
  }
  .two {
    margin-top: 30px;
    @include bp-tablet-sm {
      margin-top: 0px;
    }
  }
  button {
    width: 100%;
  }
}

</style>

<script>
export default {
  metaInfo: {
    title: 'Work',
    meta: [
      { key: 'description', name: 'description', content: 'Check out the detailed case studies based on the results that Infused Agency has put forth for their clients. Click here to view now.' }
    ]
  }
}
</script>
