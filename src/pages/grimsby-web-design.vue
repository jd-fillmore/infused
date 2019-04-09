<template>
  <Layout>
   
   <!--Hero-->
    <section class="inner-hero">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-12">
            <h1>Grimsby Web Design</h1>
          </div>
        </div>
      </div>
    </section>

  <!--Intro-->

<section class="niche-intro">
	<div class="container">
    <div class="row">
      <div class="col-md-12">
        <br><br>
        <p>If you're looking for the best <a href="https://www.grimsby.ca/en/index.aspx" target="_blank">Grimsby</a> web design company, you've come to the right place! Web design is super important if you care about your company brand, the immediate first impression you'll have on new customers and more importantly, the ability to sell your company's product or service without having to lift a finger. <a href="https://en.wikipedia.org/wiki/Web_design" target="_blank">Web design</a>, in a nut shell, is making sure that when people come to your website, that people can quickly and easily find what they're looking for, and you give them what they need. This is the difference between a website design that does sell, and that doesn't.
        <br><br>
        Traditionally in the past, companies didn't have to rely on any sort of online presence, because it didn't exist. However now, since everyone who needs something usually Googles what they need, it's imperative to hire a Grimsby web design company that knows what they're doing. You have to make sure that your company is professional represented in a mordern way - so that when people go to your website, they're amazed. They're impressed. And ultimately, your web design converts them into paying customers.</p>
        <img src="<?php bloginfo('template_url'); ?>/img/grimsby-web-design.jpg" alt="Grimsby Web Design" />
      </div>
     </div>

    <div class="row text-center">
      <div class="col-md-12">
        <h2>In or near Grimsby and need a web design for your business?</h2>
      	<p>Get a modern, profitable web design for your Grimsby, Ontario business</p>
      	<a href="<?php echo esc_url( home_url( '/' ) ); ?>contact/"><button type="button" class="btn btn-primary">Get Your Free Quote!</button></a>
      </div>
    </div>

      <div class="row">
      	<div class="col-md-12">
      	<br><br>
          <p>
          So, what's the solution?
          <br><br>
          An amazing, modern and easy-to-navigate <a href="/website design/">web design</a>.
          <br><br>
          When your company has an unbelievable and amazing site, when people come to your website, you no longer have to convince them to buy. With having an amazing site, the amazing impact it will have on people will almost force them to call or email you. So if you have local customers heading over to Google, clicking on your website and viewing your amazing site, those local leads will contact you through your new site, and ultimately you will have more paying customers.
          <br><br>
          You want to make sure that your site is far better than all of your other competition. Because when that is the case, people will be much more impressed and inclined to contact you.
          <br><br>
          You can count on our specialists get the job done for you.
          </p>
      </div>
    </div>
     <div class="row">
       <div class="col-md-12">
         <h2>How An Amazing Web Design Can Help Your Grimsby Business</h2>
         <p>There are countless benefits as to how site can help not only your business, but really any business. But, lets keep the focus on yours for now.</p>
         <h4>A 24/7, full times salesperson</h4>
         <p>Imagine you did not have a website. Better yet, imagine your website had a terrible design and a terrible user experience. Meaning - it wasn't attractive, it wasn't personable and people couldn't find what they're looking for. An overall embarrassment to interact with and look at.
         <br><br>
         Now imagine your website was the total opposite. It looked amazing on devices (desktop, laptop, tablet and phone), it was super easy to navigate, and it was far more beautiful than your competitions.
         <br><br>
         In what situation do you think your potential customers are buying from you?
         <br><br>
         Better design, better user experience = increase in sales.</p>
         <h4>ROI</h4>
         <p>The great thing is that everything is translated into <em>trackable</em> results. We're able to track pretty much every aspect of your website - month to month reports that record analytics pertaining to increase in Google rankings, overall traffic and exactly how many conversions you had.</p>
         <h4>Cost Effectiveness</h4>
         <p>Investing in a site is bar-none, THE most cost-effective marketing tool in today's modern digital world. The reason for this is that is simple - the sheer impact and potential your website has on the amount of business that it brings in. The inbound marketing nature of a great site saves countless man hours and cost versus something like cold calling, direct mail campaigns and other outbound marketing strategies.</p>
         <h4>Qualified Leads</h4>
         <p>This is probably one of the biggest advantages of an amazing site - you get people that <em>need</em> your service, and they're so impressed by what they see that it's a no brainer to contact you. Gone are the days of spending thousands on outbound marketing, in hopes that you <em>might</em> get some customers. Now, when people contact you via your awesome web design, you KNOW that they're interested and that they are absolutely ready to buy.</p>
       </div>
     </div>
     
    </div>

     <!--Work-->

    
  
    <!--FAQ-->

    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <br><br>
          <h2>FAQ</h2>
        </div>
      </div>
      <div class="row">
          <div class="col-md-4">
            <h4>What's the first step?</h4>
            <p>First, we'll get together for a 10 - 15 minute <a href="/contact/">discovery call</a>. This call is used to flesh out the current problems your having (if you already have a website up), and also to talk about your business goals and what you expect your website to do / accomplish.</p>
          </div>
          <div class="col-md-4">
            <h4>How does your pricing work?</h4>
            <p>This completely depends on what you want. For example - is it an informational site? Will you be selling a product or service on the website? Are there any types of custom functionality you wish to use? After these questions are answered, we'll be in a better spot to give you a choice between prackages.</p>
          </div>
          <div class="col-md-4">
            <h4>Is there a contract?</h4>
            <p>Yes. The contract lasts for the length of the project. Once the website is launched and everything is complete, the contract ends. Unless, you want to sign up for website maintenance or security - which is highly recommended.</p>
          </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center">
          <br><br>
          <h3>Ready to talk?</h3>
          <a href="/contact/"><button type="button" class="btn btn-primary">Contact Now</button></a>
          <br><br><br><br>
        </div>
      </div>
    </div>

    <!--Blog-->

    <!--Content-->
    <section class="inner-content blog-overview">
      <div class="container">
        <div class="row">
          <!--Content-->
          <div
            v-for="edge in $page.posts.edges"
            :key="edge.node.id"
            class="col-md-4"
          >
            <g-link :to="edge.node.path">
              <div class="card">
                <h2>
                  <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
                </h2>
                <!-- <p>{{ edge.node.excerpt }}</p> -->
              </div>
            </g-link>
          </div>
        </div>
      </div>
    </section>

    <!--History-->
    <br><br>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>History of Grimsby, Ontario</h2>
          <p><a href="https://en.wikipedia.org/wiki/Grimsby,_Ontario" target="_blank">Grimsby, Ontario</a> was originally founded in the year 1970, by a group of Empire United loayalists. They happened to settle at the very mouth of the forty mile creek, way back in 1787. One of the main town's founders was a man by the name of Robert Nelles. He happened to be,at the time, a politician and later a lieutenant-colonel back in the 1812 War. Apparently during the war, his home on Main Street was used to many battle planning sessions. The town has gone through many changes over the years. It has become a center for the fishing industry, hospital furniture, metal products and farm machinery. It also happens to be the center of the fruit-growing industry, beside the town of Jordan.</p>
        </div>
      </div>
    </div>

	<!--CTA-->
	<div class="container">
		<div class="row text-center">
	      <div class="col-md-12">
	      	<br>
	      	<h2>Hire Us To Help Your Business Online Today</h2>
	      	<a href="<?php echo esc_url( home_url( '/' ) ); ?>contact/"><button type="button" class="btn btn-primary">Get Your Free Quote!</button></a>
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
    title: 'Grimsby Web Design',
    meta: [
      { key: 'description', name: 'description', content: 'Grimsby web design. At Infused Agency, we help with designing and building a website for your business that instills trust and credibility.' }
    ]
  }
}

</script>

<style scoped lang="scss">

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
    margin-bottom: 20px;
    line-height: 1.4;
    font-size: 16px;
  }
  h1,h2,p {
    color: $white;
  }
  h2 {
    line-height: 1.2;
    margin-bottom: 30px;
  }
  p {
    font-size: 36px;
    line-height: 1.2;
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

// Process
.process {
  padding-top: 100px;
  padding-bottom: 100px;
  background: linear-gradient(to right, #412caf, #0671bc);
  @include bp-tablet {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  h2,h3 {
    color: $white;
  }
  p {
    color: $light-grey;
  }
}

// CTA

.cta {
  a {
    color: $dark-blue;
  }
}


</style>
