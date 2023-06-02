// import logo from '../assets/images/Logo.jpeg';
import { useState } from "react";
import logo from "../assets/images/logoUFC.png";
import "../assets/styles/Header.css";

const Header = () => {
  const [showMenuSidebar, setShowMenuSidebar] = useState(false);

  const toggleSidebar = (data) => {
    setShowMenuSidebar(data);
  };

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="Stream figthers logo" />
        </div>
        <ul className="header-menu-list">
          <li className="header-menu-list__item">Inicio</li>
          <li className="header-menu-list__item">Peleadores</li>
          <li className="header-menu-list__item">Contenido</li>
          <li className="header-menu-list__item">Predicciones</li>
          <li className="header-menu-list__item">Eventos</li>
        </ul>
        <div
          className={`header-menu ${
            showMenuSidebar ? "show-menu" : "hide-menu"
          }`}
        >
          <ul className="menu-list">
            <li className="menu-list__item">Inicio</li>
            <li className="menu-list__item">Peleadores</li>
            <li className="menu-list__item">Contenido</li>
            <li className="menu-list__item">Predicciones</li>
            <li className="menu-list__item">Eventos</li>
            <div className="social-media-list">
              <div className="social-title">Redes sociales</div>
              <hr />
              <a href="">
                <box-icon
                  type="logo"
                  name="instagram"
                  size="md"
                  color="#FAFAFA"
                ></box-icon>
              </a>
              <a href="">
                <box-icon
                  name="twitter"
                  type="logo"
                  size="md"
                  color="#FAFAFA"
                ></box-icon>
              </a>
              <a href="">
                <box-icon
                  name="twitch"
                  type="logo"
                  size="md"
                  color="#FAFAFA"
                ></box-icon>
              </a>
              <a href="">
                <box-icon
                  name="kickstarter"
                  type="logo"
                  size="md"
                  color="#FAFAFA"
                ></box-icon>
              </a>
              <a href="">
                <box-icon
                  name="youtube"
                  type="logo"
                  size="md"
                  color="#FAFAFA"
                ></box-icon>
              </a>
            </div>
          </ul>
        </div>
        <div
          className="header-icon"
          onClick={() => toggleSidebar(!showMenuSidebar)}
        >
          <div className={`menu-icon ${showMenuSidebar ? "cross" : ""}`}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
