import React from 'react';
import About from '../About/About';
import Banner from './../Banner/Banner';

const Home = () => {
    return (
        <div className='mx-4 lg:mx-36'>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;