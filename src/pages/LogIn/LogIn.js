import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import loginImg from './../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const LogIn = () => {
    const { logIn, user } = useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();
    const from = location.state?.from?.pathName || '/'
    const HandlerLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json(user))
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('genius-car', data.token);
                    });
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(err => {
                const errMssg = err.message;
                alert(errMssg);
            })


    }
    return (
        <div className="hero my-4 mx-4  lg:px-36">
            <div className="flex flex-col lg:flex-row">
                <div className="w-1/2 lg:mx-24 lg:justify-start">
                    <img className='w-full' src={loginImg} alt="" />
                </div>
                <div className="card w-1/2 shadow-2xl">
                    <div className="card-body w-full">
                        <form onSubmit={HandlerLogIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password </span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn m-2 btn-error"><input type="submit" value='Login' /></button>
                                <p className='text-center'>New to Genius Car? <span className='text-orange-600 font-semibold'><Link to='/signup'>Sign Up</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;