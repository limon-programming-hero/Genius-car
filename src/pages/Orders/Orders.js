import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import OrderRow from './OrderRow';
import image from './../../assets/images/checkout/checkout.png'
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    // console.log(user);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('genius-car')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return navigate('/login');
                }
                return res.json();
            })
            .then(data => {
                setOrders(data);
                // console.log(data)
            });
    }, [user?.email, navigate])
    console.log(orders);
    const handlerStatus = (id) => {
        const confirm = window.confirm('Are you sure you want to approve?')
        if (confirm) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('genius-car')}`
                },
                body: JSON.stringify({ status: 'Approved' })
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        return navigate('/login');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log('success:', id, data)
                    if (data.modifiedCount > 0) {
                        const Approving = orders.find(order => order._id === id);
                        const Remaining = orders.filter(order => order._id !== id);

                        Approving.status = 'Approved';

                        setOrders([Approving, ...Remaining])
                    }
                    else {
                        alert(data);
                    }
                })
                .catch(err => alert(err))
        }
    }
    const handlerDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to remove this order?');
        if (confirm) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('genius-car')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        return navigate('/login');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('order deleted Successfully!')
                        const Remaining = orders.filter(order => order._id !== id);
                        setOrders([...Remaining]);
                    }
                });
        }
    }
    return (
        <div>
            <div className='mx-4 lg:mx-36'>
                <img className='w-full' src={image} alt="" />
            </div>
            <div className='mx-4 lg:mx-36 my-8'>
                <h4>Total order : {orders.length}</h4>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Delete </th>
                                <th>Name</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {orders?.map(order =>
                                <OrderRow
                                    key={order._id}
                                    order={order}
                                    handlerStatus={handlerStatus}
                                    handlerDelete={handlerDelete}
                                ></OrderRow>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;