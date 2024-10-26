import React from 'react';
import '../css/Pagination.css';

function Pagination() {
    return (
        <div className="row tm-mb-90">
            <div className="col-12 d-flex justify-content-between align-items-center tm-paging-col">
                <button className="btn btn-primary tm-btn-prev mb-2 disabled">Previous</button>
                <div className="tm-paging d-flex">
                    <a href="#" className="active tm-paging-link">1</a>
                    <a href="#" className="tm-paging-link">2</a>
                    <a href="#" className="tm-paging-link">3</a>
                    <a href="#" className="tm-paging-link">4</a>
                </div>
                <button className="btn btn-primary tm-btn-next">Next Page</button>
            </div>
        </div>
    );
}

export default Pagination;
