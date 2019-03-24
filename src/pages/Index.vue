<template>
  <Layout>
   
   <!--Hero-->
   <section class="hero">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-12">
          <h1>Contractor website design &amp; SEO for Landscapers, Home Renovation &amp; More</h1>
          <h2>More sales. More Profits. More Growth.</h2>
          <button type="button" class="btn btn-primary">Learn How</button>
        </div>
      </div>
    </div>
   </section>

   <!--Intro-->
   <section class="intro">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-12">
          <h2>We <strong>Only</strong> Build Sales-Generating Websites</h2>
          <h4>Specifically for Landscaping, Home Renovation, Home Builders, Remodeling, Architecture, Design and other Construction businesses</h4>
        </div>
      </div>
      <div class="row text-center cards">
        <div class="col-md-4">
          <div class="card">
            <g-image alt="check" src="~/img/check.jpg" class="img-fluid mx-auto d-block" />
            <h4>More Sales</h4>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <g-image alt="check" src="~/img/check.jpg" class="img-fluid mx-auto d-block" />
            <h4>More Profits</h4>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <g-image alt="check" src="~/img/check.jpg" class="img-fluid mx-auto d-block" />
            <h4>More Growth</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p>We build premium, conversion-focused websites that <strong>actually bring you more sales</strong>.</p>
          <p>We're interested in working with a business that <strong>fully understands</strong> that referrals don't last forever, and that having an inbound sales-generating website will give them consistent leads.</p>
          <p>We're <strong>not interested</strong> in working with a business who thinks either a) their current website, that doesn't generate sales, is just fine or b) think their referrals will last forever. Because they won't.</p>
        </div>
      </div>
    </div>
    
   </section>

   <!--Featured-->
   <section class="featured">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-12">
          <h2>Featured Project</h2>
          <g-image alt="Sanko Construction" src="~/img/sanko.png" class="img-fluid" />
          <p>"We get so many emails and calls for new jobs through our site, we can be picky. We don't need to advertise or look for jobs anymore."</p>
          <p><em>- Owner, Sanko Construction</em></p>
        </div>
      </div>
      <!--Image-->
      <div class="row">
        <div class="col-md-8">
          <g-image alt="Sanko Construction" src="~/img/sanko.jpg" class="img-fluid" />
        </div>
        <div class="col-md-4">
          <h3>Before</h3>
          <ul>
            <li>Zero sales from website</li>
            <li>Poor trust and credibility to the public</li>
            <li>Wanted to do something about it</li>
          </ul>
          <h3>After</h3>
          <ul>
            <li>Consistent sales solely from website</li>
            <li>Experiencing growth</li>
            <li>Doesn’t have to look for clients anymore</li>
          </ul>
          <a href="http://sankoconstruction.ca" target="_blank"><button type="submit" class="btn btn-primary">View Website</button></a>
        </div>
      </div>
    </div>
   </section>

   <!--Industries-->
   <section class="industries">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Industries We Serve</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <ul>
            <li>Home Improvement</li>
            <li>Basement Remodeling</li>
            <li>Solar</li>
            <li>Foundation Repair</li>
            <li>Flood Restoration</li>
            <li>Home Builders</li>
            <li>Landscape Designers</li>
            <li>Swimming Pool Builders</li>
            <li>Bathroom Designers</li>
          </ul>
        </div>
        <div class="col-md-6">
          <ul>
            <li>Kitchen Remodeling</li>
            <li>Bathroom Remodeling</li>
            <li>Masonry</li>
            <li>Fire &amp; Water Restoration</li>
            <li>Architects &amp; Building Designers</li>
            <li>Landscape Architects</li>
            <li>Landscape Contractors</li>
            <li>Kitchen Designers</li>
            <li>General Contractors</li>
          </ul>
        </div>
      </div>
    </div>
   </section>

   <!--CTA-->
   <section class="cta">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>Are you looking to...</h2>
          <ul>
            <li>Get more sales?</li>
            <li>Maximize profits?</li>
            <li>Never look for another project?</li>
          </ul>
        </div>
        <div class="col-md-6">
          <p>Lets discuss what you need.</p>
          <form>
          <div class="form-group">
            <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <textarea class="form-control" rows="5" id="comment" placeholder="What can we help you with?"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>
    </div>
   </section>
  <Footer></Footer>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Best Web Design Home Contractors, Renovation, Landscaping SEO'
  }
}
</script>

<style lang="scss">

@import "../scss/_base.scss";

// Home
.intro, .featured, .industries, .cta {
  padding-top: 100px;
  padding-bottom: 100px;
  @include bp-tablet {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}

// Hero
.hero {
  padding-top: 200px;
  padding-bottom: 200px;
  background: url('../img/hero-bg.jpg') center center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  margin-top: 95px;
  @include bp-tablet {
    padding-top: px;
    padding-bottom: 100px;
  }
  .btn-primary {
    box-shadow: none;
    &:focus, &:hover {
      box-shadow: none;
    }
  }
  h1,h2 {
    color: $white;
  }
  h1 {
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  h2 {
    font-size: 44px;
    font-weight: 800;
    @include bp-tablet {
      font-size: 24px;
    }
  }
}

// Intro
.intro {
  background: $light-grey;
  h2 {
    color: $primary;
  }
  h4 {
    color: $light-blue;
    margin-bottom: 60px;
  }
  .cards {
    margin-bottom: 60px;
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
    h4 {
      margin-bottom: 0px;
    }
  }
}

// Featured
.featured {
  p {
    margin-top: 60px;
    margin-bottom: 60px;
  }
}

// Industries
.industries {
  background: url('../img/industries.jpg') center center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  h2,ul {
    color: $white;
  }
}

</style>
