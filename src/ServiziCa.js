import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCheckCircle);
library.add(faTimesCircle);

// Regolo l'immagine per non strecciarla
const imgStyle = {
  width: "100%",
  height: "120px",
  backgroundSize: "cover",
  backgroundImage: `url('https://img.calisthenics.ie/v7/calisthenics.ie/wp-content/uploads/2022/07/calisthenics-ireland-home.webp')`,
  backgroundPosition: "bottom 20% left 0px",
};

const ServiziCa = () => {
  return (
    <div className="mt-3 border rounded shadow p-3 " id="cali">
      <div className="img-fluid rounded shadow-lg mt-1" style={imgStyle}></div>
      <div>
        <h2 className="text-center">CALISTHENICS</h2>
        <hr />

        <h2 className="text-center">
          {" "}
          <FontAwesomeIcon icon="check-circle" style={{ color: "green" }} />
          Vantaggi
        </h2>
        
        <li className="text-center">
            Migliora forza, coordinazione, mobilità e postura in un unico
            allenamento.
          </li>
          
          
          <li className="text-center">
            Esercizi progressivi adatti a ogni livello di preparazione fisica.
          </li>
          <li className="text-center">Accessibile e conveniente</li>

        <h2 className="text-center mt-3">
          <FontAwesomeIcon icon="times-circle" style={{ color: "red" }} />
          Svantaggi
        </h2>
        
          <li className="text-center">
            Potenziale infortuni se gli esercizi non sono eseguiti
            correttamente.
          </li>

          
          <li className="text-center">
            Può essere complicato per chi ha dolori o limitazioni articolari.
          </li>
          <li className="text-center">
            {" "}
            Difficile costruire massa muscolare elevata, più facile definirla.
          </li>
        
      </div>
    </div>
  );
};

export default ServiziCa;
