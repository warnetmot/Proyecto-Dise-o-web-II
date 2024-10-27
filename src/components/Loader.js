import React from 'react';
import '../css/Loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <div className="spinner"></div>
            <div className="loading-text">Cargando...</div>
        </div>
    );
};
export default Loader;
