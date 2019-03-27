<template>
  <Layout>
    <!--Hero-->
    <section class="inner-hero">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12">
          <h1>Contact</h1>
          <p>Want more sales from your website? Connect with us</p>
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
                <li>Get more sales?</li>
                <li>Maximize profits?</li>
                <li>Never look for another project?</li>
              </ul>
            </div>
            <div class="col-lg-6">
              <p>Lets discuss what you need.</p>
              <form name="contact" method="POST" data-netlify="true">
              <div class="form-group">
                <input arial-label="name" type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name">
              </div>
              <div class="form-group">
                <input arial-label="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <textarea arial-label="textarea" class="form-control" rows="5" id="comment" placeholder="What can we help you with?"></textarea>
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
    title: 'Contact Us',
    meta: [
      { key: 'description', name: 'description', content: 'Contact Infused today for website design and development, SEO and internet marketing to grow your business.' }
    ]
  }
}
</script>
