import React from 'react';
import '../css/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <i className="fas fa-image mr-2"></i> WallGallery
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="index.html">Fondos de Pantalla</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="categorias.html">Categorías</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="acerca.html">Acerca de</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contacto.html">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
