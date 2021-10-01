import React, { useState } from "react"
import { Link } from "gatsby"
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap"

const CitiesModal = () => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div>
      <Button className="link" onClick={toggle}>
        Web design areas
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <h5>Local Areas Served</h5>
          <p>
            <Link to="/crystal-beach-web-design">Crystal Beach</Link>, s
            <Link to="/fonthill-web-design">Fonthill</Link>,{" "}
            <Link to="/fort-erie-web-design">Fort Erie</Link>,{" "}
            <Link to="/grimsby-web-design">Grimsby</Link>,{" "}
            <Link to="/jordan-web-design">Jordan</Link>,{" "}
            <Link to="/pelham-web-design">Pelham</Link>,{" "}
            <Link to="/port-colborne-web-design">Port Colborne</Link>,{" "}
            <Link to="/port-dalhousie-web-design">Port Dalhousie</Link>,{" "}
            <Link to="/smithville-web-design">Smithville</Link>,{" "}
            <Link to="/vineland-web-design">Vineland</Link>,{" "}
            <Link to="/virgil-web-design">Virgil</Link>,{" "}
            <Link to="/wainfleet-web-design">Wainfleet</Link>.{" "}
          </p>
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

export default CitiesModal
