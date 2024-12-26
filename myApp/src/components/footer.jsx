import React from "react";
import "../styles/footer.css";
import emko from "../../img/emko.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer py-4 border-top">
            <div className="container">
                <div className="row align-items-center">
                    {/* İlk Kısım: Mail Bülteni Aboneliği */}
                    <div className="col-md-6">
                        <h3 className="footerh3 text-primary">Mail Bültenimize Abone olun</h3>
                        <h6 className="footerh6">
                            EmkoTech'deki en yeni gelişmelerden haberdar olmak için bültenimize abone olun, yenilikleri ilk siz keşfedin!
                        </h6>
                    </div>

                    {/* Mail Aboneliği Formu */}
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
                        <input
                            type="email"
                            placeholder="E-Mail"
                            className="form-control mr-2"
                            style={{ maxWidth: '250px' }}
                        />
                        <button className="btn btn-primary">Abone Ol</button>
                    </div>
                </div>

                {/* İkinci Kısım: Logo, Sosyal Medya, Uygulamalar ve Hakkında */}
                <div className="footer-box ">
                    {/* Sol Kısım: Logo, Resim, Sosyal Medya */}
                    <div className="footer-logo ">
                        <img src={emko} style={{ height: "150px", width: "200px" }} alt="Logo" className="img-fluid" />
                        <p className="footerP ">EmkoLogin, EmkoBoard'larinizin tüm yazilim çözümlerini tek bir çati altinda toplayan yenilikçi bir platformdur. Bu sistem, kullanicilarin ve kurumlarin akilli tahtalar üzerinden en yüksek verimi almasini saglamak için tasarlanmistir.</p>
                        <div>
                            <a href="#" className="mr-2"><FaFacebook className="footerIconBox"> </FaFacebook></a>
                            <a href="#" className="mr-2"> <FaTwitter className="footerIconBox"> </FaTwitter></a>
                            <a href="#" className="mr-2"> <FaLinkedin className="footerIconBox"> </FaLinkedin></a>
                            <a href="#" className="mr-2"><FaInstagram className="footerIconBox"> </FaInstagram></a>


                        </div>
                    </div>

                    {/* Orta ve Sağ Kısımlar: Uygulamalar, Hakkında, İletişim */}
                    <div className="footer-sections mt-5">
                        <div className="footer-section app-section">
                            <h5>Uygulamalar</h5>
                            <ul className="list-unstyled">
                                <li>Emko Start Lock Pro</li>
                                <li>Bytello DMS</li>
                                <li>Bytello Share</li>
                                <li>Emko AI</li>
                                <li>Bytello Class</li>

                            </ul>
                        </div>

                        <div className="footer-section about-section">
                            <h5>Hakkında</h5>
                            <ul className="list-unstyled">
                                <li>S.S.S</li>
                                <li>Bizimle İletişime Geçin!</li>
                                <li>Yardım Merkezi</li>
                                <li>Sizi Arayalım!</li>
                                <li>Blog/Başarı Hikayeleri</li>
                            </ul>
                        </div>

                        {/* Sağ Kısım: İletişim */}
                        <div className="footer-section contact-section">
                            <h5>Contact</h5>
                            <div className="d-flex align-items-center mb-3"> {/* align-items-center ile ortala */}
                                <FaPhoneAlt className="footerIcon" />
                                <p className="footerP-icon"> (212) 886 86 85</p> {/* ml-2 ile küçük margin ekledik */}
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <FaEnvelope className="footerIcon" />
                                <p className="footerP-icon "> support@ee.com.tr</p>
                            </div>
                            <div className="d-flex align-items-start">
                                <FaMapMarkerAlt className="footerIcon" />
                                <p className="footerP-icon text-start"> Çakmakli Mahalles,, Hadımköy
                                    Yolu Caddesi No:75 34500
                                    Büyükçekmece, İstanbul</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
