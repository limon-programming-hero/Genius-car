import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handlerStatus, handlerDelete }) => {
    const { ServiceId, phone, price, _id, service, name, status } = order;
    const [img, setImg] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const newService = data?.find(singleData =>
                    singleData._id === ServiceId
                );
                setImg(newService?.img)
            });
    }, [ServiceId])

    return (
        <tr>
            <th>
                <button onClick={() => handlerDelete(_id)}>X</button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {service}
                <br />
                <span className="badge badge-ghost badge-sm">price: {price}</span>
            </td>
            <th>
                <button onClick={() => handlerStatus(_id)} className="btn btn-ghost btn-xs">{status ? status : 'Pending'}</button>
            </th>
        </tr>
    );
};

export default OrderRow;