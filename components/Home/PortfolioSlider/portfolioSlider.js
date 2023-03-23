import React from "react"
import Slider from "react-slick"

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

import ggs from "../../../src/img/home-feat-ggs.webp"
import kd from "../../../src/img/home-feat-kd.webp"
import dc from "../../../src/img/home-feat-dc.webp"
import lmc from "../../../src/img/home-feat-lmc.webp"
import pd from "../../../src/img/home-feat-pd.webp"

const PortfolioSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <>
      <Slider {...settings}>
        <div>
          <img
            className="img-fluid"
            src={ggs}
            alt="ggs niagara landscaping web design"
          />
        </div>
        <div>
          <img
            width="800"
            height="799"
            className="img-fluid"
            src={dc}
            alt="dc web design"
          />
        </div>
        <div>
          <img
            width="800"
            height="799"
            className="img-fluid"
            src={lmc}
            alt="lmc web design"
          />
        </div>
        <div>
          <img
            width="800"
            height="799"
            className="img-fluid"
            src={pd}
            alt="pd web design"
          />
        </div>
        <div>
          <img
            width="800"
            height="799"
            className="img-fluid"
            src={kd}
            alt="kd flowers web design"
          />
        </div>
      </Slider>
    </>
  )
}

export default PortfolioSlider
