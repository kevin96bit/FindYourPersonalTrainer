import React, { useRef } from "react";

const InvitoRegistrazione = ({ mostraFormTrainer, mostraFormAllievo }) => {
  // ==================================================================
  // USE REF PER LO SCROLL AUTOMATICO (VEDI CORSO UDEMY)
  const trainerButtonRef = useRef(null);
  const allievoButtonRef = useRef(null);

  const handleScrollToTrainer = () => {
    trainerButtonRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToAllievo = () => {
    allievoButtonRef.current.scrollIntoView({ behavior: "smooth" });
  };
  // ==================================================================

  return (
    <div className="d-flex justify-content-center mt-1 border p-2 rounded shadow " id="registrati">
      {/* me= margin end  */}
      <button
        ref={trainerButtonRef} // INDICO DOVE VOGLIO LO SCROOL AUTOMATICO
        onClick={() => {
          mostraFormTrainer(); // LO RIUTILIZZO NEL COMPONENTE SU APP
          handleScrollToTrainer(); // LO RIUTILIZZO NEL COMPONENTE SU APP
        }}
        type="button"
        className="btn btn-danger me-2 "
      >
        Registrati come Trainer
      </button>
      {/* ms= margin start */}
      <button
        ref={allievoButtonRef}
        onClick={() => {
          mostraFormAllievo();
          handleScrollToAllievo();
        }}
        type="submit"
        className="btn btn-warning ms-2"
      >
        Registrati come Allievo
      </button>
    </div>
  );
};

export default InvitoRegistrazione;
