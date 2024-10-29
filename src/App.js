import React, { useState, useEffect } from 'react';
import './App.css';
import './css/bootstrap.min.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'



import Loader from './components/Loader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

function App() {
    const [loading, setLoading] = useState(true);
    const images = [
        {
        original: "https://picsum.photos/id/1018/300/250",
        thumbnail: "https://picsum.photos/id/1018/250/150",
        },
        {
        original: "https://picsum.photos/id/1015/1018/1000",
        thumbnail: "https://picsum.photos/id/1015/250/150",
        },
        {
        original: "https://picsum.photos/id/1019/1018/1000",
        thumbnail: "https://picsum.photos/id/1019/250/150",
        },
];
    useEffect(() => {
       
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer); 
    }, []);

    if (loading) {
        return <Loader />; 
    }

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
