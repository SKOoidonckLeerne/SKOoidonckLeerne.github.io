import "../CSS/Ploeg.css";

function ZondagsReserven() {
  return (
    <div className="ploegoverzicht">
      <iframe
        className="klassement"
        src="https://www.voetbalvlaanderen.be/competitie/CHP_112116/rangschikking"
      />
    </div>
  );
}

export default ZondagsReserven;
