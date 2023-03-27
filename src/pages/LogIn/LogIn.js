import React from 'react';
import loginImg from './../../assets/images/login/login.svg'

const LogIn = () => {
    return (
        <div className="hero  mx-4 max-w-fit lg:mx-36">
            <div className="flex flex-col lg:flex-row">
                <div className="w-1/2 mr-5">
                    <img className='w-full' src={loginImg} alt="" />
                </div>
                <div className="card w-1/2 shadow-2xl">
                    <div className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;