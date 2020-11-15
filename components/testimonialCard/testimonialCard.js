import React from "react"

import "../testimonialCard/testimonial-card.scss"

const TestimonialCard = props => {
  return (
    <>
      <div className="testimonial-card">{props.children}</div>
    </>
  )
}

export default TestimonialCard
