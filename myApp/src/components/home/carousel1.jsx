import React from 'react';
import { Carousel } from 'react-bootstrap';

function Carousel1() {
  return (
    <div className="carousel-container">
      <Carousel controls={false}>
        <Carousel.Item interval={10000}>
          <img
            className="d-block  carousel-img"
            src="../img/phone.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Emko Smart Lock Pro  Yeni Sürümü  ile yayında! </h1>
            <p>EmkoBoard'lar için özel olarak hazırlanan kilit uygulamamız Emko Smart Lock Pro şimdi yeni sürümüyle yayında!</p>
          </Carousel.Caption>

          <a className="btn buy" href="/#satınAl">Satın Al</a>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block  carousel-img"
            src="../img/phone.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
          <h1>Emko Smart Lock Pro  Yeni Sürümü  ile yayında! </h1>
          <p>EmkoBoard'lar için özel olarak hazırlanan kilit uygulamamız Emko Smart Lock Pro şimdi yeni sürümüyle yayında!</p>
          </Carousel.Caption>
          <a className="btn buy" href="/#satınAl">Satın Al</a>

        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block  carousel-img"
            src="../img/phone.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
          <h1>Emko Smart Lock Pro  Yeni Sürümü  ile yayında! </h1>
          <p>EmkoBoard'lar için özel olarak hazırlanan kilit uygulamamız Emko Smart Lock Pro şimdi yeni sürümüyle yayında!</p>
          </Carousel.Caption>
          <a className="btn buy" href="/#satınAl">Satın Al</a>

        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block  carousel-img"
            src="../img/phone.jpg"
            alt="Fourth slide"
          />
          <Carousel.Caption>
          <h1>Emko Smart Lock Pro  Yeni Sürümü  ile yayında! </h1>
          <p>EmkoBoard'lar için özel olarak hazırlanan kilit uygulamamız Emko Smart Lock Pro şimdi yeni sürümüyle yayında!</p>
          </Carousel.Caption>
          <a className="btn buy" href="/#satınAl">Satın Al</a>

        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block  carousel-img"
            src="../img/phone.jpg"
            alt="Fifth slide"
          />
          <Carousel.Caption>
        
          <h1>Emko Smart Lock Pro  Yeni Sürümü  ile yayında! </h1>
          <p>EmkoBoard'lar için özel olarak hazırlanan kilit uygulamamız Emko Smart Lock Pro şimdi yeni sürümüyle yayında!</p>
          </Carousel.Caption>
          <a className="btn buy" href="/#satınAl">Satın Al</a>
        
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousel1;
