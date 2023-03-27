import React from 'react';
import person from './../../../assets/images/about_us/person.jpg'
import parts from './../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-10 border-2 pb-4">
            <div className="flex flex-col lg:flex-row">
                <div className='w-5/6 lg:w-1/2 relative mr-24'>
                    <img alt='' src={person} className="rounded-lg relative" />
                    <img alt='' src={parts} className="flex w-1/2 bg-white pl-1 pt-1 rounded-md absolute left-2/3 top-1/2" />
                </div>
                <div className='w-full lg:w-1/2'>
                    <p className='text-orange-600 font-bold mt-10'>About Us</p>
                    <h1 className="text-2xl font-bold pt-6">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br />
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-error text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;