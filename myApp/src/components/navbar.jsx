import React from "react";
import "../styles/Navbar.css";
import logo from "../../img/logo3.png";
import shop from "../../img/add-cart.png";
 import tr from "../../img/tr-flag.png";

import en from "../../img/en-flag.png";
import fr from "../../img/fr-flag.png";
import gr from "../../img/gr-flag.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar py-3 ">
      <div className="container">
        {/* Logo kısmı */}
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid"
            style={{
              maxWidth: "350px", // Resmin genişliği 350px'e kadar genişleyebilir
              height: "auto", // Yükseklik orantılı olarak ayarlanır
            }}
          />
        </a>

        {/* Navbar Toggler Button (Hamburger Menü) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Linkleri */}
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav mx-auto my-2 my-lg-0  "
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item">
              <a className="nav-link text-light active" aria-current="page" href="#">
                Anasayfa
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-light" href="#">
                Uygulamalar
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Yardım Merkezi
              </a>
             
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" aria-disabled="true">
                İletişim
              </a>
            </li>
          </ul>

          {/* Sağ Kısımda Shop, Login ve Dil Seçimi */}
          <ul className="navbar-nav ms-0 ">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img
                  src={shop}
                  alt="Shopping Cart"
                  className="img-fluid"
                  style={{ height: "35px", width: "auto" }}
                />
              </a>
            </li>

            <li className="nav-item btn " style={{ backgroundColor: "white", color: "blue",width:"150px",borderRadius:"25px" }}>
              <a href="#login" className="nav-link" aria-disabled="true">
                Login
              </a>
            </li>

            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={en}
                  alt="Language"
                  className="img-fluid"
                  style={{ height: "35px", width: "auto" }}
                />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    <img src={tr} alt="Turkish" style={{ height: "20px", width: "auto" }} /> Türkçe
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <img src={fr} alt="French" style={{ height: "20px", width: "auto" }} /> Français
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <img src={gr} alt="Greek" style={{ height: "20px", width: "auto" }} /> Ελληνικά
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
