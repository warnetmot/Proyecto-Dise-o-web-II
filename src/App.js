import React from 'react';
import './App.css';
import './css/bootstrap.min.css'

import Loader from './components/Loader.js';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import Pagination from './components/Pagination';
import Footer from './components/Footer.js';

function App() {
    return (
        <div>
            <Loader />
            <Navbar />
            <HeroSection />
            <Gallery />
            <Pagination />
            <Footer />
        </div>
    );
}

export default App;
