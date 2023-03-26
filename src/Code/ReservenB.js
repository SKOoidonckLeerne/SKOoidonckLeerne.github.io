import "../CSS/Ploeg.css";

function ReservenB() {
  return (
    <div className="ploegoverzicht">
      <img className="team" src="/Ploegen/ReservenB.jpeg" alt="Team" />
      <iframe
        className="klassement"
        src="https://www.voetbalvlaanderen.be/competitie/CHP_105679/rangschikking"
      />
    </div>
  );
}

export default ReservenB;
