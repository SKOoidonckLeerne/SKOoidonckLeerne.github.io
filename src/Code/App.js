import "../CSS/App.css";

import Navbar from "./Navbar.js";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div className="App">
      <svg class="titel">
        <text
          x="0"
          y="75"
          font-size="70"
          set
          fill="white"
          stroke="black"
          stroke-width="3"
          font-family="monospace"
          font-weight="bold"
        >
          SK Ooidonck Leerne
        </text>
        <text
          x="0"
          y="112"
          font-size="25"
          fill="black"
          font-family="monospace"
          font-weight="bold"
        >
          stamnr. 9477 - 3e Prov B Oost-Vl
        </text>
      </svg>
      <img src="/Banner/SKOL_logo.svg" alt="loge" class="logo" />
      <img src="/Banner/label.jpg" alt="label" class="label" />
      <img src="/Banner/banner.jpg" alt="banner" class="banner" />
      <Navbar />
      <div className="App-header">
        <AppRouter />
      </div>
      <footer class="footer">
        <p>
          <a
            class="link"
            href="https://www.facebook.com/S.K.Ooidonck.Leerne"
            target="_blank"
          >
            <img height="25px" alt="Facebook" src="/Banner/facebook.svg" />
          </a>
          <a
            class="link"
            href="https://www.instagram.com/skooidonckleerne/"
            target="_blank"
          >
            <img height="25px" alt="Instagram" src="/Banner/instagram.svg" />
          </a>
          <a
            class="link"
            href="https://www.tiktok.com/@skooidonckleerne"
            target="_blank"
          >
            <img height="25px" alt="TikTok" src="/Banner/tiktok.png" />
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
