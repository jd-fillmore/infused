import React from "react"
import { Link } from "gatsby"
import Card from "../../Card/card"
import featuredImg from "../../../src/img/niagara-web-design-1.webp"
import treeImg from "../../../src/img/web-design-st-catharines.webp"
import cassImg from "../../../src/img/niagara-digital-marketing.webp"

import "../Featured/featured.scss"

const projects = [
  {
    title: "TreeReports",
    desc:
      "A local certified consulting arborist specializing in reports, planning and consulting.",
    link: "/tree-reports",
    pic: featuredImg,
  },
  {
    title: "KD Flowers",
    desc:
      "A boutique affordable wedding flower business in the heart of St. Catharines.",
    link: "/kd-flowers",
    pic: treeImg,
  },
  {
    title: "Cass-A-Bella Construction",
    desc:
      "A contracting company focused on custom home building and renovation in Toronto.",
    link: "/cass-a-bella-construction",
    pic: cassImg,
  },
]

const Featured = ({ title, subTitle }) => {
  return (
    <>
      <section className="text-center">
        <section className="featured work">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>{title}</h2>
                <p id="sub">{subTitle}</p>
              </div>
            </div>
          </div>
          {projects.map(project => (
            <div class="container">
              <Card>
                <div className="row item align-items-center">
                  <div className="col-lg-6 text-left">
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <Link to={project.link}>
                      Discover
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="col-lg-6">
                    <img
                      className="img-fluid"
                      src={project.pic}
                      alt={project.title}
                      width="415"
                      height="465"
                    />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </section>
      </section>
    </>
  )
}

export default Featured
