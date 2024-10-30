import React, { useState, useEffect } from 'react';
import './App.css';
import './css/bootstrap.min.css'
import './css/bootstrap.min.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import Gallery2 from './components/Gallery2';

function App() {
    const [loading, setLoading] = useState(true);
    const images = [
        {
            original: "https://picsum.photos/id/1015/3840/2160", // 4K resolucion
            thumbnail: "https://picsum.photos/id/1015/480/270", 
        },
        {
            original: "https://picsum.photos/id/1016/3840/2160", 
            thumbnail: "https://picsum.photos/id/1016/480/270", 
        },
        {
            original: "https://picsum.photos/id/1019/3840/2160", 
            thumbnail: "https://picsum.photos/id/1019/480/270",
        },
        {
            original: "https://picsum.photos/id/1020/3840/2160", 
            thumbnail: "https://picsum.photos/id/1020/480/270", 
        }
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
            <div style={{width: "70vw", margin: "auto"}}>
                <ImageGallery
                    showNav={false}
                    items={images}
                    showBullets={true}
                    infinite={true}
                    autoPlay={true}
                    slideInterval={3000}
                />
            </div>
            <Gallery2/>

            <Pagination />
            <Footer />
        </div>
    );
}

export default App;
