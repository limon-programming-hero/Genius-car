import React from 'react';
import './BannerItem.css'

const BannerItem = ({ data }) => {
    const { id, img, next, prev } = data;
    // console.log(data)
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-item-redesign'>
                <img alt='' src={img} className="w-full rounded-md" />
            </div>
            <div className="absolute flex transform -translate-y-1/2 right-5 bottom-10">
                <a href={`#slide${prev}`} className="btn mr-4 btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute flex left-5 top-1/4">
                <h1 className='font-bold text-xl lg:text-2xl'>Affordable <br /> Price For Car <br /> Servicing</h1><br />
            </div>
            <div className="absolute flex left-5 top-1/2 my-5">
                <p className='w-96'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex left-5 top-3/4">
                <button className="btn btn-error mr-4 text-white">Discover More</button>
                <button className="btn btn-outline text-white">Latest Project</button>
            </div>
        </div>
    );
};

export default BannerItem;