import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Avatar, Box, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import ButtonCta from "../ButtonCta/ButtonCta";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

function NavBar() {
  const [Tab, setTab] = useState("");
  const [subTab, setSubTab] = useState("");
  const [overlay, setOverlay] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const onClickTab = (tab, e) => {
    e.preventDefault();
    setSubTab("");
    setTab(tab);
    setOverlay(true);
  };

  const onClickSubTab = (subTab, e) => {
    e.preventDefault();
    setSubTab(subTab);
  };

  const onClickSidebarClose = (e) => {
    e.preventDefault();
    setOverlay(!overlay);
    setTab("");
    setSubTab("");
  };

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const onLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <>
      {/* INIZIO MODAL ACCOUNT*/}

      <StyledModal open={openModal}>
        <Box
          width={500}
          height={360}
          border="none"
          bgcolor={"background.default"}
          color={"text.primary"}
          padding={2}
          borderRadius={0}
        >
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              color="black"
              textAlign="left"
              fontWeight={400}
              paddingBottom={2}
            >
              Il mio account
            </Typography>
            <CloseIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                setOpenModal(false);
              }}
            />
          </Box>

          <UserBox>
            <Avatar
              sx={{ width: 60, height: 60 }}
              variant="square"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png"
            />
            <Typography variant="span" fontWeight={400}>
              Accedi al tuo account LEGO®
            </Typography>
          </UserBox>

          <ButtonCta link="/login">Accedi</ButtonCta>
          <Box padding={1} paddingTop={2}>
            <Typography lineHeight={1.5} variant="span" fontWeight={500}>
              Per creare e consultare un lista dei desideri, accedi al tuo
              account LEGO®
            </Typography>
          </Box>
          <Box padding={1} sx={{ display: "flex", gap: 2 }}>
            <Typography variant="span" fontWeight={400}>
              Non hai un account?
            </Typography>
            <Link to="/signup">Registrati</Link>
          </Box>
        </Box>
      </StyledModal>

      {/* FINE MODAL ACCOUNT*/}

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
              <a
                href="./"
                className="navBar-account-vip navBar-email"
                onClick={(e) => {
                  e.preventDefault();
                  if (!storedUser) setOpenModal(true);
                }}
              >
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
                {storedUser ? `${storedUser}` : "Account"}

                {storedUser && (
                  <span className="logoutFromNav" onClick={onLogout}>
                    Logout
                  </span>
                )}
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
              <a href="../home">
                {/* <img src="../../assets/images/logo.svg" alt="Logo" /> */}
                <svg
                  className="footer-logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M3.472 3.425V508.59h505.172V3.425H3.472z"
                    fill="#fff"
                  />
                  <path
                    d="M3.472 3.425V508.59h505.172V3.425H3.472zm471.561 209.982c-.83 15.736-5.841 35.352-10.256 48.458-17.762 52.775-38.357 85.493-86.053 85.493-14.042 0-38.954-3.725-48.133-28.709l-2.175-5.928-3.909 4.953c-14.916 18.893-37.082 29.796-60.802 29.908-18.2.083-32.823-6.011-42.284-17.64l-2.594-3.19-2.763 3.05c-10.104 11.154-27.7 17.552-48.278 17.552-16.158 0-30.11-5.494-39.29-15.45l-2.5-2.717-2.6 2.626c-10.205 10.303-26.285 15.494-46.504 15.02-24.529-.584-39.463-14.272-39.947-36.633-.74-34.474 32.625-107.009 46.435-129.063 8.966-14.732 21.296-21.874 37.707-21.874 11.17 0 18.81 2.334 23.348 7.142 4.133 4.375 4.95 8.063 5.318 16.935l.473 11.47 6.054-9.754c14.646-23.596 38.918-26.855 62.966-26.855 16.72 0 31.31 6.149 37.17 15.664l2.163 3.508 3.129-2.663c12.394-10.534 29.879-16.332 49.235-16.332 21.13 0 36.482 5.253 45.64 15.613 2.08 2.352 3.457 3.996 5.368 8.016l2.352 4.935 3.53-4.172c13.409-15.86 31.713-23.897 54.429-23.897 17.99 0 31.649 4.783 40.586 14.215 11.213 11.817 12.814 28.448 12.185 40.32z"
                    fill="#f6ec36"
                  />
                  <path
                    d="M3.472 3.425V508.59h505.172V3.425H3.472zm485.787 229.363c-2.286 18.384-14.71 52.446-21.31 66.058-17.712 36.493-41.374 64.53-86.967 64.53-24.356 0-44.39-7.767-56.106-22.698-17.156 15.035-38.39 22.91-61.254 22.91-17.614 0-33.18-5.086-45.051-14.493-13.1 9.23-30.779 14.378-50.37 14.378-16.364 0-31.088-4.494-42.612-12.799-12.749 8.46-29.457 12.665-49.069 12.2-32.632-.77-55.163-21.47-55.81-51.522-.852-39.921 32.766-112.987 48.61-138.29 11.857-19.478 29.955-29.957 52.132-29.957 24.07 0 32.795 6.874 37.09 15.627 18.572-15.772 43.191-16.679 60.719-16.679 19.348 0 31.49 5.137 41.815 13.356 14.262-8.555 30.623-13.002 50.109-13.002 24.915 0 43.425 5.795 56.337 18.558 15.056-12.532 33.914-18.243 55.018-18.243 27.907 0 46.269 10.064 57.052 25.07 15.184 21.166 12.467 42.472 9.667 64.996z"
                    fill="#d01012"
                  />
                  <path d="M0 0v512h512V0H0zm504.96 7.052v497.915H7.047V7.052h497.911z" />
                  <path d="M486.792 153.639v-3.486h2.366c1.73 0 2.63.607 2.63 1.73 0 .892-.578 1.756-2.337 1.756h-2.659zm8.493 7.232l-1.474-2.558c-1.279-2.236-1.633-2.59-2.727-2.973v-.069c2.153-.252 3.431-1.636 3.431-3.55 0-2.024-1.278-3.555-4.006-3.555h-6.336v12.712h2.626v-5.206h.48c1.124 0 1.572.127 2.081.636.513.52 1.28 1.6 1.73 2.493l1.027 2.077 3.168-.007zm-6.253-16.245c5.455 0 9.887 4.4 9.887 9.847 0 5.448-4.44 9.866-9.887 9.866-5.44 0-9.826-4.425-9.826-9.866 0-5.44 4.385-9.847 9.826-9.847zm0-2.42c-6.781 0-12.254 5.476-12.254 12.267 0 6.788 5.473 12.26 12.254 12.26a12.24 12.24 0 0 0 12.271-12.26 12.235 12.235 0 0 0-12.271-12.268zM422.262 155.344c-26.462 0-44.745 10.49-57.121 25.146-2.092-4.385-3.681-6.307-5.917-8.84-10.133-11.451-26.419-16.794-48.278-16.794-21.357 0-39.163 6.669-51.525 17.174-6.42-10.44-21.722-17.351-40.175-17.351-24.11 0-50.38 3.41-65.968 28.524-.375-9.042-1.192-13.828-6.274-19.207-6.178-6.539-16.174-8.244-25.913-8.244-17.745 0-31.085 7.752-40.698 23.535-13.941 22.264-47.729 95.518-46.967 131 .495 22.917 15.87 39.433 43.387 40.084 21.501.516 38.364-5.235 49.094-16.065 9.627 10.462 24.315 16.596 41.89 16.596 19.57 0 39.26-5.878 50.893-18.72 9.797 12.036 25.212 19.041 45.04 18.944 25.92-.127 48.686-12.42 63.556-31.256 8.16 22.21 28.845 31.032 51.445 31.032 49.524 0 71.271-34.059 89.402-87.9 4.083-12.126 9.534-32.378 10.437-49.389 1.492-28.318-10.487-58.27-56.308-58.27zM92.74 290.72c25.624-4.45 32.065 4.812 31.26 13.392-2.418 25.68-25.978 31.425-46.436 30.944-14.837-.361-28.177-7.152-28.55-24.377-.65-30.135 30.085-99.852 44.553-122.961 6.684-10.971 14.826-16.397 27.81-16.397 12.304 0 15.353 6.318 15.172 13.886-.484 20.19-33.105 81.548-43.809 105.513zm83.442-23.669c-1.695 4.588-4.902 14.197-7.5 24.385 8.41-2.103 14.718-3.562 25.523-3.302 12.31.303 20.179 5.404 20.179 15.584 0 24.68-27.278 31.927-46.2 31.927-20.776 0-39.026-11.83-39.026-34.55 0-26.634 14.439-67.022 27.99-93.928 16.639-33.04 33.64-37.432 62.926-37.432 12.867 0 27.697 5.505 27.697 17.658 0 16.841-14.27 23.264-28.416 24.077-6.04.347-15.339.679-20.902.285 0 0-4.707 7.171-9.71 19.952 26.197-3.688 37.306 2.258 32.884 17.412-5.986 20.472-23.723 21.82-45.445 17.932zm128.85-63.695c-7.084 0-11.718 4.487-15.165 9.331-7.593 10.664-24.045 53.396-26.606 70.95-1.756 12.022 3.436 14.47 9.11 14.47 9.104 0 19.31-9.63 22.792-25.518 0 0-17.329-.422-12.553-15.79 4.642-14.912 13.449-18.142 28.047-18.741 28.76-1.174 25.92 20.06 23.619 31.385-7.475 36.775-33.647 66.307-70.668 66.307-25.345 0-41.078-14.02-41.078-39.864 0-18.416 9.136-47.327 16.38-64.244 15.414-36.01 31.58-61.21 72.766-61.21 24.71 0 44.199 8.88 41.341 32.028-2.095 16.99-10.599 26.967-26.046 28.174-4.32.336-21.996-.112-16.133-16.834 2.04-5.849 2.886-10.444-5.806-10.444zm155.544 30.392c-4.353 21.682-14.147 47.327-24.778 66.44-17.344 31.187-38.412 35.555-56.8 35.334-18.398-.22-39.123-7.012-39.282-35.384-.112-20.37 8.674-49.122 16.134-67.969 13.001-34.167 26.288-62.026 68.29-61.524 48.982.582 40.247 44.141 36.436 63.103zm-41.551-29.68c-4.205-.058-7.875.766-11.173 5.852-7.41 9.598-29.07 68.789-28.687 80.594.137 4.241 2.481 7.951 7.705 7.951 5.993.008 9.324-4.136 12.268-9.135 6.817-11.535 25.985-63.855 26.512-76.935.156-3.812-.48-8.251-6.625-8.327z" />
                </svg>
              </a>
            </li>
          </ul>
          <div className="navBar-row2-col2">
            <ul className="navBar-menu">
              <li className="navBar-menuItem">
                <a
                  data-tab="acquista"
                  className={`${Tab === "acquista" ? "active" : ""}`}
                  onClick={(e) => onClickTab("acquista", e)}
                >
                  Acquista
                </a>
              </li>
              <li className="navBar-menuItem">
                <a
                  data-tab="scopri"
                  className={`${Tab === "scopri" ? "active" : ""}`}
                  onClick={(e) => onClickTab("scopri", e)}
                >
                  Scopri
                </a>
              </li>
              <li className="navBar-menuItem">
                <a
                  data-tab="aiuto"
                  className={`${Tab === "aiuto" ? "active" : ""}`}
                  onClick={(e) => onClickTab("aiuto", e)}
                >
                  Aiuto
                </a>
              </li>
              <li className="navBar-menuItem">
                <a className="navBarButton" href="../natale">
                  Natale
                </a>
              </li>
            </ul>

            <div
              id="acquista"
              className={`navBar-subMenu-container ${
                Tab === "acquista" ? "active" : ""
              }`}
            >
              <ul className="navBar-subMenu-left">
                <li>
                  <a
                    className="navBar-subMenu-linkExpand"
                    data-subtab="setPerTema"
                    href="./"
                    onClick={(e) => {
                      onClickSubTab("setPerTema", e);
                    }}
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
                    onClick={(e) => {
                      onClickSubTab("eta", e);
                    }}
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
                    onClick={(e) => {
                      onClickSubTab("prezzi", e);
                    }}
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
                    onClick={(e) => {
                      onClickSubTab("merchandising", e);
                    }}
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
                    onClick={(e) => {
                      onClickSubTab("interessi", e);
                    }}
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
                    onClick={(e) => {
                      onClickSubTab("pick", e);
                    }}
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
                <li>
                  <Link to="/designsystemlibrary">Design System Library</Link>
                </li>
              </ul>

              <ul
                className={`navBar-subMenu-right ${
                  subTab === "setPerTema" ? "subActive" : ""
                }`}
                id="setPerTema"
              >
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

              <ul
                className={`navBar-subMenu-right ${
                  subTab === "eta" ? "subActive" : ""
                }`}
                id="eta"
              >
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

              <ul
                className={`navBar-subMenu-right ${
                  subTab === "prezzi" ? "subActive" : ""
                }`}
                id="prezzi"
              >
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

              <ul
                className={`navBar-subMenu-right ${
                  subTab === "merchandising" ? "subActive" : ""
                }`}
                id="merchandising"
              >
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

              <ul
                className={`navBar-subMenu-right ${
                  subTab === "interessi" ? "subActive" : ""
                }`}
                id="interessi"
              >
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

              <ul
                className={`navBar-subMenu-right ${
                  subTab === "pick" ? "subActive" : ""
                }`}
                id="pick"
              >
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

            <div
              id="scopri"
              className={`navBar-subMenu-container ${
                Tab === "scopri" ? "active" : ""
              }`}
            >
              <ul className="navBar-subMenu-left">
                <li>
                  <a
                    className="navBar-subMenu-linkExpand"
                    data-subtab="valori"
                    href="./"
                    onClick={(e) => {
                      onClickSubTab("valori", e);
                    }}
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
                    onClick={(e) => {
                      onClickSubTab("app", e);
                    }}
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
                    onClick={(e) => {
                      onClickSubTab("riviste", e);
                    }}
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

              <ul
                className={`navBar-subMenu-right ${
                  subTab === "valori" ? "subActive" : ""
                }`}
                id="valori"
              >
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

              <ul
                className={`navBar-subMenu-right ${
                  subTab === "app" ? "subActive" : ""
                }`}
                id="app"
              >
                <li>
                  <a href="./">LEGO Builder</a>
                </li>
                <li>
                  <a href="./">App LEGO Life</a>
                </li>
              </ul>

              <ul
                className={`navBar-subMenu-right ${
                  subTab === "riviste" ? "subActive" : ""
                }`}
                id="riviste"
              >
                <li>
                  <a href="./">Cataloghi LEGO</a>
                </li>
              </ul>
            </div>

            <div
              id="aiuto"
              className={`navBar-subMenu-container ${
                Tab === "aiuto" ? "active" : ""
              }`}
            >
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

          <div className={`sideBar  ${overlay ? "active" : ""} `}>
            <a className="sideBarClose" href="./" onClick={onClickSidebarClose}>
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
          <div
            className={`navBarOverlay closeSideBar ${
              overlay ? "active" : false
            } `}
            onClick={onClickSidebarClose}
          ></div>

          <ul className="navBar-row2-col3">
            <li>
              <a
                href="./"
                className="navBar-actionLink navBar-actionLink-search"
              >
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
              <a
                className="navBar-actionLink"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenModal(true);
                }}
              >
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
    </>
  );
}

export default NavBar;
