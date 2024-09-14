import { Routes, Route } from "react-router-dom";

import Home from "./Home.js";
import EerstePloeg from "./EerstePloeg.js";
import Dames from "./Dames.js";
import ReservenA from "./ReservenA.js";
import ZondagsReserven from "./ZondagsReserven.js";
import U17 from "./U17.js";
import U15 from "./U15.js";
import U13 from "./U13.js";
import U12 from "./U12.js";
import U11 from "./U11.js";
import U10 from "./U10.js";
import U9 from "./U9.js";
import Bestuur from "./Bestuur.js";
import Contact from "./Contact.js";
import Sponsors from "./Sponsors.js";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/eerste-ploeg" element={<EerstePloeg />} />
      <Route path="/dames" element={<Dames />} />
      <Route path="/reserven-a" element={<ReservenA />} />
      <Route path="/zondags-reserven" element={<ZondagsReserven />} />
      <Route path="/U17" element={<U17 />} />
      <Route path="/U15" element={<U15 />} />
      <Route path="/U13" element={<U13 />} />
      <Route path="/U12" element={<U12 />} />
      <Route path="/U11" element={<U11 />} />
      <Route path="/U10" element={<U10 />} />
      <Route path="/U9" element={<U9 />} />
      <Route path="/bestuur" element={<Bestuur />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sponsors" element={<Sponsors />} />
    </Routes>
  );
}

export default AppRouter;
