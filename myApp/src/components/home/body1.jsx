import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../../styles/home.css";
import img from "../../../img/fr-flag.png"; // Resmi doğru bir şekilde import ediyoruz.


function Body1() {
    return (
      <>
        <div className="body1-container"> {/* Sayfaya özel sınıf */}
          <div className="container text-center">
            <div className="row">
              <div className="col">
               <img src={img} alt="" />
               <p>30 günlük deneme süresiyle test edin.</p>
              </div>
              <div className="col">
              <img src={img} alt="" />
              <p>30 günlük deneme süresiyle test edin.</p>

              </div>
              <div className="col">
              <img src={img} alt="" />
              <p>30 günlük deneme süresiyle test edin.</p>

              </div>
              <div className="col">
              <img src={img} alt="" />
              <p>30 günlük deneme süresiyle test edin.</p>

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Body1;