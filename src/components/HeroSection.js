import React from 'react';
import '../css/HeroSection.css';

import heroImage from '../img/hero.jpg';

function HeroSection() {
    return (
        <div className="tm-hero d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${heroImage})` }}>
            <form className="d-flex tm-search-form">
                <input className="form-control tm-search-input" type="search" placeholder="Buscar" aria-label="Search" />
                <button className="btn btn-outline-success tm-search-btn" type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    );
}

export default HeroSection;
