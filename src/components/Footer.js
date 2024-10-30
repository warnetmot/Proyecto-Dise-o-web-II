import React from 'react';
import '../css/Footer.css';

import facebookIcon from '../img/facebook.png';
import twitterIcon from '../img/gorjeo.png';
import instagramIcon from '../img/instagram.png';
import pinterestIcon from '../img/pinterest.png';

function Footer() {
    return (
        <footer className="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
            <div className="container-fluid tm-container-small">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12 px-5 mb-5">
                        <h3 className="tm-text-primary mb-4 tm-footer-title">Acerca de WallGallery</h3>
                        <p>WallGallery es una página donde puedes encontrar fondos de pantalla de alta calidad para personalizar tus dispositivos. Navega y descarga tus fondos favoritos gratuitamente.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                        <h3 className="tm-text-primary mb-4 tm-footer-title">Enlaces Útiles</h3>
                        <ul className="tm-footer-links pl-0">
                            <li><a href="#">Publicidad</a></li>
                            <li><a href="#">Ayuda</a></li>
                            <li><a href="#">Sobre Nosotros</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                        <ul className="tm-social-links d-flex justify-content-end pl-0 mb-5">
                            <li className="mb-2">
                                <a href="https://facebook.com">
                                    <img src={facebookIcon} alt="Facebook" />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://twitter.com">
                                    <img src={twitterIcon} alt="Twitter" />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://instagram.com">
                                    <img src={instagramIcon} alt="Instagram" />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://pinterest.com">
                                    <img src={pinterestIcon} alt="Pinterest" />
                                </a>
                            </li>
                        </ul>
                        <a href="#" className="tm-text-gray text-right d-block mb-2">Términos de Uso</a>
                        <a href="#" className="tm-text-gray text-right d-block">Política de Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
