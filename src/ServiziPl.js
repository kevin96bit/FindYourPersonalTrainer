import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCheckCircle);
library.add(faTimesCircle);

// Regolo l'immagine per non strecciarla
const imgStyle = {
  width: "100%",
  height: "120px",
  backgroundSize: "cover",
  backgroundImage: `url('https://www.giuliomerlini.it/wp-content/uploads/2020/03/dieta-e-powerlifting-Giulio-Merlini.jpg')`,
  backgroundPosition: "bottom 20% left 0px",
};

const ServiziPl = () => {
  return (
    <div className="mt-3 border rounded shadow p-3 " id="power" >
      <div className="img-fluid rounded shadow-lg mt-1" style={imgStyle}></div>
      <div>
        <h2 className="text-center">POWERLIFTING</h2>
        <hr />
        
        <h2 className="text-center"> <FontAwesomeIcon icon="check-circle" style={{ color: 'green' }} />Vantaggi</h2>
        
        <li className="text-center">Migliora salute cardiovascolare, postura e mobilità</li>
          <li className="text-center">Potenza esplosiva</li>
          <li className="text-center">Spirito di squadra</li>
        

        <h2 className="text-center mt-3"><FontAwesomeIcon icon="times-circle" style={{ color: 'red' }} />Svantaggi</h2>
        
          <li className="text-center">Richiesta di tempo e impegno</li>
          <li className="text-center">Potenziale rischio di infortuni</li>
          <li className="text-center">Accesso limitato</li>
        
      </div>
    </div>
  );
};

export default ServiziPl;
