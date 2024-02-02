import React from "react";

const SectionFooter = () => {
  const handleScroolToStart = () => {
    document
      .querySelector("#nav")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <footer className=" rounded mt-1 bg-dark text-light">
      <div className="container text-center">
        <p>&copy; 2024 FYPT. Tutti i diritti riservati.</p>

        <p>
          {" "}
          <a href="#2" onClick={handleScroolToStart}>
            Torna in cima
          </a>
        </p>
      </div>
    </footer>
  );
};

export default SectionFooter;
