import React from 'react';
import "../../styles/home.css";
import Security from "../../../img/Security.png"; // Kartın üstündeki logo
import Kullanıcı from "../../../img/Kullanıcı.png"; // Kartın üstündeki logo
import Etkileşim from "../../../img/Etkileşim.png"; // Kartın üstündeki logo

function Body2() {
  return (
    <div className="body2-container"> {/* Ana kapsayıcı sınıf */}
      <div className="container ">
        {/* Üstteki H1 ve H4 yazı */}
        <div className="text-center  ">
          <h1 className="body2-title text-light ">
            Kurumunuz için Basit ve Güçlü Yazılım Çözümleri
          </h1>
          <h4 className="body2-subtitle text-light ms-5 mb-5">
            Teknolojiyi karmaşık bir hale getirmeden, kurumunuzun ihtiyaçlarına tam uyum sağlayan yazılım çözümleri sunuyoruz.
          </h4>
        </div>

        {/* Kartların olduğu satır */}
        <div className="row">
          {/* Kart 1 */}
          <div className="col-md-4">
            <div className="card text-center">
              <img
                src={Security}
                className="card-img-top p-3"
                alt="Logo 1"
                style={{ height: "100px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h4 className="card-title text-light">Güvenli Yazılım</h4>
                <p className="card-text text-light ms-5">
                Verilerinizi korumak ve kullanici erişimi yönetmek için tasarlanmis, güvenilir altyapi.
                </p>
              </div>
            </div>
          </div>

          {/* Kart 2 */}
          <div className="col-md-4">
            <div className="card text-center">
              <img
                src={Kullanıcı}
                className="card-img-top p-3"
                alt="Logo 2"
                style={{ height: "100px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h4 className="card-title text-light">Kullanıcı Dostu Arayüzü</h4>
                <p className="card-text text-light  ms-5">
                Kolay kullanim ve sezgisel tasarim
ile herkes için erisilebilir
çözümler.
                </p>
              </div>
            </div>
          </div>

          {/* Kart 3 */}
          <div className="col-md-4">
            <div className="card text-center">
              <img
                src={Etkileşim}
                className="card-img-top p-3"
                alt="Logo 3"
                style={{ height: "100px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h4 className="card-title text-light">İşbirliği ve Etkileşim</h4>
                <p className="card-text text-light  ms-5">
                Takimlarin ve kullanicilarin bir arada calismasini saglayan araclar.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Kartların altındaki H4 yazı */}
        <div className="text-center mt-4">
          <h4 className="body2-footer text-light">Emko Store, işletmelerin ihtiyaç duyduğu yazilim çözümlerini bir arada sunan, güvenilir ve esnek bir
dijital platformdur. Kullanici dostu arayüzü ve zengin ürün yelpazesiyle iş süreçlerinizi kolaylastirir,
performansinizi artırır ve iş dünyasında fark yaratmaniza olanak tanir. Güvenli altyapisi ve yapay zeka
destekli özellikleriyle, Emko Store her ölçekte isletme için ideal bir teknoloji ortagidir.</h4>
        </div>
      </div>
    </div>
  );
}

export default Body2;
