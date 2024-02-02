import React, { useState } from "react";

// CONTROLLO PASSWORD
const SectionForm = ({ visibile }) => {
  // Dichiarazione degli stati per la password
  const [password, setPassword] = useState("");
  const [aiuto, setAiuto] = useState("");
  const [isValid, setIsValid] = useState(false);

  // Funzione chiamata quando si digita la password
  const pwScritta = (e) => {
    // Aggiorna lo stato della password con il valore inserito
    setPassword(e.target.value);
    // Esegue i controlli sulla password
    controlloPassword(e.target.value);
  };

  // Funzione per controllare la validità della password
  const controlloPassword = (value) => {
    let isValid = true;

    if (value === "") {
      // Se il campo è vuoto, imposta l'aiuto vuoto e la validità a false
      setAiuto("");
      isValid = false;
    } else if (!/(?=.*[A-Z])/.test(value)) {
      // Se non c'è almeno una lettera maiuscola, mostra l'helper
      setAiuto("La password deve contenere almeno una lettera maiuscola.");
      isValid = false;
    } else if (!/(?=.*[0-9])/.test(value)) {
      // Se non c'è almeno un numero, mostra l'helper
      setAiuto("La password deve contenere almeno un numero.");
      isValid = false;
    } else if (!/(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/.test(value)) {
      // Se non c'è almeno un carattere speciale, mostra l'helper
      setAiuto("La password deve contenere almeno un carattere speciale.");
      isValid = false;
    } else if (value.length < 8) {
      // Se la lunghezza è inferiore a 8 caratteri, mostra l'helper
      setAiuto("La password deve contenere almeno 8 caratteri.");
      isValid = false;
    } else {
      // Se tutti i controlli passano, la password è accettabile
      setAiuto("Password accettabile");
      isValid = true;
    }

    // Aggiorna lo stato della validità
    setIsValid(isValid);
  };

  return (
    // SE E' VISIBILE NON FAI NIENTE ALTRIMENTI DISPLAY NONE
    <div className={`mt-3 border rounded shadow p-3 ${visibile ? "" : "d-none"}`}>
      <h3 className="text-center">REGISTRAZIONE TRAINER</h3>
      <form>
        {/* NOME */}
        <div className="mb-3">
          <label htmlFor="exampleInputNome" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputNome"
            aria-describedby="nomeHelp"
          />
        </div>
        {/* COGNOME */}
        <div className="mb-3">
          <label htmlFor="exampleInputCognome" className="form-label">
            Cognome
          </label>
          <input type="text" className="form-control" id="exampleInputCognome" />
        </div>
        {/* SPECIALIZZAZIONE E ESPERIENZA */}
        <div className="mb-3 row text-center">
          {/* colonna da 6*/}
          <div className="col-6">
            <select className="form-select" aria-label="Specializzazione">
              <option defaultValue>Specializzazione</option>
              <option value="1">Bodybuilding</option>
              <option value="2">Powerlifting</option>
              <option value="3">Calisthenics</option>
            </select>
          </div>
          {/* altra colonna da 6 */}
          <div className="col-6">
            <select className="form-select" aria-label="Esperienza">
              <option defaultValue>Esperienza</option>
              <option value="1">Da 0 a 3 anni</option>
              <option value="2">Da 3 a 5 anni</option>
              <option value="3">Da oltre 5 anni</option>
            </select>
          </div>
        </div>
        {/* EMAIL */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="exampleInputEmail" />
        </div>
        {/* PASSWORD */}
        <div className="mb-3 form-control1">
          <label htmlFor="exampleInputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword"
            value={password}
            onChange={pwScritta}
          />
          {/* Mostra l'aiuto solo se presente */}
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
            Registrati come Trainer
          </button>
        </div>
      </form>
    </div>
  );
};

export default SectionForm;
