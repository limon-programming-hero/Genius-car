import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import image from './../../assets/images/checkout/checkout.png'
import { AuthContext } from '../../Auth/AuthProvider';

const Checkout = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { _id, title, price } = useLoaderData();

    const HandlerConfirm = (event) => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const name = firstName + ' ' + lastName;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;

        const order = {
            name,
            phone,
            service: title,
            price,
            email,
            message,
            ServiceId: _id
        }
        // setOrder(newOrder);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('genius-car')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return navigate('/login');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Order placed successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));


    }

    return (
        <div>
            <div className='mx-4 lg:mx-36'>
                <img className='w-full' src={image} alt="" />
            </div>
            <form onSubmit={HandlerConfirm} className='mx-4 lg:mx-36 my-14 py-10 bg-gray-100'>
                <h3 className='font-semibold lg:px-24 text-orange-500'>Your are about to place : {title}</h3>
                <p className='font-semibold lg:px-24 text-slate-700'>price : {price}</p>
                <div className='grid lg:grid-cols-2 grid-cols-1 lg:px-24'>
                    <input type="text" placeholder="First Name" name='firstName' className="input my-1 input-bordered input-success w-full max-w-xs" />
                    <input type="text" placeholder="Last Name" name='lastName' className="input my-1 input-bordered input-success w-full max-w-xs" />
                    <input type="text" placeholder="Phone Number" name='phone' className="input my-1 input-bordered input-success w-full max-w-xs" />
                    <input type="text" placeholder="Email" name='email' className="input my-1 input-bordered input-success w-full max-w-xs" defaultValue={user?.email} readOnly />
                </div>
                <textarea className="textarea textarea-primary block lg:mx-24 w-2/3 my-1" placeholder="Your Message" name='message'></textarea>
                <input type="submit" className="btn btn-error lg:mx-24 w-1/3 mt-4 text-white" value="Confirm Order" />
            </form>
        </div>
    );
};

export default Checkout;