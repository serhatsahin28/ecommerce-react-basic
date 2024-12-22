import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../../styles/home.css";
import img from "../../../img/fr-flag.png"; // Resmi doğru bir şekilde import ediyoruz.
import Deneme from "../../../img/deneme.png"; // Resmi doğru bir şekilde import ediyoruz.
import Abone from "../../../img/Abone.png"; // Resmi doğru bir şekilde import ediyoruz.
import Takvim from "../../../img/takvim.png"; // Resmi doğru bir şekilde import ediyoruz.
import Odeme from "../../../img/Odeme.png"; // Resmi doğru bir şekilde import ediyoruz.


function Body1() {
    return (
      <>
        <div className="body1-container"> {/* Sayfaya özel sınıf */}
          <div className="container text-center">
            <div className="row">
              <div className="col">
               <img src={Deneme} alt="" />
               <p>30 günlük deneme süresiyle test edin.</p>
              </div>
              <div className="col">
              <img src={Abone} alt="" />
              <p>Tassaruflu Abonelik Planlarını Deneyin.</p>

              </div>
              <div className="col">
              <img src={Takvim} alt="" />
              <p>1-3 Gün Içinde Kurulumunuz
              Tamamlansin.</p>

              </div>
              <div className="col">
              <img src={Odeme} alt="" />
              <p>Alternatif ödeme biçimleriyle
              dilediginiz gibi ödeyin.</p>

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Body1;