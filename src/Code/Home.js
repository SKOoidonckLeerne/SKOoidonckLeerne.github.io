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
            <p className="bold nieuwstitel">Wijnactie - Drink Rood en Wit</p>
            <p>04 december 2023</p>
            <p className="nieuwstekst">
              Na onze meer dan geslaagde Eindejaars Wijn-actie van de voorbije
              jaren, willen we jullie graag nogmaals de kans geven om tijdens de
              komende eindejaarsfeesten een lekker glaasje te drinken. Zo helpt
              U dan ook onze club financieel sterk en gezond te houden!
              <br />
              <br />
              Deze keer kozen we voor het wijndomein “Bon Remède Vieilles
              Vignes”, een galante en volle rode wijn uit de Ventoux-regio, een
              witte Chardonnay “Papolle” uit de Gascogne en tot slot een
              toppertje uit de Spaanse Cava-regio, de “Nu-Maset”. Waarschijnlijk
              is jullie voorraad van vorig jaar al lang op en hebben jullie
              dringend nood aan een fill-up voor de komende eindejaarsperiode.
              <br />
              <br />
              U kan t.e.m. 19 december a.s. uw bestelling per mail doorsturen
              naar: kurt.verbrugge@skynet.be. We hebben speciaal een
              overzichtelijk bestelformulier in bijlage om het U (en ook ons)
              wat gemakkelijker te maken…
              <br />
              <br />
              Prijs: zie bijgaand bestelformulier, met mogelijkheid tot
              verkrijgen van factuur mits invullen facturatiegegevens. Betalen:
              enkel via storting op reknr: BE76 9796 3655 2195 (ten laatste
              tegen 19 december op onze rekening graag…) met vermelding van Naam
              en “WIJNACTIE SKOL 2023”. Afhalen: enkel op zaterdag 23 december
              van 10u tot 13u in het portaal van Wijnhandel Taveirne, Guido
              Gezellelaan 37, B-9800 Deinze.
              <br />
              <br />
              We wensen jullie alvast veel plezier bij een glaasje Rood of Wit
              of iets anders. SKOL! Met sportieve groeten, Het bestuur, Hans,
              Hendrik, Luc, Raf, Noël, Nick, Steven, Fré, Bjorn en Kurt
              <br />
              <br />
              <button className="formulierknop" onClick={onButtonClick}>
                Download formulier
              </button>
            </p>
          </div>
          <div className="nieuwsitem">
            <p className="bold nieuwstitel">
              SK Ooidonck Leerne breidt werking uit met bewegingsschool en
              wandelvoetbal
            </p>
            <p>18 augustus 2022</p>
            <div>
              <img src="/Nieuws/nieuwsbeweging.jpg" alt="bewegingsschool" />
            </div>
            <p className="nieuwstekst">
              SK Ooidonck Leerne start met enkele nieuwe initiatieven. “Nieuw
              dit seizoen is onze bewegingsschool, toegankelijk voor jongens en
              meisjes, geboren in 2016, 2017 en 2018", zegt bestuurslid Hans De
              Poortere. “De bedoeling is om de kinderen meer te laten bewegen
              met focus op de algemene ontwikkeling van vaardigheden die van pas
              kunnen komen om eender welke sporttak te beoefenen. Voor de
              55-plussers is er wandelvoetbal. Hierbij wordt op een beperkt
              terrein gespeeld met teams van 8 spelers.”
              <br />
              <br /> Ondertussen blijft - mede dankzij de bekroning met een
              zilveren ster door Voetbal Vlaanderen - het aantal jeugdspelers
              groeien. “Helaas heeft deze bloeiende werking ook een keerzijde en
              kunnen we door een nijpend plaatsgebrek niet iedereen de
              gelegenheid geven lid te worden van onze club”, zegt Hans De
              Poortere. “We beschikken in elke categorie over een team en bij U8
              en de beloften zelfs 2 teams. De gesprekken met de schepen van
              Sport over bijkomende terreincapaciteit zijn nog lopende en we
              blijven hopen op een spoedige en passende oplossing. Een
              kunstgrasveld zou in die optiek een godsgeschenk zijn.”
              <br />
              <br />
              Andere nieuwigheden zijn het nieuwe clublogo en de vernieuwde
              website. Op zondag 14 augustus stond voor het eerst een
              kennismakingsdag op het programma met de nieuwe trainers en nieuwe
              leden. Op zaterdag 20 augustus wordt tijdens de jeugddag de
              traditionele aftrap gegeven voor het nieuwe seizoen.
            </p>
          </div>

          <div className="nieuwsitem">
            <p className="bold nieuwstitel">
              SK Ooidonck Leerne wordt partnerclub van KAA Gent
            </p>
            <p>14 maart 2021</p>
            <div>
              <img src="/Nieuws/nieuwsgent.png" alt="partnerclub" />
            </div>
            <p className="nieuwstekst">
              Als kleinschalige voetbalclub houdt SK Ooidonck Leerne er een
              bewust familiale visie op na. In tegenstelling tot vele andere
              clubs, waar zuiver op de reeds aanwezige voetbalcapaciteiten
              geselecteerd wordt, wil SK Ooidonck Leerne een inspirerende
              omgeving creëren waar elk voetbaltalent aan zijn trekken kan
              komen. Met trots kondigt de club nu een verdere stap in haar
              ontwikkeling aan. Er werd immers een samenwerkingsverband gesloten
              met het grote KAA Gent dat op die manier haar Blue White Network
              uitbreidt. <br />
              <br /> “Voor een familiale club als de onze, beschouwen we dit als
              een erkenning voor het geduldige werk van alle medewerkers,
              trainers, spelers en bestuursleden”, zegt woordvoerder Hans De
              Poortere. “In het streven om een netwerk van partnersclubs uit te
              breiden naar de regio buiten Gent kwamen de jeugdcoördinatoren van
              KAA Gent met de vraag of wij hier deel wilden van uitmaken. Aan
              die vraag is een zorgvuldige screening voorafgegaan. Vooral de
              specifieke clubcultuur en beleving zijn blijkbaar opgevallen en
              vormden de aanleiding om ons als bescheiden club mee te willen
              betrekken in de visie rond jeugdopleiding van de eliteclub. <br />
              <br />
              Wij zijn bijzonder trots op het kwaliteitslabel dat we op deze
              indirecte manier meekrijgen”, gaat Hans verder. “De jeugdwerking
              van SK Ooidonck Leerne zal op verschillende vlakken profiteren van
              de kennis die aanwezig is binnen het Buffalo Talent Center.”
              Technisch Verantwoordelijke Jeugdopleiding van KAA Gent Björn De
              Neve: “Op korte termijn hebben we binnen de jeugdopleiding van KAA
              Gent grote stappen voorwaarts gezet op vlak van visie en
              omkadering. Via meerdere workshops en netwerkmomenten reiken we
              graag de hand aan al onze partnerclubs, waaronder SK Ooidonck
              Leerne. Met veel passie en enthousiasme zullen wij onze know-how
              en expertise met hen delen.” <br />
              <br />
              SK Ooidonck Leerne heeft zijn thuisbasis aan de pittoreske
              Ooidonkdreef in Deinze (Bachte Maria-Leerne). De club telt 323
              leden en brengt teams in alle leeftijdscategorieën in competitie.
              Sinds enkele jaren is er ook een bloeiend damesteam met 30 leden.
              Het eerste elftal komt uit in vierde provinciale en is uitsluitend
              samengesteld met spelers die hun jeugdopleiding bij de club hebben
              genoten.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
