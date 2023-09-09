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
import U9A from "./U9A.js";
import U9B from "./U9B.js";
import U8 from "./U8.js";
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
      <Route path="/U9A" element={<U9A />} />
      <Route path="/U9B" element={<U9B />} />
      <Route path="/U8" element={<U8 />} />
      <Route path="/bestuur" element={<Bestuur />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sponsors" element={<Sponsors />} />
    </Routes>
  );
}

export default AppRouter;
