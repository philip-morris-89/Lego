import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="navBar">
      <div className="navBar-row1">
        <ul className="navBar-row1-col1">
          <li>
            <a href="./" className="navBar-areaGiochi">
              <svg
                width="37"
                height="16"
                viewBox="0 0 37 16"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="navBar-areaGiochi-svg"
              >
                <path
                  fill="currentColor"
                  d="M29.493.597l.095.084 6.535 6.54a1 1 0 01.083 1.319l-.083.094-6.535 6.54a1 1 0 01-1.498-1.32l.083-.094 4.83-4.834-31.908.001A1 1 0 01.98 6.934l.116-.007h31.907l-4.83-4.833a1 1 0 01-.082-1.32l.083-.094a1 1 0 011.32-.083z"
                ></path>
              </svg>
              Area Giochi
            </a>
          </li>
        </ul>
        <ul className="navBar-row1-col2">
          <li>
            <svg
              viewBox="0 0 18 28"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                fill="currentColor"
              ></path>
            </svg>
          </li>
          <li>
            <p>
              Omaggio con gli acquisti LEGO® superiori a 90 €*{" "}
              <a href="./">Compra ora</a>
            </p>
          </li>
          <li>
            <svg
              viewBox="0 0 18 28"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                fill="currentColor"
              ></path>
            </svg>
          </li>
        </ul>
        <ul className="navBar-row1-col3">
          <li>
            <a href="./" className="navBar-account-vip">
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-head-svg"
              >
                <g transform="translate(1 1)" fill-rule="nonzero" fill="none">
                  <rect
                    stroke="#2C2C2C"
                    stroke-width="1.5"
                    fill="#FFCF00"
                    x="4.875"
                    width="8.25"
                    height="6.038"
                    rx=".729"
                  ></rect>
                  <rect
                    stroke="#2C2C2C"
                    stroke-width="1.2"
                    fill="#FFCF00"
                    x="3.75"
                    y="14.34"
                    width="10.5"
                    height="5.66"
                    rx=".729"
                  ></rect>
                  <path
                    d="M14.25 17.736H3.75C0 17.736 0 14.717 0 14.717v-8.68S0 3.02 3.75 3.02h10.5C18 3.019 18 6.038 18 6.038v8.679s0 3.019-3.75 3.019z"
                    stroke="#2C2C2C"
                    stroke-width="1.5"
                    fill="#FFCF00"
                  ></path>
                  <path
                    d="M7.125 8.868a.94.94 0 00-.938-.943.94.94 0 00-.937.943c0 .52.42.943.938.943a.94.94 0 00.937-.943zm4.688-.943a.94.94 0 00-.938.943c0 .52.42.943.938.943a.94.94 0 00.937-.943.94.94 0 00-.938-.943zm.293 3.86a.452.452 0 00-.649.21c-.005.008-.461.84-2.463.84-1.953 0-2.437-.793-2.462-.84a.446.446 0 00-.638-.234.618.618 0 00-.215.761c.063.147.69 1.446 3.315 1.446s3.25-1.299 3.313-1.446a.609.609 0 00-.201-.738z"
                    fill="#2C2C2C"
                  ></path>
                </g>
              </svg>
              Account
            </a>
          </li>
          <li>
            <a href="./" className="navBar-account-vip">
              <img
                src="https://www.lego.com/_next/static/images/vip-73aacc5347bc84c586d662f654c3a629.png"
                alt=""
              />
              VIP
            </a>
          </li>
        </ul>
      </div>
      <div className="navBar-row2">
        <ul className="navBar-row2-col1">
          <li>
            <a href="./" className="navBar-hamburgerMenu">
              <hr />
              <hr />
              <span>Menu</span>
            </a>
          </li>
          <li className="navBarLogo">
            <a href="../home/index.html">
              <img src="../../assets/images/logo.svg" alt="Logo" />
            </a>
          </li>
        </ul>
        <div className="navBar-row2-col2">
          <ul className="navBar-menu">
            <li className="navBar-menuItem">
              <a data-tab="acquista" href="./">
                Acquista
              </a>
            </li>
            <li className="navBar-menuItem">
              <a data-tab="scopri" href="./">
                Scopri
              </a>
            </li>
            <li className="navBar-menuItem">
              <a data-tab="aiuto" href="./">
                Aiuto
              </a>
            </li>
            <li className="navBar-menuItem">
              <a className="navBarButton" href="../natale/index.html">
                Natale
              </a>
            </li>
          </ul>

          <div id="acquista" className="navBar-subMenu-container">
            <ul className="navBar-subMenu-left">
              <li>
                <a
                  className="navBar-subMenu-linkExpand"
                  data-subtab="setPerTema"
                  href="./"
                >
                  <span>Set per tema</span>
                  <svg
                    viewBox="0 0 18 28"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="navBar-subMenu-linkExpand"
                  data-subtab="eta"
                  href="./"
                >
                  <span>Età</span>
                  <svg
                    viewBox="0 0 18 28"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="navBar-subMenu-linkExpand"
                  data-subtab="prezzi"
                  href="./"
                >
                  <span>Prezzi</span>
                  <svg
                    viewBox="0 0 18 28"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="navBar-subMenu-linkExpand"
                  data-subtab="merchandising"
                  href="./"
                >
                  <span>Merchandising LEGO</span>
                  <svg
                    viewBox="0 0 18 28"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="navBar-subMenu-linkExpand"
                  data-subtab="interessi"
                  href="./"
                >
                  <span>Interessi</span>
                  <svg
                    viewBox="0 0 18 28"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="navBar-subMenu-linkExpand"
                  data-subtab="pick"
                  href="./"
                >
                  <span>Pick and Build</span>
                  <svg
                    viewBox="0 0 18 28"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="./">Set Esclusivi</a>
              </li>
              <li>
                <a href="./">Novità</a>
              </li>
              <li>
                <a href="./">I più venduti</a>
              </li>
              <li>
                <a href="./">Home decor</a>
              </li>
              <li>
                <a href="./">Sconti e offerte</a>
              </li>
              <li>
                <a href="./">Disponibile a breve</a>
              </li>
              <li>
                <a href="./">Ultima occasione per acquistarli</a>
              </li>
            </ul>

            <ul className="navBar-subMenu-right" id="setPerTema">
              <li>
                <a href="../temi/index.html">Visualizza tutti i temi</a>
              </li>
              <li>
                <a href="./">Architecture</a>
              </li>
              <li>
                <a href="./">Batman™</a>
              </li>
              <li>
                <a href="./">BOOST</a>
              </li>
              <li>
                <a href="./">BrickHeadz</a>
              </li>
              <li>
                <a href="./">Brick Sketches™</a>
              </li>
              <li>
                <a href="./">classNameic</a>
              </li>
              <li>
                <a href="./">Creator 3-in-1</a>
              </li>
              <li>
                <a href="./">Creator Expert</a>
              </li>
              <li>
                <a href="./">DC</a>
              </li>
              <li>
                <a href="./">Disney™</a>
              </li>
              <li>
                <a href="./">Topolino e amici Disney</a>
              </li>
              <li>
                <a href="./">Lightyear di Disney e Pixar</a>
              </li>
            </ul>

            <ul className="navBar-subMenu-right" id="eta">
              <li>
                <a href="./">Visualizza tutte le età</a>
              </li>
              <li>
                <a href="./">1.5+</a>
              </li>
              <li>
                <a href="./">4+</a>
              </li>
              <li>
                <a href="./">6+</a>
              </li>
              <li>
                <a href="./">9+</a>
              </li>
              <li>
                <a href="./">13+</a>
              </li>
              <li>
                <a href="./">18+</a>
              </li>
            </ul>

            <ul className="navBar-subMenu-right" id="prezzi">
              <li>
                <a href="./">Visualizza tutti i prezzi</a>
              </li>
              <li>
                <a href="./">Meno di 20 €</a>
              </li>
              <li>
                <a href="./">20 € - 50 €</a>
              </li>
              <li>
                <a href="./">50 € - 100 €</a>
              </li>
              <li>
                <a href="./">100 € - 200 €</a>
              </li>
              <li>
                <a href="./">Più di 200 €</a>
              </li>
            </ul>

            <ul className="navBar-subMenu-right" id="merchandising">
              <li>
                <a href="./">VISUALIZZA TUTTO IL MERCHANDISING LEGO</a>
              </li>
              <li>
                <a href="./">Accessori</a>
              </li>
              <li>
                <a href="./">Zaini e portavivande</a>
              </li>
              <li>
                <a href="./">Libri</a>
              </li>
              <li>
                <a href="./">Portachiavi</a>
              </li>
              <li>
                <a href="./">Giocattoli di peluche</a>
              </li>
              <li>
                <a href="./">Bustina</a>
              </li>
              <li>
                <a href="./">Puzzle e giochi da tavolo</a>
              </li>
              <li>
                <a href="./">Gioco di ruolo e costumi</a>
              </li>
              <li>
                <a href="./">Cancelleria</a>
              </li>
              <li>
                <a href="./">Contenitori</a>
              </li>
            </ul>

            <ul className="navBar-subMenu-right" id="interessi">
              <li>
                <a href="./">VISUALIZZA TUTTI GLI INTERESSI</a>
              </li>
              <li>
                <a href="./">Per gli adulti</a>
              </li>
              <li>
                <a href="./">Animali</a>
              </li>
              <li>
                <a href="./">Arts and Crafts</a>
              </li>
              <li>
                <a href="./">Edifici</a>
              </li>
              <li>
                <a href="./">Auto</a>
              </li>
              <li>
                <a href="./">Programmazione per i bambini</a>
              </li>
              <li>
                <a href="./">Draghi</a>
              </li>
              <li>
                <a href="./">Fantasy</a>
              </li>
              <li>
                <a href="./">Film</a>
              </li>
              <li>
                <a href="./">Gaming</a>
              </li>
              <li>
                <a href="./">Impara a costruire</a>
              </li>
              <li>
                <a href="./">Musica</a>
              </li>
            </ul>

            <ul className="navBar-subMenu-right" id="pick">
              <li>
                <a href="./">PICK AND BUILD</a>
              </li>
              <li>
                <a href="./">Pick a Brick</a>
              </li>
              <li>
                <a href="./">Kit e accessori per mattoncini</a>
              </li>
              <li>
                <a href="./">Build a Minifigure</a>
              </li>
            </ul>
          </div>

          <div id="scopri" className="navBar-subMenu-container">
            <ul className="navBar-subMenu-left">
              <li>
                <a
                  className="navBar-subMenu-linkExpand"
                  data-subtab="valori"
                  href="./"
                >
                  <span>I nostri valori</span>
                  <svg
                    viewBox="0 0 18 28"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="navBar-subMenu-linkExpand"
                  data-subtab="app"
                  href="./"
                >
                  <span>Le nostre app</span>
                  <svg
                    viewBox="0 0 18 28"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="navBar-subMenu-linkExpand"
                  data-subtab="riviste"
                  href="./"
                >
                  <span>Le nostre riviste</span>
                  <svg
                    viewBox="0 0 18 28"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="./">Tutti i temi LEGO</a>
              </li>
              <li>
                <a href="./">Tutti gli interessi LEGO</a>
              </li>
              <li>
                <a href="./">LEGO® CON</a>
              </li>
              <li>
                <a href="./">Per gli adulti</a>
              </li>
              <li>
                <a href="./">Rebuild the World</a>
              </li>
              <li>
                <a href="./">Programma premi VIP</a>
              </li>
              <li>
                <a href="./">Decorator 3D DOTS</a>
              </li>
              <li>
                <a href="./">LEGO® Mosaic Maker</a>
              </li>
              <li>
                <a href="./">90 anni di gioco</a>
              </li>
            </ul>

            <ul className="navBar-subMenu-right" id="valori">
              <li>
                <a href="./">Informazioni su LEGO Group</a>
              </li>
              <li>
                <a href="./">Notizie LEGO</a>
              </li>
              <li>
                <a href="./">Sostenibilità</a>
              </li>
            </ul>

            <ul className="navBar-subMenu-right" id="app">
              <li>
                <a href="./">LEGO Builder</a>
              </li>
              <li>
                <a href="./">App LEGO Life</a>
              </li>
            </ul>

            <ul className="navBar-subMenu-right" id="riviste">
              <li>
                <a href="./">Cataloghi LEGO</a>
              </li>
            </ul>
          </div>

          <div id="aiuto" className="navBar-subMenu-container">
            <ul className="navBar-subMenu-left">
              <li>
                <a href="./">Verifica stato ordine</a>
              </li>
              <li>
                <a href="./">Consegne e resi</a>
              </li>
              <li>
                <a href="./">Trova uno Store</a>
              </li>
              <li>
                <a href="./">Istruzioni per la costruzione</a>
              </li>
              <li>
                <a href="./">Domande frequenti</a>
              </li>
              <li>
                <a href="./">Contattaci</a>
              </li>
              <li>
                <a href="./">Pezzi di ricambio</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="sideBar">
          <a className="sideBarClose" href="./">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              aria-hidden="true"
              className="Icon__StyledSVG-sc-lm07h6-0 fgDCVZ"
            >
              <path
                d="M10.377 8.142l5.953-5.954-2.234-2.234-5.954 5.954L2.188-.046-.046 2.188l5.954 5.954-5.954 5.954 2.234 2.234 5.954-5.953 5.954 5.953 2.234-2.234z"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="navBarOverlay closeSideBar"></div>

        <ul className="navBar-row2-col3">
          <li>
            <a href="./" className="navBar-actionLink navBar-actionLink-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                aria-hidden="true"
                className="Icon__StyledSVG-sc-lm07h6-0 fgDCVZ"
              >
                <path
                  d="M18 16.615c0 .375-.137.7-.412.973a1.331 1.331 0 01-.973.412 1.28 1.28 0 01-.973-.412l-3.71-3.7a7.41 7.41 0 01-4.317 1.342c-1.03 0-2.017-.2-2.958-.6a7.616 7.616 0 01-2.434-1.623 7.605 7.605 0 01-1.622-2.433A7.472 7.472 0 010 7.616c0-1.032.2-2.018.6-2.96a7.65 7.65 0 011.623-2.433A7.616 7.616 0 014.657.601 7.49 7.49 0 017.615 0c1.032 0 2.018.2 2.959.601.94.4 1.752.941 2.434 1.622a7.624 7.624 0 011.622 2.434c.4.941.601 1.927.601 2.959a7.403 7.403 0 01-1.342 4.316l3.71 3.71c.267.266.401.592.401.973m-5.539-9c0-1.334-.474-2.475-1.423-3.423C10.09 3.244 8.95 2.77 7.615 2.77c-1.333 0-2.475.474-3.423 1.422C3.243 5.14 2.77 6.28 2.77 7.616c0 1.334.474 2.475 1.423 3.423.948.949 2.09 1.422 3.423 1.422 1.335 0 2.475-.473 3.423-1.422.95-.948 1.423-2.09 1.423-3.423"
                  fill="currentColor"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="./" className="navBar-actionLink">
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="Icon__StyledSVG-sc-lm07h6-0 kBnuCw UtilityBarstyles__AccountIcon-sc-1uwh8t8-5 KHcEY"
              >
                <g transform="translate(1 1)" fill-rule="nonzero" fill="none">
                  <rect
                    stroke="#2C2C2C"
                    stroke-width="1.5"
                    fill="#FFCF00"
                    x="4.875"
                    width="8.25"
                    height="6.038"
                    rx=".729"
                  ></rect>
                  <rect
                    stroke="#2C2C2C"
                    stroke-width="1.2"
                    fill="#FFCF00"
                    x="3.75"
                    y="14.34"
                    width="10.5"
                    height="5.66"
                    rx=".729"
                  ></rect>
                  <path
                    d="M14.25 17.736H3.75C0 17.736 0 14.717 0 14.717v-8.68S0 3.02 3.75 3.02h10.5C18 3.019 18 6.038 18 6.038v8.679s0 3.019-3.75 3.019z"
                    stroke="#2C2C2C"
                    stroke-width="1.5"
                    fill="#FFCF00"
                  ></path>
                  <path
                    d="M7.125 8.868a.94.94 0 00-.938-.943.94.94 0 00-.937.943c0 .52.42.943.938.943a.94.94 0 00.937-.943zm4.688-.943a.94.94 0 00-.938.943c0 .52.42.943.938.943a.94.94 0 00.937-.943.94.94 0 00-.938-.943zm.293 3.86a.452.452 0 00-.649.21c-.005.008-.461.84-2.463.84-1.953 0-2.437-.793-2.462-.84a.446.446 0 00-.638-.234.618.618 0 00-.215.761c.063.147.69 1.446 3.315 1.446s3.25-1.299 3.313-1.446a.609.609 0 00-.201-.738z"
                    fill="#2C2C2C"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="./" className="navBar-actionLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                aria-hidden="true"
                className="Icon__StyledSVG-sc-lm07h6-0 hhbQvj MainBarstyles__ActionIcon-sc-1cg7sjw-16 kfAPxF"
              >
                <path
                  d="M16.84 8.417L10 15.204 3.16 8.417A3.67 3.67 0 012 5.739C2 3.677 3.71 2 5.815 2a3.82 3.82 0 012.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0114.186 2C16.289 2 18 3.677 18 5.739a3.673 3.673 0 01-1.16 2.678M9.986 18l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 001.78-4.126C20 2.569 17.398 0 14.187 0A5.829 5.829 0 0010 1.762 5.827 5.827 0 005.815 0C2.604 0 0 2.569 0 5.739a5.68 5.68 0 001.782 4.126"
                  fill="currentColor"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="./" className="navBar-actionLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="20"
                viewBox="0 0 16 20"
                aria-hidden="true"
                className="Icon__StyledSVG-sc-lm07h6-0 jRfmwl MainBarstyles__ActionIcon-sc-1cg7sjw-16 kfAPxF"
              >
                <g fill="currentColor" fill-rule="evenodd">
                  <path d="M4 3.512v5.804c0 .377.349.684.779.684.43 0 .779-.307.779-.684V3.512C5.558 2.33 6.653 1.368 8 1.368c1.347 0 2.442.962 2.442 2.144v5.804c0 .377.35.684.78.684.43 0 .778-.307.778-.684V3.512C12 1.575 10.206 0 8 0S4 1.575 4 3.512z"></path>
                  <path d="M2.46 6.33c-.269 0-.489.194-.5.441L1.435 18.19a.436.436 0 00.131.332.52.52 0 00.348.149h12.151c.276 0 .501-.207.501-.462l-.525-11.436c-.011-.248-.23-.442-.5-.442H2.46zM14.448 20l-12.974-.001a1.591 1.591 0 01-1.064-.462 1.357 1.357 0 01-.408-1.03L.56 6.372C.595 5.602 1.277 5 2.11 5h11.78c.835 0 1.516.602 1.551 1.372l.56 12.197c0 .789-.697 1.431-1.553 1.431z"></path>
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
