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
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="business-website"
            />
            <label class="custom-control-label" for="business-website">
              Business Website
            </label>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="ecomm-website"
            />
            <label class="custom-control-label" for="ecomm-website">
              E-Commerce Website
            </label>
          </div>
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="seo" />
            <label class="custom-control-label" for="seo">
              Search Engine Optimization (SEO)
            </label>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="digital-marketing"
            />
            <label class="custom-control-label" for="digital-marketing">
              Digital Marketing (Instagram Ads, Facebook Ads)
            </label>
          </div>
        </div>
        <div className="col-lg-6">
          <label className="project">
            What's your project goal?<sup>*</sup>
          </label>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="updated-website-design"
            />
            <label class="custom-control-label" for="updated-website-design">
              Updated website design
            </label>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="increase-traffic"
            />
            <label class="custom-control-label" for="increase-traffic">
              Increase website traffic
            </label>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="better-functioning-website"
            />
            <label
              class="custom-control-label"
              for="better-functioning-website"
            >
              Better functioning website
            </label>
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="generate-sales"
            />
            <label class="custom-control-label" for="generate-sales">
              Generate more online sales
            </label>
          </div>
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
      <div class="form-group">
        <label>
          Tell us more about your project<sup>*</sup>
        </label>
        <textarea
          name="message"
          class="form-control"
          id="Message"
          rows="3"
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
    </form>
  )
}

export default Form
