import React from "react";
// Importo le librerie di Font Awesome
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
  backgroundImage: `url('https://allmaxnutrition.com/cdn/shop/articles/natural-bodybuilding.jpg?v=1674628628&width=1024')`,
  backgroundPosition: "bottom 20% left 0px",
};

const Servizi = () => {
  return (
    <div className="mt-3 border rounded shadow p-3" id="body">
      <div className="img-fluid rounded shadow-lg mt-1" style={imgStyle}></div>
      <div>
        <h2 className="text-center">BODYBUILDING</h2>
        <hr />
        
        <h2 className="text-center"> <FontAwesomeIcon icon="check-circle" style={{ color: 'green' }} />Vantaggi</h2>
        
          <li className="text-center">Migliora salute cardiovascolare, postura e mobilità</li>
          <li className="text-center">Migliora benessere mentale, disciplina e autostima</li>
          <li className="text-center">Aumenta massa muscolare e forza</li>
          
        

        <h2 className="text-center mt-3"><FontAwesomeIcon icon="times-circle" style={{ color: 'red' }} />Svantaggi</h2>
        
        <li className="text-center">Disturbi dell'immagine corporea</li>
          <li className="text-center">Richiesta di tempo e impegno</li>
          <li className="text-center">Potenziale rischio di infortuni</li>
          
          
      </div>
    </div>
  );
};

export default Servizi;
