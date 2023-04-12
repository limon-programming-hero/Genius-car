import React, { useEffect } from 'react';
import ServiceCard from './ServiceCard';
import { useState } from 'react';

const Services = () => {
    const [services, setServices] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className=' text-center'>
                <p className='font-semibold text-orange-600'>Service</p>
                <h2 className=' font-bold text-3xl'>Our Service Area</h2>
                <div className='flex justify-center'>
                    <p className='w-1/2 text-slate-500'> The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services?.map(data =>
                        <ServiceCard key={data._id}
                            service={data}>
                        </ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;