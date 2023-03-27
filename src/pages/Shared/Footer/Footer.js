import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="footer flex flex-col-2 lg:flex-col-4 p-10 bg-black text-white ">
            <div className=' w-1/2 lg:w-1/4'>
                <Link to = '/'><img  src={logo} alt="" /></Link>
                <p className='w-22'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
            </div>
            <div className=' w-1/2 lg:w-1/4'>
                <span className="text-white text-lg font-bold ">Services</span>
                <Link to='/' className="link link-hover">Branding</Link>
                <Link to='/' className="link link-hover">Marketing</Link>
                <Link to='/' className="link link-hover">Advertisement</Link>
                <Link to='/' className="link link-hover">Design</Link>
            </div>
            <div className='w-1/2 lg:w-1/4'>
                <span className="text-white text-lg font-bold ">Company</span>
                <Link to='/' className="link link-hover">About us</Link>
                <Link to='/' className="link link-hover">Contact</Link>
                <Link to='/' className="link link-hover">Jobs</Link>
                <Link to='/' className="link link-hover">Press kit</Link>
            </div>
            <div className='w-1/2 lg:w-1/4'>
                <span className="text-white text-lg font-bold ">Legal</span>
                <Link to='/' className="link link-hover">Terms of use</Link>
                <Link to='/' className="link link-hover">Privacy policy</Link>
                <Link to='/' className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;