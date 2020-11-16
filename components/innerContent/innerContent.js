import React from "react"

import "../innerContent/inner-content.scss"

const InnerContent = props => {
  return (
    <>
      <section className="inner-content">{props.children}</section>
    </>
  )
}

export default InnerContent
