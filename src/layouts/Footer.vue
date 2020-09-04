<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <p class="title">About</p>
          <p>Infused Agency is a Niagara web design, SEO company and digital marketing agency. We help local and non-local businesses build their credibility online, as well as help bring in more sales.</p>
        </div>
        <div class="col-lg-4">
          <p class="title">Office</p>
          <p>
            73 Alexandra Blvd,
            <br />St. Catharines, ON
            <br />L2P 1K2
          </p>
        </div>
        <div class="col-lg-4">
          <p class="title">Follow</p>
          <p>
            <a
              href="https://www.facebook.com/infused.agency/"
              target="_blank"
              aria-label="facebook"
              rel="noopener"
            >
              <font-awesome :icon="['fab', 'facebook']" />
            </a>
          </p>
          <p class="title">Request A Quote</p>
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
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
              <input name="email" type="email" class="form-control" id="Email" placeholder="Email" />
            </div>
            <div class="form-group">
              <input
                name="phone"
                type="phone"
                class="form-control"
                id="Phone"
                aria-describedby="urlhelp"
                placeholder="Cell Phone Number"
              />
            </div>
            <div class="form-group">
              <select name="budget" type="budget" id="Budget">
                <option value="select">What's your budget?</option>
                <option value="2000">$2,000 - $3,000</option>
                <option value="3000">$3,000 - $4,000</option>
                <option value="4000">$4,000 - $5,000</option>
                <option value="5000">$5,000+</option>
              </select>
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
      <div class="row copy">
        <div class="col-lg-12">
          <p>&copy; 2020 Infused. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
@import "../scss/_base.scss";
footer {
  background: $light-grey;
  padding-top: 100px;
  padding-bottom: 100px;
  @include bp-tablet {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .svg-inline--fa {
    font-size: 20px;
  }
  p {
    &.title {
      font-weight: bold;
    }
  }
  .copy {
    @include bp-tablet {
      margin-top: 20px;
    }
  }
  a {
    color: $dark-blue;
    &.insta {
      margin-right: 10px;
    }
  }
}
</style>
