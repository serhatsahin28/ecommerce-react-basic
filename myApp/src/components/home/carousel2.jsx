import React, { useState, useEffect } from "react";
import "../../styles/home-carousel2.css";

import Lock from "../../../img/lock.png"; // Resmi doğru bir şekilde import ediyoruz.
import Ai from "../../../img/AI.png"; // Resmi doğru bir şekilde import ediyoruz.
import Share from "../../../img/Share.png"; // Resmi doğru bir şekilde import ediyoruz.
import Pro from "../../../img/pro.png"; // Resmi doğru bir şekilde import ediyoruz.



import link1 from "../../../img/export.png"; // Resmi doğru bir şekilde import ediyoruz.
import arrow from "../../../img/arrow.png"; // Resmi doğru bir şekilde import ediyoruz.
import rightArrow from "../../../img/right-arrow.png"; // Resmi doğru bir şekilde import ediyoruz.


function Carousel2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5); // Dinamik olarak ayarlanan görünür öğe sayısı

  const items = [
    { logo: Lock, text: "Emko SmartLock Pro", text2: "EmkoBoard Kilit Uygulaması" },
    { logo: Ai, text: "Emko AI Yapay Zeka", text2: "EmkoBoardlar için Hazirlanmis Yapay Zeka Destegi" },
    { logo: Share, text: "Bytello Share", text2: "Ekran Paylaşma Uygulaması" },
    { logo: Pro, text: "Bytello Class Pro", text2: "EmkoBoard'lar için Hazırlanmış Yapay Zeka Desteği" },
    { logo: Ai, text: "Emko AI Yapay Zek", text2: "EmkoBoard'lar için Hazırlanmış Yapay Zeka Desteği" },
    { logo: Lock, text: "Emko SmartLock Pro", text2: "EmkoBoard Kilit Uygulaması" },
    { logo: Ai, text: "Emko AI Yapay Zeka", text2: "EmkoBoardlar için Hazirlanmis Yapay Zeka Destegi" },
    { logo: Share, text: "Bytello Share", text2: "Ekran Paylaşma Uygulaması" },
    { logo: Pro, text: "Bytello Class Pro", text2: "EmkoBoard'lar için Hazırlanmış Yapay Zeka Desteği" },
    { logo: Ai, text: "Emko AI Yapay Zek", text2: "EmkoBoard'lar için Hazırlanmış Yapay Zeka Desteği" }
  ];

  // Ekran boyutuna göre visibleCount'ı güncelleme
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 525) {
        setVisibleCount(1); // Mobilde 1 öğe
      } else if (window.innerWidth <= 768) {
        setVisibleCount(2); // Küçük ekranlarda 2 öğe
      } else if (window.innerWidth <= 1024) {
        setVisibleCount(3); // 1024px altındaki ekranlarda 3 öğe
      } else {
        setVisibleCount(5); // Büyük ekranlarda 5 öğe
      }
    };

    updateVisibleCount(); // Başlangıçta çağırıyoruz

    // Pencere boyutu değiştiğinde yeniden ayar yapmak için event listener ekliyoruz
    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  // nextSlide fonksiyonu
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < items.length - visibleCount ? prevIndex + 1 : prevIndex
    );
  };

  // prevSlide fonksiyonu
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  return (
    <div className="carousel2-wrapper">
      <div className="carousel2-container">
        <button className="carousel2-btn carousel2-prev" onClick={prevSlide}>
          <img src={arrow}/>
        </button>
        <div
          className="carousel2-track"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {items.map((item, index) => (
            <div className="carousel2-item" key={index}>
              <img src={item.logo} alt={`Logo ${index + 1}`} />
              <h6>{item.text}</h6>
              <p>{item.text2}</p>
              <a class="carousel-link" href="#Link?"><img src={link1} alt="link" /></a>
            </div>
          ))}
        </div>
        <button className="carousel2-btn carousel2-next" onClick={nextSlide}>
        <img src={rightArrow}/>


        </button>
      </div>
    </div>
  );
}

export default Carousel2;
