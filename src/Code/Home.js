import "../CSS/Home.css";

import React from "react";

const onButtonClick = () => {
  fetch("Nieuws/Bestelformulier Wijnactie SKOL 2023.xlsx").then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "Bestelformulier Wijnactie SKOL 2023.xlsx";
      alink.click();
    });
  });
};

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="welkom">
          <p className="intro">
            <p className="bold">Welkom bij SK Ooidonck Leerne </p>
            SK Ooidonck Leerne is de jongste van de Deinse voetbalclubs met
            momenteel meer dan 325 leden. Intussen spelen we met 15 ploegen
            present in alle leeftijdsreeksen. Bovendien spelen we ook met een
            damesteam in competitie. De focus ligt op een goede opleiding met
            deskundige trainers. Sinds 2017 is er ook een fanion-team dat
            uitkomt in 4e provinciale waarbij quasi uitsluitend eigen
            jeugdspelers spelen!
            <br />
            We werken met een bescheiden maar sluitende begroting en voeren
            daartoe een zuinig beleid. We willen in de eerste plaats een
            gezellige en sociale club zijn. Dat heeft ons echter niet belet om
            ook op sportief hoge ogen te gooien door op 1 mei 2013 de vermaarde
            Jeugdcup Het Nieuwsblad voor de provincie Oost-Vlaanderen te winnen
            in de gewestelijke afdeling U11.
          </p>
        </div>
        <div className="nieuws">
          <p className="bold">Laatste nieuws:</p>
          <div className="nieuwsitem">
            <p className="bold nieuwstitel">
              SK Ooidonck Leerne schrijft sprookje in de schaduw van het
              kasteel: “Nooit eerder slaagde de ploeg erin om te promoveren”
            </p>
            <p>
              4 mei 2025
              <a
                className="nieuwslink"
                href="https://www.nieuwsblad.be/cnt/dmf20250504_94978662"
              >
                via Nieuwsblad
              </a>
            </p>
            <div>
              <img src="/Nieuws/nieuwspromotie.jpg" alt="promotie" />
            </div>
            <p className="nieuwstekst">
              In de schaduw van het Kasteel van Ooidonck werd zaterdagavond
              geschiedenis geschreven. SK Ooidonck Leerne beukte voor het eerst
              in zijn bestaan de poort naar derde provinciale open. De match
              tegen VC Sparta Bevere werd pas in de verlengingen door de
              onvermijdelijke Mehmet Kutlu beslist. Zondagmorgen in Leerne,
              vogels fluiten vrolijke deuntjes. Om half vijf ging het licht uit
              in de kantine van Ooidonck Leerne. De sympathieke ploeg van coach
              David Lampaert compenseerde het verlies van de titel door tegen
              Sparta Bevere dan toch de poort open te beuken naar derde. “Nooit
              eerder slaagde de ploeg erin om te promoveren”, zegt coach David
              Lampaert met schorre stem. “Het mislopen van de titel was een
              enorme teleurstelling, maar dit voelt aan alsof we toch een titel
              wonnen. Het werd een echte cupmatch. Er was nooit eerder zoveel
              volk in Leerne en dat is ook de verdienste van de bezoekers, die
              ook met veel supporters afzakten. Toen Bevere op het einde van de
              wedstrijd gelijkmaakte, vreesde ik even dat ze erop en erover
              gingen, maar we hielden stand. Kutlu zorgde voor een geweldige
              ontlading.”
              <br />
              <br /> In Leerne speelt men nog voor een bierbonneke. “Met de
              meeste spelers ben ik opgegroeid”, voegt Lampaert, die in Leerne
              woont, eraan toe. “Vijftien jaar werk ik nu al voor Leerne, eerst
              voor Eendracht en nu voor Ooidonck Leerne. In het seizoen
              2017-2018 werd ik hoofdtrainer, daarvoor trainde ik de
              jeugdploegen. Wij hebben aangetoond dat je met spelers vanonder de
              kerktoren iets moois kan neerzetten. Dit is een vriendengroep die
              al jaren aan elkaar klit. We schrijven een mooi sprookje, maar we
              zijn ook realistisch en niet blind voor wat er op ons afkomt. Onze
              filosofie zal ook in derde provinciale dezelfde blijven”, zegt
              Lampaert met veel overtuiging.
              <br />
              <br />
              En nu begint de voorbereiding op volgend seizoen. Topschutter
              Mehmet Kutlu blijft alvast bij de promovendus. “Of we klaar zijn
              voor de stap? Dat is een moeilijke vraag”, denkt Lampaert. “We
              zetten een stap in het onbekende. We hopen op het elan van dit
              seizoen te kunnen doorgaan, maar we beseffen ook dat we op onze
              limieten zullen botsen. Vandaag moeten we vooral genieten. Waar we
              volgend seizoen zullen uitkomen, is koffiedik kijken.
              Versterkingen aantrekken zal moeten binnen de budgettaire ruimte
              die er is. De club wil gezond blijven. Dienen er zich
              opportuniteiten aan, dan zullen we toehappen, maar we gaan zeker
              geen gekke dingen doen. Nu gaan we vooral genieten van dit
              uitzonderlijke moment in de clubgeschiedenis. De kalendermaker van
              de eindronde was ons gunstig gezind. Het thuisvoordeel was niet
              onbelangrijk”, geniet Lampaert met volle teugen.
            </p>
          </div>
          <div className="nieuwsitem">
            <p className="bold nieuwstitel">
              4de pro­vin­ci­a­ler SK Ooi­don­ck Leer­ne speelt
              bene­fietwed­strijd in Londen
            </p>
            <p>
              19 augustus 2024
              <a
                className="nieuwslink"
                href="https://avs.be/sport/4de-provincialer-sk-ooidonk-leerne-speelt-benefiet-wedstrijd-in-londen"
              >
                via AVS
              </a>
            </p>
            <div>
              <img src="/Nieuws/nieuwsbenefiet.jpg" alt="benefietmatch" />
            </div>
            <p className="nieuwstekst">
              SK Ooidonck Leerne, de voetbalploeg uit 4de provinciale, heeft in
              Engeland een benefietwedstrijd gespeeld tegen AFC Wycombe, een
              ploeg uit Londen.
              <br />
              <br /> Alles begon met enkele grappige Tiktok filmpjes die een
              sympathisant van Ooidonck Leerne maakte. De video’s kregen meer
              dan 100.000 views. Ook bij de Londense amateur club Wycombe. Die
              daagde SK Ooidonck Leerne uit voor een benefietwedstrijd. De
              wedstrijd werd afgelopen zaterdag gespeeld in Engeland. AFC
              Wycombe speelde tegen SK Ooidonck Leerne in de Sunday League Cup.
              De opbrengst ging naar een Engels kankerpatiëntje.
              <br />
              <br />
              Kyle Aerens - videoteam SK Ooidonck Leerne: "Na het zien van de
              filmpjes zijn de mannen een beetje met ons beginnen lachen dat ze
              vlug eens een wedstrijd van ons zouden winnen. Dat is dan
              uiteindelijk in een uitdaging gekomen en nu zijn we 2 dagen verder
              en zijn we geëindigd in een 4-4 gelijkspel. Dus het was iets
              minder voor hun ook".
              <br />
              <br />
              Op het einde van de wedstrijd zijn er plannen gesmeed voor een
              vervolg. Kyle Aerens - videoteam SK Ooidonck Leerne: "We hebben
              beslist dat de mannen volgend jaar bij ons komen. Om een
              terugwedstrijd te spelen, dat vermoedelijk hier doorgaan. We zijn
              momenteel aan het mikken op de week van de Gentse Feesten om hen
              ook eens een beetje cultuur te laten opsnuiven van hier".
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
