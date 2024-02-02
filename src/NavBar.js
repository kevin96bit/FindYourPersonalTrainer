import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  // ===================================================================

  // VOLEVO USARE L'USEREF MA NON SONO RIUSCITO, HO PREFERITO USARE JAVASCRIPT PURO

  const handleScrollToChiSiamo = () => {
    document
      .querySelector("#chiSiamo")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleScrollToRegistrati = () => {
    document
      .querySelector("#registrati")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  // ===================================================================

  return (
    <div className="container p-0" id="nav">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#1">
            {" "}
            
            FYPT <FontAwesomeIcon icon={faDumbbell} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#2">
                <FontAwesomeIcon icon={faHouseUser} />Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  // riferimento alla funzione di scroll
                  onClick={handleScrollToChiSiamo}
                  href="#3"
                >
                  <FontAwesomeIcon icon={faUsers} />Chi siamo
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  // riferimento alla funzione di scroll
                  onClick={handleScrollToRegistrati}
                  href="#4"
                >
                  <FontAwesomeIcon icon={faUserPlus} />Registrati
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
