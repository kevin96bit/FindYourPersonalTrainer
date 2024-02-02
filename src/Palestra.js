import React, { useState } from "react";
import foto from "./foto";

const Palestra = () => {
  // test

  // test
  
  
  return (
    <div>
      {foto.map((foto) => (
        <Immagini key={foto.id} foto={foto} />
      ))}
    </div>
  );
};

const Immagini = ({ foto }) => {
  const { id, img, titolo } = foto;

  const mostraBody = ()=>{
    const bodyElement = document.getElementById("body");
    if (bodyElement) {
      bodyElement.style.display = "block";
      bodyElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
   }
   const mostraPower = ()=>{
    const powerElement = document.getElementById("power");
    if (powerElement) {
      powerElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
   }
   
   const mostraCali = () => {
    const caliElement = document.getElementById("cali");
    if (caliElement) {
      caliElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  
  const handleClick = () => {
    console.log("Ho cliccato l'immagine e funziona correttamente", id);
    if (Number(id) === 1) {
      mostraBody();
    } else if (Number(id) === 2) { // SPECIFICA CHE E' UN NUMERO SENNO NON LO LEGGE 
      mostraPower();
    } else if (Number(id) === 3) {
      mostraCali();
    }
  };

  const [passato, nonPassato] = useState(true);

  const dentroImmagine = () => {
    nonPassato(true);
  };
  const fuoriImmagine = () => {
    nonPassato(false);
  };

  // regolo l'immagine per non strecciarla
  const imgStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom 20% left 0px",
    width: "100%",
    height: "120px",
    
    
  };

  //
  // Stile per il titolo
  const titoloStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize: "27px",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    textAlign: "center",
    opacity: passato ? 1 : 0,
    transition: "opacity 0.3s ease", // Transizione dell'opacità
  };
  //
  return (
    <div className="container pt-2 mt-1" key={id.toString()}>
      <div className="row ">
        <div className="col ">
          <a href="#test" onClick={handleClick}>
            <div
              className={`img-fluid rounded shadow-lg   ${
                passato ? "zoom" : ""
              }`}
              style={imgStyle}
              onMouseEnter={dentroImmagine}
              onMouseLeave={fuoriImmagine}
            >
              <div style={titoloStyle}>{titolo}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Palestra;
