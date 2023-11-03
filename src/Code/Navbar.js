import "../CSS/Navbar.css";

import React from "react";
import { Link } from "react-router-dom";

const onButtonClick1 = () => {
  fetch("Files/visie_jeugdbeleid.pdf").then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "visie_jeugdbeleid.pdf";
      alink.click();
    });
  });
};

const onButtonClick2 = () => {
  fetch("Files/cm_terugbetaling.pdf").then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "cm_terugbetaling";
      alink.click();
    });
  });
};

const onButtonClick3 = () => {
  fetch("Files/lm_terugbetaling.pdf").then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "lm_terugbetaling.pdf";
      alink.click();
    });
  });
};

const onButtonClick4 = () => {
  fetch("Files/nzvl_terugbetaling.pdf").then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "nzvl_terugbetaling.pdf";
      alink.click();
    });
  });
};

const onButtonClick5 = () => {
  fetch("Files/solidaris_terugbetaling.pdf").then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "solidaris_terugbetaling.pdf";
      alink.click();
    });
  });
};

const onButtonClick6 = () => {
  fetch("Files/helan_terugbetaling.pdf").then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "helan_terugbetaling.pdf";
      alink.click();
    });
  });
};

const onButtonClick7 = () => {
  fetch("Files/SKOL Privacy Policy_31102023.pdf").then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "SKOL Privacy Policy_31102023.pdf";
      alink.click();
    });
  });
};

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark">
        <button
          class="navbar-toggler toggler-example"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/eerste-ploeg" className="nav-link">
            Eerste ploeg
          </Link>
          <Link to="/dames" className="nav-link">
            Dames
          </Link>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Reserven
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/reserven-a" className="dropdown-item">
                Reserven A
              </Link>
              <Link to="/zondags-reserven" className="dropdown-item">
                Zondagsreserven
              </Link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Jeugd
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/U17" className="dropdown-item">
                U17
              </Link>
              <Link to="/U15" className="dropdown-item">
                U15
              </Link>
              <Link to="/U13" className="dropdown-item">
                U13
              </Link>
              <Link to="/U12" className="dropdown-item">
                U12
              </Link>
              <Link to="/U11" className="dropdown-item">
                U11
              </Link>
              <Link to="/U9A" className="dropdown-item">
                U9A
              </Link>
              <Link to="/U9B" className="dropdown-item">
                U9B
              </Link>
              <Link to="/U8" className="dropdown-item">
                U8
              </Link>
            </div>
          </li>
          <Link to="/bestuur" className="nav-link">
            Bestuur
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/sponsors" className="nav-link">
            Sponsors
          </Link>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Documenten
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a
                class="dropdown-item"
                href="https://www.voetbalvlaanderen.be/club/verzekering"
                target="_blank"
              >
                Verzekering/ongevallen
              </a>
              <div className="dropdown-item linkdiv" onClick={onButtonClick1}>
                Visie jeugdbeleid
              </div>
              <div className="dropdown-item linkdiv" onClick={onButtonClick2}>
                Terugbetaling CM
              </div>
              <div className="dropdown-item linkdiv" onClick={onButtonClick3}>
                Terugbetaling LM
              </div>
              <div className="dropdown-item linkdiv" onClick={onButtonClick4}>
                Terugbetaling NZVL
              </div>
              <div className="dropdown-item linkdiv" onClick={onButtonClick5}>
                Terugbetaling Solidaris
              </div>
              <div className="dropdown-item linkdiv" onClick={onButtonClick6}>
                Terugbetaling Helan
              </div>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Privacyverklaring
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <div className="dropdown-item linkdiv" onClick={onButtonClick7}>
                Privacyverklaring
              </div>
            </div>
          </li>
        </div>
      </nav>
    );
  }
}

export default Navbar;
