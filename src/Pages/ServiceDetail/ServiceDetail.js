import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const {serviceId} = useParams();
    return (
        <div>
            <h4>Detail: {serviceId}</h4>
            <div className='text-center'>
                <Link to='/checkout'>
                <button className = "btn btn-primary">Proceed Checkout</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetail;