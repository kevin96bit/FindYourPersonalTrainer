import React, { useState } from "react";

const SectionFormAllievo = ({ visibile }) => {
 

  // ====================================================
  // CONTROLLO PASSWORD
  const [password, setPassword] = useState("");
  const [aiuto, setAiuto] = useState("");
  const [isValid, setIsValid] = useState(false);

  const pwScritta = (e) => {
    // controllo il valore dell'input mentre lo si digita
    // aggiornando password con ciò che si digita
    setPassword(e.target.value);
    // chiamo la funzione che esegue i controlli
    controlloPassword(e.target.value);
  };

  const controlloPassword = (value) => {
    let isValid = true;
    // E' PRESENTE L'UTILIZZO DI REJEX AIUTATO DA GPT
    if (value === "") {
      // se il campo è vuoto lo da falso e scompare il testo
      setAiuto("");
      isValid = false;
    } else if (!/(?=.*[A-Z])/.test(value)) {
      // se non metti una lettera maiuscola compare l'helper
      setAiuto("La password deve contenere almeno una lettera maiuscola.");
      isValid = false;
    } else if (!/(?=.*[0-9])/.test(value)) {
      // se non metti un numero compare l'helper
      setAiuto("La password deve contenere almeno un numero.");
      isValid = false;
    } else if (!/(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/.test(value)) {
      // se non metti un carattere speciale compare l'helper
      setAiuto("La password deve contenere almeno un carattere speciale.");
      isValid = false;
    } else if (value.length <= 8) {
      setAiuto("la password deve contenere almeno 8 caratteri.");
      isValid = false;
    } else {
      // se va tutto bene lo cambia in true mettendo l'helper in verde
      setAiuto("Password accettabile");
      isValid = true;
    }

    setIsValid(isValid);
  };
  // ====================================================

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValid) {
      // Esegui le azioni quando la password è valida
      console.log("La password è corretta");
    }
  };

  return (
    <div
      className={`mt-3 border rounded shadow p-3 ${visibile ? "" : "d-none"}`}
    >
      <h3 className="text-center">REGISTRAZIONE ALLIEVO</h3>
      <form onSubmit={handleSubmit}>
        {/* NOME */}
        <div className="mb-3">
          <label htmlFor="exampleInputNomeAllievo" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputNomeAllievo"
            aria-describedby="nomeHelp"
          />
        </div>
        {/* COGNOME */}
        <div className="mb-3">
          <label htmlFor="exampleInputCognomeAllievo" className="form-label">
            Cognome
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputCognomeAllievo"
          />
        </div>
        {/* SPECIALIZZAZIONE */}
        <div className="mb-3 row text-center">
          {/* colonna da 6*/}
          <div className="col-6">
            <select className="form-select" aria-label="Specializzazione">
              <option defaultValue>Cosa vuoi imparare</option>
              <option value="1">Bodybuilding</option>
              <option value="2">Powerlifting</option>
              <option value="3">Calisthenics</option>
            </select>
          </div>
        </div>
        {/* EMAIL */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmailAllievo" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmailAllievo"
            
          />
        </div>
        {/* PASSWORD */}
        <div className="mb-3 form-control1">
          <label htmlFor="exampleInputPasswordAllievo" className="form-label">
            Password ( almeno 8 caratteri ) 
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPasswordAllievo"
            value={password}
            onChange={pwScritta}
          />
          {/* se p  */}
          {aiuto && (
            <p
              className={`form-text ${
                isValid ? "text-success" : "text-danger"
              }`}
            >
              {aiuto}
            </p>
          )}
        </div>
        {/* REGISTRATI */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Registrati come Allievo
          </button>
        </div>
      </form>
    </div>
  );
};

export default SectionFormAllievo;
