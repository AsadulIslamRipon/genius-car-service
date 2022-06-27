import React from 'react';
import "./Service.css";

const Service = (props) => {
    const {img, name, description, price} = props.service;
    // console.log(props.service);
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p className='service-price'>Price: <span>{price}</span></p>
            <p className='service-descrip'>{description}</p>
            <button>Book: {name}</button>

        </div>
    );
};

export default Service;