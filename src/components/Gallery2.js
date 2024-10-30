import React, { useState } from 'react';
import '../css/galeria2.css'; 

import img01 from '../img/img01.jpg'; 
import img02 from '../img/img02.jpg'; 
import img03 from '../img/img03.jpg'; 
import img04 from '../img/img04.jpg'; 


const galleryItems = [
    { id: 1, title: 'Dragon Ball', date: '18 Oct 2020', views: '9,906', imgSrc: img01 },
    { id: 2, title: 'Coco', date: '14 Oct 2020', views: '16,100', imgSrc: img02 },
    { id: 3, title: 'Los Croods', date: '12 Oct 2020', views: '12,460', imgSrc: img03 },
    { id: 4, title: 'Your name', date: '10 Oct 2020', views: '11,402', imgSrc: img04 },


];

function Gallery2() {
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
                
           
            </div>
            <div className="row tm-mb-90 tm-gallery">
                {galleryItems.map(item => (
                    <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item" onClick={() => handleImageClick(item)}>
                            <img src={item.imgSrc} alt={item.title} className="img-fluid" />
                            <figcaption class="d-flex align-items-center justify-content-center">
                                <h2>{item.title}</h2>
                                <a href="#"></a>
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

export default Gallery2;
