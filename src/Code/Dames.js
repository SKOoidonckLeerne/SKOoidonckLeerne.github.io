import "../CSS/Ploeg.css";

function Dames() {
  return (
    <div className="ploegoverzicht">
      <iframe
        className="klassement"
        src="https://www.voetbalvlaanderen.be/competitie/CHP_120996/rangschikking"
      />
    </div>
  );
}

export default Dames;
