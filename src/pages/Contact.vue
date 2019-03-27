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
                <p>
                  <label>Your Name: <input type="text" name="name" /></label>   
                </p>
                <p>
                  <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                  <label>Your Role: <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                  </select></label>
                </p>
                <p>
                  <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
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
