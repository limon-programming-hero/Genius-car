import React from 'react';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const { img, price, title, _id } = service;
    console.log(service)
    return (
        <div className="card grid card-compact w-10/12 m-8 shadow-xl">
            <div>
                <img className='w-full rounded-md' src={img} alt="services" />
            </div>
            <div className="card-body h-1/3">
                <h2 className="card-title">{title}</h2>
                <div className="flex flex-row align-baseline ">
                    <p className='text-orange-500 font-bold text-sm'>Price: {price}</p>
                    <Link className='text-blue-500 hover:text-blue-200' to={`/checkout/${_id}`} ><button className='p-2'>Check Out</button></Link>
                </div>
            </div>
        </div >
    );
};

export default ServiceCard;