import "../CSS/Ploeg.css";

function ZondagsReserven() {
  return (
    <div className="ploegoverzicht">
      <iframe
        className="klassement"
        src="https://www.voetbalvlaanderen.be/competitie/CHP_120448/rangschikking"
      />
    </div>
  );
}

export default ZondagsReserven;
