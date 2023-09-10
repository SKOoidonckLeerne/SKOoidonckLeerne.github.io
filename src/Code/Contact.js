import "../CSS/Contact.css";

import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";

function Contact() {
  return (
    <div className="contact">
      <div className="contactitem communicatie">
        <p>
          <b>Schriftelijke communicatie:</b>
          <br />
          VZW SK OOIDONCK LEERNE
          <br />
          Ten Bosse 104, 9800 Deinze
        </p>
        <p>
          <b>Gerechtigd Correspondent: Nic Foncke</b>
          <br />
          <img className="icon" src="Icons/email_icon.png" alt="E-mail:" />
          nic.foncke@telenet.be
          <br />
          <img className="icon" src="Icons/telephone_icon.png" alt="GSM:" />
          0486 22 65 04
        </p>
        <p>
          <b>Jeugdcoördinator Bovenbouw: Steven Feys</b>
          <br />
          <img className="icon" src="Icons/email_icon.png" alt="E-mail:" />
          feyssteven1@gmail.com
          <br />
          <img className="icon" src="Icons/telephone_icon.png" alt="GSM:" />
          0473 94 06 92
        </p>
        <p>
          <b>Perscontact: Hans De Poortere</b>
          <br />
          <img className="icon" src="Icons/email_icon.png" alt="E-mail:" />
          hans.de.poortere@telenet.be
          <br />
          <img className="icon" src="Icons/telephone_icon.png" alt="GSM:" />
          0485 37 57 96
        </p>
        <p>
          <b>Sponsoring: Kurt Verbrugge</b>
          <br />
          <img className="icon" src="Icons/email_icon.png" alt="E-mail:" />
          kurt.verbrugge@skynet.be
          <br />
          <img className="icon" src="Icons/telephone_icon.png" alt="GSM:" />
          0493 36 56 78
        </p>
      </div>
      <div className="contactitem">
        <MapContainer
          className="map"
          center={[51.006722906401926, 3.5799298617980497]}
          zoom={14}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.006722906401926, 3.5799298617980497]}>
            <Tooltip direction="top" offset={[-15, -12]} opacity={1} permanent>
              Ooidonkdreef 5-7, 9800 Bachte-Maria-Leerne
            </Tooltip>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Contact;
