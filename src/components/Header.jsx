// import logo from '../assets/images/Logo.jpeg';
import { useState } from "react";
import logo from "../assets/images/logoUFC.png";
import "../assets/styles/Header.css";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [showMenuSidebar, setShowMenuSidebar] = useState(false);

  const [menuList] = useState([
    { name: "Inicio", path: "/" },
    { name: "Peleadores", path: "/peleadores" },
  ]);

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
          {menuList.map((item) => (
            <NavLink to={item.path} key={item.name}>
              <li className="header-menu-list__item">{item.name}</li>
            </NavLink>
          ))}
        </ul>
        <div
          className={`header-menu ${
            showMenuSidebar ? "show-menu" : "hide-menu"
          }`}
        >
          <ul className="menu-list">
            {menuList.map((item) => (
              <NavLink to={item.path} key={item.name}>
                <li className="menu-list__item">{item.name}</li>
              </NavLink>
            ))}
            <div className="social-media-list">
              <div className="social-title">Redes sociales</div>
              <hr />
              <Link>
                <box-icon
                  type="logo"
                  name="instagram"
                  size="md"
                  color="#FAFAFA"
                ></box-icon>
              </Link>
              <Link>
                <box-icon
                  name="twitter"
                  type="logo"
                  size="md"
                  color="#FAFAFA"
                ></box-icon>
              </Link>
              <Link>
                <box-icon
                  name="twitch"
                  type="logo"
                  size="md"
                  color="#FAFAFA"
                ></box-icon>
              </Link>
              <Link>
                <box-icon
                  name="kickstarter"
                  type="logo"
                  size="md"
                  color="#FAFAFA"
                ></box-icon>
              </Link>
              <Link>
                <box-icon
                  name="youtube"
                  type="logo"
                  size="md"
                  color="#FAFAFA"
                ></box-icon>
              </Link>
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
