<template>
  <Layout>
    <!--Hero-->
    <section class="inner-hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h1>Grimsby Web Design & SEO Company</h1>
            <h1>Grimsby Web Design & Application Development</h1>
            <h3>Are you looking to...</h3>
            <ul>
              <li>Get your website re-designed?</li>
              <li>Get a new website that brings in business?</li>
              <li>Get more sales through SEO?</li>
              <li>Maximize profits?</li>
            </ul>
            <p>Please fill out the form and we'll get back to you as soon as possible.</p>
          </div>
          <div class="col-lg-6">
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <div class="form-group">
                <input
                  name="name"
                  type="name"
                  class="form-control"
                  id="Name"
                  aria-describedby="namehelp"
                  placeholder="Full Name"
                />
              </div>
              <div class="form-group">
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <input
                  name="company"
                  type="name"
                  class="form-control"
                  id="Company"
                  aria-describedby="companyname"
                  placeholder="Company Name"
                />
              </div>
              <div class="form-group">
                <input
                  name="url"
                  type="name"
                  class="form-control"
                  id="URL"
                  aria-describedby="urlhelp"
                  placeholder="Website URL"
                />
              </div>
              <div class="form-group">
                <textarea
                  name="message"
                  class="form-control"
                  id="Message"
                  rows="3"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
            </form>
          </div>
        </div>
      </div>
    </section>

    <!--Intro-->

    <section class="niche-intro">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <br />
            <br />
            <g-image
              alt="Grimsby web design"
              src="~/img/grimsby-web-design-seo-company.jpg"
              class="img-fluid"
            />
            <p>
              If you're looking for a
              <a
                href="https://en.wikipedia.org/wiki/Web_design"
                target="_blank"
              >Grimsby web design</a> company that knows how to boost your sales and credibility online, you've come to the right place!
            </p>
            <p>
              It's super important if you care about your company brand, the immediate first impression you'll have on new customers and more importantly, the ability to sell your company's product or service without having to lift a finger.
              Having an amazing web design, in a nut shell, is making sure that when people come to your website, that people can quickly and easily find what they're looking for, and you give them what they need. This is the difference between a website that does sell, and that doesn't.
            </p>
            <h2>Why Your Grimsby Business Needs A Successful Website</h2>
            <p>Traditionally in the past, companies didn't have to rely on any sort of online presence, because it didn't exist. However now, since everyone who needs something usually Googles what they need, it's imperative to hire a Grimsby website development company that knows what they're doing. You have to make sure that your company is professional represented in a mordern way - so that when people go to your website, they're amazed. They're impressed. And ultimately, your web design converts them into paying customers.</p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <p>
              So, what's the solution?
              <br />
              <br />An amazing, modern and easy-to-navigate
              <a href="/work">website</a>.
              <br />
              <br />When your company has an unbelievable and amazing site, when people come to your website, you no longer have to convince them to buy. With having an amazing site, the amazing impact it will have on people will almost force them to call or email you. So if you have local customers heading over to Google, clicking on your website and viewing your amazing site, those local leads will contact you through your new site, and ultimately you will have more paying customers.
              <br />
              <br />You want to make sure that your site is far better than all of your other competition. Because when that is the case, people will be much more impressed and inclined to contact you.
              <br />
              <br />You can count on our specialists get the job done for you.
            </p>
          </div>
        </div>
      </div>

      <!--Work-->

      <!--Content-->
      <section id="work">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>Our Clients In The Local Area</h2>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <g-image alt="canadian mortgage authority" src="~/img/cma.jpg" class="img-fluid" />
              <g-link to="/cma">
                <button type="submit" class="btn btn-primary">View Case Study</button>
              </g-link>
            </div>
            <div class="col-lg-4">
              <g-image alt="urban cravings" src="~/img/urban-cravings.jpg" class="img-fluid" />
              <g-link to="/urban-cravings">
                <button type="submit" class="btn btn-primary">View Case Study</button>
              </g-link>
            </div>
            <div class="col-lg-4">
              <g-image alt="refresh beauty" src="~/img/refresh.jpg" class="img-fluid" />
              <g-link to="/refresh-beauty">
                <button type="submit" class="btn btn-primary">View Case Study</button>
              </g-link>
            </div>
          </div>
          <div class="row two">
            <div class="col-lg-4">
              <g-image alt="chris cutaia" src="~/img/chris.jpg" class="img-fluid" />
              <g-link to="/chris-cutaia">
                <button type="submit" class="btn btn-primary">View Case Study</button>
              </g-link>
            </div>
            <div class="col-lg-4">
              <g-image
                alt="sanko construction"
                src="~/img/sanko-construction.jpg"
                class="img-fluid"
              />
              <g-link to="/sanko-construction">
                <button type="submit" class="btn btn-primary">View Case Study</button>
              </g-link>
            </div>
            <div class="col-lg-4">
              <g-image alt="holly oaks" src="~/img/hollyoaks.jpg" class="img-fluid" />
              <g-link to="/holly-oaks">
                <button type="submit" class="btn btn-primary">View Case Study</button>
              </g-link>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Our Websites Help Boost Your Credibility &amp; Sales</h2>
            <p>There are countless benefits as to how site can help not only your business, but really any business. But, lets keep the focus on yours for now.</p>
            <h4>A 24/7, full times salesperson</h4>
            <p>
              Imagine you did not have a website. Better yet, imagine your website had a terrible design and a terrible user experience. Meaning - it wasn't attractive, it wasn't personable and people couldn't find what they're looking for. An overall embarrassment to interact with and look at.
              <br />
              <br />Now imagine your website was the total opposite. It looked amazing on devices (desktop, laptop, tablet and phone), it was super easy to navigate, and it was far more beautiful than your competitions.
              <br />
              <br />In what situation do you think your potential customers are buying from you?
              <br />
              <br />Better design, better user experience = increase in sales.
            </p>
            <h4>ROI</h4>
            <p>
              The great thing is that everything is translated into
              <em>trackable</em> results. We're able to track pretty much every aspect of your website - month to month reports that record analytics pertaining to increase in Google rankings, overall traffic and exactly how many conversions you had.
            </p>
            <h4>Cost Effectiveness</h4>
            <p>Investing in a site is bar-none, THE most cost-effective marketing tool in today's modern digital world. The reason for this is that is simple - the sheer impact and potential your website has on the amount of business that it brings in. The inbound marketing nature of a great site saves countless man hours and cost versus something like cold calling, direct mail campaigns and other outbound marketing strategies.</p>
            <h4>Qualified Leads</h4>
            <p>
              This is probably one of the biggest advantages of an amazing site - you get people that
              <em>need</em> your service, and they're so impressed by what they see that it's a no brainer to contact you. Gone are the days of spending thousands on outbound marketing, in hopes that you
              <em>might</em> get some customers. Now, when people contact you via your awesome website, you KNOW that they're interested and that they are absolutely ready to buy.
            </p>
          </div>
        </div>
      </div>

      <!--FAQ-->

      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2>FAQ</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <h4>What's the first step?</h4>
            <p>
              First, we'll get together for a 10 - 15 minute
              <a href="/contact">discovery call</a>. This call is used to flesh out the current problems your having (if you already have a website up), and also to talk about your business goals and what you expect your website to do / accomplish.
            </p>
          </div>
          <div class="col-md-4">
            <h4>How does your pricing work?</h4>
            <p>This completely depends on what you want. For example - is it an informational site? Will you be selling a product or service on the website? Are there any types of custom functionality you wish to use? After these questions are answered, we'll be in a better spot to give you a choice between packages.</p>
          </div>
          <div class="col-md-4">
            <h4>Is there a contract?</h4>
            <p>Yes. The contract lasts for the length of the project. Once the website is launched and everything is complete, the contract ends. Unless, you want to sign up for website maintenance or security - which is highly recommended.</p>
          </div>
        </div>
        <br />
        <br />
      </div>

      <section class="need">
        <div class="container">
          <div class="row text-center">
            <div class="col-md-12">
              <h2>Need a website for your business?</h2>
              <p>Email us today for a free consultation for your new website.</p>
              <a href="mailto:jd@infused.agency">jd@infused.agency</a>
            </div>
          </div>
        </div>
      </section>

      <!--History-->
      <br />
      <br />
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>History of the town</h2>
            <p>
              <a href="https://en.wikipedia.org/wiki/Grimsby,_Ontario" target="_blank">This town</a> is very well known for its surrounding wineries, orchards and vineyards. The town also has a great variety of restaurants, as well as local produce.
              There are a very large number of farms, as well as greenhouses in the area as those features are a major economic driver. The crops produced in the area include
              peaches, pears, apples and cherries. This small town is recognized on a national scale as Canada's premier tender fruit region.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
    </section>

    <Footer></Footer>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Grimsby Web Design & SEO Company",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Grimsby's best web design and SEO company around. 10+ years in business helping hundreds of clients. Click here to view portfolio."
      }
    ]
  }
};
</script>

<style scoped lang="scss">
@import "../scss/_base.scss";
.inner-hero {
  a,
  ul {
    color: #fff;
  }
}
button {
  width: 100%;
}
.two {
  margin-top: 30px;
}
.need {
  background: linear-gradient(to right, #2caf73, #0671bc);
  padding-top: 60px;
  padding-bottom: 60px;
  h2,
  p,
  a {
    color: $white;
  }
}
</style>