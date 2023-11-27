import React, { useState } from "react"
import Link from "next/link"
import { Button, Modal, ModalBody, ModalFooter, Row, Col } from "reactstrap"

const IndustriesModal = () => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div className="industries">
      <Button className="link" onClick={toggle}>
        View Industries
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <h5>Industries Served</h5>
          <Row>
            <Col lg="6">
              <ul>
                <li>
                  <Link href="/seo-keywords-for-accountants">Accountants</Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-addiction-treatment">
                    Addiction Treatment Centers
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-architects">Architects</Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-atv-dealers">ATV Dealers</Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-auto-glass-shops">
                    Auto Glass Shops
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-bakeries">Bakeries</Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-boating-companies">
                    Boating Companies
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-bookkeeping">Bookkeeping</Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-breweries">Breweries</Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-cabinet-makers">
                    Cabinet Makers
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-carpenters">Carpenters</Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-chiropractors">
                    Chiropractors
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-closet-designers">
                    Closet Designers
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-commercial-cleaning">
                    Commercial Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-construction-companies">
                    Construction Companies
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-cottage-rentals">
                    Cottage Rentals
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-country-clubs">
                    Golf &amp; Country Clubs
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-custom-home-builders">
                    Custom Home Builders
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-deck-builders">
                    Deck Builders
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-dentists">Dentists</Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-dermatoligists">
                    Dermatoligists
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-dock-builders">
                    Dock Builders
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-dog-sitters">Dog Sitters</Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-dog-trainers">
                    Dog Trainers
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-door-suppliers">
                    Door Suppliers
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg="6">
              <ul>
                <li>
                  <Link href="/seo-keywords-for-electricians">
                    Electricians
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-estate-planners">
                    Estate Planners
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-event-planners">
                    Event Planners
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-estate-planners">
                    Estate Planners
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-financial-advisors">
                    Financial Advisors
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-fire-protection">
                    Fire Protection
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-flooring">Flooring</Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-garage-door-repair">
                    Garage Door Repair
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-hvac">HVAC</Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-it-companies">
                    IT Companies
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-landscapers">Landscapers</Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-lawyers">Lawyers</Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-mechanics">Mechanics</Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-moving-companies">
                    Moving Companies
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-pest-control">
                    Pest Control
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-pool-builders">
                    Pool Builders
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-roofers">Roofers</Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-rv-dealers">RV Dealers</Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-salons">Salons</Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-solar-companies">
                    Solar Companies
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-spas">Spas</Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-tree-service-arborists">
                    Tree Service Arborists
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-wedding-venues">
                    Wedding Venues
                  </Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-wineries">Wineries</Link>
                </li>
                <li>
                  <Link href="/seo-keywords-for-yoga-studios">
                    Yoga Studios
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default IndustriesModal
