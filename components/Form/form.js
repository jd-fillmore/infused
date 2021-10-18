import React from "react"
import Button from "../Button/button"

import "../Form/form.scss"

const Form = () => {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <div className="row">
        <div className="col-lg-6">
          <div class="form-group">
            <label>
              First Name<sup>*</sup>
            </label>
            <input
              name="name"
              type="name"
              class="form-control"
              id="First Name"
              aria-describedby="namehelp"
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div class="form-group">
            <label>
              Last Name<sup>*</sup>
            </label>
            <input
              name="name"
              type="name"
              class="form-control"
              id="Last Name"
              aria-describedby="namehelp"
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div class="form-group">
            <label>
              Email<sup>*</sup>
            </label>
            <input
              name="email"
              type="email"
              class="form-control"
              id="Email"
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div class="form-group">
            <div class="form-group">
              <label>
                Phone<sup>*</sup>
              </label>
              <input
                name="phone"
                type="phone"
                class="form-control"
                id="Phone"
                aria-describedby="urlhelp"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <label>
            How can we help you?<sup>*</sup>
          </label>
          <textarea
            name="How Can We Help"
            class="form-control"
            id="How Can We Help"
            rows="3"
            placeholder="Business website, e-commerce website, search engine optimization (SEO), digital marketing, etc.."
            required
          ></textarea>
        </div>
        <div className="col-lg-6">
          <label className="project">
            What's your project goal?<sup>*</sup>
          </label>
          <textarea
            name="Project Goal"
            class="form-control"
            id="Project Goal"
            rows="3"
            placeholder="Updated website design, increased website traffic, better functioning website, generate more online sales, etc.."
            required
          ></textarea>
        </div>
      </div>
      <div class="form-group">
        <label className="url">Current Website URL</label>
        <input
          name="url"
          type="name"
          class="form-control"
          id="URL"
          aria-describedby="urlhelp"
        />
      </div>
      <button type="submit">Submit</button>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
    </form>
  )
}

export default Form
