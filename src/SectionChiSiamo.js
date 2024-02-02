import React from "react";

const SectionChiSiamo = () => {
  return (
    <div className="container-fluid border shadow mt-2 rounded" id="chiSiamo" >
      <h3 className="text-center">Chi siamo </h3>
      <div className="row justify-content-center mt-3">
        <div className="col-md-6 order-md-1 order-2 mb-3 mb-md-0">
          <iframe
            title="dove ci troviamo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23022.055354770422!2d13.000481006804552!3d43.840137904019926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132d105e7324a691%3A0x477a64d9766b3c0a!2s61032%20Fano%20PU!5e0!3m2!1sit!2sit!4v1706704626886!5m2!1sit!2sit"
            width="100%"
            height="270"
            style={{ borderRadius: "5px", marginTop: "4px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-md-5 order-md-2 order-1 border rounded mt-1">
          <p>Un sito dedicato a semplificare la ricerca del tuo Personal Trainer ideale. Esplora una vasta rete di istruttori qualificati, personalizza la tua ricerca in base alle tue esigenze di fitness, e trova il professionista perfetto per aiutarti a raggiungere i tuoi obiettivi di salute e benessere. Con recensioni autentiche e un sistema di valutazione, puoi fare scelte informate per migliorare la tua forma fisica e ottenere un supporto personalizzato nella tua journey di fitness</p>
        </div>
      </div>
    </div>
  );
};

export default SectionChiSiamo;
