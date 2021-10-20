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
          <div class="form-group">
            <label>Current Website URL</label>
            <input
              name="url"
              type="name"
              class="form-control"
              id="URL"
              aria-describedby="urlhelp"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <label>
            What's your budget?<sup>*</sup>
          </label>
          <br />
          <select name="budget" id="budget" required>
            <option value="">Please select your estimated budget</option>
            <option value="2500">$2,500 - $3,500</option>
            <option value="2500">$3,500 - $5,000</option>
            <option value="2500">$5,000+</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <label className="how">
            How can we help you?<sup>*</sup>
          </label>
          <br />
          <label className="check">
            <input
              type="checkbox"
              name="custom-website"
              id="Custom Website"
              value="Chose Custom Website"
            />
            Custom website
          </label>
          <label className="check">
            <input
              type="checkbox"
              name="wordpress-website"
              id="Wordpress Website"
              value="Chose Wordpress Website"
            />
            WordPress website
          </label>
          <label className="check">
            <input
              type="checkbox"
              name="ecommerce-website"
              id="ecommerce Website"
              value="Chose E-commerce Website"
            />
            E-Commerce website
          </label>
          <label className="check">
            <input
              type="checkbox"
              name="digital-marketing"
              id="digital marketing"
              value="Chose digital marketing"
            />
            Digital marketing
          </label>
          <label className="check">
            <input type="checkbox" name="seo" id="seo" value="seo" />
            SEO (Search Engine Optimization)
          </label>
          <label className="check">
            <input
              type="checkbox"
              name="website-seo-audit"
              id="website seo audit"
              value="Chose website seo audit"
            />
            Website/SEO Audit
          </label>
          {/* <textarea
            name="How Can We Help"
            class="form-control"
            id="How Can We Help"
            rows="3"
            placeholder="Business website, e-commerce website, search engine optimization (SEO), digital marketing, etc.."
            required
          ></textarea> */}
        </div>
        <div className="col-lg-6">
          <label>
            What's your project goal?<sup>*</sup>
          </label>
          <label className="check">
            <input
              type="checkbox"
              name="increase-traffic"
              id="increase traffic"
              value="Chose increase traffic"
            />
            Increase website traffic
          </label>
          <label className="check">
            <input
              type="checkbox"
              name="update-web-design"
              id="updated website design"
              value="Chose updated website design"
            />
            Update website design
          </label>
          <label className="check">
            <input
              type="checkbox"
              name="better-functioning-website"
              id="better functioning website"
              value="Chose better functioning website"
            />
            Better functioning website
          </label>
          <label className="check">
            <input
              type="checkbox"
              name="more online sales"
              id="more online sales"
              value="Chose more online sales"
            />
            Get more online sales
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <label>
            Tell us more about your project:<sup>*</sup>
          </label>
          <textarea
            name="Tell Us More"
            class="form-control"
            id="Tell Us More"
            rows="10"
            required
          ></textarea>
        </div>
      </div>

      <button type="submit">Submit</button>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
    </form>
  )
}

export default Form
