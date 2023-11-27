import React, { useState } from "react"
import Link from "next/link"
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
            <Link href="/beamsville-web-design">Beamsville</Link>,{" "}
            <Link href="/crystal-beach-web-design">Crystal Beach</Link>,{" "}
            <Link href="/fonthill-web-design">Fonthill</Link>,{" "}
            <Link href="/fort-erie-web-design">Fort Erie</Link>,{" "}
            <Link href="/grimsby-web-design">Grimsby</Link>,{" "}
            <Link href="/pelham-web-design">Pelham</Link>,{" "}
            <Link href="/port-colborne-web-design">Port Colborne</Link>,{" "}
            <Link href="/port-dalhousie-web-design">Port Dalhousie</Link>,{" "}
            <Link href="/smithville-web-design">Smithville</Link>,{" "}
            <Link href="/thorold-web-design">Thorold</Link>,{" "}
            <Link href="/wainfleet-web-design">Wainfleet</Link>,{" "}
            <Link href="/welland-web-design">Welland</Link>.{" "}
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
