import React from 'react';
import '../css/galeria.css'; 
import img03 from '../img/img-03.jpg'; 
import img04 from '../img/img-04.jpg'; 
import img05 from '../img/img-05.jpg'; 
import img06 from '../img/img-06.jpg'; 

const galleryItems = [
    { id: 1, title: 'relojes', date: '18 Oct 2020', views: '9,906', imgSrc: img03 },
    { id: 2, title: 'plantas', date: '14 Oct 2020', views: '16,100', imgSrc: img04 },
    { id: 3, title: 'Morning', date: '12 Oct 2020', views: '12,460', imgSrc: img05 },
    { id: 4, title: 'Pinky', date: '10 Oct 2020', views: '11,402', imgSrc: img06 },
    { id: 4, title: 'Pinky', date: '10 Oct 2020', views: '11,402', imgSrc: img06 },
    { id: 4, title: 'Pinky', date: '10 Oct 2020', views: '11,402', imgSrc: img06 },
    { id: 4, title: 'Pinky', date: '10 Oct 2020', views: '11,402', imgSrc: img06 },
    { id: 4, title: 'Pinky', date: '10 Oct 2020', views: '11,402', imgSrc: img06 },
    { id: 4, title: 'Pinky', date: '10 Oct 2020', views: '11,402', imgSrc: img06 },
    { id: 4, title: 'Pinky', date: '10 Oct 2020', views: '11,402', imgSrc: img06 },


];

function Gallery() {
    return (
        <div className="container-fluid tm-container-content tm-mt-60">
            <div className="row mb-4">
                <h2 className="col-6 tm-text-primary">Latest Photos</h2>
                <div className="col-6 d-flex justify-content-end align-items-center">
                    <form className="tm-text-primary">
                        Page <input type="text" value="1" size="1" className="tm-input-paging tm-text-primary" readOnly /> of 200
                    </form>
                </div>
            </div>
            <div className="row tm-mb-90 tm-gallery">
                {galleryItems.map(item => (
                    <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src={item.imgSrc} alt={item.title} className="img-fluid" />
                            <figcaption>
                                <h2>{item.title}</h2>
                                <a href="photo-detail.html">Ver mas</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">{item.date}</span>
                            <span>{item.views} views</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
