import "../CSS/Ploeg.css";

function ReservenA() {
  return (
    <div className="ploegoverzicht">
      <img className="team" src="/Ploegen/ReservenA.jpeg" alt="Team" />
      <iframe
        className="klassement"
        src="https://www.voetbalvlaanderen.be/competitie/CHP_120441/rangschikking"
      />
    </div>
  );
}

export default ReservenA;
