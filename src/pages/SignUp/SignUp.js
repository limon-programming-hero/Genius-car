import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import loginImg from './../../assets/images/login/login.svg'

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const HandlerSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset();
            })
            .catch(err => {
                const errorMessage = err.message;
                console.log(errorMessage);
                alert(errorMessage);
            })
    }
    return (
        <div className="hero my-4 mx-4 lg:px-36">
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 lg:mx-24 lg:justify-start">
                    <img className='w-full' src={loginImg} alt="" />
                </div>
                <div className="card lg:w-1/2 shadow-2xl">
                    <div className="card-body w-full">
                        <form onSubmit={HandlerSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn m-2 btn-error"><input type="submit" value='Sign Up' /></button>
                                <p className='text-center'>Already has an account? <span className='text-orange-600 font-semibold'><Link to= '/login'>LogIn</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;