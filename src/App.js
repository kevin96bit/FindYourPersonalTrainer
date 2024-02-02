import React, { useState } from "react";
import NavBar from "./NavBar";
import Palestra from "./Palestra";
import SectionForm from "./SectionForm";
import SectionFormAllievo from "./SectionFormAllievo";
import InvitoRegistrazione from "./InvitoRegistrazione";
import SectionChiSiamo from "./SectionChiSiamo";
import SectionFooter from "./SectionFooter";
import ServiziBb from "./ServiziBb";
import ServiziPl from "./ServiziPl";
import ServiziCa from "./ServiziCa";

function App() {
  // usestate che servono per rendere visivile o meno i form
  const [trainerVisibile, setTrainerVisibile] = useState(false);
  const [allievoVisibile, setAllievoVisibile] = useState(false);

  // costante che mostra il form per i trainer settandolo a true
  const mostraFormTrainer = () => {
    setTrainerVisibile(true);
    setAllievoVisibile(false);
  };

  // costante che mostra il form per gli allievi settandolo a true
  const mostraFormAllievo = () => {
    setTrainerVisibile(false);
    setAllievoVisibile(true);
  };

  return (
    <div className="container-fluid">
      <NavBar />
      <Palestra />
      {/* l'invito alla registrazione sono 2 button */}
      <InvitoRegistrazione
        mostraFormTrainer={mostraFormTrainer} // cito la costante che mi serve (riga 17)
        mostraFormAllievo={mostraFormAllievo} // cito la costante che mi serve (riga 23)
      />
      <SectionForm visibile={trainerVisibile} />{" "}
      {/* prendo di riferimento "visibile" nel form dei trainer e lo utilizzo qui*/}
      <SectionFormAllievo visibile={allievoVisibile} />{" "}
      {/* prendo di riferimento "visibile" nel form degli allievi e lo utilizzo qui*/}
      <ServiziBb />
      <ServiziPl />
      <ServiziCa />
      <SectionChiSiamo />
      <SectionFooter />
    </div>
  );
}

export default App;
