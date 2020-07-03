<template>
  <Layout>
    <!--Hero-->
    <section class="inner-hero" data-aos="fade-in" data-aos-duration="1000">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12">
            <h1 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">Contact</h1>
            <p
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >Want more sales from your website? Connect with us!</p>
          </div>
        </div>
      </div>
    </section>
    <!--Content-->
    <section class="inner-content">
      <!--CTA-->
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2>Are you looking to...</h2>
            <ul>
              <li>Get your website re-designed?</li>
              <li>Increase leads?</li>
              <li>Increase revenue from your website?</li>
            </ul>
          </div>
          <div class="col-lg-6">
            <p>Lets discuss what you need. Fill out the form below and we'll get back to you ASAP.</p>
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
    <Footer></Footer>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact Us",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Contact Infused today for website design and development, SEO and internet marketing to grow your business."
      }
    ]
  }
};
</script>
