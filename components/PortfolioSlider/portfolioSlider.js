import React from "react"
import Slider from "react-slick"

import ggs from "../../src/img/home-feat-ggs.webp"
import plant from "../../src/img/home-feat-p1.webp"
import kd from "../../src/img/home-feat-kd.webp"
import nj from "../../src/img/home-feat-nj.webp"
import cass from "../../src/img/home-feat-cass.webp"
import cc from "../../src/img/home-feat-cc.webp"
import uc from "../../src/img/home-feat-uc.webp"
import cma from "../../src/img/home-feat-cma.webp"
import rb from "../../src/img/home-feat-rb.webp"
import krista from "../../src/img/home-feat-krista.webp"
import ce from "../../src/img/home-feat-ce.webp"
import mc from "../../src/img/home-feat-mc.webp"
import df from "../../src/img/home-feat-df.webp"
import tr from "../../src/img/home-feat-tr.webp"
import pd from "../../src/img/home-feat-pd.webp"
import lmc from "../../src/img/home-feat-lmc.webp"
import dc from "../../src/img/home-feat-dc.webp"

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
        <div>
          <img
            width="800"
            height="799"
            className="img-fluid"
            src={tr}
            alt="tr web design"
          />
        </div>
        <div>
          <img
            width="800"
            height="799"
            className="img-fluid"
            src={cass}
            alt="cass web design"
          />
        </div>
        <div>
          <img
            width="800"
            height="799"
            className="img-fluid"
            src={cma}
            alt="cma web design"
          />
        </div>
        <div>
          <img
            width="800"
            height="799"
            className="img-fluid"
            src={krista}
            alt="krysta web design"
          />
        </div>
        <div>
          <img
            width="800"
            height="799"
            className="img-fluid"
            src={ce}
            alt="ce web design"
          />
        </div>
      </Slider>
    </>
  )
}

export default PortfolioSlider
