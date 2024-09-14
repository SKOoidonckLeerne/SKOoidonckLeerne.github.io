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
          <div className="nieuwsitem">
            <p className="bold nieuwstitel">
              Oplossingen voor plaatsgebrek op voetbalsite SK Ooidonck Leerne:
              “Onze ledenstop kunnen we eindelijk opheffen”
            </p>
            <p>
              6 augustus 2024
              <a
                className="nieuwslink"
                href="https://www.hln.be/deinze/oplossingen-voor-plaatsgebrek-op-voetbalsite-sk-ooidonck-leerne-onze-ledenstop-kunnen-we-eindelijk-opheffen~adf8061a/"
              >
                via HLN
              </a>
            </p>
            <div>
              <img src="/Nieuws/nieuwsjeugd.jpg" alt="ledenstop" />
            </div>
            <p className="nieuwstekst">
              SK Ooidonck Leerne kampt al jaren met een nijpend tekort aan
              plaats om haar spelers te laten voetballen. Maar er is eindelijk
              een oplossing in zicht: de stad Deinze investeerde in een
              drainagesysteem voor het bestaande terrein en mocht het veld in de
              Ooidonkdreef toch onbespeelbaar zijn, dan kan SK Ooidonck Leerne
              op verplaatsing spelen. <br />
              <br /> Twee jaar geleden werd de jeugdopleiding van SK Ooidonck
              Leerne na een audit van Voetbal Vlaanderen bekroond met een
              zilveren ster. Vooral de filosofie van de club dat iedereen
              speelkansen moet krijgen, viel in de smaak. Maar de audit legde
              ook nog eens de vinger op een wonde, die al een tijdje ettert. De
              club, die in vierde provinciale speelt, beschikt over één van de
              mooiste sites van de regio, naast de pittoreske Ooidonkdreef en op
              een steenworp van kasteel Ooidonk, maar kampt al jaren met een
              nijpend capaciteitstekort. De club, die 250 leden telt, kaartte
              bij HLN de problematiek aan en pleitte voor kunstgras of een extra
              terrein. Een gedwongen ledenstop remde de groei van de club af en
              bovendien moesten vorig seizoen tientallen trainingen en
              wedstrijden voor de jeugdploegen worden afgelast door de
              onbespeelbaarheid van het terrein. <br />
              <br />
              Een tweede terrein of kunstgras liggen er nog steeds niet, maar er
              werd wel een andere oplossing gevonden. “Na intensief overleg met
              de stad Deinze hebben we moeten vaststellen dat de regels inzake
              ruimtelijke ordening de aanleg van bijkomende terreincapaciteit of
              een kunstgrasveld onmogelijk maken”, zegt bestuurslid Hans De
              Poortere. “Het stadsbestuur maakte in het tussenseizoen wel de
              nodige budgetten (zo’n 50.000 euro) vrij voor de aanleg van een
              drainagesysteem. Dit moet ervoor zorgen dat het hoofdterrein beter
              bestand is tegen regenval en langer in betere conditie kan blijven
              dan de voorbije jaren het geval was. We hopen dat we nu minder
              trainingen en wedstrijden moet annuleren en dat het de
              jeugdspelers daardoor meer spelvreugde kan bezorgen.” <br />
              <br />
              Mocht ondanks het drainagesysteem het terrein van SK Ooidonck
              Leerne toch onbespeelbaar zijn, dan is er nog een tweede
              oplossing. “Tijdens een uitermate constructief overleg met de stad
              en de burenclubs SK Deinze, Zeveren Sportief en Eendracht Vinkt
              werden de nodige oplossingen gevonden”, aldus De Poortere. “De
              jeugd van SK Ooidonck Leerne kan op woensdagnamiddag terecht op de
              kunstgrasvelden van provinciaal recreatiedomein De Brielmeersen en
              de seniorteams kunnen op woensdagavond gebruik maken van het
              kunstgras van Eendracht Vinkt. Zo zijn alle teams van minstens één
              wekelijkse training verzekerd, mochten we in de komende maanden
              opnieuw met overvloedige regenval en onbespeelbare terreinen te
              kampen krijgen. Voorts kunnen we nog gebruik maken van de
              terreinen van het voormalige SK Nevele. Om de site aan de
              Ooidonkdreef zo veel mogelijk te ontlasten en zo lang mogelijk
              wedstrijdklaar te houden, zullen veel trainingssessies in Nevele
              worden ingepland. Deze oplossingen geven opnieuw lucht en zuurstof
              aan de jeugdwerking.”
              <br />
              <br />
              De club doet meteen ook een oproep naar nieuwe leden. “Met deze
              oplossingen kunnen we de ledenstop opheffen. Zo kunnen we opnieuw
              meisjes en jongens verwelkomen van de geboortejaren 2016, 2017,
              2018 en 2019. De gratis trainingen vinden plaats op
              woensdagnamiddag. Geïnteresseerden kunnen zich melden bij
              frederik.haelterman@telenet.be”, geeft De Poortere nog mee.
            </p>
          </div>
          <div className="nieuwsitem">
            <p className="bold nieuwstitel">
              Drai­na­ge voet­bal­veld SK Ooi­don­ck Leer­ne moet jeugd­wer­king
              garanderen
            </p>
            <p>
              5 augustus 2024
              <a
                className="nieuwslink"
                href="https://avs.be/nieuws/drainage-voetbalveld-sk-ooidonck-leerne-moet-jeugdwerking-garanderen"
              >
                via AVS
              </a>
            </p>
            <p className="nieuwstekst">
              SK Ooidonck Leerne kan straks het nieuwe voetbalseizoen starten op
              een volledig heraangelegd veld met drainage . <br />
              <br /> In het verleden kampte de club, zeker bij veel regenval,
              met een veld dat al vroeg in het seizoen onbespeelbaar was. Net om
              die reden stopte de club met de inschrijving van jeugdspelers.
              Dankzij de drainage en de samenwerking met clubs in de buurt, kan
              er het komende seizoen veel gevoetbald worden bij SK Ooidonck
              Leerne en mogen jeugdspelers zich opnieuw aanmelden. De toestand
              van het veld was bij momenten zo slecht dat heel wat trainingen en
              wedstrijden van de jeugd moesten worden afgelast. Door het gebrek
              aan een bespeelbaar veld, besloot de club dan maar om geen nieuwe
              jeugdspelers aan te werven.
              <br />
              <br />
              Quote: Hans De Poortere - persverantwoordelijke SK Ooidonck
              Leerne: "Dat kunnen we nu gelukkig opheffen en in tegendeel zou ik
              zeggen. Nu kunnen we opnieuw jeugdspelers aanwerven. Dus iedereen
              die in groot Deinze die nog graag wil gaan voetballen, jongens,
              meisjes, die zijn zeer welkom. Vooral de leeftijdsgroepen met
              geboortejaar 2016, 2017, 2018, 2019. Die kunnen hier nog volop
              plaats vinden. En dat kan onder andere door dat het terrein nu
              langer en beter bespeelbaar zal zijn".
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
