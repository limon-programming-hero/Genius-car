import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../assets/logo.svg'
// import { AuthContext } from './../../../Auth/AuthProvider';

const Header = () => {
    return (
        <div className='mx-4 lg:mx-36 my-4'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className='font-semibold' to='/'>Home</Link></li>
                            <li><Link className='font-semibold' to='/login'>Login</Link></li>
                            <li><Link className='font-semibold' to='/signup'>Sign Up</Link></li>
                            <a href='/' className="btn btn-outline btn-warning">Appointment</a>
                        </ul>
                    </div>
                    <Link to='/' > <img className='w-3/4' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal align-baseline px-1">
                        <li><Link className='font-semibold mx-1' to='/'>Home</Link></li>
                        <li><Link className='font-semibold mx-1' to='/login'>Login</Link></li>
                        <li><Link className='font-semibold mx-1' to='/signup'>Sign Up</Link></li>
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <Link to='/' className="btn btn-outline btn-warning">Appointment</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;