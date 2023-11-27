import React from "react"
import Fade from "react-reveal/Fade"

const InnerContent = props => {
  return (
    <>
      <Fade>
        <section className="inner-content">{props.children}</section>
      </Fade>
    </>
  )
}

export default InnerContent
