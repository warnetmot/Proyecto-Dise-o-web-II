import React, { useState } from 'react';
import '../css/galeria.css'; 
import img03 from '../img/img-03.jpg'; 
import img04 from '../img/img-04.jpg'; 
import img05 from '../img/img-05.jpg'; 
import img06 from '../img/img-06.jpg'; 
import img07 from '../img/img-07.jpg'; 
import img08 from '../img/img-08.jpg'; 
import img09 from '../img/img-09.jpg'; 
import img10 from '../img/img-10.jpg'; 
import img11 from '../img/img-11.jpg'; 
import img12 from '../img/img-12.jpg'; 

const galleryItems = [
    { id: 1, title: 'Relojes', date: '18 Oct 2020', views: '9,906', imgSrc: img03 },
    { id: 2, title: 'Plantas', date: '14 Oct 2020', views: '16,100', imgSrc: img04 },
    { id: 3, title: 'Morning', date: '12 Oct 2020', views: '12,460', imgSrc: img05 },
    { id: 4, title: 'Pinky', date: '10 Oct 2020', views: '11,402', imgSrc: img06 },
    { id: 5, title: 'Paisaje', date: '10 Oct 2020', views: '11,402', imgSrc: img07 },
    { id: 6, title: 'Ciudad', date: '10 Oct 2020', views: '11,402', imgSrc: img08 },
    { id: 7, title: 'Naturaleza', date: '10 Oct 2020', views: '11,402', imgSrc: img09 },
    { id: 8, title: 'Atardecer', date: '10 Oct 2020', views: '11,402', imgSrc: img10 },
    { id: 9, title: 'Montaña', date: '10 Oct 2020', views: '11,402', imgSrc: img11 },
    { id: 10, title: 'Mar', date: '10 Oct 2020', views: '11,402', imgSrc: img12 },
];

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (item) => {
        setSelectedImage(item);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="container-fluid tm-container-content tm-mt-60">
            <div className="row mb-4">
                <h2 className="col-6 tm-text-primary">Fondos de pantalla</h2>
                <div className="col-6 d-flex justify-content-end align-items-center">
                    <form className="tm-text-primary">
                        Page <input type="text" value="1" size="1" className="tm-input-paging tm-text-primary" readOnly /> of 200
                    </form>
                </div>
            </div>
            <div className="row tm-mb-90 tm-gallery">
                {galleryItems.map(item => (
                    <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item" onClick={() => handleImageClick(item)}>
                            <img src={item.imgSrc} alt={item.title} className="img-fluid" />
                            <figcaption>
                                <h2>{item.title}</h2>
                                <a href="#">Ver más</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">{item.date}</span>
                            <span>{item.views} views</span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="modal">
                    <div className="modal-content">
                        <img src={selectedImage.imgSrc} alt={selectedImage.title} />
                        <div className="modal-text">
                            <h2>{selectedImage.title}</h2>
                            <p>Fecha: {selectedImage.date}</p>
                            <p>Vistas: {selectedImage.views}</p>
                            {/* Botón de descarga como un botón estilizado */}
                            <a href={selectedImage.imgSrc} download className="download-button">Descargar</a>
                        </div>
                        <span className="close" onClick={handleCloseModal}>×</span>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Gallery;
