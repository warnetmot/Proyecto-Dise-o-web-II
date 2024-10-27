import React, { useState, useEffect } from 'react';
import './App.css';
import './css/bootstrap.min.css';



import Loader from './components/Loader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simula un tiempo de carga de 2 segundos
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer); // Limpia el temporizador al desmontar
    }, []);

    if (loading) {
        return <Loader />; // Muestra el Loader mientras está cargando
    }

    return (
        <div>
            <Navbar />
            <HeroSection />
            <Gallery />
            <Pagination />
            <Footer />
        </div>
    );
}

export default App;
