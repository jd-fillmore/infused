<template>
  <Layout>
   
   <!--Hero-->
   <section class="hero">
    <div class="container">
      <div class="row text-center">
        <div class="col-lg-12">
          <h1>More sales. More Profits. More Growth.</h1>
          <p>We help landscaping, design, renovation and architecture companies get more projects.</p>
          <g-link to="/contact"><button type="button" class="btn btn-primary">Learn How</button></g-link>
        </div>
      </div>
    </div>
   </section>

   <!--PDF-->
   <section class="pdf">
     <div class="container">
       <div class="row">
         <div class="col-lg-8">
           <h2>Need a website that brings in sales?</h2>
           <p>Contact us for your free consultation. Lets talk about your current web situation.</p>
         </div>
         <div class="col-lg-4">
           <g-link to="/contact"><button type="button" class="btn btn-primary">Contact Us Now</button></g-link>
         </div>
       </div>
     </div>
   </section>

   <!--Intro-->
   <section class="intro">
    <div class="container">
      <div class="row text-center">
        <div class="col-lg-12">
          <h2>We <strong>Only</strong> Build Sales-Generating Websites</h2>
          <h4>Specifically for Landscaping, Home Renovation, Home Builders, Remodeling, Architecture, Design and other Construction businesses</h4>
        </div>
      </div>
      <div class="row text-center cards">
        <div class="col-lg-4">
          <div class="card">
            <g-image alt="check" src="~/img/check.jpg" class="img-fluid mx-auto d-block" />
            <h4>More Sales</h4>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <g-image alt="check" src="~/img/check.jpg" class="img-fluid mx-auto d-block" />
            <h4>More Profits</h4>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <g-image alt="check" src="~/img/check.jpg" class="img-fluid mx-auto d-block" />
            <h4>More Growth</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
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
        <div class="col-lg-12">
          <h2>Featured Project</h2>
          <g-image alt="Sanko Construction" src="~/img/sanko.png" class="img-fluid" />
          <p>"We get so many emails and calls for new jobs through our site, we can be picky. We don't need to advertise or look for jobs anymore."</p>
          <p><em>- Owner, Sanko Construction</em></p>
        </div>
      </div>
      <!--Image-->
      <div class="row">
        <div class="col-lg-8">
          <g-image alt="Sanko Construction" src="~/img/sanko.jpg" class="img-fluid" />
        </div>
        <div class="col-lg-4">
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
        <div class="col-lg-12">
          <h2>Industries We Serve</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
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
        <div class="col-lg-6">
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
        <div class="col-lg-6">
          <h2>Are you looking to...</h2>
          <ul>
            <li>Get more sales?</li>
            <li>Maximize profits?</li>
            <li>Never look for another project?</li>
          </ul>
        </div>
        <div class="col-lg-6">
          <p>Lets discuss what you need.</p>
          <form name="home-contact" method="POST" data-netlify="true">
          <div class="form-group">
            <input aria-label="name" type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name">
          </div>
          <div class="form-group y">
            <input aria-label="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <textarea aria-label="textarea" class="form-control" rows="5" id="comment" placeholder="What can we help you with?"></textarea>
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
    title: 'Best Web Design Home Contractors, Renovation, Landscaping SEO',
    meta: [
      { key: 'description', name: 'description', content: 'Best contractor web design company. We help our contractor, home renovation, remodeling and landscaping clients. Click here now!' }
    ]
  }
}

</script>

<style lang="scss">

@import "../scss/_base.scss";

// Home
.intro, .featured, .industries, .cta {
  padding-top: 100px;
  padding-bottom: 100px;
  @include bp-tablet-sm {
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
  margin-top: 70px;
  @include bp-tablet-sm {
    margin-top: 70px; 
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .btn-primary {
    box-shadow: none;
    &:focus, &:hover {
      box-shadow: none;
    }
  }
  h1 {
    color: $white;
    margin-bottom: 0px;
  }
  p {
    color: #d6d6d6;
    margin-bottom: 30px;
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
    @include bp-tablet {
      margin-bottom: 20px;
    }
    &:focus, &:hover {
      box-shadow: 0px 20px 100px #c7c7c7;
      transform: translate3D(0, -5px, 0);
      transition: .2s;
    }
    h4 {
      margin-bottom: 0px;
      margin-top: 10px;
    }
  }
}

// PDF
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

// Featured
.featured {
  p {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  h3 {
    color: $light-blue;
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
