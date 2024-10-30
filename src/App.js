import React, { useState, useEffect } from 'react';
import './App.css';
import './css/bootstrap.min.css'

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Gallery />
            <div className="custom-gallery-container">
                <ImageGallery
                    items={images}
                    showThumbnails={false}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showBullets={true}
                    infinite={true}
                    autoPlay={true}
                    slideInterval={3000}
                />
            </div>
            <Pagination />
            <Footer />
            
        </div>

    );
}

export default App;
