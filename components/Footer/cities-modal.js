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
            <Link to="/chippawa-web-design">Chippawa</Link>,{" "}
            <Link to="/crystal-beach-web-design">Crystal Beach</Link>,{" "}
            <Link to="/dunnville-web-design">Dunnville</Link>,{" "}
            <Link to="/fonthill-web-design">Fonthill</Link>,{" "}
            <Link to="/fort-erie-web-design">Fort Erie</Link>,{" "}
            <Link to="/grimsby-web-design">Grimsby</Link>,{" "}
            <Link to="/jordan-web-design">Jordan</Link>,{" "}
            <Link to="/pelham-web-design">Pelham</Link>,{" "}
            <Link to="/port-colborne-web-design">Port Colborne</Link>,{" "}
            <Link to="/port-dalhousie-web-design">Port Dalhousie</Link>,{" "}
            <Link to="/stoney-creek-web-design">Smithville</Link>,{" "}
            <Link to="/smithville-web-design">Stoney Creek</Link>, St.
            Catharines, <Link to="/thorold-web-design">Thorold</Link>,{" "}
            <Link to="/vineland-web-design">Vineland</Link>,{" "}
            <Link to="/virgil-web-design">Virgil</Link>,{" "}
            <Link to="/wainfleet-web-design">Wainfleet</Link>,{" "}
            <Link to="/welland-web-design">Welland</Link>.
          </p>
          <h5>Other Areas Served</h5>
          <p>
            <Link to="/ajax-web-design">Ajax</Link>,{" "}
            <Link to="/albany-web-design">Albany</Link>,{" "}
            <Link to="/aurora-web-design">Aurora</Link>,{" "}
            <Link to="/barrie-web-design">Barrie</Link>,{" "}
            <Link to="/belleville-web-design">Belleville</Link>,{" "}
            <Link to="/binbrook-web-design">Binbrook</Link>,{" "}
            <Link to="/bracebridge-web-design">Bracebridge</Link>,{" "}
            <Link to="/bowmanville-web-design">Bowmanville</Link>,{" "}
            <Link to="/brampton-web-design">Brampton</Link>,{" "}
            <Link to="/brantford-web-design">Brantford</Link>,{" "}
            <Link to="/buffalo-web-design">Buffalo</Link>,{" "}
            <Link to="/burlington-web-design">Burlington</Link>,{" "}
            <Link to="/calgary-web-design">Calgary</Link>,{" "}
            <Link to="/cambridge-web-design">Cambridge</Link>,{" "}
            <Link to="/charlottetown-web-design">Charlottetown</Link>,{" "}
            <Link to="/chatam-web-design">Chatam-Kent</Link>,{" "}
            <Link to="/collingwood-web-design">Collingwood</Link>,{" "}
            <Link to="/edmonton-web-design">Edmonton</Link>,{" "}
            <Link to="/elora-web-design">Elora</Link>,{" "}
            <Link to="/etobicoke-web-design">Etobicoke</Link>,{" "}
            <Link to="/fergus-web-design">Fergus</Link>,{" "}
            <Link to="/fredericton-web-design">Fredericton</Link>,{" "}
            <Link to="/georgetown-web-design">Georgetown</Link>,{" "}
            <Link to="/grand-prairie-web-design">Grand Prairie</Link>,{" "}
            <Link to="/gravenhurst-web-design">Gravenhurst</Link>,{" "}
            <Link to="/guelph-web-design">Guelph</Link>,{" "}
            <Link to="/hamilton-web-design">Hamilton</Link>,{" "}
            <Link to="/hanover-web-design">Hanover</Link>,{" "}
            <Link to="/kamloops-web-design">Kamloops</Link>,{" "}
            <Link to="/kawartha-lakes-web-design">Kawartha Lakes</Link>,{" "}
            <Link to="/kelowna-web-design">Kelowna</Link>,{" "}
            <Link to="/kincardine-web-design">Kincardine</Link>,{" "}
            <Link to="/kingston-web-design">Kingston</Link>,{" "}
            <Link to="/kitchener-web-design">Kitchener</Link>,{" "}
            <Link to="/lambton-shores-web-design">Lambton Shores</Link>,{" "}
            <Link to="/leamington-web-design">Leamington</Link>,{" "}
            <Link to="/lethbridge-web-design">Lethbridge</Link>,{" "}
            <Link to="/london-on-web-design">London</Link>,{" "}
            <Link to="/markham-web-design">Markham</Link>,{" "}
            <Link to="/medicine-hat-web-design">Medicine Hat</Link>,{" "}
            <Link to="/mississauga-web-design">Mississauga</Link>,{" "}
            <Link to="/moncton-web-design">Moncton</Link>,{" "}
            <Link to="/montreal-web-design">Montreal</Link>,{" "}
            <Link to="/muskoka-web-design">Muskoka</Link>,{" "}
            <Link to="/newmarket-web-design">Newmarket</Link>,{" "}
            <Link to="/north-bay-web-design">North Bay</Link>,{" "}
            <Link to="/oakville-web-design">Oakville</Link>,{" "}
            <Link to="/orangeville-web-design">Orangeville</Link>,{" "}
            <Link to="/orillia-web-design">Orillia</Link>,{" "}
            <Link to="/oshawa-web-design">Oshawa</Link>,{" "}
            <Link to="/ottawa-web-design">Ottawa</Link>,{" "}
            <Link to="/owen-sound-web-design">Owen Sound</Link>,{" "}
            <Link to="/pelham-web-design">Pelham</Link>,{" "}
            <Link to="/peterborough-web-design">Peterborough</Link>,{" "}
            <Link to="/pickering-web-design">Pickering</Link>,{" "}
            <Link to="/red-deer-web-design">Red Deer</Link>,{" "}
            <Link to="/regina-web-design">Regina</Link>,{" "}
            <Link to="/richmond-hill-web-design">Richmond Hill</Link>,{" "}
            <Link to="/rochester-web-design">Rochester</Link>,{" "}
            <Link to="/sarnia-web-design">Sarnia</Link>,{" "}
            <Link to="/saskatoon-web-design">Saskatoon</Link>,{" "}
            <Link to="/sault-ste-marie-web-design">Sault Ste. Marie</Link>,{" "}
            <Link to="/simcoe-web-design">Simcoe</Link>,{" "}
            <Link to="/st-johns-web-design">St. John's</Link>,{" "}
            <Link to="/st-thomas-web-design">St. Thomas</Link>,{" "}
            <Link to="/stratford-web-design">Stratford</Link>,{" "}
            <Link to="/sudbury-web-design">Sudbury</Link>,{" "}
            <Link to="/surrey-web-design">Surrey</Link>,{" "}
            <Link to="/syracuse-web-design">Syracuse</Link>,{" "}
            <Link to="/thunder-bay-web-design">Thunder Bay</Link>,{" "}
            <Link to="tillsonburg-web-design">Tillsonburg</Link>,{" "}
            <Link to="/timmins-web-design">Timmins</Link>,{" "}
            <Link to="/tobermory-web-design">Tobermory</Link>,{" "}
            <Link to="/toronto-web-design">Toronto</Link>,{" "}
            <Link to="/vancouver-web-design">Vancouver</Link>,{" "}
            <Link to="/vaughan-web-design">Vaughan</Link>,{" "}
            <Link to="/waterloo-web-design">Waterloo</Link>,{" "}
            <Link to="/whitby-web-design">Whitby</Link>,{" "}
            <Link to="/whitehorse-web-design">Whitehorse</Link>,{" "}
            <Link to="/windsor-web-design">Windsor</Link>,{" "}
            <Link to="/winnipeg-web-design">Winnipeg</Link>.{" "}
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
