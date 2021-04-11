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
            <Link to="/beamsville-web-design">Beamsville</Link>,{" "}
            <Link to="/binbrook-web-design">Binbrook</Link>,{" "}
            <Link to="/chippawa-web-design">Chippawa</Link>,{" "}
            <Link to="/crystal-beach-web-design">Crystal Beach</Link>,{" "}
            <Link to="/dunnville-web-design">Dunnville</Link>,{" "}
            <Link to="/elora-web-design">Elora</Link>,{" "}
            <Link to="/fergus-web-design">Fergus</Link>,{" "}
            <Link to="/fonthill-web-design">Fonthill</Link>,{" "}
            <Link to="/fort-erie-web-design">Fort Erie</Link>,{" "}
            <Link to="/georgetown-web-design">Georgetown</Link>,{" "}
            <Link to="/gravenhurst-web-design">Gravenhurst</Link>,{" "}
            <Link to="/grimsby-web-design">Grimsby</Link>,{" "}
            <Link to="/jordan-web-design">Jordan</Link>,{" "}
            <Link to="/pelham-web-design">Pelham</Link>,{" "}
            <Link to="/port-colborne-web-design">Port Colborne</Link>,{" "}
            <Link to="/port-dalhousie-web-design">Port Dalhousie</Link>,{" "}
            <Link to="/stoney-creek-web-design">Smithville</Link>, St.
            Catharines, <Link to="/thorold-web-design">Thorold</Link>,{" "}
            <Link to="/vineland-web-design">Vineland</Link>,{" "}
            <Link to="/virgil-web-design">Virgil</Link>,{" "}
            <Link to="/wainfleet-web-design">Wainfleet</Link>,{" "}
            <Link to="/welland-web-design">Welland</Link>.
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
