import React from "react"

const Form = () => {
  return (
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
          aria-label="name"
        />
      </div>
      <div class="form-group">
        <input
          name="email"
          type="email"
          class="form-control"
          id="Email"
          placeholder="Email"
          aria-label="email"
        />
      </div>
      <div class="form-group">
        <input
          name="phone"
          type="phone"
          class="form-control"
          id="Phone"
          aria-describedby="urlhelp"
          placeholder="Cell Phone Number"
          aria-label="phone"
        />
      </div>
      <div class="form-group">
        <label htmlFor="What Services">
          What services are you looking for?
        </label>
        <select name="services[]" class="form-control" id="Services Needed">
          <option value="Website Design">Website Design</option>
          <option value="E-Commerce">E-Commerce</option>
          <option value="SEO">SEO</option>
          <option value="Website Design + SEO">Website Design + SEO</option>
          <option value="E-Commerce + SEO">E-Commerce + SEO</option>
        </select>
      </div>
      <div class="form-group">
        <textarea
          name="message"
          class="form-control"
          id="Message"
          rows="3"
          placeholder="Project Details"
          aria-label="how can we help"
        ></textarea>
      </div>
      <button type="submit">Get My Quote</button>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
    </form>
  )
}

export default Form