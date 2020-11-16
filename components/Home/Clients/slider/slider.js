import React, { Component } from "react"
import Slider from "react-slick"
import TestimonialCard from "../../../testimonialCard/testimonialCard"

import "../slider/slider.scss"

export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div>
        <div className="slider">
          <Slider {...settings}>
            <div>
              <TestimonialCard>
                <p>{this.props.testimOne}</p>
                <em>Mr. Duarte, Cass-A-Bella Construction</em>
              </TestimonialCard>
            </div>
            <div>
              <TestimonialCard>
                <p>
                  "Amazing experience, really helped to elevate my business and
                  I would highly recommend working with them for all of your
                  website, design, and SEO needs!!"
                </p>
                <em>Lauren Emberson, Lauren Emberson Photography</em>
              </TestimonialCard>
            </div>
            <div>
              <TestimonialCard>
                <p>
                  "JD did an amazing job creating a seamless website for my
                  aesthetics clinic. He thoroughly went through each aspect of
                  the web design and was extremely easy to talk to about small
                  tweaks and changes I wanted to see. I would highly recommend
                  his services to anyone looking for web design and SEO
                  optimization."
                </p>
                <em>Melissa Cundell, MC Aesthetics</em>
              </TestimonialCard>
            </div>
            <div>
              <TestimonialCard>
                <p>
                  "I have been working with JD on my new website and the process
                  has been great! He is easy to work with, and has a good
                  understanding of my vision and what I need from a website. I
                  have worked with other web design agencies in the past and I
                  would recommend JD first!"
                </p>
                <em>Jasmine Morvay, KC Interiors</em>
              </TestimonialCard>
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}
