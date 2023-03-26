import "../CSS/Ploeg.css";

function U15() {
  return (
    <div className="ploegoverzicht">
      <img className="team" src="/Ploegen/U15.jpeg" alt="Team" />
      <iframe
        className="klassement"
        src="https://www.voetbalvlaanderen.be/competitie/CHP_108661/rangschikking"
      />
    </div>
  );
}

export default U15;
